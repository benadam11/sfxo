import { h } from 'preact';

const Message = ({ num, scrollPosition, ...props }) => {
  const styles = {
    opacity: `${scrollPosition >= 54 ? 1 : 0}`,
    transform: `translate(-50%, -${scrollPosition}px)`,
    transition: 'all .3s ease-in-out',
    width: '90%',
    maxWidth: '900px'
  };

  return (
    <div className="message" style={styles}>
      <h1 className="heading">
        Get yours while you can!
      </h1>
      <h3 className="sub-heading">
        Thanks to your support we have {num} hats left.
      </h3>
      <a
        className="button"
        href="https://sfxo.co/shop/ggb-cap"
        children="shop now"
      />
    </div>
  );
};

export default Message;
