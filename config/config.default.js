/* eslint valid-jsdoc: "off" */
const path = require('path');
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

const app_root = path.resolve(__dirname);

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568854905992_1837';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.static={
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    
  }


  return {
    ...config,
    ...userConfig,
  };
};
