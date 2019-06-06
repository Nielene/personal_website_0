import React , { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../css/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className='nav box effect1'>

        <div className='nav_nameDiv'>
          <div>
            <h2> <Link to='/'> Nielene </Link></h2>
          </div>
        </div>

        <div className='nav_liListDiv'>
          <div>
            <li style = {{listStyleType: 'circle'}}>
              <a href='#aboutMe' className='now_active'
              style={{background: '', color: 'white'}}> About Me </a>
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
