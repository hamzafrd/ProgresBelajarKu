import autoBind from "auto-bind";
import React from "react";
import InputNote from "./InputNote";
import ListNote from "./ListNote";
import Navbar from "./Navbar";

import { getInitialData, showFormattedDate } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      noteDate: showFormattedDate(+new Date()),
      queryFilter: "",
    };

    this.props = props;
    autoBind(this);
  }

  onDeleteHandler(test) {
    const notesDelete = this.state.notes.filter((notes) => notes.id !== test);
    this.setState({ notes: notesDelete });
  }

  onMoveHandler(props) {
    this.onDeleteHandler(props.id);
    this.setState((prevstate) => {
      return {
        notes: [
          ...prevstate.notes,
          {
            id: +new Date(),
            title: props.props.title,
            body: props.props.body,
            createdAt: props.props.createdAt,
            archived: props.archived,
          },
        ],
      };
    });
  }

  onAddHandler({ title, body }) {
    this.setState((prevstate) => {
      return {
        notes: [
          ...prevstate.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: prevstate.noteDate,
            archived: false,
          },
        ],
      };
    });
  }

  onSearchNotesTextHandler(inputValue) {
    this.setState(() => {
      return {
        queryFilter: inputValue.target.value,
      };
    });
  }

  render() {
    const activeNotes = this.state.notes
      .filter((note) => {
        const isArchived = note.archived === false;
        return isArchived;
      })
      .filter((note) => {
        return note.title
          .toLowerCase()
          .includes(this.state.queryFilter.toLowerCase());
      });

    const archivedNotes = this.state.notes
      .filter((note) => {
        return note.archived === true;
      })
      .filter((note) => {
        return note.title
          .toLowerCase()
          .includes(this.state.queryFilter.toLowerCase());
      });
    return (
      <>
        <Navbar
          onSearch={this.onSearchNotesTextHandler}
          textLoad={this.state.queryFilter}
        />
        <div className="note-app__body">
          <InputNote addNote={this.onAddHandler} />
          <h2> Active Notes </h2>
          <ListNote
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onMove={this.onMoveHandler}
          />

          <h2>Archive Notes</h2>
          <ListNote
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onMove={this.onMoveHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
