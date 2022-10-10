import React from 'react'
import '../styles/Signup.css'

const SignInScreen = () => {
  const register = (e) => {
    e.preventDefault()
  }

  const signIn = (e) => {
    e.preventDefault()
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up</h1>
        <input
          placeholder="Email" type="email"
        />
        <input placeholder="Password" type="password"/>
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