var score1val = 0;
score1val = Number(score1val);
var score2val = 0;
score2val = Number(score2val);

function spin1() {
	var die1 = Math.floor((Math.random() * 6) + 1);
	document.querySelector("#dice1").innerHTML = die1;
	score1();
}

function spin2() {
	var die2 = Math.floor((Math.random() * 6) + 1);
	document.querySelector("#dice2").innerHTML = die2;
	score2();
}

function score1() {
	var die1val = document.querySelector("#dice1").innerHTML;
	die1val = Number(die1val);
	if ((die1val === 6) && (score1val < Number(document.querySelector("#winamount").value))) {
		score1val += 1;
		document.querySelector("#score1").innerHTML = score1val;
	}
	if (score1val === Number(document.querySelector("#winamount").value)) {
		document.querySelector("#dice1").disabled = true;
		document.querySelector("#show").style.visibility = "visible";
		document.querySelector("#winner").innerHTML = "PLAYER ONE";
		document.querySelector("#dice2").disabled = true;
	}
}

function score2() {
	var die2val = document.querySelector("#dice2").innerHTML;
	die2val = Number(die2val);
	if ((die2val === 6) && (score2val < Number(document.querySelector("#winamount").value))) {
		score2val += 1;
		document.querySelector("#score2").innerHTML = score2val;
	}
	if (score2val === Number(document.querySelector("#winamount").value)) {
		document.querySelector("#dice2").disabled = true;
		document.querySelector("#show").style.visibility = "visible";
		document.querySelector("#winner").innerHTML = "PLAYER TWO";
		document.querySelector("#dice1").disabled = true;
	}
}

function restart() {
	location.reload();
}