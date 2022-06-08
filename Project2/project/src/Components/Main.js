import React from 'react'
import '../Style/main.css'
import apis from './apis/apis'
class Main extends React.Component {
  state = {
    emailaddr: '',
    pw: '',
    show: 'show',
    showText: 'Show',
    emailTip: '',
    pwTip: '',

    isSignUp: false,
  }
  getInfo = () => {
    let { emailaddr, pw } = this.state
    console.log({ emailaddr, pw })
    this.setState({
      emailaddr: '',
      pw: '',
    })
  }
  registerUser = () => {
    let { emailaddr, pw } = this.state
    let regInfo = { email: emailaddr, password: pw }
    apis.regApi(regInfo).then(
      (res) => {
        if (res.status == '200') {
          alert('register suscessfully')
        }
      },
      (res) => {
        alert('register failed', JSON.parse(res))
      }
    )
  }
  login = () => {
    let { emailaddr, pw } = this.state
    let regInfo = { email: emailaddr, password: pw }
    apis
      .loginApi(regInfo)
      .then((res) => {
        return res.json()
      })
      .then(
        (res) => {
          if (res) {
            console.log(res)
            localStorage.setItem('user', JSON.stringify(res))
            this.props.getChange(false)
            this.props.getEmail(true)
          }
        },
        (res) => {
          alert(JSON.parse(res))
        }
      )
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  showPw = () => {
    const { show } = this.state
    if (show === 'show') {
      this.setState({
        show: 'hidden',
        showText: 'Hide',
      })
    } else {
      this.setState({ show: 'show', showText: 'Show' })
    }
  }
  verifyEmail = () => {
    const { emailaddr } = this.state
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!reg.test(emailaddr)) {
      this.setState({
        emailTip: 'Please input right Email Address',
      })
    } else {
      this.setState({
        emailTip: '',
      })
    }
  }
  verifyPw = () => {
    const { pw } = this.state
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
    if (!reg.test(pw)) {
      this.setState({
        pwTip:
          'Contains at least 8-16 characters, at least one uppercase letter, one lowercase letter, and one digit',
      })
    } else {
      this.setState({
        pwTip: '',
      })
    }
  }
  closeLoginPage = () => {
    this.props.getChange(false)
    // this.setState({
    //   display: false,
    // })
  }
  goSignUp = () => {
    const { isSignUp } = this.state
    this.setState({
      isSignUp: !isSignUp,
      emailTip: '',
      pwTip: '',
    })
  }

  render() {
    console.log(this.props)
    const { isSignUp } = this.state
    return (
      <div>
        {isSignUp === true ? (
          <div className="mainbody">
            <div className={this.props.open ? 'login' : 'closeLogin'}>
              <span className="close_signin" onClick={this.closeLoginPage}>
                X
              </span>
              <h1>Sign Up Your Account</h1>
              <div className="forminput">
                <p>Email</p>
                <input
                  type="email"
                  name="emailaddr"
                  value={this.state.emailaddr}
                  onChange={this.handleChange}
                  onBlur={this.verifyEmail}
                />
                <span className="tip">{this.state.emailTip}</span>

                <p>Password</p>

                <div className="pw_input">
                  <input
                    type={this.state.show === 'show' ? 'password' : 'text'}
                    name="pw"
                    value={this.state.pw}
                    onChange={this.handleChange}
                    onBlur={this.verifyPw}
                  />
                  <span className="show_pw" onClick={this.showPw}>
                    {this.state.showText}
                  </span>
                  <span className="tip">{this.state.pwTip}</span>
                </div>

                <button className="submit" onClick={this.registerUser}>
                  Sign Up
                </button>
                <div className="more_info">
                  <span>Already have an account?</span>
                  <a href="#" onClick={this.goSignUp}>
                    Sign In
                  </a>
                  <a href="#">Forgot password? </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mainbody">
            <div className={this.props.open ? 'login' : 'closeLogin'}>
              <span className="close_signin" onClick={this.closeLoginPage}>
                X
              </span>
              <h1>Sign in to your account</h1>
              <div className="forminput">
                <p>Email</p>
                <input
                  type="email"
                  name="emailaddr"
                  value={this.state.emailaddr}
                  onChange={this.handleChange}
                  onBlur={this.verifyEmail}
                />
                <span className="tip">{this.state.emailTip}</span>

                <p>Password</p>

                <div className="pw_input">
                  <input
                    type={this.state.show === 'show' ? 'password' : 'text'}
                    name="pw"
                    value={this.state.pw}
                    onChange={this.handleChange}
                    onBlur={this.verifyPw}
                  />
                  <span className="show_pw" onClick={this.showPw}>
                    {this.state.showText}
                  </span>
                  <span className="tip">{this.state.pwTip}</span>
                </div>

                <button className="submit" onClick={this.login}>
                  Sign In
                </button>
                <div className="more_info">
                  <span>Don't have an account?</span>
                  <a href="#" onClick={this.goSignUp}>
                    Sign up
                  </a>
                  <a href="#">Forgot password? </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Main
