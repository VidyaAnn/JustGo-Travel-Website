import React, {useState ,useEffect} from 'react';
import './home.css';
import video from '../../Assets/video1.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {TfiFacebook} from 'react-icons/tfi'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTripadvisor} from 'react-icons/fa'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {TbApiApp} from 'react-icons/tb'
import Main from '../Main/Main'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Feedback from '../Feedback/Feedback';
import About from '../AboutUs/About';

const Home=()=>{
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQuery1, setSearchQuery1] = useState('');
    const [searchQuery2, setSearchQuery2] = useState('');
    
    const handleSelectQuery = (event) => {
        setSearchQuery(event.target.value);
      }
    const handleSelectQuery1 = (event) => {
        setSearchQuery1(event.target.value);
      }
    const handleSelectQuery2 = (event) => {
        setSearchQuery2(event.target.value);
      }
      

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    
    return(
        <>
        <Navbar />
         <section className='home'>
            <div className="overlay"></div>
            <video src={video}  muted autoPlay loop type="video1.mp4"></video>

            <div className="homeContent container ">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">Enjoy your holiday</h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input
                            type="text" 
                            placeholder="Enter country name" 
                            value={searchQuery}
                            onChange={handleSelectQuery} />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="city">Search your place:</label>
                        <div className="input flex">
                            <input type="text"
                             placeholder="Enter place name"
                             value={searchQuery1}
                            onChange={handleSelectQuery1} 
                             />
                            <GrLocation className="icon"/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="city">Search your price:</label>
                        <div className="input flex">
                            <input type="text"
                             placeholder="Enter price"
                             value={searchQuery2}
                            onChange={handleSelectQuery2} 
                             />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    {/* <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Price:</label>
                            <h3 className="total">50000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="50000" min="10000"   value={pricebtn} onChange={handleSelectChange3}/>
                            <GrLocation className="icon"/>
                        </div>
                    </div> */}

                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>

                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <TfiFacebook className="icon"/>
                        <FaInstagramSquare className="icon"/>
                        <FaTripadvisor className="icon"/>

                    </div>

                    <div className="leftIcons">
                        <AiOutlineUnorderedList className="icon"/>
                        <TbApiApp className="icon"/>

                    </div>
                </div>
            </div>
        </section>
        <Main location={searchQuery} name={searchQuery1} amount={searchQuery2}/>
        <About />
        <FAQ />
        <Feedback/>
        <Footer />
        </>
       
    )
}
export default Home