const BaseControl = require('./BaseControl')

class Upload extends BaseControl{
  constructor (){
    super()
  }
  ordinary = async (ctx) => {
    ctx.body = this.Sucess('上传成功')
  }
}

module.exports  = new Upload()