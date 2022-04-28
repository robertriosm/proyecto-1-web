import React from 'react'
import Header from './Header'
import SearchBar from './Search-Bar'
import Footer from './Footer'
import Explore from './Explore'
import ScrollProducts from './Scroll-Products'
import TwoProducts from './TwoProducts'
import ThreeColumnProducts from './ThreeColumnProducts'
import FreeGames from './FreeGames'
import WishList from './WishList'
import NewProducts from './New-Products'

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SearchBar />
        <NewProducts />
        <WishList />
        <ScrollProducts />
        <TwoProducts />
        <FreeGames />
        <ScrollProducts />
        <ThreeColumnProducts />
        <TwoProducts />
        <ScrollProducts />
        <ScrollProducts />
        <ScrollProducts />
        <Explore />
      </div>
      <Footer />
    </div>
  )
}

export default App
