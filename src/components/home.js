import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "./menu";

export const Home = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/about");
  }

  return (
    <div className="homepage">
      <div className="homepage-menu">
        <Menu />
      </div>
      <div className="top">
        <div className="logo">
          <img src="../../images/logo.png" alt="logo" />
        </div>
        <div id="nameTag">
          <img
            className="img-fluid"
            src="http://test.acc4action.com/wp-content/uploads/2018/07/Not-your-Head.png"
            alt=""
          />
        </div>
        <button type="button" onClick={handleClick} className="btn">
          More About Us
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 left">
            <div className="sergey guy" id="sergey">
              <img
                className="img-fluid"
                id="front"
                src="../../images/serega.png"
                alt=""
              />
              <div className="side-image">
                <div className="side-serega">
                  <img
                    className="img-fluid"
                    src="../../images/seregaSide.png"
                    alt=""
                  />
                  <div className="side-name">
                    <span> Agazade </span>
                    <h1>Asif</h1>
                  </div>
                </div>
                <button type="button" onClick={handleClick} className="btn">
                  Ətraflı
                </button>
              </div>
            </div>
            <div className="fixed"></div>
            <div className="image">
              <img
                className="img-fluid"
                id="chair"
                src="../images/chair_red.png"
                alt=""
              />
            </div>
          </div>
          {/*<div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 middle">*/}
          {/*  <img className="logo" src="../../images/logo.png" alt="logo" />*/}
          {/*  <div id="nameTag">*/}
          {/*    <img*/}
          {/*      className="img-fluid"*/}
          {/*      src="http://test.acc4action.com/wp-content/uploads/2018/07/Not-your-Head.png"*/}
          {/*      alt=""*/}
          {/*    />*/}
          {/*    <div className="button">*/}
          {/*      <button type="button" onClick={handleClick} className="btn">*/}
          {/*        More About Us*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="bottom">*/}
          {/*    <div id="address">*/}
          {/*      <a*/}
          {/*        href="https://www.google.com/maps/place/M%C9%99zahir+Abdullayev,+Sumqay%C4%B1t+5011,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@40.5619002,49.693817,18z/data=!3m1!4b1!4m13!1m7!3m6!1s0x403096dcd0923f6b:0xdf4767c369322a71!2z0KHRg9C80LPQsNC40YIsINCQ0LfQtdGA0LHQsNC50LTQttCw0L0!3b1!8m2!3d40.5854765!4d49.6317411!3m4!1s0x40309121bd9b26ff:0x660d9c29edc526ef!8m2!3d40.5619044!4d49.6945039"*/}
          {/*        target="_blank"*/}
          {/*        rel="noopener noreferrer"*/}
          {/*        className="address"*/}
          {/*      >*/}
          {/*        <img src="../../icons/location.png" alt="" />*/}
          {/*        Məzahir Abdullayev, Sumqayıt 5011, Azerbaycan*/}
          {/*      </a>*/}
          {/*    </div>*/}
          {/*    /!*<div id="phone">*!/*/}
          {/*    /!*  <a*!/*/}
          {/*    /!*    href="http://test.acc4action.com/products/tel:847-777-0274"*!/*/}
          {/*    /!*    target="_blank"*!/*/}
          {/*    /!*    rel="noopener noreferrer"*!/*/}
          {/*    /!*    className="phone"*!/*/}
          {/*    /!*  >*!/*/}
          {/*    /!*    <img src="../../icons/phone.png" alt="" />*!/*/}
          {/*    /!*    847-777-0274*!/*/}
          {/*    /!*  </a>*!/*/}
          {/*    /!*</div>*!/*/}
          {/*    <div className="icons">*/}
          {/*      <a*/}
          {/*        target="_blank"*/}
          {/*        href="https://www.facebook.com/"*/}
          {/*        rel="noopener noreferrer"*/}
          {/*      >*/}
          {/*        <img src="../../icons/fb.png" alt="facebook" />*/}
          {/*      </a>*/}
          {/*      <a*/}
          {/*        target="_blank"*/}
          {/*        href="https://www.instagram.com/"*/}
          {/*        rel="noopener noreferrer"*/}
          {/*      >*/}
          {/*        <img src="../../icons/insta.png" alt="instagram" />*/}
          {/*      </a>*/}
          {/*      <a*/}
          {/*        target="_blank"*/}
          {/*        href="https://www.facebook.com/"*/}
          {/*        rel="noopener noreferrer"*/}
          {/*      >*/}
          {/*        <img src="../../icons/yt.png" alt="facebook" />*/}
          {/*      </a>*/}
          {/*      <a*/}
          {/*        target="_blank"*/}
          {/*        href="https://twitter.com/explore"*/}
          {/*        rel="noopener noreferrer"*/}
          {/*      >*/}
          {/*        <img src="../../icons/twitter.png" alt="twitter" />*/}
          {/*      </a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 right">
            <div className="nick guy" id="nick">
              <img
                className="img-fluid"
                id="front"
                src="../../images/nick.png"
                alt=""
              />
              <div className="side-image">
                <div className="side-nick">
                  <img
                    className="img-fluid"
                    src="../../images/nickSide.png"
                    alt=""
                  />
                  <div className="side-name">
                    <span> Şavaqatov</span>
                    <h1>Pərviz</h1>
                  </div>
                </div>
                <button type="button" onClick={handleClick} className="btn">
                  Ətraflı
                </button>
              </div>
            </div>
            <div className="fixed"></div>
            <div className="image">
              <img
                className="img-fluid"
                id="chair"
                src="../images/black_chair.png"
                alt="black_chair"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 left">
            <div className="sergey guy" id="sergey">
              <img
                  className="img-fluid"
                  id="front"
                  src="../../images/serega.png"
                  alt=""
              />
              <div className="side-image">
                <div className="side-serega">
                  <img
                      className="img-fluid"
                      src="../../images/seregaSide.png"
                      alt=""
                  />
                  <div className="side-name">
                    <span> Şavaqatov</span>
                    <h1>Ülvü</h1>
                  </div>
                </div>
                <button type="button" onClick={handleClick} className="btn">
                  Ətraflı
                </button>
              </div>
            </div>
            <div className="fixed"></div>
            <div className="image">
              <img
                  className="img-fluid"
                  id="chair"
                  src="../images/chair_red.png"
                  alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="bottom">
        <div id="address">
          <h5>Məzahir Abdullayev, Sumqayıt 5011, Azerbaycan</h5>
        </div>
        {/*<div id="phone">Phone: (847) 777-0274</div>*/}
        {/*<div className="icons">*/}
        {/*  <a*/}
        {/*    target="_blank"*/}
        {/*    href="https://www.facebook.com/"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <img src="../../icons/fb.png" alt="facebook" />*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    target="_blank"*/}
        {/*    href="https://www.instagram.com/"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <img src="../../icons/insta.png" alt="instagram" />*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    target="_blank"*/}
        {/*    href="https://www.facebook.com/"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <img src="../../icons/yt.png" alt="facebook" />*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    target="_blank"*/}
        {/*    href="https://twitter.com/explore"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <img src="../../icons/twitter.png" alt="twitter" />*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
