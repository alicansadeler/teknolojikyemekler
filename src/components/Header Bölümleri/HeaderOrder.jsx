import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../Assets/mile1-assets/logo.svg";

export default function HeaderOrder({ show, setShow }) {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/orderpage") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location.pathname, setShow]);

  return (
    <>
      <div className="headerorder-container">
        <img src={logo} alt="Banner" className="home-item1" />
        {show && (
          <div className="orderLink">
            <Link to="/" style={{ color: "white" }}>
              Anasayfa {">"}
            </Link>
            <Link to="/orderpage" style={{ color: "white" }}>
              {"> "}
              Sipariş Oluştur
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
