import './Header.css'
import profileImg from '../../images/profilePicture.png'

const Header = () => {
    return (
      <div className='header'>
      <h1 className='name'>Tautvydas Bliūdžius</h1>
      <h2 className='subtext'>Frontend developer</h2>
      <div className='profileImg-container'>
        <img className='profileImg' src={profileImg} alt='ProfileImage' />
      </div>
      </div>
    );
  };
  
  export default Header;