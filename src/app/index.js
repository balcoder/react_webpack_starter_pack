// test branch checkout -b version
import React from "react";
import { render } from "react-dom";

const css = require('./css/styles.scss');



class App extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div className="container">
        <h1>React Webpack Starter Pack</h1>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
