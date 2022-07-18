import React from 'react'

import './Nav.css'

const Nav = () => {
  return (
    <nav className='Nav-Bar'>
        <div className="Grid-Iocn-And-Logo">
            <div className="Grid-Menu-Icon-Container">
                <img src={require('../../../Assets/Icons/Circled-Menu-Icon.png')} alt="" id="Grid-Menu-Icon" />
            </div>

            <img src={require('../../../Assets/Icons/Snapchat-Logo.png')} alt="" id="Snapchat-Icon" />
        </div>

        <div className="Wrapper">
            <ul className="NavLink-Container">        
                <li>
                    <a id="NavLink" href="/">Advertisers</a>
                </li>
                
                <li>
                    <a id="NavLink" href="/">Creators</a>
                </li>
                
                <li>
                    <a id="NavLink" href="/">Deverlopers</a>
                </li>
                
                <li>
                    <a id="NavLink" href="/">Snap AR</a>
                </li>
                
                <li className='Arrow-Link'>
                    <a id="NavLink" href="/">Features</a>
                    <img src={require('../../../Assets/Icons/Expand-Arrow-Down.png')} alt="" className="Down-Arrow Expand-Arrow" />
                    <img src={require('../../../Assets/Icons/Expand-Arrow-Up.png')} alt="" className="Up-Arrow Expand-Arrow" />
                </li>
            </ul>

            <a href="/">
                <button className='Download-Button'>
                    <p>Download</p>
                </button>
            </a>
        </div>

    </nav>
  )
}

export default Nav