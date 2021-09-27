const BaseControl = require('./BaseControl')

class Login extends BaseControl{
  constructor (){
    super()
  }
  loginIn = async (ctx) => {
    ctx.body = this.Sucess('登陆成功')
  }
}

module.exports  = new Login()