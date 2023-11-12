import PropTypes from "prop-types";

export const Button = (props) => {
  return <button onClick={props.handleButtonClick}>{props.sign}</button>;
};

Button.propTypes = {
  sign: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func,
};

Button.defaultProps = {
  handleButtonClick: () => console.log(123),
};

// компонента Student
// 3 props:
// name - string, обов'язкове
// group - string, необов'язкове, по дефолту = AFE-30
// greet - функція, необов'язкова
