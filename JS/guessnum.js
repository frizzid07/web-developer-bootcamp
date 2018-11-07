var answer = 21;
var uplimit = 50;
var downlimit = 1;

var ans = prompt("Guess a number between " +downlimit+ " & " +uplimit);
var userans = Number(ans);

if (userans == answer) {
	var alertcontent = userans+ " is the correct guess. Congratulations!";
}
else if (userans >= downlimit && userans < answer) {
	var alertcontent = userans+ " is too low. Try guessing a larger number!";
}
else if (userans <= uplimit && userans > answer) {
	var alertcontent = userans+ " is too high. Try guessing a smaller number!";
}
else {
	var alertcontent = userans+ " is an invalid guess. Please make a valid guess!";
}

alert(alertcontent);

function view() {
	document.getElementById("guessnum").innerHTML = alertcontent;
}