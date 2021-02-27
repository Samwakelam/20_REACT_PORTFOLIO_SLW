import { useContext, useEffect } from 'react';
import SiteContext from "../SiteContext";
// styles
import './WebPage.css';

const WebPage = ({location}) => {
  const { handleSiteLocation } = useContext(SiteContext);

  // console.log(location);
  useEffect(() => {
    const handleLocation = () => {
      handleSiteLocation(location.pathname);
    }
    handleLocation();

  }, []);

  return (
    <article id='web-design-page' className='container'>
      <h1>Web Design</h1>
      <p>
        Choose from any of the large picture tile links to take you through to the corresponding project in a separate tab.
        Alternatively, to access the README file and discover the project progress and motivations,
        click on the corresponding Github button link.
      </p>

      <div className='major-project-container'>
        <div className='project-tile'>
          <a target="_blank" rel="noreferrer" href="https://my-wardrobe-slw.herokuapp.com/">
            <img
              className="project-board"
              alt="Major Project 2 my wardrobe"
              src={`${process.env.PUBLIC_URL}/assets/img/project-boards/my-wardrobe-tile.png`}
            />
          </a>
        </div>

        <div className='project-content'>
          <h3>
            Major Project 2: My Wardrobe
          </h3>
          <p>
            Project 2 was our second group project after 16 weeks of study.
            We were tasked with creating an application that utilised database
            storage that routed to the client side via handlebars.
            We were asked to use a technology that we had not been taught in class,
            for this we used Cloudinary to store the images.
          </p>
          <p>
            For the group work we split the work into four clear starting roles.
            Front design, front functionality, back routing, and database.
            Once the initial database was created and front layout and design was in place,
            we quickly changed to seeing a function of the application through from front to back,
            making the project more task related.
          </p>
          <p>
            I had been developing the idea of a wardrobe organisational app over the 2nd phase of the course
            as we learnt new back end skills the idea became more realistic.
            The team liked the idea and together we created a good simple application for the time available.
          </p>
          <p>
            My personal contributions were creating the junction table functionality with a many-to many relationships between
            outfits and clothing items in the back end so I could connect the Saved outfits, Create outfit and planner on the
            client side with the relevant data. A teammate and I designed the look and feel of the interface,
            I took direction on the colour palette and layout while contributing the graphics and JavaScript capabilities,
            putting together alot of the HTML and CSS.
          </p>
          <p>
            Use Sam to login and see drawings of my wardrobe.
          </p>

        </div>
        <div className='project-repo'>
          <button type="button" className='btn-text'>
            <a target="_blank" rel="noreferrer" href="https://github.com/Samwakelam/myWardrobe">Github
            Repository
            </a>
          </button>
        </div>
      </div>

      <div className='major-project-container'>
        <div className='project-tile'>
          <a target="_blank" rel="noreferrer" href="https://samwakelam.github.io/SPACE-DASH/">
            <img
              className="project-board"
              alt="Major Project 1 space dash"
              src={`${process.env.PUBLIC_URL}/assets/img/project-boards/space-dash-tile.png`}
            />
          </a>
        </div>

        <div className='project-content'>
          <h3>
            Major Project 1: Space Dash
          </h3>
          <p>Project 1 was our first group project after 8 weeks of study.
          We were tasked with creating an application that utilised storage and 2 external api.
          </p>
          <p>For the groupwork we discussed the functionality and the target audience for the app, deciding on
          features and a common design. Sectioning out the main tasks we each developed a sub-page with reference to a
          central design and theme. We came back together to collaborate with changes,
          issues and improvements across all pages and develop the first main page of the project.
          </p>
          <p>My personal contributions were the asteroids page, we nicknamed “Mission Control”,
          and the ranking system for the children to level up with their time spent on the application.
          For this I used both local and session storage. In total we had 5 api.
          </p>

        </div>
        <div className='project-repo'>
          <button type="button" className='btn-text'>
            <a target="_blank" rel="noreferrer" href="https://github.com/Samwakelam/SPACE-DASH">Github
            Repository
            </a>
          </button>
        </div>
      </div>

    </article>
  )
}

export default WebPage; 