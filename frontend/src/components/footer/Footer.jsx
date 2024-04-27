import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ul className='upperHomeFooter' onClick={scrollToTop}>
        <p className='backToTopP'>Back to top</p>
      </ul>
      <div className='homeFooter'>
        <ul className='loginLinks'>
          <span className='loginGit'>
            <a href="https://github.com/Dominic5591" target="_blank" rel='noreferrer'>
              <img src={git} alt="GitHub" />
            </a>
          </span>
          <span className='loginLinkedin'>
            <a href="https://www.linkedin.com/in/dominic-c-1076322a8/" target="_blank" rel='noreferrer'>
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </span>
          <p className='loginLinkP'>2024 QuantumShop</p>
        </ul>
      </div>
    </>
  );
};

export default Footer;
