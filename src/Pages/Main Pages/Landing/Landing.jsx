import React from 'react';
import './Landing.css';


import Nav from '../../../Components/Main Components/Nav Bar/Nav';
import Introduction from '../../../Components/Page Components/Sections/Indroduction Section/Introduction';
import Express from '../../../Components/Page Components/Sections/Express Section/Express';
import Fun from '../../../Components/Page Components/Sections/Fun Section/Fun';
import Inspire from '../../../Components/Page Components/Sections/Inspire Section/Inspire';
import Map from '../../../Components/Page Components/Sections/Map Section/Map';
import Skills from '../../../Components/Page Components/Sections/Skills/Skills';



const Landing = () => {
  return (
    <div className='Container'>
        <Nav />

        <section>
          <Introduction />
        </section>

        <section>
          <Express />
        </section>

        <section>
          <Fun />
        </section>

        <section>
          <Inspire />
        </section>

        <section>
          <Map />
        </section>
      
        <section>
          <Skills />
        </section>
    </div>
  )
}

export default Landing