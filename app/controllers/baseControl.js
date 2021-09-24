class BaseControl {
  constructor(){
    this.Sucess = (data = '',msg = 'sucess',code = 1) => {
      return {
        data,
        msg,
        code
      }
    }
    this.Error = (msg = '系统错误',errorCode = 1,code = -1) => {
      return {
        errorCode,
        msg,
        code
      }
    }
  }

}

module.exports = BaseControl