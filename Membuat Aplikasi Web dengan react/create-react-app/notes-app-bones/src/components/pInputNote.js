import React from "react";

function InputNote(props) {
  return (
    <div className="note-input">
      <h2> Buat Catatan </h2>
      <form>
        <p class="note-input__title__char-limit">Sisa karakter: 50</p>
        <input
          class="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          required=""
          value=""
        />
        <textarea
          class="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required=""
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default InputNote;
