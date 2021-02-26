import { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

// pages
import AboutPage from '../pages/AboutPage';
import WebPage from '../pages/WebPage';
import DesignPage from '../pages/DesignPage';

// aside pages
import WebAside from '../sidePages/WebAside';

// nav panels
import AboutPanel from '../navPanels/AboutPanel';
import WebDesignPanel from '../navPanels/WebDesignPanel';
import DesignPanel from '../navPanels/DesignPanel';

// popout
import Skills from '../popout/Skills';
import Education from '../popout/Education';


function App() {

  const [openPage , setOpenPage] = useState('aboutPage');
  const [openPopout, setOpenPopout] = useState([]);

  const handleTogglePage = (page) => {
    return setOpenPage(page);
  }
  
  const handleClosePopout = (popout) => {
    // console.log('handleClosePopout =', popout);
    const index = openPopout.indexOf(popout);

    setOpenPopout((openPopout) => {
       const newArray = [...openPopout];
       newArray.splice(index, 1);
       return newArray;
    })
  }

  const handleTogglePopout = (popout) => {
    // console.log('handleTogglePopout =', popout);
    return setOpenPopout((array) => [...array, popout]);
  }


  return (
    <div id="App">
      <main>
        <Router>
          <nav>
            <Header />
            <AboutPanel page={openPage} onTogglePage={handleTogglePage} onTogglePopout={handleTogglePopout} />
            <WebDesignPanel page={openPage} onTogglePage={handleTogglePage} />
            <DesignPanel page={openPage} onTogglePage={handleTogglePage} />
            <Footer />
          </nav>
          <section>
            <Header />
            <Route exact path="/web-design" component={WebPage} />
            <Route exact path="/design" component={DesignPage} />

            <Route exact path="/about/education" component={AboutPage} />
            <Route exact path="/about/skills" component = {AboutPage} />
            <Route exact path="/" component={AboutPage} />
            <Footer />
          </section>
          <aside>
            <Header />
            <Route exact path="/web-design" component={WebAside} />
            <Footer />
          </aside>
        </Router>
      </main>
      { openPopout.includes('skills') && (<Skills closePopout = {handleClosePopout}/>) }
      { openPopout.includes('education') && (<Education closePopout = {handleClosePopout} />) }
      
    </div>
  );
}

export default App;
