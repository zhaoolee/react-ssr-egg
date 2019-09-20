const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, Route, Switch } =  require('react-router-dom');
const routes  = require('../components/Routes.js')["default"];
const Provider = require('react-redux')["Provider"];
const getServerStore  = require('../store/index.js')["getServerStore"];
const store = getServerStore();


module.exports = async function(path, context){
  // 解析路由
  console.log("~~~~~~routes---->>>>>>>>", routes, content);
  var content = ReactDOMServer.renderToString(<Provider store={store}>
    <StaticRouter location={path} context={context}>
      <Switch>
      {routes.map((route, route_index)=>{
        return <Route  {...route}/>
      })}
    </Switch>
  </StaticRouter>
  </Provider>)
  // var header_html = ReactDOMServer.renderToStaticMarkup(<Header />);
  content = `<html>
    <head>
    </head>
    <style>
    ${context.css.join(" ")}
    </style>
  <body>
  <div id="root">${content}</div>
  <script>window.context={state:${JSON.stringify(store.getState())}}</script>
  <script src="/index_client.js"></script>
  </body>
  </html>`;
  console.log("content=================~~~>>", content);
  return content
};