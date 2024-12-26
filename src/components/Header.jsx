import React from 'react'
import "./css/Header.css"
function Header() {
  return (
    <div className='seatacNavbar'>
        <div className='seatac-logo-contr'>Logo</div>
        <div className='navigation-contr'>
            <ul>
              <li><a href='#'>Menu</a></li>
              <li><a href='#'>Button</a></li>
              <li><a href='#'>Become a Host</a></li>
              
            </ul>
        </div>
    </div>

  )
}

export default Header