import React from "react";

function MoveButton({ props, id, onMove, archived }) {
  if (archived) {
    archived = false;
    return (
      <button
        className="note-item__archive-button"
        onClick={() => {
          onMove({ id, props, archived });
        }}
      >
        Pindahkan
      </button>
    );
  } else {
    archived = true;
    return (
      <button
        className="note-item__archive-button"
        onClick={() => {
          onMove({ id, props, archived });
        }}
      >
        Arsipkan
      </button>
    );
  }
}

export default MoveButton;
