import React, { Component } from "react";
import Layout_Banner from "./Layout_Banner";
import Layout_Item from "./Layout_Item";

export default class Layout_Body extends Component {
  render() {
    return (
      <div>
        <Layout_Banner />
        <Layout_Item />
      </div>
    );
  }
}
