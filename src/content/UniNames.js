const UniName = ({ name }) => {

  switch (name) {
    default:
      return (<h4>Birmingham University</h4>);
    case 'wolves':
      return (<h4>Wolverhampton University</h4>);
    case 'notts':
      return (<h4>Nottingham Trent University</h4>);
    case 'stour':
      return (<h4>Stourbridge College</h4>);
    case 'worce':
      return (<h4>Worcester Sixth Form</h4>);
    
  }
}

export default UniName;