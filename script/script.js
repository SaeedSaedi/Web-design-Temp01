// Script document !
$(function() {

//Set left
var sld = $('div.train > div');

(function(){
	for(i = 0; i<3 ;i ++){
		sld.eq(i).css({left:i*320+'px'});
	};
	sld.css({backgroundImage:"url('images/final-image.jpg')",backgroundRepeat:'no-repeat'});
	sld.eq(0).css({backgroundPosition:'0 100%'});
	sld.eq(1).css({backgroundPosition:'50% 100%'});
	sld.eq(2).css({backgroundPosition:'100% 100%'});
;})()

//Hide|show black window on mouse over
var opa = $('div.slide div.opa')
sld.mouseover(function(){
	clearop($(this).index());
});
sld.mouseout(function(){
	showop($(this).index());
});
clearop = function(n){
	opa.eq(n).animate({minHeight:'0'},500);
		
};
showop = function(n){
	opa.eq(n).animate({minHeight:'inherit'},500);
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

//Set slideshow for each sld
sld1 = function(n){
	sld.eq(0).animate({top:n*-680+'px'});
};
sld2 = function(n){
	sld.eq(1).animate({top:n*-680+'px'});
};
sld3 = function(n){
	sld.eq(2).animate({top:n*-680+'px'});
};

});