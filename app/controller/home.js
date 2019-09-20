'use strict';
const Controller = require('egg').Controller;
const index_server = require('../../server/index_server.js');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log("ctx:", ctx.request.url);
    let context = {css: []}
    let html = await index_server(ctx.request.url, context);
    ctx.body = html;
  }
}

module.exports = HomeController;
