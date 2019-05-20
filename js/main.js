$(window).load(function() {
	$('#resume').fadeOut('fast');
	$('#about').fadeOut('fast');
	$('#contact').fadeOut('fast');
  $('#preloader').fadeOut('slow');
});

let current = 'hero';
let long = false;

function fadeToHome(){
	if (long == false) {
		$(`#${current}`).fadeOut('fast');
		current = 'hero';
		$(`#${current}`).fadeIn('slow');
	} else {
		document.getElementById('top').scrollIntoView({behavior: "smooth"});
	}
}

function fadeToAbout(){
	if(long == false){
		$(`#${current}`).fadeOut('fast');
		current = 'about';
		$(`#${current}`).fadeIn('slow');
	} else {
		document.getElementById('about').scrollIntoView({behavior: "smooth"});
	}
}

function fadeToResume(){
	if(long == false){
		$(`#${current}`).fadeOut('fast');
		current = 'resume';
		$(`#${current}`).fadeIn('slow');
	} else {
		document.getElementById('resume').scrollIntoView({behavior: "smooth"});
	}
}

function fadeToContact(){
	if (long == false) {
		$(`#${current}`).fadeOut('fast');
		current = 'contact';
		$(`#${current}`).fadeIn('slow');
	} else {
		document.getElementById('contact').scrollIntoView({behavior: "smooth"});
	}
}

function changeStyle(){
	if(long == false) {
		$(`#${current}`).fadeOut('fast');
		$('#change-style span').text('Switch Pages');
		$('#hero').fadeIn('fast');
		$('#resume').fadeIn('fast');
		$('#about').fadeIn('fast');
		$('#contact').fadeIn('fast');
	} else {
		$('#change-style span').text('Switch Long');
		$('#resume').fadeOut('fast');
		$('#about').fadeOut('fast');
		$('#contact').fadeOut('fast');
	}
	long = !long;
	$("i", "#change-style").toggleClass("fa-bars fa-file");
}
