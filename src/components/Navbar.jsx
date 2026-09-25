import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header>
        <nav>
            <div>
                <img src="/logo.svg" alt="Apple Logo" />
            </div>
            <ul>
                {navLinks.map((link) => (
                    <Link to={link.path} className='block text-white opacity-80 text-sm cursor-pointer hover:opacity-100 
                    transition-all duration-300 ease-in-out'>
                        {link.name}
                    </Link>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar