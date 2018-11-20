import config from './config.json';
//var config = require('./config.json');

export default function () {
  // module.exports = function () {
  var hello = document.createElement('div');
  hello.textContent = config.helloText;
  return hello;
};