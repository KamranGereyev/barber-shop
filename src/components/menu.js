import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(0);

  function toggleNav(e) {
    e.preventDefault();
    setOpenMenu(!openMenu);
  }

  return (
    <div className="menu">
      <span id="open-menu" onClick={toggleNav}>
        &#9776;
      </span>
      <div className={openMenu ? "overlay toggled" : "overlay"}>
        <span className="closebtn" onClick={toggleNav}>
          &times;
        </span>
        <div className="overlay-content">
          <Link to={"/"} className={"links"}>
            ANA SƏHİFƏ
          </Link>
          <Link to={"/hours"} className={"links"}>
            İŞ SAATLARI
          </Link>
          <Link to={"/contact"} className={"links"}>
            BİZİ ZİYARƏT EDİN
          </Link>
          <Link to={"/services"} className={"links"}>
            XİDMƏTLƏR
          </Link>
          <Link to={"/products"} className={"links"}>
            MƏHSUL XƏTTİ
          </Link>
          {/*<Link to={"/form"} className={"links"}>*/}
          {/*  BİZƏ MESAJ ATIN*/}
          {/*</Link>*/}
          <Link to={"/gallery"} className={"links"}>
            QALEREYA
          </Link>
        </div>
      </div>
    </div>
  );
};
