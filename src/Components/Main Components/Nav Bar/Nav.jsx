import React, {useState} from 'react'

import './Nav.css'

// import Features from '../../Page Components/Features Drop Down Menu/Features'

const Nav = () => {

    const [showNavBoard, setShowNavBoard] = useState(false);
    const [showSideMenu, setShowSideMenu] = useState(false);


    const revealNavBoard = () => {
        setShowNavBoard((preveState) => !preveState)
    }

    const hideNavBoard = () => {
        setShowNavBoard((preveState) => !preveState)
    }


    const revealSideMenu = () => {
        setShowSideMenu((preveState) => !preveState)
    }

    // const hideSideMenu = () => {
    //     setShowNavBoard((preveState) => !preveState)
    // }



  return (
    <nav className='Nav-Bar'>
        <img onClick={revealSideMenu} src={require('../../../Assets/Icons/Mobile-Menu-Icon.png')} alt="" id="Mobile-Menu" />

        <div className="Grid-Iocn-And-Logo">
            <div onClick={revealNavBoard} className="Grid-Menu-Icon-Container">
                <img src={require('../../../Assets/Icons/Circled-Menu-Icon.png')} alt="" id="Grid-Menu-Icon" />
            </div>

            <img src={require('../../../Assets/Icons/Snapchat-Logo.png')} alt="" id="Snapchat-Icon" />
        </div>

        <img src={require('../../../Assets/Icons/Snapchat-Logo.png')} alt="" id="Mobile-Snap-Icon" />

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

                    
     
                    <div className="Feature-Box-Wrapper">
                        <div className="Feature-Box">
                            <ul className="Feature-Content">         
                                <li>
                                    <a href="#" id="Feature-Link">
                                        Soptlight
                                    </a>
                                </li>

                                <li>
                                    <a href="#" id="Feature-Link">
                                        Stories
                                    </a>
                                </li>

                                <li>
                                    <a href="#" id="Feature-Link">
                                        Maps
                                    </a>
                                </li>

                                <li>
                                    <a href="#" id="Feature-Link">
                                        Filters & Lenses
                                    </a>
                                </li>

                                <li>
                                    <a href="#" id="Feature-Link">
                                        Snapcodes
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* <Features /> */}
                </li>
            </ul>

            <a href="/">
                <button className='Download-Button'>
                    <p>Download</p>
                </button>
            </a>

            <a href="/">
                <p id='Download'>Download</p>
            </a>
        </div>




        <div className={ showNavBoard ? "Large-Nav-Board Show-nav-Board " : "Large-Nav-Board" }>
            <div onClick={hideNavBoard} className="X"></div>
        </div>



        <div className={ showSideMenu ? "Mobile-Side-Menue Show-Mobile-Menu" :  "Mobile-Side-Menu"}>

        </div>

    </nav>
  )
}

export default Nav