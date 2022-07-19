import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

import './Express.css'

const Express = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className="Express-Section">
        <div data-aos="fade-up" data-aos-duration="1000" className="Phone-Infromation-Section">
            <h1 id="Section-Title">
            Express yourself with millions of Lenses.
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
                            <p>Try Now</p>
                        </button>
                    </a>
             </fieldset>
            </form>
        </div>

        <div className="Video-Wrapper">
            <video src={require('https://videos.ctfassets.net/adclj4ijug4e/1HbHsu0is5rJNs4KLkYXRe/31cf8bd38511cef9fc197cf655e798ef/J0433_Lens_GradientTreatmentA_GENERIC_v06_10mb_BJP.mp4')} alt="" id="Express-Video" autoPlay loop></video>
        </div>

        <div className="Express-Video-Large-Wrapper">
            <div data-aos="fade-up" data-aos-duration="1000" className="Express-Video-Overlay-Card">
                <div className="Discover-Main">
                    <img src={require('../../../../Assets/Icons/Expand-Arrow-Up.png')} alt="" id="Up-Arrow" className='Expand-Arrow-Express-Video'/>
                    <p id="DiscoverText">Discover Snapchat</p>
                </div>
                
                <h1 id="Video-Title">
                    Express yourself with millions of Lenses.
                </h1>

                <a href="/">
                    <button className='Try-Now-Button-Video'>
                        <p>Try Now</p>
                    </button>
                </a>
            </div>
            <video src={require('https://videos.ctfassets.net/adclj4ijug4e/1HbHsu0is5rJNs4KLkYXRe/31cf8bd38511cef9fc197cf655e798ef/J0433_Lens_GradientTreatmentA_GENERIC_v06_10mb_BJP.mp4')} alt="" id="Express-Video-Large" autoPlay loop>
            </video>
        </div>
    </div>
  )
}

export default Express