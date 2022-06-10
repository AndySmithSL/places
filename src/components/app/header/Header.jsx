import * as React from "react";
import Clock from "../utils/Clock";
import { getFullPathImage } from "../utils/ImageDetails";
import "./Header.scss";

export const Header = () => (
  <header className="Header">
    <div>
      <img
        src={getFullPathImage("around-the-globe")}
        className="logo"
        alt="logo"
      />
    </div>
    <div className="title">Travel</div>
    <div className="clock">
      <Clock />
    </div>
  </header>
);
