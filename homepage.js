//homepage.js
'use strict'
exports.render = function()				//Function to render the HTML for the homepage 
{
	//save the HTML in a long string
	var strholder = `
	<html>
<title>CurrentC Homepage</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<style>
.mySlides {display:none}

body { background-image: url(cityBackground.jpg); }
</style>
<body class="text-center">
<!-- 
<div class="w3-container">
	<u><h1><center><font size="8" color="red">Welcome to CurrentC!</u></h1></center></font>	
</div>
<div class="w3-content" style="max-width:800px">
	<img class="mySlides" src="cryptoHomepage.jpg" style="width:100%">
	<img class="mySlides" src="coinigyGraph.jpg" style="width:100%">
	<img class="mySlides" src="blockchain.jpg" style="width:100%">
</div>

<div class="w3-center">
	<div class="w3-section">
		<button class="w3-button w3-light-grey" onclick="plusDivs(-1)">Previous</button>
		<button class="w3-button w3-light-grey" onclick="plusDivs(1)">Next</button>
	</div>
	<button class="w3-button demo" onclick="currentDiv(1)"><font color="red">1</button></font>
	<button class="w3-button demo" onclick="currentDiv(2)"><font color="red">2</button></font>
	<button class="w3-button demo" onclick="currentDiv(3)"><font color="red">3</button> </font>
</div>
<center><b><p><font color="red">Please use the menu buttons on the top of your screen to navigate through the website </p></center></b></font>
 -->
<div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
	<main role="main" class="inner cover">
		<h1 class="cover-heading">CurrentC</h1>
		<p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
	</main>
</div>

</body>
</html>
`
	return strholder;					//Output the string

}