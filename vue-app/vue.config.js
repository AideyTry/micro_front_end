/*
 * @Author: Aiden
 * @Date: 2021-04-21 17:28:34
 * @LastEditTime: 2021-04-21 19:10:12
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const { name } = require('./package');
module.exports = {
    devServer: {
        port: '8800',
        open: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
      output: {
        library: `${name}-[name]`,
        libraryTarget: 'umd', // 把微应用打包成 umd 库格式
        jsonpFunction: `webpackJsonp_${name}`,
      },
    }
}