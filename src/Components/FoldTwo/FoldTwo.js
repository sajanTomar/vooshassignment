import React from 'react'
import "./FoldTwo.css"
import Registration from '../Registration/Registration'
import Registration_bg from "../../images/book_now_bg.webp"

export default function FoldTwo() {
  return (
    <div className='foldtwo-container'>
        
            <div className='left'>
                <h1>Book A Demo Now</h1>
            </div>
            <div className='right'>
                <Registration />
            </div>  
        
    </div>
  )
}
