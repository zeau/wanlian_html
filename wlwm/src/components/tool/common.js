
var Tool = {};
Tool.install = function (Vue,options){
      // 4. 添加实例方法
      Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
   
    }
}


module.exports = Tool;