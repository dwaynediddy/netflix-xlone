import './styles/App.css'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // logged in
        console.log(userAuth, 'is logged in')
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // logged out
        dispatch(logout)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} /> 
            <Route exact path="/profile" element={<ProfileScreen />} /> 
          </Routes>
          )}
    </Router>
    </div>
  );
}

export default App;