import React , { Component } from 'react';
import github_icon from '../../../assets/github_icon.png'
import external_link_icon from '../../../assets/www_web_icon.png'
// import otherProjects from './MyProjectsData/OtherProjects.json'
import '../../../css/MyOtherProjects.css'

// var extraProjects = JSON.parse(otherProjects);
let otherProjects = [
  {id: 1, title: "Earworm Report", className: "displayNow", languages: ["Redux", "React", "JavaScript", "CSS"], website: "", github: "https://github.com/Nielene/Earworm-Report", description: "A full-stack application where users can post, favorite, and comment on songs."},
  {id: 2, title: "Music4urMood", className: "displayNow", languages: ["React", "JavaScript", "CSS"], website: "", github: "https://github.com/acabrera100/music4UrMood", description: "A group project that plays you music to suit your mood."},
  {id: 3, title: "Cost Splitter", className: "displayAfter", languages: ["HTML", "CSS"], website: "", github: "https://github.com/Nielene/costSplitter", description: "This is one of my early projects. It gives you a quick way to split a bill fairly."}
]

class MyOtherProjects extends Component {
  // constructor() {
  //   super()
  //
  // }
  projects = () => {
    return [{otherProjects}].map( project => {
      return (
        <div key={project.id} className='eachProjectDiv'>
          <div className='linkIcons'>
            <a href={project.github} target='_blank' rel='noopener noreferrer'><img src={github_icon} alt=''/></a>
            <a href={project.website} target='_blank' rel='noopener noreferrer'><img src={external_link_icon} alt=''/></a>
          </div>
          <div>{project.title}</div>
          <div>{project.description}</div>
          {/* // <div>[{project.languages}].map( language => <li>{language}</li>)}</div> */}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className='title_and_line'>
          <div className='compTitle3'>
            <h1>My Other Projects</h1>
          </div>

          <div className='line3'>
            <hr />
          </div>
        </div>


        <div className='mappedJsonProjects'>
          <div className='eachProjectDiv'>
          </div>
          { this.projects() }
        </div>

      </div>
    )

  }

}


export default MyOtherProjects;
