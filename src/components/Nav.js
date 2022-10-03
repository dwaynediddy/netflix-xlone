import React from 'react'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <div className="nav nav-black">
        <div className="nav-contents">
            <img 
                className="nav-logo"
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                alt='' 
                />
            <img 
                className='nav-avatar'
                src='https://tse3.mm.bing.net/th?id=OIP.s7v2KF8gYi5drpox8K_oxgHaHa&pid=Api&P=0' 
                alt='' 
                />
        </div>
    </div>
  )
}

export default Nav