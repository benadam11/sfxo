import { h } from 'preact';

const Parallax = ({ isMobile, multiplier, scrollDistance }) => {
  const childStyles = isMobile
    ? {
        bottom: '-200px',
        transform: scrollDistance >= 54
          ? `translate(-50%, ${window.scrollY - multiplier * 52}px) scale(.5)`
          : 'translate(-50%, 0px) scale(.5)'
      }
    : {
        bottom: '-60px',
        transform: scrollDistance >= 54
          ? `translate( -50%, ${window.scrollY - multiplier * 52}px) scale(.85)`
          : 'translate(-50%, 0px) scale(.85)'
      };

  const styles = {
    container: {
      height: isMobile ? `${multiplier * 67}px` : `${multiplier * 74}px`
    },
    child: {
      position: 'fixed',
      left: '50%',
      backgroundRepeat: 'no-repeat',
      ...childStyles
    }
  };

  const iconStyle = scrollDistance >= 54 ? 54 : scrollDistance;

  return (
    <div style={styles.container}>
      <div className={`icon icon-${iconStyle}`} style={styles.child} />
    </div>
  );
};

export default Parallax;
