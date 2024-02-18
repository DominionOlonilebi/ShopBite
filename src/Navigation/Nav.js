import React from 'react'
import './Nav.css'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

const Nav = () => {
  return (
    <>
      <nav>
        <div className='nav-container'>
            <input type='text' className='search-input' placeholder='Search quality shoes'/>
        </div>
<div className='profile-container'>
    <a href='#'>
        <AiOutlineHeart className='nav-icons'/>
    </a>
    <a href=''>
        <AiOutlineShoppingCart className='nav-icons'/>
    </a>
    <a href=''>
        <AiOutlineUserAdd className='nav-icons'/>
    </a>
</div>
      </nav>
    </>
  )
}

export default Nav