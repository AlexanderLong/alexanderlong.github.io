
//java script file that controls index.html



var main = function() {

	/* Push the body and the nav over by 150px over */
	$('.menu-icon').click(function() {
		$('.menu').animate({ left: "0px"}, 200);
		$('body').animate({ left: "150px"}, 200);

	});

	/* Then push them back */
	$('.menu').click(function() {
		$('.menu').animate({ left: "-150px"}, 200);
		$('body').animate({ left: "0px"}, 200);
	});

};




//once webpage is loaded run main function. 
$(document).ready(main);