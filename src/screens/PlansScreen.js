import React, { useState, useEffect } from 'react'
import db from '../firebase'
import {
    collection,
    query,
    where,
    getDocs,
  } from "firebase/firestore";

import '../styles/plansScreen.css'

function PlansScreen() {
    const [products, setProducts] = useState([])

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

  return (
    <div className='planScreen'>

    </div>
  )
}

export default PlansScreen