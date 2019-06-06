import React , { Component } from 'react';
import '../../../css/ContactMe.css'

class ContactMe extends Component {
  render() {
    return (
      <div>

        <div className='title_and_line'>
          <div className='compTitle'>
            <h1>Contact Me</h1>
          </div>

          <div className='line'>
            <hr />
          </div>
        </div>

        <div className='contactMeParagraphDiv'>
          <p className='contactMeParagraph'>
            I'm always interested in opportunities to expand on and use my skills. I do freelance and long-term projects. Feel free to email me at nielenethomas@pursuit.org and I'll try my best to get back to you!
          </p>
        </div>


      </div>
    )
  }

}

export default ContactMe;
