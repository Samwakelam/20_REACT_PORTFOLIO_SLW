const UniDescription = ({ name }) => {

  switch (name) {
    default:
      return (<>
        <p>
          I am currently undertaking a fully-stacked web design
          course at Birmingham University to be able to evolve
          my graphics skills with the changing market. I spent a
          number of months on furlough and whilst job hunting
          discovered that a lot of the design jobs were
          beginning to include web based design in their
          requirements.
        </p>
        <p>
          I have previously experimented with creating my own
          portfolio through Adobe Dreamweaver and have an
          interest in problem solving and web based design.
        </p>
        <p>
          I am particularly enjoying CSS and Javascript. CSS
          allows me to experiment with my creative side and
          Javascript brings back the maths I loved in my
          A-levels.
        </p>
      </>);
    case 'wolves':
      return (<>
        <p>
          I completed a Building information Management
          postgraduate certificate with a solid 89% pass rate
          across all modules.
        </p>
        <p>
          Whilst working in Interior Design I wanted to further
          my technical understanding of the industry and
          undertook a postgraduate certificate in Building
          Information Management. This teams perfectly with my
          organisational skills and enjoyment of using CAD and
          3D based design software.
        </p>
        <p>
          This allowed me an insight into the Autodesk software
          that my industry required and allowed me to experience
          Industry standards and technologies to build into my
          repertoire for property.
        </p>
      </>);
    case 'notts':
      return (<>
        <p>I have a 1st Class Hons in Fashion Design.</p>
        <p>
          My key skill was technical pattern cutting and
          computer CAD work for specifications, using highly
          creative problem-solving solutions. I love the
          challenge of this and have the visual capacity to
          create a 2D pattern for a 3D object, engaging the
          mathematical skills I enjoyed in my A-levels.
        </p>
      </>);
    case 'stour':
      return (<>
        <p>Foundation year at art collage</p>
        <p>Distinction for the full course.</p>
        <p>Including a certificate in drawing</p>
        <p>
          The collage are acredited by the UAL (university of
          the arts London)
        </p>
      </>);
    case 'worce':
      return (<>
        <p>Maths - A</p>
        <p>Further Maths - B</p>
        <p>Physics - B</p>
        <p>Art Textiles - A</p>
        <p>
          I acheived my full Maths A-level in the first year of
          collage and then continued in my second year to
          acheive the full further maths A-level.
        </p>
        <p>
          I chose not to drop any subjects in my final year and
          have 4 strong A-level results.
        </p>
      </>);
  }
}

export default UniDescription;