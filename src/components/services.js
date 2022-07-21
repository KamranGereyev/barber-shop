import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Services = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/form");
  }

  return (
    <div className="services page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1>Neçəyədir</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 number">01.</div>
          <div className="col-lg-6 col-md-6 col-sm-10 haircut">
            <h2 className="nameOfServise">SAÇ KESİM</h2>
            <h6 className="includes">DAXİLDİR</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-lg-4 col-md-4 hidden-sm hidden-xs line"></div>
          <div className="col-lg-1 col-md-1 col-sm-1 number">20 ₼</div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 number">02.</div>
          <div className="col-lg-6 col-md-6 col-sm-10 haircut">
            <h2 className="nameOfServise">PAKET BORODOBREI</h2>
            <h6 className="includes">DAXİLDİR</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-lg-4 col-md-4 hidden-sm hidden-xs line"></div>
          <div className="col-lg-1 col-md-1 col-sm-1 number">20 ₼</div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 number">01.</div>
          <div className="col-lg-6 col-md-6 hidden-sm hidden-xs haircut">
            <h2 className="nameOfServise">PAKET YOX BORODA YALNIZ USI</h2>
            <h6 className="includes">DAXİLDİR</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-0 line"></div>
          <div className="col-lg-1 col-md-1 col-sm-1 number">45 ₼</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
