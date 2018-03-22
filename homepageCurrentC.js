//homepageCurrentC.js
'use strict'
exports.render = function()				//Function to render the HTML for the homepage 
{
	//save the HTML in a long string
	var strholder = `					
<html>
<title>CurrentC Homepage (TESTER)</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<style>
.mySlides {display:none}

body {
	background-image: url(cityBackground.jpg);
	}
	
	
	
</style>
<body>
<div class="w3-container">
  <u><h1><center><font size="8" color="red">Welcome to CurrentC!</u></h1></center></font>
  <hr>
	
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

<hr>
<br>
<center><b><p><font color="red">Please use the menu buttons on the top of your screen to navigate through the website </p></center></b></font>
<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}
</script>

</body>
</html>
`
	return strholder;					//Output the string

}