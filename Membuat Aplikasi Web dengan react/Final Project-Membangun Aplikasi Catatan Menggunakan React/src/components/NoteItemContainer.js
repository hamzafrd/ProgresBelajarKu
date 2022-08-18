import React from "react";
import EraseButton from "./Erase";
import MoveButton from "./Move";

function NoteItemContainer({
  id,
  title,
  body,
  createdAt,
  archived,
  onMove,
  onDelete,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
      </div>

      <div className="note-item__action">
        <MoveButton
          id={id}
          onMove={onMove}
          archived={archived}
          props={{ title, body, createdAt }}
        />
        <EraseButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItemContainer;
