import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets as MUIServerStyleSheets } from '@material-ui/core/styles';
import { renderRoutes } from "react-router-config";
import Routes from "../client/components/Routes/routes";
import Header from "../client/components/presentational/Header/header";

const renderer = (req, store) => {
  const sheet = new ServerStyleSheet();
  const MUISheet = new MUIServerStyleSheets();

  // Styled component server style sheet collection
  const styledCollect = sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Header />
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  // Injecting Material UI styles to server
  const MUISheetCollect = MUISheet.collect(styledCollect);
  
  // Render the content on server
  const content = renderToString(MUISheetCollect);

  const MUISTYLES = MUISheet.toString();

  // Styled component styles
  const styles = sheet.getStyleTags();

  return `<html>
            <head>
                <title>React Server Side Application</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <style>
                body {
                  font-family: 'Roboto', sans-serif;
                  margin: 0;
                }
                </style>
                <style id="jss-server-side">${MUISTYLES}</style>
                ${styles}
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                  window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
            </html>`;
};

export default renderer;
