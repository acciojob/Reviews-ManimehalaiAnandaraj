import React, { useState } from 'react'
import reviews from './data'

const Review = () => {

    const [currentIndex,setCurrentIndex] =useState(0);
    const {id,name,job,image,text} = reviews[currentIndex];

    const handlePrev =() =>{
        setCurrentIndex((prev) => (prev -1 + reviews.length) %reviews.length);
    };

    const handleNext =() => {
        setCurrentIndex((prev) => (prev+1) % reviews.length);
    };

    const handleRandom =() =>{
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * reviews.length);
        }
        while(newIndex === currentIndex)
            setCurrentIndex = newIndex;
        
    };

  return (
    <div className='review'>
        <img className='person-img' src='{image}' alt='name'/>
        <h4 id={`author-${id}`} className='author'></h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='button-container'>
            <button className='prev-btn' onClick={handlePrev}> Prev </button>
            <button className='next-btn' onClick={handleNext}> Next </button>
        </div>

            <button className='random-btn' onClick={handleRandom}>Surprise Me</button>
         </div>
  )
}

export default Review