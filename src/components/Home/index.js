// Write your code here

import {Component} from 'react'

import './index.css'

import Message from '../Message/index'

import Login from '../Login/index'

import Logout from '../Logout/index'

class Home extends Component {
  state = {isLogin: false}

  toggleLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg">
        <div className="bgCard">
          {isLogin ? (
            <Message text="Welcome User" />
          ) : (
            <Message text="Please Login" />
          )}

          {isLogin ? (
            <Logout onToggleLogin={this.toggleLogin} />
          ) : (
            <Login onToggleLogin={this.toggleLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
