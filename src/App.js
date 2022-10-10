import './styles/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import HomeScreen from './screens/HomeScreen'
import Login from './screens/LoginScreen'

function App() {
  const user = null
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