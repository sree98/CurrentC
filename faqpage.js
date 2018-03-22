//faqpage.js
'use strict'
exports.render = function()				//Function to render the HTML for the homepage 
{
	//save the HTML in a long string
	var strholder = `					
<html>


<head>

<title> CurrentC FAQPage </title>
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



<h1 align="left"><font color="green"><u><b>Frequently Asked Questions</h1></font></u></b>
<p align="left"><font size="3">
We understand you might have many questions or concerns about our website, so we decided to help make your user experience
as simplistic as possible and providing you a list of the major questions we have received!
</p></font>
<hr>
<ul style ="list-style-type:square">
	<li><font size = "5" color="green"><u>Who are the creators of this website?</li></font></u>
	<p> Michael Vilanova, Robert Wilson, Nathaniel McCarthy, and Sreekuttan Sudarsanan </p>
	<li><font size = "5" color="green"><u> When was this website created? </li></font></u>
	<p> This project was created during 2017-2018 year as a Final Project for CS275 </p>
	<li><font size = "5" color="green"><u> What exactly does your website do/provide? </li></font></u>
	<p> This website allows user to create an account, view graphs of the four main cryptocurrencies, and add their favorite 
	cryptocurrencies to their account for easy viewing </p>
	<li><font size = "5" color="green"><u> How exactly are you getting your constant, live, up to date data of the cryptocurrencies? </li></font></u>
	<p> We implemented the Coinigy API which can be found <a href = "https://www.coinigy.com/bitcoin-api/"> here </a> </p>
	<li><font size = "5" color="green"><u> Who can we contact if we need any assistance or have issues? </li></font></u>
	<p> Please go to our contact us page by hovering over our dropdown menu to get more information </p>
	
	

<br>
<br>
<br>
<br>
<br>
 <center><img src="faqImage.png" alt="faqImage" height="250" width="550"> </center>
	
	
	
</body>






</html>

`
	return strholder;					//Output the string

}