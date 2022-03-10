import shekil from '../wall-and-laptop-background.jpeg'
import Typed from 'react-typed';

const Header = () => {
  return (
	 <div className="header-wrapper">
	 	<div className="main-info">
		  <h1>Web development and website services</h1>

		  <Typed
		  className='typed-text'
                strings={[
                    'DIA student',
                    'Computer Science',
                    'Front-end Developer']}
                    typeSpeed={40}
                    backSpeed={50} 
                    loop >
                  
                </Typed>
 <a href={shekil} className="downloadcv" download>Download CV</a>
	 </div>
	 
</div>
  )
}

export default Header