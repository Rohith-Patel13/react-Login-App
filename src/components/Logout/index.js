// Write your code here
import {Component} from 'react'

import './index.css'

class Logout extends Component {
  render() {
    const {onToggleLogin} = this.props
    return (
      <button type="button" className="btnLogout" onClick={onToggleLogin}>
        Logout
      </button>
    )
  }
}

export default Logout
