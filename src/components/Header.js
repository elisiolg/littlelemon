import Navigation from './Navigation.js';
import logo from '../assets/images/logo.svg';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate()
  const goToHome = () => navigate('/');
    return (
        <header className="App-Header">
            <div className="logo-img">
                <img src={logo} aria-label="logo" onClick={goToHome} className="logo" alt="logo" />
            </div>
            <Navigation isMobile="1" />
            <Navigation />
      </header>
    )
  };
export default Header;
