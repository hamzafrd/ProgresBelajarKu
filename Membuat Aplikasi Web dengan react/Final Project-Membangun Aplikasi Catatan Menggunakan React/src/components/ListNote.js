import React from "react";
import NoteItemContainer from "./NoteItemContainer";

function ListNote({ notes, onDelete, onMove, filter }) {
  if (notes.length > 0) {
    return (
      <div className="notes-list">
        {notes.map((notes) => (
          <NoteItemContainer
            key={notes.id}
            id={notes.id}
            onDelete={onDelete}
            onMove={onMove}
            {...notes}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="notes-list">
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      </div>
    );
  }
}

export default ListNote;
