import React, { useEffect } from 'react';
import './main.css';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import '../../Assets/video1.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { places } from '../data/data';
import Noitem from '../Home/Noitem';



const Main = (props) => {
    
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

     const filteredProducts = places.filter(data => {
    // if ((props.name).toLowerCase() && (data.dest).toLowerCase() !== props.name){
    //   return false
    // }
    // if ((props.location).toLowerCase()  && (data.location).toLowerCase() !== props.location){
    //   return false
    // }
    // if(!(data.amount >= props.amount.min && data.amount <= props.amount.max)){
    //   return false
    // }
    // if(props.feet && String(data.feet ) !== props.feet){
    //   return false
    // }
  
    if( !(data.location.toLowerCase().includes(props.location.toLowerCase()))){
        return false
      }
    if( !(data.dest.toLowerCase().includes(props.name.toLowerCase()))){
      return false
    }
    if( !(data.amount.toLowerCase().includes(props.amount.toLowerCase()))){
      return false
    }
   
    
    return true
  })

    return (
        <section className='main container section'>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {filteredProducts.length !== 0 ?
                    filteredProducts.map(({ id, imgSrc, dest, location, grade, amount, description }) => {
                        return (
                            <div key={id}
                                data-aos="fade-up"
                                className="singleDestionation">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={dest} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="dest">{dest}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>
                                </div>
                                <div className="amount flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="amount">
                                        <h5>{amount}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className=' mt-4 flex text-center bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-full p-2 w-36 '>
                                    DETAILS <HiOutlineClipboardCheck className="icon" />
                                </button>
                            </div>
                        )
                    }) : <Noitem />
                }
            </div>
        </section>
    )
}
export default Main