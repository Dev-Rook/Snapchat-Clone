import React from 'react';
import './Landing.css';


import Nav from '../../../Components/Main Components/Nav Bar/Nav';
import Introduction from '../../../Components/Page Components/Sections/Indroduction Section/Introduction';
import Express from '../../../Components/Page Components/Sections/Express Section/Express';
import Fun from '../../../Components/Page Components/Sections/Fun Section/Fun';
import Inspire from '../../../Components/Page Components/Sections/Inspire Section/Inspire';
import Map from '../../../Components/Page Components/Sections/Map Section/Map';



const Landing = () => {
  return (
    <>
        <Nav />
        <Introduction />
        <Express />
        <Fun />
        <Inspire />
        <Map />
    </>
  )
}

export default Landing