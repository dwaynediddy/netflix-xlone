import './styles/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
            
        </Routes>
    </Router>
    </div>
  );
}

export default App;