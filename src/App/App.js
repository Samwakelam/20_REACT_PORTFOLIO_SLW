import { useState } from 'react';
import './App.css';

import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";

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

  const [openPopout, setOpenPopout] = useState([]);

  
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
    // console.log('is in open popout =', openPopout.includes(popout));
    let isInOpenPopout = openPopout.includes(popout);
    if (!isInOpenPopout) {return setOpenPopout((array) => [...array, popout]);}
  }
  // console.log('openPopout =', openPopout);

  return (
    <div id="App">
      <main>
        <HashRouter basname='/'>
          <nav>
            <Header />
            <AboutPanel  onTogglePopout={handleTogglePopout} />
            <WebDesignPanel />
            <DesignPanel  />
            <Footer />
          </nav>
          <section>
            <Header />
            <Route 
              exact path="/web-design" 
              render={ (props) => <WebPage {...props}  />} 
            />
            <Route 
              exact path="/design-history" 
              render={ (props) => <DesignPage {...props}  />} 
            />
            <Route 
              exact path="/" 
              render={ (props) => <AboutPage {...props}  /> } 
            />
            <Footer />
          </section>
          <aside>
            <Header />
            <Route 
              exact path="/web-design" 
              render={(props) => 
                <WebAside {...props}  
                onTogglePopout={handleTogglePopout} 
                openPopout= {openPopout}
                closePopout = {handleClosePopout}
              />}
            />
            <Footer />
          </aside>
        </HashRouter>
      </main>
      { openPopout.includes('skills') && (<Skills closePopout = {handleClosePopout}/>) }
      { openPopout.includes('education') && (<Education closePopout = {handleClosePopout} />) }
      
    </div>
  );
}

export default App;
