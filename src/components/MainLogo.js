import React from 'react'
import logoImage from '../logo//elegante-logo6.png';


const MainLogo = () => {
  return (
    <div className = "MainLogoWrapper">
      <a href = "#"> <img className = "MainLogo" src = {logoImage} alt = "Logo"/> </a>
    </div>
  )
}

export default MainLogo
