import { h } from 'preact';
import logo from '../logo.png';

const NavBar = props => (
  <div className='nav-container' {...props}>
    <nav className='nav'>
      <a href="https://sfxo.co/">
        <img className='logo' src={logo} alt="logo" />
      </a>
      <a href="https://sfxo.co/ggb-cap/" children="GGB CAP" />
    </nav>
  </div>
);

export default NavBar;
