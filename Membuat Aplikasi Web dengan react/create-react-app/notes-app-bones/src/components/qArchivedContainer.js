import React from "react";
import MoveButton from "./rMove";
import EraseButton from "./rErase";

function ArchivedContainer(props) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title"></h3>
        <p className="note-item__date"></p>
        <p className="note-item__body"></p>
      </div>
      <div className="note-item__action">
        <MoveButton />
        <EraseButton />
      </div>
    </div>
  );
}

export default ArchivedContainer;
