import React from "react";
import App from "../client/components/app/app"
import { renderToString } from 'react-dom/server';
import { getColumns, getData } from "../client/utils/table-data";

export const renderer=()=>{
  const columns = getColumns();

	const data = getData();

  
    const content=renderToString(<App columns={columns} data={data} />);
    return(
        `<html>
          <head>
            <title>M React App</title>
          </head>
          <body>
            <div id="root">${content}</div>
          </body>
          <script >
          window.columns=${JSON.stringify(columns)};
          window.data=${JSON.stringify(data)};
          </script>
          <script defer src=" ./bundle.js"></script>
        </html>`
    )
}