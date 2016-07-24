var playerScore = document.querySelector('.playerScore'),
	playerChose = document.querySelector('#playerPick'),
	computerScore = document.querySelector('.computerScore'),
	computerChose = document.querySelector('#computerPick'),
	playerName = document.querySelectorAll('.playerName'),
	tiesScore = document.querySelector('.ties'),
	roundNumber = document.querySelector('.round'),
	roundResult = document.querySelector('#roundResult'),
	gameResult = document.querySelector('#gameResult'),
	tBody = document.querySelector('.panel tbody'),
	ties = 0,
	round = 1;

var player = {
	name: '',
	score: 0,
	pick: ''
};

var computer = {
	name: 'Computer',
	score: 0,
	pick: ''
};

function newGame() {

	player.score = 0;
	player.pick = '';
	computer.score = 0;
	computer.pick = '';
	round = 1;
	ties = 0;
	gameResult.style.display = 'none';
	playerChose.innerHTML = '';
	computerChose.innerHTML = '';
	roundResult.innerHTML = '';
	roundNumber.innerHTML = 1;
	playerScore.innerHTML = player.score;
	computerScore.innerHTML = computer.score;
	tiesScore.innerHTML = ties;
	tBody.innerHTML = '';

	player.name = prompt('What\'s  your name?', 'Guest');
	if (player.name) {

		for (var i = 0; i < playerName.length; i++) {
			playerName[i].innerHTML = player.name;
		}

		var buttons = document.getElementsByClassName('pick-button');

		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.display = 'inline-block';
		}
	}

}

function playerPick(pick) {
	player.pick = pick;
	computerPick();
	checkResult();
}

function computerPick() {
	switch (Math.floor(Math.random() * 3)) {
		case 0:
		computer.pick = 'rock';
		break;
		case 1:
		computer.pick = 'paper';
		break;
		case 2:
		computer.pick = 'scissors'
		break;
	}
}

function checkResult() {
	
	var Result;
	
	if (player.pick === computer.pick) {
		Result = 'Tie';
		tiesScore.innerHTML = ++ties;
	} 
	else if ((player.pick === 'rock') && (computer.pick === 'paper')) {
		computer.score++;
		Result = 'Computer';
	}
	else if ((player.pick === 'rock') && (computer.pick === 'scissors')) {
		player.score++;
		Result = player.name;
	}
	else if ((player.pick === 'paper') && (computer.pick === 'rock')) {
		player.score++;
		Result = player.name;
	}
	else if ((player.pick === 'paper') && (computer.pick === 'scissors')) {
		computer.score++;
		Result = 'Computer';
	}
	else if ((player.pick === 'scissors') && (computer.pick === 'rock')) {
		computer.score++;
		Result = 'Computer';
	}
	else if ((player.pick === 'scissors') && (computer.pick === 'paper')) {
		player.score++;
		Result = player.name;
	}
	addResult();
	playerChose.innerHTML = player.pick;
	computerChose.innerHTML = computer.pick;
	roundResult.innerHTML = Result;
	roundNumber.innerHTML = ++round;
	playerScore.innerHTML = player.score;
	computerScore.innerHTML = computer.score;
	
	if((player.score >= 10) || (computer.score >= 10)) {
		gameResult.style.display = 'block';
		roundNumber.innerHTML = --round;
		if(player.score > computer.score) {
			gameResult.innerHTML = '<p>End of the Game</p><h4>' + player.name + ' wins the game!</h4>';
		} 
		else {
			gameResult.innerHTML = '<p>End of the Game</p><h4>Computer wins the game!</h4>';
		}
		
		var buttons = document.getElementsByClassName('pick-button');
	
		for(var i = 0; i < buttons.length; i++ ) {
			buttons[i].style.display = 'none';
		}
	}
}

function addResult() {
	var row = document.createElement('tr'),
		td = document.createElement('td'),
		td2 = document.createElement('td'),
		td3 = document.createElement('td');
	
	tBody.appendChild(row);
	td.innerHTML = player.score;
	row.appendChild(td);
	td2.innerHTML = round;
	row.appendChild(td2);
	td3.innerHTML = computer.score;
	row.appendChild(td3);
	
}