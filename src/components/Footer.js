import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <LinkedInIcon /> 
            <Email/>
            <GitHub />
        </div>
        <p> &copy; 2023 hellofauzan.com</p>
    </div>
  )
}

export default Footer