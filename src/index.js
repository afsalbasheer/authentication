import React from "react";
import ReactDom from "react-dom/client";
import "./style.scss";

import Router from "./Router"

const root = ReactDom.createRoot(document.getElementById('root'));
 root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
 )