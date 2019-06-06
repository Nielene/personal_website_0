import React , { Component } from 'react';
import '../../../css/AboutMe.css'
import myGithubPicture from '../../../assets/myGithubPicture.jpeg'

class AboutMe extends Component {
  render() {
    return (
      <div>
        
        <div className='title_and_line'>
          <div className='compTitle'>
            <h1>About Me</h1>
          </div>

          <div className='line'>
            <hr />
          </div>
        </div>

        <div className='belowHeading'>
          <div className='leftSide'>
            <p>
            Hi. I've been a FullStack Web Developer since 2018. Building my skills on my own and through <a href='https://twitter.com/joinpursuit?lang=en' target='_blank' rel='noopener noreferrer'> @joinpursuit </a> has been fun! See the progress!
            </p>
            <p>
            Here are the technologies I've been working with:
            </p>

            <div className='ulListsDiv'>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
              <ul>
                <li>HTML & CSS</li>
                <li>Express</li>
                <li>Postgres / PSequel</li>
              </ul>
            </div>

          </div>

          <div className='rightSide rightSideImgDiv'>
            <img src= {myGithubPicture} alt='' />
          </div>

        </div>
      </div>
    )
  }

}

export default AboutMe;
