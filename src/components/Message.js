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
        Thank you for your support thus far! We have {num} hats left.
      </h1>
      <a className="button" href="https://sfxo.co/shop/ggb-cap" children="shop now" />
    </div>
  );
};

export default Message;
