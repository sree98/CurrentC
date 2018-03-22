//contactus.js
'use strict'
exports.render = function()				//Function to render the HTML for the homepage 
{
	//save the HTML in a long string
	var strholder = `					
<html>


<head>
<title> CurrentC Contact Us </title>

<script>

</script>

<style>

body {
	background-image: url(lightgold.jpg);
	}
	
p {
    font-size: 20px;
}	
	
	
</style>

</head>

<body>

<h1 align="left"><font color="green" size="8"><u><b><center>Contact Us</h1></font></u></b></center>

<hr>

<p align="left"><font size="5">
If you would like to leave us any questions, comments, and/or concerns then please contact us! By using the form below, it will send us immediately a ticket notifying us about
your input and we will reply as soon as possible!
</p></font>

<p><input type="text" id="myTextField" style="width:200px; height:20px;" value="First & Last Name..."></p>	<!-- Create the text field -->
<p><input type="text" id="myTextField" style="width:200px; height:20px;" value="Subject Line..."></p>	<!-- Create the text field -->
<p><input type="text" id="myTextField" style="width:375px; height:300px;" value="Information Here..."></p>	<!-- Create the text field -->

<p><button onclick="buttonRequest()"> Send Ticket </button> </p>	<!-- Make a button that onclick, activates the buttonRequest function -->
	
</body>

</html>

`
	return strholder;					//Output the string

}