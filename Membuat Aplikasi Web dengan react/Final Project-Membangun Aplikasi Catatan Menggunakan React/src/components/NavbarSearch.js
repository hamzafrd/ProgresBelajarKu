import React from "react";

function NavbarSearch(props) {
  return (
    <div className="note-search">
      <input
        type="search"
        placeholder="Cari catatan ..."
        value={props.textLoad}
        onChange={props.onSearch}
      />
    </div>
  );
}

export default NavbarSearch;
