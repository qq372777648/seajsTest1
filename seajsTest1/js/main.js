define(function(require) {
	console.log("入口main")
//var Spinning = require('./spinning');
	var $=require('jquery');  // 引入包 （路径或别名）
	
	var p1=require('pkg1'); 
	console.log(p1)
	p1.func1();
	p1.func2();
	
	
	var p2=require.async("pkg2",function(me_p2){//callback
		me_p2.func1();
	}) 
	p2.func2();//error ,because it's async loading
	
	

  

});

