import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import arrowUp from '../../assets/arrowup.png'
import '../../css/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className='nav'>

        <div className='nav_nameDiv'>
          <div>
            <h2> <a href='#smallIntro'> Nielene </a></h2>
          </div>
        </div>

        <div className='nav_liListDiv'>
          <div className='linkIcons'>
            <a href='#smallIntro'> <img src={arrowUp} alt=''/> </a>
          </div>


          <div>
            <li>
              <a href='#aboutMe'> About Me </a>
            </li>
          </div>

          <div>
            <li>
              <a href='#myProjects'> Projects </a>
            </li>
          </div>

          <div>
            <li>
              <a href='#contactMe'> Contact Me </a>
            </li>
          </div>

          <div>
            <li>
              <a href='https://resume.creddle.io/resume/8agulr0be45' target='_blank' rel='noopener noreferrer'> Resume </a>
            </li>
          </div>

        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar);
