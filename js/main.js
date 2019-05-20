$(window).load(function() {
	$('#resume').fadeOut('fast');
	$('#about').fadeOut('fast');
	$('#contact').fadeOut('fast');
  $('#preloader').fadeOut('slow');
});

let current = 'hero';

function fadeToHome(){
	$(`#${current}`).fadeOut('fast');
	current = 'hero';
	$(`#${current}`).fadeIn('slow');
}

function fadeToAbout(){
	$(`#${current}`).fadeOut('fast');
	current = 'about';
	$(`#${current}`).fadeIn('slow');
}

function fadeToResume(){
	$(`#${current}`).fadeOut('fast');
	current = 'resume';
	$(`#${current}`).fadeIn('slow');
}

function fadeToContact(){
	$(`#${current}`).fadeOut('fast');
	current = 'contact';
	$(`#${current}`).fadeIn('slow');
}
