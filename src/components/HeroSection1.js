import React from 'react';
import {ReactComponent as Heroimg} from '../img/undraw_starry_window_re_0v82.svg'

export default function HeroSection1() {
    return (
        <div id="home" className="flex md:h-[90vh] p-10 bg-sky-700 items-center flex-col md:flex-row">
            <div className="flex-1 text-center">
                <h1 className='text-5xl font-bold text-center mb-5'>Do You Want To Create a Business Website and Pay With Crypto?</h1>
                <h2 className='mt-5 text-xl whitespace-normal'>We are here to help you.</h2>
            
            </div>
            <div className="flex-1">
                <Heroimg className='pr-10 max-h-[80vh] w-full'/>
            </div>
        </div>
)}

