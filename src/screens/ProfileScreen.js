import Nav from '../components/Nav'
import '../styles/ProfileScreen.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

import PlansScreen from './PlansScreen'


const ProfileScreen = () => {
    const user = useSelector(selectUser)

  return (
    <div className="profileScreen">
        <Nav />
        <div className="profileScreen-body">
            <h1>Edit Profile</h1>
            <div className="profileScreen-info">
                <img src='https://tse3.mm.bing.net/th?id=OIP.s7v2KF8gYi5drpox8K_oxgHaHa&pid=Api&P=0' alt='' />
            <div className="profileScreen-details">
            <h2>{user.email}</h2>
                <div className="profileScreen-plan">
                    <h3>Plans</h3>
                        <PlansScreen />
                    <button 
                        onClick={() => auth.signOut()} 
                        className="profileScreen-signOut">
                            Sign Out
                        </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileScreen