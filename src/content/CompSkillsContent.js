const CompSkillsContent = ({ name }) => {

  switch (name) {
    default:
      return (<>
      <h6 className='text-centre'>Adobe Photoshop</h6>
      <p className='text-centre' >
        I use photoshop daily creating renders for work.
        I also use Photoshop in my own time to improve my photographs 
        or for graphics projects of my own.
      </p>
      </>);
    case 'indesign':
      return (<>
        <h6 className='text-centre'>Adobe InDesign</h6>
        <p className='text-centre' >
          I use InDesign for all things graphical layout and planning.
        </p>
        </>);
    case 'illustrator':
      return (<>
        <h6 className='text-centre'>Adobe Illustrator</h6>
        <p className='text-centre' >
          I have used Illustrator for all of the graphics on this website.
        </p>
        </>);
    case 'dreamweaver':
      return (<>
        <h6 className='text-centre'>Adobe Dreamweaver</h6>
        <p className='text-centre' >
        I used Dreamweaver for my first online portfolio website.
        I am now studying Fullstacked coding as I descovered a real
        interest for the mathmatical side of creative problem solving.       
        </p>
        </>);
    case 'sketchup':
      return (<>
        <h6 className='text-centre'>SketchUp Pro</h6>
        <p className='text-centre' >
          I use sketchUp daily for work and love building in 3D.
        </p>
        </>);
    case 'vray':
      return (<>
        <h6 className='text-centre'>V-Ray</h6>
        <p className='text-centre' >
          I have a years experience rendering with V-ray; 
          I found my photography skills very benifical.       
        </p>
        </>);
    case 'revit':
      return (<>
        <h6 className='text-centre'>Autodesk Revit</h6>
        <p className='text-centre' >
          I used Revit daily in my last position.
        </p>
        </>);
    case 'autocad':
      return (<>
        <h6 className='text-centre'>Autodesk AutoCAD</h6>
        <p className='text-centre' >
          I used AutoCAD daily in my last position.
        </p>
        </>);
    case 'word':
      return (<>
        <h6 className='text-centre'>Microsoft Word</h6>
        <p className='text-centre' >
          I have used Microsoft since I was at school.
        </p>
        </>);
    case 'excel':
      return (<>
        <h6 className='text-centre'>Microsoft Excel</h6>
        <p className='text-centre' >
          I created a program to calculate the cost of cushions, 
          curtains and furniture for my collegues. It also worked out what 
          fabric needed ordering when multiple items utilised the same fabric. 
          My collegues could enter the supplier and cost of the fabric in a front 
          page interface leaving the code in tact.
        </p>
        </>);
    case 'powerpoint':
      return (<>
        <h6 className='text-centre'>Microsoft Powerpoint</h6>
        <p className='text-centre' >
          I have used Microsoft since I was at school.
        </p>
        </>);
    case 'outlook':
      return (<>
        <h6 className='text-centre'>Microsoft Outlook</h6>
        <p className='text-centre' >
          I use outlook daily for work.
        </p>
        </>);
    case 'windows':
      return (<>
        <h6 className='text-centre'>Windows PC</h6>
        <p className='text-centre' >
          I can use Windows operating system.
        </p>
        </>);
    case 'mac':
      return (<>
        <h6 className='text-centre'>Apple Mac</h6>
        <p className='text-centre' >
          I can use Apple mac operating system.
        </p>
        </>);
    
    
  }
}

export default CompSkillsContent;