 import React from 'react'
 import './App.css'
import Accordion from './component/Accordion'
 const App = () => {
   return (
     <div  className='app__container'>
         <div className='cover_img'></div>
         <div className='accordion_contanier'>
              <Accordion />
         </div>
        
     </div>
   )
 }
 
 export default App