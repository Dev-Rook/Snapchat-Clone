import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='Footer'>
        <div className="CCA">
            <ul className="Label-Links First-Label">
                <span>Company</span>
                <li><a href='#'>Snap Inc.</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'></a></li>
            </ul>

            <ul className="Label-Links">
                <span>Community</span>
                <li><a href='#'>Snapchat Support</a></li>
                <li><a href='#'>Pixy Support</a></li>
                <li><a href='#'>Community Guidelines</a></li>
                <li><a href='#'>Safety Center</a></li>
            </ul>

            <ul className="Label-Links">
                <span>Advertising</span>
                <li><a href='#'>Buy Ads</a></li>
                <li><a href='#'>Advertising Policies</a></li>
                <li><a href='#'>Political Ads Library</a></li>
                <li><a href='#'>Brand Guidelines</a></li>
                <li><a href='#'>Promotions Rules</a></li>
            </ul>
        </div>

        <div className="LL">
            <ul className="Label-Links">
                <span>Legal</span>
                <li><a href="#">Privacy Center</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Cookie Settings</a></li>
                <li><a href="#">Report Infringement</a></li>
                <li><a href="#">Custom Creative Tools Terms</a></li>
                <li><a href="#">Community Geofilter Terms</a></li>
                <li><a href="#">Lens Studio Terms</a></li>
            </ul>

            <div className="Language-Selector">
                <span>Language</span>

                <select name="Languages" id="Box
                "></select>
            </div>
        </div>
    </footer>
  )
}

export default Footer