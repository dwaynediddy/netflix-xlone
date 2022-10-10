import { useState } from 'react'
import '../styles/Login.css'
import SignUpScreen from './SignUpScreen'

const Login = () => {

  const [signIn, setSignIn] = useState(false)
  return (
    <div className="loginScreen">
        <div className="loginScreen-background">
          <img 
            className="loginScreen-logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="" 
          />
          <button 
            className="loginScreen-button"
            onClick={() => setSignIn(true)}
          >
            Sign in
          </button>
          <div className="loginScreen-gradient" />
        </div>
        <div className="loginScreen-body">
          {signIn ? (<SignUpScreen />) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter to create or restart your membership.</h3>
              <div className="loginScreen-input">
                <form>
                  <input 
                    type='email' 
                    placeholder='Email Address'
                  />
                  <button 
                    className='loginScreen-getStarted'
                    onClick={() => setSignIn(true)}
                    >GET STARTED</button>
                </form>
              </div>
            </>
          )}
        </div>
    </div>
  )
}

export default Login