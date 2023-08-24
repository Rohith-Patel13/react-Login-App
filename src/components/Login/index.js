// Write your code here
import {Component} from 'react'

import './index.css'

class Login extends Component {
  render() {
    const {onToggleLogin} = this.props
    return (
      <button type="button" className="btnLogin" onClick={onToggleLogin}>
        Login
      </button>
    )
  }
}

export default Login
