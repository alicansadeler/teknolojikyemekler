import { Link } from "react-router-dom";
import { HomeLink } from "./HomeLink";
import React from "react";
import { HomePage } from "./HomePage";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-item0">
          <img
            src={"/home-banner.png"}
            alt="Home Banner"
            className="home-item1"
          />
          <div className="home-item2">
            <p className="home-text2">fırsatı kaçırma</p>
            <p className="home-text1">
              KOD ACIKTIRIR <br />
              PIZZA, DOYURUR
            </p>

            <Link to="/orderpage" className="home-button">
              ACIKTIM{" "}
            </Link>
          </div>
        </div>
      </div>
      <HomeLink />
      <HomePage />
    </>
  );
}
