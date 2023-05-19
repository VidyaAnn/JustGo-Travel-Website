import React,{useState, useRef} from 'react';
import {SiYourtraveldottv} from 'react-icons/si'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import {IoIosCloseCircleOutline} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'
import './navbar.css';
import LoginPage from '../LoginPage/LoginPage'

const Navbar=()=>{
   
    const navigation = useNavigate();
    const handleClick = () => {
        navigation('/login');
    }
    const contactClick = () => {
        navigation('/contact');
    }
    const [active,setActive] = useState('navBar')
   

    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }
    
    return(
        <>
       
            <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                  <a href="/" className="logo flex">
                    <h1><SiYourtraveldottv className="icon"/>Justgo</h1>
                  </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem p-2">
                            <button><a href="/" className="">Home</a></button>
                            {/* <button onClick={homeClick} className="navLink">Home</button> */}
                           
                        </li>

                        {/* <li className="navItem">
                            
                            <Link to="/packages">Packages</Link>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li> */}

                        <li className="navItem" >
                            <button onClick={contactClick}  className="">Contact</button>
                           
                        </li>

                        <button className='btn' onClick={handleClick}>
                            <span className="text-white">BOOK NOW</span>
                        </button>
                    </ul>

                    <div onClick={removeNavbar}
                    className="closeNavbar">
                        <IoIosCloseCircleOutline className="icon"/>
                    </div>
                </div>
                    <div onClick={showNav}
                    className="toggleNavbar">
                        <TbGridDots className="icon"/>
                    </div>
               

            </header>
        <Routes>
            <Route path="/login" component={LoginPage} />
        </Routes>
        </section>
        
        </>
    )
}
export default Navbar