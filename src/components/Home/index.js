// Write your code here

import {Component} from 'react'

import './index.css'

import Message from '../Message/index'

import Login from '../Login/index'

import Logout from '../Logout/index'

class Home extends Component {
  render() {
    return (
      <div className="bg">
        <div className="bgCard">
          <Message />
          <Login />
        </div>
      </div>
    )
  }
}

export default Home
