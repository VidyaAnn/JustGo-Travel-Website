import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Components/LoginPage/LoginPage';
import Feedback from './Components/Feedback/Feedback';
import FAQ from './Components/FAQ/FAQ';
import './app.css';
import Contact from './Components/contact/Contact';
const App = () => {
    return(
        <div className="App">
            {/* <Navbar/>
            <Home/>
            <FAQ />
            <Feedback /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="faq" element={<FAQ />} />
                <Route path="feedback" element={<Feedback />} /> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Footer/> */}
        
        </div>
    )
}
export default App