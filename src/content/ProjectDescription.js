const ProjectDescription = ({ projectCode }) => {

  switch ( projectCode ) {
    default:
      return (
        <div>
          <h4 className="">Minor Project 19: Employee Directory - React</h4>
            <p>
              A model view controlled web page created from the back end using handlebars to inject the html page. 
              This burger logger is created with MySQL, Node, Express, Handlebars and a homemade ORM. 
              It follows the MVC design pattern; uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML. 
            </p>
        </div>
      );
    case '13':
      return (
        <div>
          <h4 className="">Minor Project 13: Burger Bar</h4>
            <p>
              A model view controlled web page created from the back end using handlebars to inject the html page. 
              This burger logger is created with MySQL, Node, Express, Handlebars and a homemade ORM. 
              It follows the MVC design pattern; uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML. 
            </p>
        </div>
      );
    case '08':
      return (
        <div>
          <h4 className="">Minor Project 8: Portfolio V1</h4>
            <p> 
              Add Content 
            </p>
        </div>
      );
    case '06':
      return (
        <div>
          <h4 className="">Minor Project 6: Weather Dashboard</h4>
            <p>
              The requirements for the weather dashboard were that it not only remembered your last search 
              and replayed this for you on your return, but it also recorded your search history.
              It displays the weather today and for the next 5 days in relation to a user location search. 
            </p>
        </div>
      );
    case '04':
      return (
        <div>
          <h4 className="">Minor Project 4: Coding Quiz</h4>
            <p>
              Create a quiz with options for the user to choose from that records the score and counts down a timer. 
              I took the scoring functionality a little further than the required wrong answer removes time, 
              and integrated the remaining time into the final score. Check out how well you can score. 
            </p>
        </div>
      );
    case '03':
      return (
        <div>
          <h4 className="">Minor Project 3: Password Generator</h4>
          <p>
            Tasked to respond to a user input the password generated must have the option for up to 4 character types at a
            user specified length between 8 and 128. 
            I have created two versions demonstrating prompts and alerts and secondly, checkbox UI. 
          </p>
        </div>
      );
    
  }
}

export default ProjectDescription;