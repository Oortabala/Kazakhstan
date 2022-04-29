import { SearchOutlined, ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.scss'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                
                    <ul className='ul-items'>
                        <li className='li-items'>
                        <Link to='/women'>Burabai</Link>
                        <Link to='/men'>Charyn</Link>
                        <Link to='/denim'>History</Link>
                        <Link to='/shop' className='orange'>Nature</Link>
                        <Link to='/about'>About</Link>
                        </li>
                    </ul>
                <div className="logo">
                    <h1>Kazakhstan</h1>
                </div>

                <div className="right">
                            <div className="search">
                                <SearchOutlined className='search-icon'/>    
                                <button className='sch-btn'>Search</button>            
                            </div> 
                            <div className="right-buttons">
                            <button>
                                <Link to='/login'>Log In</Link>
                            </button>
                            <button>
                                <Link to='/sign-up'>
                                    Sign Up
                                </Link>
                            </button>
                            <ShoppingBasket className='basket'/>
                            </div>                       
                </div>
            </nav>
        </div>
    )
}

export default Header
