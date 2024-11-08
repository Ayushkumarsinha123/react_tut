import PropTypes from 'prop-types';

function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcomeMessage">Welcome {props.username}</h2>

    const isLoggedIn =  <h2 className="login-propt">please log in to continue</h2>

 return((props.isLoggedIn) ? welcomeMessage
  : isLoggedIn
)
}

UserGreeting.PropTypes = {
  isLoggedIn : PropTypes.bool,
  username : PropTypes.string
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username :"Guest",
}

export default UserGreeting