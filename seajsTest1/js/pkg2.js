define(function(require, exports, module)  {
	 // 通过 exports 对外提供接口
  var me={}	 
	 
  me.func1 = function(){
  	console.log("pkg2 func1")
  }
  me.func2 = function(){
  	console.log("pkg2 func2")
  }



  // 或者通过 module.exports 提供整个接口
  console.log(module)
  module.exports = me;//一次性导出一个对象中断所有函数
  

});
