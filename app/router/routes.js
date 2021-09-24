const { login } = require('../controllers');

const routes = [
  {
    method: 'post',
    path: '/loginIn',
    controller: login.loginIn
  }
];

module.exports = routes;

