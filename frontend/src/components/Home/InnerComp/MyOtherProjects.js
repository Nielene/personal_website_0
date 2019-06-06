import React , { Component } from 'react';
import github_icon from '../../../assets/github_icon.png'
import external_link_icon from '../../../assets/www_web_icon.png'
import otherProjects from './MyProjectsData/OtherProjects.json'
import '../../../css/MyOtherProjects.css'


class MyOtherProjects extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  projects = () => {
    return otherProjects.map( project => {
      return (
        <div key={project.id} className='eachProjectDiv'>
          <div className='linkIcons'>
            <a href={project.github} target='_blank' rel='noopener noreferrer'><img src={github_icon} alt=''/></a>
            <a href={project.website} target='_blank' rel='noopener noreferrer'><img src={external_link_icon} alt=''/></a>
          </div>
          <div className='otherPro_title'>{project.title}</div>
          <div className ='otherPro_description'>{project.description}</div>
          <div className='languagesArray'>{project.languages.map((language, index) => {
              return (
                <div key={index} className='eachLanguage'>
                  <p>{language} </p>
                </div>
              )
            })}</div>
        </div>
      )
    })
  }

  render() {


    return (
      <div>
        <div className='title_and_line'>
          <div className='compTitle'>
            <h1>My Other Projects</h1>
          </div>

          <div className='line3'>
            <hr />
          </div>
        </div>


        <div className='mappedJsonProjects'>
          { this.projects() }
        </div>

      </div>
    )

  }

}


export default MyOtherProjects;
