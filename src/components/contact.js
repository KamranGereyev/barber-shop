import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Contact = () => {
  return (
    <div className="contact page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1>Bizi ziyarət edin</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="content">
          <img
            className="img-fluid"
            src="../../images/Layer37.jpg"
            alt=""
          ></img>
          <div className="centerBox">
            <img
              className="img-fluid check"
              src="../../images/Layer38.png"
              alt=""
            ></img>
            <div>
              <form
                action= "https://www.google.com/maps/place/M%C9%99zahir+Abdullayev,+Sumqay%C4%B1t+5011,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@40.5619002,49.693817,18z/data=!3m1!4b1!4m13!1m7!3m6!1s0x403096dcd0923f6b:0xdf4767c369322a71!2z0KHRg9C80LPQsNC40YIsINCQ0LfQtdGA0LHQsNC50LTQttCw0L0!3b1!8m2!3d40.5854765!4d49.6317411!3m4!1s0x40309121bd9b26ff:0x660d9c29edc526ef!8m2!3d40.5619044!4d49.6945039"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn" type="submit" value="Google direction">İstiqamət əldə edin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
