import React from 'react'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Row from './components/Row'
import requests from './Request'
import './styles/HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
       <Nav />
       <Banner />
       <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
       />
       <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrendings}
       />
       <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
       />
       <Row
        title="Action Movie"
        fetchUrl={requests.fetchActionMovies}
       />
       <Row
        title="Comedy Movie"
        fetchUrl={requests.fetchComedeyMovies}
       />
       <Row
        title="Horror Movie"
        fetchUrl={requests.fetchHorrorMovies}
       />
       <Row
        title="Romance Movie"
        fetchUrl={requests.fetchRomanceMovies}
       />
       <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
       />
    </div>
  )
}

export default HomeScreen