import React from 'react'
import { createBrowserRouter } from 'react-router-dom' 

const Footer = () => {
  return (
    <div className="masterFooter">
      <div style={{display: 'flex'}}>
        <div className="mehranInfo">
        <img className="logPic" height={"100px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RBQ4lulW70MUFnw8HscwHFCItX-mDO4Gxw&s" alt="a picture of MUET's logo." />
        <div className='uniName'>
        <h2 className='pTag'>MEHRAN UNIVERSIT</h2>
        <p style={{fontSize: "small"}} className='h2Tag'>OF ENGINEERING AND TECHNOLOGY JAMSHORO PAKISTAN.</p></div>
      </div>
      <div className="navs">
        <a href="/exploreDepartments">Departments</a>
        <a href="/contacts">Contacts</a>
        <a href="">Students</a>
        <a href="">Outreach</a>
        <a href="">Undergraduate Programs</a>
        <a href="">Postgraduate Programs</a>
        <a href="">IT Training Programs</a>
        </div>
        <div className="navs">
        <a href="">Research</a>
        <a href="">Interdisceplinary</a>
        <a href="">Research Jearnals</a>
        <a href="">International Conferences</a>
        <a href="">Research Centers</a>

        <a href="">Harrasment Complaints</a>
        <a href="">MUET Khairpur Mir's</a>
      </div>
      </div>
      <div className="footer">
        <footer>
          <p>&Copy Right {new Date().getFullYear()} | All Rights Deserved | Made with <i className="fa-solid fa-heart-pulse bg-body-red"></i> | <a href="https://www.facebook.com/share/16VjmEnnQd/"><i className="fa-brands fa-facebook"></i></a>         | <a href="https://www.instagram.com/muet_official_confess?igsh=cmJ0bXFqYWw2ZW10"><i className="fa-brands fa-instagram"></i></a> </p>
        </footer></div>
        <div className="anchors">
      </div>
      <p className="" style={{color: "white", display: 'flex', justifyContent: 'center'}}>University Phone Numbers: +92 (22) 2772250-73</p>
    </div>
  )
}

export default Footer
