import React from 'react'
import { Link } from 'react-router-dom'

const NavbarView = () => {
  return (
    <div className='m-4'>
        <div className='flex justify-between'>
            <div>REDUX STORE</div>
            <div className='flex gap-x-6'>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/Cart">Cart</Link>
                </div>
                <div className='font-bold'>CART ITEMS: 0</div>
            </div>
        </div>

        <div className='mt-6 font-bold text-xl'>Welcome to the Redux toolkit store</div>
    </div>
  )
}

export default NavbarView