import React from "react";
import InputNote from "./pInputNote";
import ListActiveNote from "./pListActiveNote";
import ListArhivedNote from "./pListArhivedNote";

function NoteContainer(props) {
  return (
    <div className="note-app__body">
      <InputNote />
      <h2> Active Notes </h2>
      <ListActiveNote />
      <h2>Archive Notes</h2>
      <ListArhivedNote />
    </div>
  );
}

export default NoteContainer;
