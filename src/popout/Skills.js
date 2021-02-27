import './Skills.css';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolTip from '../components/ToolTip';

// content
import CompSkillsContent from '../content/CompSkillsContent';
import CodingSkillsContent from '../content/CodingSkillsContent';
import DesignSkillsContent from '../content/DesignSkillsContent';

const Skills = ({closePopout}) => {
  return (
    <div id='skills-popout' className='popout' data-popout='skills'>
      <Header closePopout={closePopout}/>
        <div className='container'>
          <h2>Skills</h2>
          <p> Hover over the symbols for more information.</p>
          <div className='skills-container' >
            <h4>Coding Skills</h4>
            <div className='' >
              <ToolTip name={'npm'}><CodingSkillsContent name={'npm'}/></ToolTip>
              <ToolTip name={'sequelize'}><CodingSkillsContent name={'sequelize'}/></ToolTip>
              <ToolTip name={'sql'}><CodingSkillsContent name={'sql'}/></ToolTip>
              <ToolTip name={'mongo'}><CodingSkillsContent name={'mongo'}/></ToolTip>
              <ToolTip name={'mongoose'}><CodingSkillsContent name={'mongoose'}/></ToolTip>
              <ToolTip name={'visualstudiocode'}><CodingSkillsContent name={'visualstudiocode'}/></ToolTip>
              <ToolTip name={'git'}><CodingSkillsContent name={'git'}/></ToolTip>
              <ToolTip name={'github'}><CodingSkillsContent name={'github'}/></ToolTip>
              <ToolTip name={'html'}><CodingSkillsContent name={'html'}/></ToolTip>
              <ToolTip name={'javascript'}><CodingSkillsContent name={'javascript'}/></ToolTip>
              <ToolTip name={'css'}><CodingSkillsContent name={'css'}/></ToolTip>
              <ToolTip name={'bootstrap'}><CodingSkillsContent name={'bootstrap'}/></ToolTip>
              <ToolTip name={'semantics'}><CodingSkillsContent name={'semantics'}/></ToolTip>
              <ToolTip name={'postman'}><CodingSkillsContent name={'postman'}/></ToolTip>
              <ToolTip name={'node'}><CodingSkillsContent name={'node'}/></ToolTip>
              <ToolTip name={'heroku'}><CodingSkillsContent name={'heroku'}/></ToolTip>

            </div>
          </div>
          <div className='skills-container' >
            <h4>Computer Skills</h4>
            <div className='' >
              <ToolTip name={'photoshop'}><CompSkillsContent name={'photoshop'}/></ToolTip>
              <ToolTip name={'indesign'}><CompSkillsContent name={'indesign'}/></ToolTip>
              <ToolTip name={'revit'}><CompSkillsContent name={'revit'}/></ToolTip>
              <ToolTip name={'autocad'}><CompSkillsContent name={'autocad'}/></ToolTip>
              <ToolTip name={'word'}><CompSkillsContent name={'word'}/></ToolTip>
              <ToolTip name={'powerpoint'}><CompSkillsContent name={'powerpoint'}/></ToolTip>
              <ToolTip name={'excel'}><CompSkillsContent name={'excel'}/></ToolTip>
              <ToolTip name={'outlook'}><CompSkillsContent name={'outlook'}/></ToolTip>
              <ToolTip name={'sketchup'}><CompSkillsContent name={'sketchup'}/></ToolTip>
              <ToolTip name={'dreamweaver'}><CompSkillsContent name={'dreamweaver'}/></ToolTip>
              <ToolTip name={'illustrator'}><CompSkillsContent name={'illustrator'}/></ToolTip>
              <ToolTip name={'vray'}><CompSkillsContent name={'vray'}/></ToolTip>
            </div>
          </div>
          <div className='skills-container' >
            <h4>Design Skills</h4>
            <div className='' >
            <ToolTip name={'photography'}><DesignSkillsContent name={'photography'}/></ToolTip>
            <ToolTip name={'paintbrush'}><DesignSkillsContent name={'illustration'}/></ToolTip>
            <ToolTip name={'pencil'}><DesignSkillsContent name={'drawing'}/></ToolTip>
            <ToolTip name={'styling'}><DesignSkillsContent name={'styling'}/></ToolTip>
            <ToolTip name={'scissors'}><DesignSkillsContent name={'dressmaking'}/></ToolTip>
            <ToolTip name={'patterncutting'}><DesignSkillsContent name={'patterncutting'}/></ToolTip>
            <ToolTip name={'spaceplanning'}><DesignSkillsContent name={'spaceplanning'}/></ToolTip>
            <ToolTip name={'patterngrading'}><DesignSkillsContent name={'patterngrading'}/></ToolTip>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Skills ;