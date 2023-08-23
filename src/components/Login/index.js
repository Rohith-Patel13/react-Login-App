// Write your code here
import {Component} from 'react'

import './index.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: props.isLogin}
  }

  btnLoginClicked = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    console.log(isLoggedIn)
    return (
      <button type="button" className="btnLogin" onClick={this.btnLoginClicked}>
        Login
      </button>
    )
  }
}

Login.defaultProps = {
  isLogin: false,
}

export default Login
