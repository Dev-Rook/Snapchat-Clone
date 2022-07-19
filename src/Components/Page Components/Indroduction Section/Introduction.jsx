import React from 'react'
import './Introduction.css'

const Introduction = () => {
  return (
    <div className="Introduction-Section">
        <img src={require('../../../Assets/Images/Landing Page Images/Introduction-Section-Image.png')} alt="" id="Intro-Image" />

        <div className="Introduction-Information-Box">
            <h1 id='Intro-Header-Title'>Introducing Snapchat+</h1>

            <p id="Intro-Header-SubTitle">Be first to access unique and pre-release features for only $3.99/month.</p>

            <a href="/">
                <button className='Learn-More-Button'>
                    <p>Learn More</p>
                </button>
            </a>

            <a href="/">
                <button className='Join-Now-Button'>
                    <p>Join Now</p>
                </button>
            </a>
        </div>
    </div>
  )
}

export default Introduction

