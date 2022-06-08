import React from 'react'
import '../Style/header.css'
import '../Style/main.css'
import apis from './apis/apis'
class Header extends React.Component {
  sendChange = () => {
    this.props.getChange(true)
  }
  signout1 = () => {
    apis.logoutApi()
    localStorage.removeItem('user')
    this.props.getEmail(false)
  }
  render() {
    return (
      <div className="header">
        header
        <div className="logo">
          <h1>Management</h1>
          <span>chuwa</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <a href="#"></a>
        </div>
        <div className="price">
          <span></span>
          <a href="#">$0.00</a>
        </div>
        <div className="signin">
          <span></span>
          {this.props.email ? (
            <a href="#" onClick={this.signout1}>
              {this.props.email}/Sign out
            </a>
          ) : (
            <a href="#" onClick={this.sendChange}>
              Sign In
            </a>
          )}
        </div>
      </div>
    )
  }
}
export default Header
