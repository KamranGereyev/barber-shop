import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Hours = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/form");
  }

  return (
    <div className="hours page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1>İŞ Saatlari</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="table">
          <div>
            <div>Bazar ertəsi</div>
            <div>8:30AM-6PM</div>
          </div>
          <div>
            <div>Çərşənbə axşamı</div>
            <div>8:30AM-6PM</div>
          </div>
          <div>
            <div>Çərşənbə</div>
            <div>8:30AM-8PM</div>
          </div>
          <div>
            <div>Cümə axşamı</div>
            <div>8:30AM-6PM</div>
          </div>
          <div>
            <div>Cümə</div>
            <div>8:30AM-6PM</div>
          </div>
          <div>
            <div>Şənbə</div>
            <div>8:00AM-5PM</div>
          </div>
          <div>
            <div>Bazar</div>
            <div>CLOSED</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
