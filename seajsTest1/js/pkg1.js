define(function(require, exports, module)  {
	 // 通过 exports 对外提供接口
  exports.func1 = function(){
  	console.log("pkg1 func1")
  }
  exports.func2 = function(){
  	console.log("pkg1 func2")
  }

  // 或者通过 module.exports 提供整个接口
//module.exports = ...
  

});// 被require 时调用 define（fun） 定义的函数fun
