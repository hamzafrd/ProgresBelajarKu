import React from "react";
import { createRoot } from "react-dom/client";

class MyComponent extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

const root2 = createRoot(document.getElementById("root"));
root2.render(
  <div>
    <MyComponent name="Dicoding" />
    <MyComponent name="John" />
    <MyComponent name="Doe" />
  </div>
);

// jika di breakdown :
import React from "react";
import { createRoot } from "react-dom/client";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Component created!");
  }

  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<MyComponent name="Dicoding" />);

//////state
import React from "react";
import { createRoot } from "react-dom/client";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi data dalam state
    // parameter berupa objek
    this.state = {
      count: 0,
    };

    //Mengubah data dalam state
    //parameter berupa fungsi
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  // dalam component class pastikan ada rendering
  render() {
    return (
      <div>
        {/* menampilkan data count */}
        <p>{this.state.count}</p>
      </div>
    );
  }
}

const root3 = createRoot(document.getElementById("root"));
root3.render(<Counter />);
