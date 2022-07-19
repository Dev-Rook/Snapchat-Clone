import React from 'react';
import './Landing.css';


import Nav from '../../../Components/Main Components/Nav Bar/Nav';
import Introduction from '../../../Components/Page Components/Sections/Indroduction Section/Introduction';
import Express from '../../../Components/Page Components/Sections/Express Section/Express';



const Landing = () => {
  return (
    <>
        <Nav />
        <Introduction />
        <Express />
    </>
  )
}

export default Landing