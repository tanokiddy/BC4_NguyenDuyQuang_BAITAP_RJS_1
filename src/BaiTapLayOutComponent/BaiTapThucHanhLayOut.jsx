import React, { Component } from "react";
import Layout_Header from "./Layout_Header";
import Layout_Body from "./Layout_Body";
import Layout_Footer from "./Layout_Footer";

export default class BaiTapThucHanhLayOut extends Component {
  render() {
    return (
      <div>
        <Layout_Header />
        <Layout_Body />
        <Layout_Footer />
      </div>
    );
  }
}
