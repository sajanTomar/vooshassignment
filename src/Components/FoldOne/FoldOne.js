import React, { Component } from "react";
import LogoOne from "../../images/page1_1.cb1dbedcdc321b25fb4e.webp"
import LogoTwo from "../../images/page1_2.4bfc2d124bbd2e50da2d.webp"
import LogoThree from "../../images/page1_3.1d108925b5e5156bb2d4.webp"
import VooshLogo from "../../images/VooshLogo.webp"
import LandingBg from "../../images/landing_bg.webp"

import Rightbg from "../../images/my_profile.61da110e7e1e80c97356.webp"
import "./FoldOne.css"
export default function FoldOne() {
  return (
    <div className="main-class">
        
            <div>
            <img src={ VooshLogo } className="logo" />
            <button type="submit" className="clicked">Book Demo</button>
            </div>
            <img src={ Rightbg } className="right" />
            
        
    </div>
  






   
   
  )
}
