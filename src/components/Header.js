import './components.css';

const Header = ({closePopout}) => {

  const onCloseClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('event.target.parentNode =', event.target.parentNode.parentNode.dataset.popout);
    const popout = event.target.parentNode.parentNode.dataset.popout
    return closePopout(popout); 
  }

  return (
    <header>
      <button onClick={onCloseClick}
        className='close-btn'
        src={`${process.env.PUBLIC_URL}/assets/img/construction/red-button.png`}
        alt='faux button red'
      ></button>
      <img
        className='faux-btn'
        src={`${process.env.PUBLIC_URL}/assets/img/construction/orange-button.png`}
        alt='faux button orange'
      />
      <img
        className='faux-btn'
        src={`${process.env.PUBLIC_URL}/assets/img/construction/green-button.png`}
        alt='faux button green'
      />
    </header>
  )
}

export default Header ;