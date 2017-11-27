// Navigation ACTIVE class
$(document).ready(function(){
	$('.navbar-nav li a[href="' + document.location.pathname + '"]').parent('li').addClass('active');
});

// We put modals out of wrapper to working properly
$(document).ready(function(){
	$('.modal').appendTo("body");
});

// Tooltips and Popovers
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
  $('[rel="tooltip"]').tooltip();
})

