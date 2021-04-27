import spinner from '../../img/spinner.gif';

// CSS styling
const spinnerStyle = {
  width: '200px',
  margin: '0 auto',
  display: 'block',
};

const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="Loading..." style={spinnerStyle} />
    </>
  );
};

export default Spinner;
