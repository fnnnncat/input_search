function DropDown(el){
	this.item=el;
	this.init();
}
DropDown.prototype ={
	init : function(){
		var obj =this;
		obj.item.on('click',function(event){
			$(this).toggleClass('active');
			event.stopPropagation();
		});
	}
}
$(function(){
	var item =new DropDown( $('#searchDropdown'));
	$(document).click(function(){
		$('.searchDropdown').removeClass('active');
			});
});