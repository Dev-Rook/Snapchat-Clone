import React from 'react'

import './Inspire.css'

const Inspire = () => {
  return (
    <div className="Inspire-Section">
                <div data-aos="fade-up" data-aos-duration="1000" className="Phone-Infromation-Section">
            <h1 id="Section-Title">
                Get inspired and share your creativity.
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
                            <p>Open Spotlight</p>
                        </button>
                    </a>
             </fieldset>
            </form>
        </div>

        <div className="Video-Wrapper">
            <video src={('https://videos.ctfassets.net/adclj4ijug4e/7G4KmcxY27XBN2h57O7TXw/c65403f9c05e5c8c6b1bae4aae8635ab/spotlight_video.mp4')} alt="" id="Inspire-Video" autoPlay loop></video>
        </div>

        <div className="Inspire-Video-Large-Wrapper">
            <div data-aos="fade-up" data-aos-duration="1000" className="Inspire-Video-Overlay-Card">
                <div className="Discover">
                    <img src={require('../../../../Assets/Icons/Expand-Arrow-Up.png')} alt="" id="Up-Arrow" className='Expand-Arrow-Express-Video'/>
                    <p id="DiscoverText">Discover Snapchat</p>
                </div>
                
                <h1 id="Video-Title">
                    Get inspired and share your creativity.
                </h1>

                <a href="/">
                    <button className='Try-Now-Button-Video'>
                        <p>Open Spotlight</p>
                    </button>
                </a>
            </div>
            <video src={('https://videos.ctfassets.net/adclj4ijug4e/7G4KmcxY27XBN2h57O7TXw/c65403f9c05e5c8c6b1bae4aae8635ab/spotlight_video.mp4')} alt="" id="Inspire-Video-Large" autoPlay loop>
            </video>
        </div>
    </div>
  )
}

export default Inspire