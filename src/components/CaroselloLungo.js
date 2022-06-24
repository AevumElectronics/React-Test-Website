import React, {useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'

export default function ProjectCard(props) {
    const image = props.img;
    console.log(image);
    const[slideIndex, setSlideIndex] = useState(0);
    function slideLeft(){
        if(slideIndex>0) setSlideIndex(slideIndex-1);
    }
    function slideRight() {
        if(slideIndex<image.length-1) setSlideIndex(slideIndex+1);

    }


/*     const [countDown, setCountDown] = useState(0);
    
      useEffect(() => {
        console.log(countDown);
        const interval = setInterval(() => {
          setCountDown(countDown+1);
          
          setSlideIndex(countDown%image.length)
        }, 2000);
    
        return () => clearInterval(interval);
      }, [countDown]);
      
      md:max-w-md aspect-video object-contain
      */
      

    return (
        <div className="flex my-10 bg-zinc-50 mx-auto rounded-md shadow-md
            flex-col max-w-[900px]
            ">

            <div id="slider" className='flex w-full
            scroll-smooth overflow-x-scroll scrollbar-hide
            '>
                {image.map((img,index)=>
                    <img src={image[index]} alt={props.title} key={index}
                    className="w-[200px]  object-cover aspect-square border-2 border-red-100 rounded-full
                    m-4 shadow-lg hover:shadow-red-400 hover:border-red-400
                    hover:scale-105 ease-in-out duration-300"/>
                )}
            </div>

        </div>
)}


