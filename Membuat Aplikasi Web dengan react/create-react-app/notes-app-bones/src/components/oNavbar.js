import React from "react";
import NavbarSearch from "./oNavbarSearch";

function Navbar(props) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NavbarSearch />
    </div>
  );
}

export default Navbar;
