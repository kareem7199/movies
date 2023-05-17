import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-pink">
      <nav className="flex justify-center items-center h-20 w-[90vw] m-auto font-Josefin">
        <Link to="/"><h3 className="text-white text-5xl font-bold">Mov<span className="text-fushia ">ie</span>s</h3></Link>
      </nav>
    </div>
  );
}
