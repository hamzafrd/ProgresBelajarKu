import autoBind from "auto-bind";
import React from "react";

class InputNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.props = props;
    autoBind(this);
  }

  onTitleChangeEventHandle(event) {
    const limit = 50;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();
    (this.state.title.trim().length && this.state.body.trim().length) > 0
      ? this.props.addNote(this.state)
      : alert("Masukan Judul dan Catatan");
  }

  render() {
    return (
      <div className="note-input">
        <h2> Buat Catatan </h2>
        <form onSubmit={this.onSubmitChangeEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {50 - this.state.title.length}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandle}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default InputNote;
