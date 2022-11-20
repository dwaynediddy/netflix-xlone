import React, { useState, useEffect } from 'react'
import db from '../firebase'
import {
    collection,
    query,
    where,
    getDocs,
    onSnapshot,
    addDoc
  } from "firebase/firestore";

import '../styles/plansScreen.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { loadStripe } from '@stripe/stripe-js'

function PlansScreen() {
    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)
    const [subscription, setSubscription] = useState(null)

    useEffect(() => {
      getDocs(query(collection(db, "customers", user.uid, "subscriptions"))).then(
        (querySnapshot) => {
          querySnapshot.forEach(async (subscription) => {
            setSubscription({
              role: subscription.data().role,
              current_period_end: subscription.data().current_period_end.seconds,
              current_period_start:
                subscription.data().current_period_start.seconds,
            })
          })
        }
      );
    }, [user.uid]);


    useEffect(() => {
        getDocs(query(collection(db, 'products'), where('active', '==', true)))
        .then((querySnapshot) => {
          const products = {}
          querySnapshot.forEach(async (productDoc) => {
            products[productDoc.id] = productDoc.data()
            const priceSnap = await getDocs(collection(productDoc.ref, 'prices'))
            priceSnap.docs.forEach((price) => {
              products[productDoc.id].prices = {
                priceId: price.id,
                priceData: price.data(),
              }
            })
          })
          setProducts(products)
        })
      }, [])

    console.log(products)
    console.log(subscription)

    const loadCheckout = async(priceId) => {
      const docRef = await addDoc(
        collection(db, "customers", user.uid, "checkout_sessions"), {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
      })
      onSnapshot(docRef, async (snap) => {
        console.log(snap)
        const { error, sessionId } = snap.data()
        if (error) {
          alert(`An error occured: ${error.message}`)
        }
        if (sessionId) {
          const stripe = await loadStripe("pk_test_51M58KiDY6e4Pg40pOSnHeTfKDd9O11o59UZxMbypnVu03cL3C2609SaD9Fue4R7G4JAijuUU5eCqPdqReqrHpKnd00i1WYtVMx")
          stripe.redirectToCheckout({ sessionId });
        }
      })
    }

 return (
    <div className="plansScreen">
      <br />
      {subscription && (
        <p>
          Renewal date:
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        // add some logic to check if the user's subscription is active...
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);
        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && "plansScreen_plan--disabled"
            } plansScreen_plan`}
          >
            <div className="plansScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen