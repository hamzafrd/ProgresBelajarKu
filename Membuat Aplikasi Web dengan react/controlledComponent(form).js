import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      gender: 'man'
    };
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onEmailChangeHandler2 = this.onEmailChangeHandler2.bind(this);
    this.onEmailChangeHandler3 = this.onEmailChangeHandler3.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value
      };
    });
  }
  onEmailChangeHandler2(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }

  onEmailChangeHandler3(event) {
    this.setState(() => {
      return {
        gender: event.target.value
      };
    });
  }

  onSubmitEventHandler(event) {
    // menghentikan aksi default dari tombol submit
    event.preventDefault();

    const message = `
      Name: ${this.state.name}
      Email: ${this.state.email}
      Gender: ${this.state.gender}
    `;

    alert(message);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitEventHandler}>
          <h1> Register Form </h1>
          <label for="name">Name : </label>
          <input id="name" type="text" value={this.state.name} onChange={this.onEmailChangeHandler} />
          <br />
          <label for="email">Email : </label>
          <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeHandler2} />
          <br />
          <label for="gender">gender : </label>
          <select id="gender" type="text" value={this.state.gender} onChange={this.onEmailChangeHandler3}>
            <option value="man">Laki - Laki</option>
            <option value="woman">Perempuan</option>
          </select>
          <br />
          <button type="submit" /*onClick={this.onSubmitEventHandler}*/> submit</button>
        </form>
      </div>
    );
  }
}

export default NameForm;
