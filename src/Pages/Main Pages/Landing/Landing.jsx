import React from 'react';
import './Landing.css';


import Nav from '../../../Components/Main Components/Nav Bar/Nav';
import Introduction from '../../../Components/Page Components/Sections/Indroduction Section/Introduction';
import Express from '../../../Components/Page Components/Sections/Express Section/Express';
import Fun from '../../../Components/Page Components/Sections/Fun Section/Fun';



const Landing = () => {
  return (
    <>
        <Nav />
        <Introduction />
        <Express />
        <Fun />
    </>
  )
}

export default Landing