const { login,upload } = require('../controllers');

const routes = [
  {
    method: 'post',
    path: '/loginIn',
    controller: login.loginIn
  },
  {
    method: 'post',
    path: '/OrdinaryUpload',
    controller: upload.ordinary
  }
];

module.exports = routes;

