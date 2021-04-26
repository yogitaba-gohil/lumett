import React from "react";
import background from "../../assets/img/zoom-image-head-bg.jpg";
import houseImg from "../../assets/img/zoom-image-head-bg2.png";
import "./style.scss";
import {Container, Row, Col} from 'react-bootstrap'
import {FaBars} from "react-icons/fa";
import {GiBallPyramid} from 'react-icons/gi'

function Header() {
  return (
    <>
      <header>
      <Container>
  <Row>
    <Col><div className="headerBar">
          <div className='headerContainer'>

          <div >  <a href="/" className='logoContainer' >LUMETT</a></div>
          <div className="row">
            <nav className="navBar">
              <ul class="main-nav">
                <li>
                  <a href="#features">HOME</a>
                </li>
                <li>
                  <a href="#how-it-works">PRODUCTS</a>
                </li>
                <li>
                  <a href="#cities">ABOUT </a>
                </li>
                <li>
                  <a href="#sign-up">FIND </a>
                </li>
              </ul>
              {/* <a class="mobile-nav-icon js--nav-icon">
                <i class="ion-navicon-round"></i>
              </a> */}
            </nav>
          </div>
          <div ><FaBars style={{fontSize:"23px"}} /></div>
          </div>

        </div></Col>
  </Row>
  <Row>
  <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="zoom-image-head__bg-inner"
      ></div>
      <img src={houseImg} alt="" class="zoom-image-head__bg2" />
      <div className='header__titleContainer'>
        <div className='header__subTitle'>
          Hello From Finland
        </div>
        <div className="header__title">
          Sense Save 
          <br />
          Sustain
        </div>
        <div className='header__text'> 
        Design to attract, convert and <br />
        delight your customers
        </div>
        <div className='downArrow'>
          <GiBallPyramid />
        </div>
      </div>
      

  </Row>
  <Row>
    <Col>

    </Col>
  </Row>
</Container>
        
      </header>

     
    </>
  );
}

export default Header;