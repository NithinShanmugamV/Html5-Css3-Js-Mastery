/*let countdown = document.getElementById("countdown");
console.log(countdown);
let initialCountdown = countdown;


setInterval(function(){
	countdown.textContent = countdown - 1;
},1000);

setInterval(function(){
	initialCountdown -= 1;
	countdown.textContent = initialCountdown;
}, 1000);
*/
var countdownElement

var countdownElement = document.getElementById("countdown");
var bgImage = document.getElementById("bgImage");
console.log(countdownElement.textContent);
var initialCountdownVal = countdownElement.textContent;
console.log(initialCountdownVal);

setInterval(function() {
	initialCountdownVal = initialCountdownVal>0? initialCountdownVal-1 : 0;
	countdownElement.textContent = initialCountdownVal;
	var 
}, 1000);