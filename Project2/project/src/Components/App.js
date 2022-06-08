import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
class App extends React.Component {
  state = {
    openMain: true,
    email: undefined,
  }
  getChange = (msg) => {
    console.log(msg)
    this.setState({
      openMain: msg,
    })
  }
  getEmail = (isLogin) => {
    this.setState({
      email: JSON.parse(localStorage.getItem('user'))
        ? JSON.parse(localStorage.getItem('user')).email
        : null,
    })
  }
  render() {
    return (
      <div>
        <Header
          getChange={this.getChange}
          email={this.state.email}
          getEmail={this.getEmail}
        ></Header>
        <Main
          open={this.state.openMain}
          getChange={this.getChange}
          getEmail={this.getEmail}
        ></Main>
        <Footer></Footer>
      </div>
    )
  }
}
export default App
