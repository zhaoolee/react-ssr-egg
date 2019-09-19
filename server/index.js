const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } =  require('react-router-dom');
const Router = require('../components/Routes.js')["default"];

module.exports = async function(path, context){
  var content = ReactDOMServer.renderToString(<StaticRouter location={path} context={context}>
    {Router}
  </StaticRouter>)
  // var header_html = ReactDOMServer.renderToStaticMarkup(<Header />);
  content = `<html>
    <header></header>
    <body>
    <div id="root">${content}</div>
    <script src="/index_client.js"></script>
    </body>
    </html>`;
  console.log("content===>>", content);
  return content
};