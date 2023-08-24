// Write your code here
import {Component} from 'react'

import './index.css'

class Message extends Component {
  render() {
    const {text} = this.props
    return <h1 className="messageLoginHead">{text}</h1>
  }
}

export default Message
