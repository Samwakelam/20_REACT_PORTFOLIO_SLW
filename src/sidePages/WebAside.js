import './WebAside.css';
import { useState } from 'react';

import DescriptionBox from '../popout/DescriptionBox'

const WebAside = () => {

  const [projectCode, setProjectCode] = useState('');
  const [location, setLocation] = useState({top:'0px', left: '250px'});

  const handleProjectDescription = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    // console.log('event.target.dataset.projectcode =', event.target.dataset.projectcode);
    console.log('event =', event);
    setProjectCode(event.target.dataset.projectcode);
    setLocation({
      top: `${event.pageY -960}px`,
      left: `250px`,
    })
  }

  return (
    <div id='web-design-aside' className='container'>

      <div className='minor-project-containter'>
        <div className='project-tile'>
            <a 
              target="_blank" 
              rel="noreferrer" 
              href="https://samwakelam.github.io/19_REACT_EMPLOYEE_DIRECTORY_SLW/"
            >
              <img
                className="project-board"
                alt="Minor Project 19 Employee Directory - React"
                src={`${process.env.PUBLIC_URL}/assets/img/project-boards/directory-tile.png`}
              />
            </a>
        </div>
        <div className='spots'></div>
        <div className='project-about'><button data-projectcode='19' className='btn-text text-centre' onClick={handleProjectDescription}>Project Description</button></div>
        <div className='project-github'>
        <a 
          id='github-profile' 
          className='' 
          rel="noreferrer" 
          href='https://github.com/Samwakelam/19_REACT_EMPLOYEE_DIRECTORY_SLW' 
          target='_blank' 
        >
        <img
          className='symbol-sml'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/github-clear.png`}
          alt='Git hub logo'
          // onClick={togglePopout}
        />
        </a>
        </div>
      </div>

      <div className='minor-project-containter'>
        <div className='project-tile'>
            <a 
              target="_blank" 
              rel="noreferrer" 
              href="https://model-view-control-13-slw.herokuapp.com/burgers"
            >
              <img
                className="project-board"
                alt="Minor Project 13 Burger Bar"
                src={`${process.env.PUBLIC_URL}/assets/img/project-boards/burger-bar-tile.png`}
              />
            </a>
        </div>
        <div className='spots'></div>
        <div className='project-about'><button data-projectcode='13' className=' btn-text text-centre' onClick={handleProjectDescription} >Project Description</button></div>
        <div className='project-github'>
        <a 
          id='github-profile' 
          className='' 
          rel="noreferrer" 
          href='https://github.com/Samwakelam/13_MODEL_VIEW-CONTROL_SLW' 
          target='_blank' 
        >
        <img
          className='symbol-sml'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/github-clear.png`}
          alt='Git hub logo'
          // onClick={togglePopout}
        />
        </a>
        </div>
      </div>

      <div className='minor-project-containter'>
        <div className='project-tile'>
            <a 
              target="_blank" 
              rel="noreferrer" 
              href="https://samwakelam.github.io/08_RESPONSIVE-PORTFOLIO_SLW/index.html"
            >
              <img
                className="project-board"
                alt="Minor Project 08 Portfolio"
                src={`${process.env.PUBLIC_URL}/assets/img/project-boards/portfolio-v1-tile.png`}
              />
            </a>
        </div>
        <div className='spots'></div>
        <div className='project-about'><button data-projectcode='08' className='btn-text text-centre' onClick={handleProjectDescription} >Project Description</button></div>
        <div className='project-github'>
        <a 
          id='github-profile' 
          className='' 
          rel="noreferrer" 
          href='https://github.com/Samwakelam/08_RESPONSIVE-PORTFOLIO_SLW' 
          target='_blank' 
        >
        <img
          className='symbol-sml'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/github-clear.png`}
          alt='Git hub logo'
          // onClick={togglePopout}
        />
        </a>
        </div>
      </div>

      <div className='minor-project-containter'>
        <div className='project-tile'>
            <a 
              target="_blank" 
              rel="noreferrer" 
              href="https://samwakelam.github.io/06_WEATHER_DASH_SLW/"
            >
              <img
                className="project-board"
                alt="Minor Project 6 weather Dashboard"
                src={`${process.env.PUBLIC_URL}/assets/img/project-boards/weather-tile.png`}
              />
            </a>
        </div>
        <div className='spots'></div>
        <div className='project-about'><button data-projectcode='06' className='btn-text text-centre' onClick={handleProjectDescription} >Project Description</button></div>
        <div className='project-github'>
        <a 
          id='github-profile' 
          className='' 
          rel="noreferrer" 
          href='https://github.com/Samwakelam/06_WEATHER_DASH_SLW' 
          target='_blank' 
        >
        <img
          className='symbol-sml'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/github-clear.png`}
          alt='Git hub logo'
          // onClick={togglePopout}
        />
        </a>
        </div>
      </div>

      <div className='minor-project-containter'>
        <div className='project-tile'>
            <a 
              target="_blank" 
              rel="noreferrer" 
              href="https://samwakelam.github.io/04_WEB_API_CODING_QUIZ_SLW"
            >
              <img
                className="project-board"
                alt="Minor Project 4 Coding Quiz"
                src={`${process.env.PUBLIC_URL}/assets/img/project-boards/quiz-tile.png`}
              />
            </a>
        </div>
        <div className='spots'></div>
        <div className='project-about'><button data-projectcode='04' className='btn-text text-centre' onClick={handleProjectDescription}>Project Description</button></div>
        <div className='project-github'>
        <a 
          id='github-profile' 
          className='' 
          rel="noreferrer" 
          href='https://github.com/Samwakelam/04_WEB_API_CODING_QUIZ_SLW' 
          target='_blank' 
        >
        <img
          className='symbol-sml'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/github-clear.png`}
          alt='Git hub logo'
          // onClick={togglePopout}
        />
        </a>
        </div>
      </div>

      <div className='minor-project-containter'>
        <div className='project-tile'>
            <a 
              target="_blank" 
              rel="noreferrer" 
              href="https://samwakelam.github.io/03_JAVASCRIPT_PASSWORD_GENERATOR_SLW/checkbox.html"
            >
              <img
                className="project-board"
                alt="Minor Project 3 Password Generator"
                src={`${process.env.PUBLIC_URL}/assets/img/project-boards/pass-gen-tile.png`}
              />
            </a>
        </div>
        <div className='spots'></div>
        <div className='project-about'><button data-projectcode='03' className='btn-text text-centre' onClick={handleProjectDescription} >Project Description</button></div>
        <div className='project-github'>
        <a 
          id='github-profile' 
          className='' 
          rel="noreferrer" 
          href='https://github.com/Samwakelam/03_JAVASCRIPT_PASSWORD_GENERATOR_SLW' 
          target='_blank' 
        >
        <img
          className='symbol-sml'
          src={`${process.env.PUBLIC_URL}/assets/img/symbols/github-clear.png`}
          alt='Git hub logo'
          // onClick={togglePopout}
        />
        </a>
        </div>
      </div>

      <DescriptionBox selected={projectCode} location= {location} />

    </div>
  )
}

export default WebAside;