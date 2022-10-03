import React from 'react'
import '../styles/Banner.css'

const Banner = () => {

  let truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundPosition: "center center",
    }}>
      <div className="banner-contents">
        <h1 className="banner-title">
          Movie Name
        </h1>
        <div className="banner-buttons">
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(
            `banner description test banner description testbanner description test
            banner description testbanner description testbanner description testbanner description test
            banner description testbanner description testbanner description testbanner description test
            banner description testbanner description testbanner description testbanner description test
            banner description testbanner description testbanner description testbanner description test
            banner description testbanner description testbanner description testbanner description test
            banner description testbanner description testbanner description testbanner description test`, 150
            )}
          </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  )
}

export default Banner