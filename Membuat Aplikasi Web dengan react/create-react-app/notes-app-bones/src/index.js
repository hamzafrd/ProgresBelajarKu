import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/oNavbar";
import NoteContainer from "./components/oNoteApps";
// import style
import "./styles/style.css";

function DisplayApp() {
  return (
    <>
      <Navbar />
      <NoteContainer />
    </>
  );
}

const renderDisplay = <DisplayApp />;
const root = createRoot(document.getElementById("root"));
root.render(renderDisplay);
