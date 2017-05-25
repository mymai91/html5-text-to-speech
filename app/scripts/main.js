$(document).ready(function(){
	// update rate value
	$(document).on('input', '#rate', function() {
	  $('#rate_value').html( $(this).val() );
	});

	// voice selections
	var voicelist = ['UK English Female', 
									'UK English Male', 
									'Brazilian Portuguese Female', 
									'Chinese Female', 
									'Chinese (Hong Kong) Female',
									'Deutsch Female',
									'French Female',
									'Hindi Female',
									'Indonesian Female',
									'Italian Female',
									'Japanese Female',
									'Korean Female',
									'Polish Female',
									'Russian Female',
									'Spanish Female',
									'Spanish Latin American Female']
	var i = 0;

	do {
	  $('#voice').append('<option>' + voicelist[i] + '</option>')
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