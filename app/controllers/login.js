const BaseControl = require('./BaseControl')

class Login extends BaseControl{
  constructor (){
    super()
  }
  loginIn = async (ctx) => {
    console.log(this.Sucess)
    ctx.body = this.Sucess('登陆成功')
  }
}

module.exports  = new Login()