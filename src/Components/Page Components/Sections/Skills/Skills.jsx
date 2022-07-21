import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="Skills-Section">
        <img src={require('../../../../Assets/Icons/Snapchat-Logo.png')} alt="" id="Snapchat-Logo" />
        <div data-aos="fade-up" data-aos-duration="1000" className="Phone-Infromation-Section">
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
                            <p>Send Link</p>
                        </button>
                    </a>
             </fieldset>
            </form>

            <h1 id="Section-Title">
                Advertisers
            </h1>

            <h1 id="Section-Title">
                Creators
            </h1>

            <h1 id="Section-Title">
                Developers
            </h1>
        </div>
    </div>
  )
}




export default Skills