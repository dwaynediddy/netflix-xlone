import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false)
    const navigate = useNavigate()

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <div className="nav-contents">
            <img 
                onClick={() => navigate("/")}
                className="nav-logo"
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                alt='' 
                />
            <img 
                onClick={() => navigate("/profile")}
                className='nav-avatar'
                src='https://tse3.mm.bing.net/th?id=OIP.s7v2KF8gYi5drpox8K_oxgHaHa&pid=Api&P=0' 
                alt='' 
                />
        </div>
    </div>
  )
}

export default Nav