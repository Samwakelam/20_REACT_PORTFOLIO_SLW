const DesignSkillsContent = ({ name }) => {

  switch (name) {
    default:
      return (<>
      <h6 className='text-centre'>Photography</h6>
      <p className='text-centre' >
        I enjoy doing DSLR photography. I have benifited from this when 
        traveling and siteseeing, having taken a proffesional lead day 
        course in Vancover to improve my understanding. 
        I have won 1st and 3rd place prizes in local club competitions.
      </p>
      </>);
    case 'drawing':
      return (<>
        <h6 className='text-centre'>Drawing</h6>
        <p className='text-centre' >
          I have a distinction on a Drawing certificate from the UAL 
          (University of the Arts London). 
        </p>
        </>);
    case 'illustration':
      return (<>
        <h6 className='text-centre'>Illustration</h6>
        <p className='text-centre' >
          I enjoy drawing characters and scenes from my favourite tv serise and books.
          I have illustrated a board game that I am creating for my own enjoyment.
        </p>
        </>);
    case 'styling':
      return (<>
        <h6 className='text-centre'>Interior Styling</h6>
        <p className='text-centre' >
        I have developed this skill through my career but improved my 
        understanding through extra reading and practise at home.       
        </p>
        </>);
    case 'spaceplanning':
      return (<>
        <h6 className='text-centre'>Space Planning</h6>
        <p className='text-centre' >
          I am good at creating floor plans and visualising the best use of space 
          in a room with both new and currently available furniture.
        </p>
        </>);
    case 'dressmaking':
      return (<>
        <h6 className='text-centre'>Sewing and Dressmaking</h6>
        <p className='text-centre' >
          I have good knowlegde from my degree to make my own clothes and utilise my sewing skills for other projects. 
          For my first job in Interiors - showhomes: I made bespoke items for the styling and design team to enhance the projects.
        </p>
        </>);
    case 'patterncutting':
      return (<>
        <h6 className='text-centre'>Pattern Cutting</h6>
        <p className='text-centre' >
          This was my Key skill at university, I was able to visualise a 3D shape and
          draw intricate patterns and designs in 2D inorder to realise my designs.
        </p>
        </>);
    case 'patterngrading':
      return (<>
        <h6 className='text-centre'>Pattern Grading</h6>
        <p className='text-centre' >
          I spent some months working for a small design company creating 
          patterns and grading the sizes up and down for reproduction.
        </p>
        </>);
       
    
  }
}

export default DesignSkillsContent;