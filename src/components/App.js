import { h, Component } from 'preact';
import NavBar from './NavBar';
import Message from './Message';
import Parallax from './Parallax';
import Loader from './Loader';
import '../assets/css/App.css';

class App extends Component {
  constructor() {
    super();
    this.updateScroll = this.updateScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = { scrollDistance: 0, multiplier: 60, isLoading: true };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScroll, false);
    window.addEventListener('resize', this.handleResize, false);
    this.handleResize();
    this.checkLastClear();
    if (!localStorage.cached) {
      localStorage.setItem('cached', true);
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 4000);
      return;
    }
    this.setState({ isLoading: false });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  checkLastClear() {
    let lastclear = localStorage.getItem('lastclear') || 0;
    let time_now = new Date().getTime();
    if (time_now - lastclear > 1000 * 60 * 60 * 24) { 
      localStorage.clear();
      localStorage.setItem('lastclear', time_now);
    }
  }

  updateScroll() {
    const { multiplier } = this.state;
    const distance = this.numberBetween(window.scrollY / multiplier).toFixed();
    this.setState({
      scrollDistance: this.numberBetween(distance)
    });
  }

  handleResize() {
    this.setState({
      isMobile: window.matchMedia('(max-width: 600px)').matches
    });
  }

  numberBetween(number) {
    return Math.min(Math.max(number, 0), 54);
  }

  render() {
    const { scrollDistance, multiplier, isMobile, isLoading } = this.state;

    return (
      <div>
        <NavBar />
        <Message num="50" scrollPosition={scrollDistance} />
        {isLoading
          ? <Loader />
          : <Parallax
              isMobile={isMobile}
              multiplier={multiplier}
              scrollDistance={scrollDistance}
            />}
      </div>
    );
  }
}

export default App;
