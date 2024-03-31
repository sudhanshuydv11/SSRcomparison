import React from "react";
import App from "../client/components/app/app"
import { renderToString } from 'react-dom/server';

export const renderer=()=>{
    const content=renderToString(<App/>);
    return(
        `<html>
          <head>
            <title>My React App</title>
          <script defer src="../dist/bundle.js"></script></head>
          <body>
            <div id="root">${content}</div>
          </body>
        </html>`
    )
}