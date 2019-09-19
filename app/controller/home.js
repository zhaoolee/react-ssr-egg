'use strict';
const Controller = require('egg').Controller;

const index_server = require('../../server/index_server.js')

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log("ctx:", ctx.request.url);
    let html = await index_server(ctx.request.url, {})
    ctx.body = html;
  }
}

module.exports = HomeController;
