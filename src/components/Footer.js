import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <div className='connect'><p><br/>Connect</p></div>
        <div>
          <a href="https://www.linkedin.com/in/fauzan-khan-5b4010217/"><LinkedInIcon /></a>
          <a href="mailto: fauzank2004@gmail.com"><Email /></a>
          <a href="https://github.com/fauzankhann"><GitHub /></a>
        </div>
      </div>
      <p>&copy; 2023 hellofauzan.com</p>
    </div>
  );
}

export default Footer;