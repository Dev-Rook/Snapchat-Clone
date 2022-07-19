import React from 'react'
import './Fun.css'

const Fun = () => {
  return (
    <div className="Fun-Section">
        <div className="Video-Wrapper">
            <video src={require('https://videos.ctfassets.net/adclj4ijug4e/1dfUF5QOnuKK0dMcEBTeOD/6853319d0be226d0c3a877af0f99818f/J0863_AppTitles_IntroToSnap_SnapAd_6s_375x667_072721_DESKTOP.mp4')} alt="" id="Fun-Video" autoPlay loop></video>
        </div>
        
        <div data-aos="fade-up" data-aos-duration="1000" className="Phone-Infromation-Section">
            <h1 id="Section-Title">
            Have fun with your friends and family.
            </h1>

            <form className='Phone-Inputs' action="">

                <fieldset>
                    <select name="AreaCodes" id="Area-Code-Selection">
                        <option id='AreaCodeItem' value="AU"><p>AU +61</p></option>
                        <option id='AreaCodeItem' value="BR"><p>BR +55</p></option>
                        <option id='AreaCodeItem' value="GB"><p>GB +44</p></option>
                        <option id='AreaCodeItem' value="IN"><p>IN +91</p></option>
                        <option id='AreaCodeItem' value="MX"><p>MX +52</p></option>
                        <option id='AreaCodeItem' value="US"><p>US +1</p></option>
                    </select>

                    <input id='Phone-Number-Input-Box' type="text" name='Phone' placeholder='Phone Number' />


                
                    <a href="/">
                        <button className='Try-Now-Button'>
                            <p>Find Your Friends</p>
                        </button>
                    </a>
             </fieldset>
            </form>
        </div>


        <div className="Fun-Video-Large-Wrapper">
            <div data-aos="fade-up" data-aos-duration="1000" className="Fun-Video-Overlay-Card">
                <div className="Discover">
                    <img src={require('https://videos.ctfassets.net/adclj4ijug4e/1dfUF5QOnuKK0dMcEBTeOD/6853319d0be226d0c3a877af0f99818f/J0863_AppTitles_IntroToSnap_SnapAd_6s_375x667_072721_DESKTOP.mp4')} alt="" id="Up-Arrow" className='Expand-Arrow-Fun-Video'/>
                    <p id="DiscoverText">Discover Snapchat</p>
                </div>
                
                <h1 id="Video-Title">
                    Express yourself with millions of Lenses.
                </h1>

                <a href="/">
                    <button className='Try-Now-Button-Video'>
                        <p>Find Your Friends</p>
                    </button>
                </a>
            </div>
            <video src={require('../../../../Assets/Videos/Landing Page Videos/Have-Fun-Video.mp4')} alt="" id="Fun-Video-Large" autoPlay loop>
            </video>
        </div>
    </div>
  )
}

export default Fun