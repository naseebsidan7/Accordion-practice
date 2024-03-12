import React, { useState } from 'react'
import './accordion.css'
import star from '../assets/images/icon-star.svg'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'

import { data } from '../constants/content'




const Accordion = () => {

  const [ clicked, setClicked ]= useState(null)

  const handleClick=(index)=>{
      if(clicked === index){
        return setClicked(null)
      }
      
      setClicked(index)
  }
 
   
  return (  
    <div className='wrapper'>
         <div className='faqs-heading'>
            <img src={ star } alt="star" />
            <h3> FAQs</h3>
         </div>
         

        
                {data.map((faqData,idx)=>(
                  <div className='faq-container'>
                      <div className='faqs' onClick={()=>handleClick(idx)}>
                          <span className='faq-title'> <h5 key={idx}>{faqData.title}</h5></span>
                          <img src={clicked===idx ? minus : plus } alt="plus-minus" />
                      </div>

                      <div class= "faq-content" 
                      style={{maxHeight: clicked=== idx ? "526px":"0px",
                              transition:"max-height .5s ease-out"
                      }}
                      key={idx}>
                              {faqData.answer}
                      </div>
                   </div>
                ))}
         
    </div>
  )
}

export default Accordion