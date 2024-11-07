/// propTypes = a mechanism that ensures that the passed value
/// .... is of the correct datatype.
////.....age: PropTypes.number
import PropTypes from 'prop-types'
function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.Name}</p>
      <p>Age :{props.age}</p>
      <p>Student :{props.isStudent ? "yes" : "NO"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age : PropTypes.number,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
  name: "guest",
  age:0,
  isStudent:false,

}

export default Student;
