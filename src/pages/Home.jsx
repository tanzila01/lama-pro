import React from 'react'
import Anouncements from '../components/Anouncements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
//here

const Home = () => {
    return (
        <div>
            <Anouncements/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>
    )
}

export default Home
