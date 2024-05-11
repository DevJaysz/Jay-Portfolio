import React, { useEffect } from 'react'
import { preLoaderAnim } from '../../assets/Index'
import './PreLoader.css'

function PreLoader() {

    useEffect(()=> { 
        preLoaderAnim()
    },[])

  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Code</span>
            <span>with</span>
            <span>Creativity.</span>
            <span>Design</span>
            <span>with</span>
            <span>Purpose</span>
        </div>
    </div>
  )
}

export default PreLoader