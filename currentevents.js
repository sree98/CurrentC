//currentevents.js
'use strict'
exports.render = function()				//Function to render the HTML for the homepage 
{
	//save the HTML in a long string
	var strholder = `					
<html>


<head>
<title> CurrentC News </title>








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

<h1 align="center"><font color="blue" size="8"><u><b><center>Current Events/News</h1></font></u></b></center>
	<hr>
<br>
<a href = "https://www.forbes.com/sites/forbestechcouncil/2018/03/21/cryptocurrency-gold-rush-and-the-unforeseen-effect-on-pc-gamers/#4a0ad0de6286"> <b><font size="4"> (March 21st 2018) : Cryptocurrency Gold Rush and The Unforeseen Effect on PC Gamers </b> </a> </font>	
	<p> Have you noticed the shortage of high-end graphics cards? If you are not a PC gamer, then the answer is probably no. But that doesn’t mean you shouldn't care. As digital currencies become increasingly prominent, their collective impact will continue to reach beyond the crypto economy and into our material world. The current shortage of PC graphics cards is the latest example, but it won't be the last. </p>
<br>
<br>
<br>
<a href = "https://qz.com/1228413/how-to-name-a-cryptocurrency/"> <b><font size="4"> (March 14th 2018) : How to name a cryptocurrency </b> </a> </font>	
	<p>f you have several single male friends who only wear sweatshirts, you've probably heard a lot about cryptocurrency lately. Depending on whom you ask, cryptocurrencies are either the unstoppable future of finance or a hot load of nothing. At the time of writing this, one bitcoin was worth around $9,000. But by the time you read this, one bitcoin could be worth half a tuna sandwich. Roll those dice, baby! No risk, no reward!</p>
<br>
<br>
<br>
<a href = "https://coincentral.com/this-week-in-cryptocurrency-february23/"> <b><font size="4"> (February 23rd 2018) : This Week in Cryptocurrency-February 23th, 2018</b> </a> </font>	
	<p>Market goes up, market goes down: In usual crypto randomness, the market took a slight dip after last week's recovery, but there's no need to worry. We're seeing positive price movements this morning, and the 7-day chart shows greener pastures on the horizon.</p>
<br>
<br>
<br>
<a href = "https://www.finder.com.au/bitcoin-and-cryptocurrency-roundup-the-news-today-2017-12-29"> <b><font size="4"> (December 29 2017) : Bitcoin and cryptocurrency news round-up: 29 December 2017</b> </a> </font>	
	<p>South Korea is cracking down on its local crypto exchanges, Ripple keeps hitting new highs and Ethereum's founder has threatened to leave the community if it doesn't clean up its act.</p>
	
	
	
</body>






</html>

`
	return strholder;					//Output the string

}