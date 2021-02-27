const CodingSkillsContent = ({ name }) => {

  switch (name) {
    default:
      return (<>
      <h6 className='text-centre'>Npm Packages</h6>
      <p className='text-centre' >
        I use npm packages to help add functionality to my web pages and applications. 
        I can learn the documentation quickly to use effectivly.
      </p>
      </>);
    case 'heroku':
      return (<>
        <h6 className='text-centre'>Heroku Deployment</h6>
        <p className='text-centre' >
          For a number of projects I have used Heroku to deploy using JawsDB to host the data.
        </p>
        </>);
    case 'postman':
      return (<>
        <h6 className='text-centre'>Postman</h6>
        <p className='text-centre' >
          I have used Postman to help test my back-end routing and data retrieval.
        </p>
        </>);
    case 'sequelize':
      return (<>
        <h6 className='text-centre'>Sequelize</h6>
        <p className='text-centre' >
        I am able to create different join styles from SQL including many to many with junction tables
        to deliver the data from the database in the most useful way for my application.          
        </p>
        </>);
    case 'mongoose':
      return (<>
        <h6 className='text-centre'>Mongoose</h6>
        <p className='text-centre' >
          I am able to utilise the Object notation with propergate and agregate to display the 
          data base in the most useful way for my application. 
        </p>
        </>);
    case 'mongo':
      return (<>
        <h6 className='text-centre'>Mongo</h6>
        <p className='text-centre' >
          I am able to design a Mongo based database using objects to store data for my application.       
        </p>
        </>);
    case 'sql':
      return (<>
        <h6 className='text-centre'>MySQL</h6>
        <p className='text-centre' >
          I can use SQL based databases to store data for my application. 
        </p>
        </>);
    case 'html':
      return (<>
        <h6 className='text-centre'>HTML</h6>
        <p className='text-centre' >
          I can write code for front end HTML.
        </p>
        </>);
    case 'css':
      return (<>
        <h6 className='text-centre'>CSS</h6>
        <p className='text-centre' >
          I can style my pages with CSS to acheive the look and 
          feel that I want including UI effects to improve the experience for the user.
        </p>
        </>);
    case 'javascript':
      return (<>
        <h6 className='text-centre'>Javascript and jQuery</h6>
        <p className='text-centre' >
          I can utilise Javascript and jQuery to add dynamic functioanlity to my application.
        </p>
        </>);
    case 'visualstudiocode':
      return (<>
        <h6 className='text-centre'>Visual Studio Code</h6>
        <p className='text-centre' >
          I use Visual Studio Code to write my code for the applications.
        </p>
        </>);
    case 'git':
      return (<>
        <h6 className='text-centre'>Git</h6>
        <p className='text-centre' >
          I can use git to create branches and project history for better version 
          control and management of my project.
        </p>
        </>);
    case 'github':
      return (<>
        <h6 className='text-centre'>GitHub</h6>
        <p className='text-centre' >
          I have used Github to host the repositories for my applications. 
          There are README.md files for documentation using Markdown language.
          I use in conjunction with git to load my project information.
        </p>
        </>);
    case 'bootstrap':
      return (<>
        <h6 className='text-centre'>Bootstrap Framework</h6>
        <p className='text-centre' >
          I have used Bootstrap for multiple projects to help structure my HTML and responsive displays.
          I am able to futher customise the output for my own needs. 
        </p>
        </>);
    case 'semantics':
      return (<>
        <h6 className='text-centre'>Semantics UI</h6>
        <p className='text-centre' >
          I have used Semantics UI for projects to help structure my HTML and responsive displays.
          I am able to futher customise the output for my own needs. 
        </p>
        </>);
    case 'node':
      return (<>
        <h6 className='text-centre'>Node.js</h6>
        <p className='text-centre' >
          I use Node.js to run my back-end code enviroment. 
        </p>
        </>);
    
  }
}

export default CodingSkillsContent;