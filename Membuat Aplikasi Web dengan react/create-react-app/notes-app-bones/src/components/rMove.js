import React from "react";

function MoveButton(props) {
  const isArchived = true;
  if (isArchived) {
    return <button className="note-item__archive-button">Pindahkan</button>;
  } else {
    return <button className="note-item__archive-button">Arsipkan</button>;
  }
}

export default MoveButton;
