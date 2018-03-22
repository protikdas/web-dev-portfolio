import React, { Component } from "react";

const PageView = ({ component: Component, ...rest }) => (
  <div className="view-positioner">
    <div className="view-container">
      <h1>View</h1>
      <Component {...rest} />
    </div>
  </div>
);

export default PageView;
