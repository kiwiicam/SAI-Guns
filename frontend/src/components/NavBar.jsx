import React from 'react'
import "../css/NavBar.css"
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div className='nav'>
            <div className='navBarItems'>
                <div className='item'>
                    <h1>Home</h1>
                </div>
                <div className='item'>
                    <h1>Previous Auctions</h1>
                </div>
                <div className='item'>
                    <h1>Selling</h1>
                </div>
                <div className='item'>
                    <h1>Buying</h1>
                </div>
                <div className='item'>
                    <h1>Bidding</h1>
                </div>
                <div className='item'>
                    <h1>Catalogue</h1>
                </div>
                <div className='item'>
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>
    )
}

export default NavBar
