$(document).ready(function(){

	$("pre").addClass("prettyprint linenums");
	prettyPrint();
	
	$(".link-back2top").hide();

    $(window).scroll(function() {
        if ($(this).scrollTop()>100) {
            $(".link-back2top").fadeIn();
        } else {
            $(".link-back2top").fadeOut();
        }
    });

	$(".link-back2top a").click(function(){
		
		$("body,html").animate({
            scrollTop:0
        },800);
		
	});

});