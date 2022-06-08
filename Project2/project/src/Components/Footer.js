import React from 'react'
import '../Style/footer.css'
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>@2022 All Rights Reserved.</p>
        <div className="contact"></div>
        <div className="info">
          <a href="#">Help</a>
          <a href="#">Privacy Policies</a>
          <a href="#"> Contact us</a>
        </div>
      </div>
    )
  }
}
export default Footer
