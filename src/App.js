import { h, Component } from 'preact';
import { throttle } from 'lodash';
import NavBar from './components/NavBar';
import Message from './components/Message';
import Parallax from './components/Parallax';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.updateScroll = this.updateScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = { scrollDistance: 0, multiplier: 60 };
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.updateScroll, 1), false);
    window.addEventListener('resize', this.handleResize, false);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
    window.removeEventListener('resize');
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
        <Parallax
          isMobile={isMobile}
          multiplier={multiplier}
          scrollDistance={scrollDistance}
        />
      </div>
    );
  }
}

export default App;
