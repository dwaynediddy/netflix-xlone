import './styles/App.css'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import HomeScreen from './screens/HomeScreen'
import Login from './screens/LoginScreen'
import { auth } from './firebase'

function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // loogged in
        console.log(userAuth)
      } else {
        //logged oout
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} /> 
          </Routes>
          )}
    </Router>
    </div>
  );
}

export default App;