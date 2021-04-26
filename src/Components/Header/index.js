import React from "react";
import background from "../../assets/img/zoom-image-head-bg.jpg";
import houseImg from "../../assets/img/zoom-image-head-bg2.png";
import "./style.css";

function Header() {
  return (
    <>
      <header>
        <div className="headerBar">
          <div>NAME</div>
          <div className="row">
            <nav className="navBar">
              <ul class="main-nav js--main-nav">
                <li>
                  <a href="#features">Food Delivery</a>
                </li>
                <li>
                  <a href="#how-it-works">How it works</a>
                </li>
                <li>
                  <a href="#cities">Our Cities</a>
                </li>
                <li>
                  <a href="#sign-up">Sign Up</a>
                </li>
              </ul>
              {/* <a class="mobile-nav-icon js--nav-icon">
                <i class="ion-navicon-round"></i>
              </a> */}
            </nav>
          </div>
          <div>BURGER</div>
        </div>
      </header>

      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="zoom-image-head__bg-inner"
      ></div>
      <img src={houseImg} alt="" class="zoom-image-head__bg2" />
    </>
  );
}

export default Header;