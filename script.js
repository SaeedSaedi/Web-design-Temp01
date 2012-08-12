// Script document !
$(function() {

//Set left
var sld = $('div.train > div');

(function(){
	for(i = 0; i<3 ;i ++){
		sld.eq(i).css({left:i*320+'px'});
	};
})()

//Hide|show black window on mouse over
var opa = $('div.slide div.opa')
sld.mouseover(function(){
	clearop($(this).index());
});
sld.mouseout(function(){
	showop($(this).index());
});
clearop = function(n){
	opa.eq(n).animate({minHeight:'0'},200);
		
};
showop = function(n){
	opa.eq(n).animate({minHeight:'inherit'},200);
};

// Set click function
var lock = false;
sld.click(function(){
	if(lock != false){
		opn($(this).index());
	}
	else{
		lck($(this).index());
	}
	
});
lck = function(n){
	opa.eq(n).css({display:'none'});
	lock = true;
};
opn = function(n){
	opa.eq(n).css({display:'block'});
	lock = false;
};

});