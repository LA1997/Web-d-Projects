$(document).ready(function(){
  $(".infot").css("display","none");
  $("#qual").click(function(){
	$(".infoq").css("display","block");   
	$(".infot").css("display","none"); 
	$("#qual").addClass("animated bounce");
    });
  
  $("#training").click(function(){
 	$(".infot").css("display","block");   
	$(".infoq").css("display","none");   
	$("#training").addClass("animated bounce");
    });
  
});
