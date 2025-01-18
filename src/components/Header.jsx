import React from "react";
import { PcDisplay } from "react-bootstrap-icons";

export default function Header() {
  return (
    <div className="header">
      <span className="header-circle">
        <PcDisplay />
      </span>
      <h1>Devices</h1>
    </div>
  );
}
