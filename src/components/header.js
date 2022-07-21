import React from "react";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <Menu />
      </div>
      <div className="logo">
        <img className="img-fluid" src="../../images/logo.png" alt="logo" />
      </div>
      <div className="info">
        <div className="address">
          <a
            href="https://www.google.com/maps/place/M%C9%99zahir+Abdullayev,+Sumqay%C4%B1t+5011,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@40.5619002,49.693817,18z/data=!3m1!4b1!4m13!1m7!3m6!1s0x403096dcd0923f6b:0xdf4767c369322a71!2z0KHRg9C80LPQsNC40YIsINCQ0LfQtdGA0LHQsNC50LTQttCw0L0!3b1!8m2!3d40.5854765!4d49.6317411!3m4!1s0x40309121bd9b26ff:0x660d9c29edc526ef!8m2!3d40.5619044!4d49.6945039"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../icons/location.png" alt="" />
              Məzahir Abdullayev, Sumqayıt 5011, Azerbaycan
          </a>
        </div>
        <div className="phone">
          <a  rel="noopener noreferrer" >
            <img src="../../icons/phone.png" alt="" />
            070 283 41 44
          </a>
        </div>
      </div>
    </div>
  );
};
