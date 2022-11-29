import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'

const Home = () => {
  return (
    <div>

    <Main/>
    <Row rowID="1" title="Upcoming" fetchURL={request.requestUpcoming}/>
    <Row rowID="2" title="Trending" fetchURL={request.requestTrending}/>
    <Row rowID="3" title="TopRated" fetchURL={request.requestTopRated}/>
    <Row rowID="4" title="Popular" fetchURL={request.requestPopulalr}/>

    </div>
  )
}

export default Home