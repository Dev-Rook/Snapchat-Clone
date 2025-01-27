import React, {useState, useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

import './Express.css'

const Express = () => {

    const [hideTinyHead, setHideTinyHead] = useState(false);
        
    const TinyHEadHide = () => {
        if (window.scrollY >= 200) {
            setHideTinyHead(true)
        } else {
            setHideTinyHead(false)
        }
    }

    window.addEventListener("scroll", TinyHEadHide)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


  return (
    <div className="Express-Section">
        <div className="Three-Img-Container">
            <img className={ hideTinyHead ? 'Tiny-head1 Hide-Tiny-Head1' : "Tiny-head1"} src={('https://images.ctfassets.net/adclj4ijug4e/6aolTqa1QiYJPkpYqJlu1t/f48ff626bcc1c5ad3d6539e0dc5e2825/Eddie_K.png')} alt="" />

            <img className={ hideTinyHead ? 'Tiny-head2 Hide-Tiny-Head2' : "Tiny-head2"} src={('https://images.ctfassets.net/adclj4ijug4e/3C9sLMyfSgTqcsUBvKTKXK/c1a585d97bd0051d08e37459346b9ebc/Abby_T.png')} alt="" />

            <img className={ hideTinyHead ? 'Tiny-head3 Hide-Tiny-Head3' : "Tiny-head3"} src={('https://images.ctfassets.net/adclj4ijug4e/2k37Ua2EnIVARCXXBkcpNt/78a5a181c34e8484935afadec566f8f8/Virginia_D.png')} alt="" />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className="Phone-Infromation-Section">
            <h1 id="Section-Title">
            Express yourself with millions of Lenses.
            </h1>

            <form className='Phone-Inputs' action="">

                <fieldset>
                    <select name="AreaCodes" id="Area-Code-Selection">
                        <option id='AreaCodeItem' value="AU">AU +61</option>
                        <option id='AreaCodeItem' value="BR">BR +55</option>
                        <option id='AreaCodeItem' value="GB">GB +44</option>
                        <option id='AreaCodeItem' value="IN">IN +91</option>
                        <option id='AreaCodeItem' value="MX">MX +52</option>
                        <option id='AreaCodeItem' value="US">US +1</option>
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
            <video src={('https://videos.ctfassets.net/adclj4ijug4e/1HbHsu0is5rJNs4KLkYXRe/31cf8bd38511cef9fc197cf655e798ef/J0433_Lens_GradientTreatmentA_GENERIC_v06_10mb_BJP.mp4')} alt="" id="Express-Video" autoPlay loop></video>
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
            <video src={('https://videos.ctfassets.net/adclj4ijug4e/1HbHsu0is5rJNs4KLkYXRe/31cf8bd38511cef9fc197cf655e798ef/J0433_Lens_GradientTreatmentA_GENERIC_v06_10mb_BJP.mp4')} alt="" id="Express-Video-Large" autoPlay loop>
            </video>
        </div>
    </div>
  )
}

export default Express