import { useRef } from 'react'
import { auth }from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import '../styles/Signup.css'

const SignInScreen = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()
    
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value, 
      passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      }).catch(err => {
        alert(err.message)
      })
  }

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value, 
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(err => {
      alert(err.message)
    })
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up</h1>
        <input
          ref={emailRef}
          placeholder="Email" 
          type="email"
        />
        <input
          ref={passwordRef}
          placeholder="Password" 
          type="password"
        />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signupScreen-gray">New to Netflix?</span> 
          <span className="signupScreen-link" onClick={register}> Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen