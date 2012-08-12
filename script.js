// Script document !
$(function() {

//Set left
var sld = $('div.train > div');

(function(){
	for(i = 0; i<3 ;i ++){
		sld.eq(i).css({left:i*320+'px'});
	};
})()


});