//homepage.js
'use strict'
exports.render = function()				//Function to render the HTML for the homepage 
{
	//save the HTML in a long string
	var strholder = `					
<body>
<h2> <u> <center>  How to use website (Currently on Homepage) </center> </u> </h2>
		<ul>
			<li> Click on the "Menu" button on the top left corner to access the menu </li>
			<li> This will drop down three options to go to different areas of the webpage </li>
			<li> Simply follow instructions on those pages </li>
		</ul> 
		</body>`
	return strholder;					//Output the string

}