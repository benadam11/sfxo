import { h } from 'preact';
import logo from '../logo.png';

const styles = {
  container: {
    position: 'fixed',
    zIndex: '2',
    width: '100%',
    maxWidth: '1200px'
  },
  logo: {
    width: '60px',
    height: 'auto'
  },
  nav: {
    padding: '25px 60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

const NavBar = props => (
  <div style={styles.container} {...props}>
    <nav style={styles.nav}>
      <a href="#">
        <img src={logo} alt="logo" style={styles.logo} />
      </a>
      <a href="#" children="GGB CAP" />
    </nav>
  </div>
);

export default NavBar;
