import { NavLink, useLocation } from "react-router-dom";
import { NavItem } from "reactstrap";
import React, { useEffect } from "react";

import iconBir from "../../Assets/mile2-aseets/icons/1.svg";
import iconTwo from "../../Assets/mile2-aseets/icons/2.svg";
import iconTr from "../../Assets/mile2-aseets/icons/3.svg";
import iconFo from "../../Assets/mile2-aseets/icons/4.svg";
import iconFi from "../../Assets/mile2-aseets/icons/5.svg";
import iconSi from "../../Assets/mile2-aseets/icons/6.svg";

export function HomeLink() {
  return (
    <>
      <div className="nav-container">
        <NavItem className="nav-item0">
          <NavLink
            to="/"
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <div></div>
            <img src={iconBir} alt="Image Alt Text" className="nav-item1" />
            YENİ! Kore
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/orderpage"
            activeClassName="active"
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <img src={iconTwo} alt="Image Alt Text" className="nav-item1" />
            Pizza
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/"
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <img src={iconTr} alt="Image Alt Text" className="nav-item1" />
            Burger
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/"
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <img src={iconFo} alt="Image Alt Text" className="nav-item1" />
            Kızartmalar
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/"
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <img src={iconFi} alt="Image Alt Text" className="nav-item1" />
            Fast Food
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/"
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <img src={iconSi} alt="Image Alt Text" className="nav-item1" />
            Gazlı İçecek
          </NavLink>
        </NavItem>
      </div>
    </>
  );
}
