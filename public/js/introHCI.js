// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();

 	$(function(){
 		$("div.box").bind("taphold",tapholdHandler);
 		function tapholdHandler(event){
 			$(event.target).addClass("taphold");
 		}
 	});
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	 $(function(){

 		$(".judge-img").bind("taphold",tapholdHandler);


 		function tapholdHandler(event){
 			var t = event.target.id;
 			console.log("got prefix: "+ t);
 			$("#" + t + "-bio").show();
 		}
 	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e){
  		e.preventDefault();
  		console.log("sub");
  		var rE = $('#rsvpEmail').val();
  		$.post('addRSVP',{rsvpEmail: rE}, postCallback);
  });

  function postCallback(){
  	alert("RSVP form submitted");
  	$('#rsvpForm').val('');
  }
}