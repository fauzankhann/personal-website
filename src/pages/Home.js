import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import '../styles/Home.css'
import pdf_resume from '../Files/Fauzan_resume.pdf'
import '../styles/home2.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, My Name is Fauzan. </h2>
        <div className="prompt">
          <p>A programmer with a passion for learning & creating. Pleased to meet you!</p>
          <LinkedInIcon />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1>Let me introduce myself.</h1>
        <ol className="list">
          <li className="item">
            <h2>About me</h2>
            <span>
              I am an enthusiastic programmer with a passion towards new technologies and
              I am always looking to improve my skills and learn new things along the way.
              I am currently a student at the University of Toronto studying Computer Science
              in the pursuit of being a phenomenal programmer in this industry.
            </span>
          </li>
          <li className="item">
            <h2>My Profile</h2>
            <span>
              Currently I am a second year student at UofT, but I am actively seeking opportunities
              in computer science / software engineering / new startups in this industry.
              <br /><br />If you think I'm a good fit, please contant me at fauzank2004@gmail.com.
            </span>
          </li>

          <li className="item">
            <h2><br />Technical Skills</h2>
            <p>Python</p>
            <div class="container">
              <div class="skills python">
                  <div className='percent'>90%</div>
              </div>
            </div>

            <p>Java</p>
            <div class="container">
              <div class="skills java">
                <div className='percent'>90%</div>
              </div>
            </div>

            <p>JavaScript / CSS / React</p>
            <div class="container">
              <div class="skills js">
                <div className='percent'>70%</div>
              </div>
            </div>

            <p>C / C#</p>
            <div class="container">
              <div class="skills C">
                <div className='percent'>60%</div>
              </div>
            </div>


          </li>
          <br/>
          <div className='download'>
            <br /><a href={pdf_resume} target="_blank"><button><br/>Download Resume</button></a>
          </div>


        </ol>
      </div>
    </div>
  );
}

export default Home;