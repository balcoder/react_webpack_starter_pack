import React from "react";
import { render } from "react-dom";

import App  from "./components/App";

const css = require('./css/styles.scss');


render(<App/>, window.document.getElementById('app'));
