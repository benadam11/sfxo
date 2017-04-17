import { h, Component } from 'preact';
// import { throttle } from 'lodash';
import NavBar from './components/NavBar';
import Message from './components/Message';
import Parallax from './components/Parallax';
import Loader from './components/Loader';
import './App.css';

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
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  updateScroll() {
    const { multiplier } = this.state;
    const distance = this.numberBetween(window.scrollY / multiplier).toFixed();
    this.setState({ scrollDistance: this.numberBetween(distance) });
  }

  handleResize() {
    this.setState({
      isMobile: window.matchMedia('(max-width: 760px)').matches
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
