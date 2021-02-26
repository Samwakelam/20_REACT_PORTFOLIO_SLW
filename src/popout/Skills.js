import './Skills.css';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolTip from '../components/ToolTip';

const Skills = ({closePopout}) => {
  return (
    <div id='skills-popout' className='popout' data-popout='skills'>
      <Header closePopout={closePopout}/>
        <div className='container'>
          <h2>Skills</h2>
          <div className='skills-container' >
            <h4>Coding Skills</h4>
            <div className='' >
              <ToolTip name={'photoshop'}/>
              <ToolTip name={'indesign'}/>
              <ToolTip name={'revit'}/>
              <ToolTip name={'autocad'}/>
              <ToolTip name={'word'}/>
              <ToolTip name={'powerpoint'}/>
              <ToolTip name={'excel'}/>
              <ToolTip name={'outlook'}/>
              <ToolTip name={'sketchup'}/>
              <ToolTip name={'dreamweaver'}/>
              <ToolTip name={'illustrator'}/>
              <ToolTip name={'vray'}/>
            </div>
          </div>
          <div className='skills-container' >
            <h4>Computer Skills</h4>
            <div className='' >
              <ToolTip name={'photoshop'}/>
              <ToolTip name={'indesign'}/>
              <ToolTip name={'revit'}/>
              <ToolTip name={'autocad'}/>
              <ToolTip name={'word'}/>
              <ToolTip name={'powerpoint'}/>
              <ToolTip name={'excel'}/>
              <ToolTip name={'outlook'}/>
              <ToolTip name={'sketchup'}/>
              <ToolTip name={'dreamweaver'}/>
              <ToolTip name={'illustrator'}/>
              <ToolTip name={'vray'}/>
            </div>
          </div>
          <div className='skills-container' >
            <h4>Design Skills</h4>
            <div className='' >
              <ToolTip name={'photoshop'}/>
              <ToolTip name={'indesign'}/>
              <ToolTip name={'revit'}/>
              <ToolTip name={'autocad'}/>
              <ToolTip name={'word'}/>
              <ToolTip name={'powerpoint'}/>
              <ToolTip name={'excel'}/>
              <ToolTip name={'outlook'}/>
              <ToolTip name={'sketchup'}/>
              <ToolTip name={'dreamweaver'}/>
              <ToolTip name={'illustrator'}/>
              <ToolTip name={'vray'}/>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Skills ;