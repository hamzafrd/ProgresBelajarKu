import React from "react";
import NavbarSearch from "./NavbarSearch";

function Navbar(props) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NavbarSearch onSearch={props.onSearch} textLoad={props.textLoad} />
    </div>
  );
}
export default Navbar;
