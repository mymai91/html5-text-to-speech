$(document).ready(function(){
	// update rate value
	$(document).on('input', '#rate', function() {
	  $('#rate_value').html( $(this).val() );
	});

	// voice selections
	var voicelist = responsiveVoice.getVoices();
	var i = 0;

	do {
	  $('#voice').append('<option>' + voicelist[i].name + '</option>')
	  i++;
	} while (i < voicelist.length);

	// play voice
	$('#text_form').submit(function(e){
	  e.preventDefault();

	  text = $('#text').val();
	  voice = $('#voice').val();
	  rate = $('#rate').val();

	  responsiveVoice.speak(text, voice, {rate: rate});
	});
});