<?php  include_once('header.php'); ?>

<!-- Add your site or application content here -->
<div id="wrapper">
	<div id="head">
	    <div class="center">
	        <img src="img/header.jpg" alt="">
	    </div>
	</div>

	<div class="center">
	   <div id="main" class="copy contact cf">
	   		<div class="copy">
		   		<h1 class="heading">About</h1>
				<div id="contact-area">
					<form method="post" action="contactengine.php">
						<label for="Name">Name</label>
						<input type="text" name="Name" id="Name" />
			
						<label for="Email">Email</label>
						<input type="text" name="Email" id="Email" />
						
						<label for="Message">Message</label><br />
						
						<textarea name="Message" rows="5" cols="20" id="Message"></textarea>
						<!-- <label for="Message">Attach:</label><br />
						<input type="file" name="filename" id="file"> -->
						<div style="clear: both;"></div>
						<h4>Attach a photo of yourself</h4>
						<div class="cf">
							<input type="radio" name="pic" id="yes" value="yes" checked="checked"/><label class="photo"  for="yes"> Yup, I'm hot</label>
						</div>
						<p class="upload cf">
						    <input class="uploadField" type="text" id="path" />
							<label class="add-photo-btn cta">browse<span><input type="file" class="uploadField" id="myfile" name="myfile" /></span>
						</label>
						</p>
						
						<div class="cf">
							<input type="radio" name="pic" id="no" value="no" /><label class="photo"  for="no"> No, thanks. My personality is golden enough</label>	
						</div>
						
						
						<input type="submit" name="submit" value="I want it!" class="cta" />
					</form>
					
					
				</div>
	    	</div>
	    </div>
	</div>
</div>	

<?php  include_once('footer.php'); ?>
<script>
	$('#myfile').change(function(){
		$('#path').val($(this).val());
		var filePath = $('#path').val().replace("C:\\fakepath\\", "");
		$('#path').val(filePath);
	});

	$('input:radio[name="pic"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() != 'yes' ) {
            $('.uploadField').prop('disabled', true);
            $('.add-photo-btn').toggleClass('disable');
        }else{
        	$('.uploadField').prop('disabled', false);
        	$('.add-photo-btn').toggleClass('disable');
        }
    });
</script>