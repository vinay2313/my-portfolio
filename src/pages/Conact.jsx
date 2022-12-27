import React from 'react'

function Conact() {
  return (
    <>
  {/*===== FOOTER + CONTACT=====*/}
  <footer className="footer section" id="contact">
    <h2 className="section-title">Get in touch</h2>
    <p className="footer-title">Vinay Thakur</p>
    <div className="footer-social">
      <a
        href="https://www.linkedin.com/in/vinay-thakur-90194b246/"
        target="_blank"
        className="footer-icon"
      >
        <i className="bx bxl-linkedin">
          <br />
          <p className="fffff">LinkedIn</p>
        </i>
      </a>
      <a
        href="https://github.com/vinay2313"
        target="_blank"
        className="footer-icon"
      >
        <i className="bx bxl-github">
          <br />
          <p className="fffff">Github</p>
        </i>
      </a>
     
      <a
        href="mailto:vinaythakur2313@gmail.com"
        target="_blank"
        className="footer-icon"
      >
        <i className="bx bx-mail-send">
          <br />
          <p className="fffff">E-mail</p>
        </i>
      </a>
      <a href="tel:+9144368959" target="_blank" className="footer-icon">
        <i className="bx bx-phone">
          <br />
          <p className="fffff">Phone</p>
        </i>
      </a>
    </div>
    <div id="last" className="footer-social">
      <div className="footer-social" id="lastdiv">
        <i className="bx bx-mail-send footer-icon" />
        <p className="fffff"> vinaythakur2313@gmail.com </p>
      </div>
      <div className="footer-social" id="lastdiv">
        <i className="bx bx-phone footer-icon" />
        <p className="fffff">9144368959</p>
      </div>
    </div>
    <p>© 2022 copyright all right reserved</p>
  </footer>
</>

  )
}

export default Conact