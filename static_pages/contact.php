<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Untitled</title>
        <link rel="stylesheet" href="css/contact.css">
        <link rel="author" href="humans.txt">
    </head>
    <body>
        
        <div id="contact-area">
			
			<form method="post" action="contactengine.php">
				<label for="Name">Name:</label>
				<input type="text" name="Name" id="Name" />
				
				<label for="City">City:</label>
				<input type="text" name="City" id="City" />
	
				<label for="Email">Email:</label>
				<input type="text" name="Email" id="Email" />
				
				<label for="Message">Message:</label><br />
				<textarea name="Message" rows="20" cols="20" id="Message"></textarea>
				<label for="Message">Attach:</label><br />
				<input type="file" name="filename" id="file">
				<input type="submit" name="submit" value="Submit" class="submit-button" />
			</form>
			
			<div style="clear: both;"></div>
		</div>

    </body>
</html>