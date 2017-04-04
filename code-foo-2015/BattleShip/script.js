function x(c){
	return c.charCodeAt(0) - 64;
}

function y(c){
	if(c.length == 3){
		return 10;
	}

	return c.charCodeAt(1) - 48;
}

function validSpot(t, x, y){
	//if the coordinate isnt on the grid
	if(x < 1){
		return false;
	}
	if(y < 1){
		return false;
	}
	if(x > 10){
		return false;
	}
	if(y > 10){
		return false;
	}

	return true;

}


var answer = prompt("Would you like to play Battleships? (type 'yes' if you do)");

if(answer == "yes"){
	//tables for user

	var s1 = document.getElementById('ships');
	var h1 = document.getElementById("hits");

	var carrier = prompt("Input coordinates for your carrier (i.e. A1 A2 A3 A4 A5").split(" ");

	//check for bad input
	while(true){
		for(i = 0; i < carrier.length; i++){
			if(!validSpot(s1, x(carrier[i]), y(carrier[i]))){
				carrier = prompt("Invalid choice, please try again.").split(" ");
			}
		}
		break;
	}

	//place carrier
	for(i = 0; i < carrier.length; i++){
		s1.rows[x(carrier[i])].cells[y(carrier[i])].style.backgroundColor = 'green';
	}

	var bShip = prompt("Input coordinates for your battleship (i.e. A1 A2 A3 A4").split(" ");

	//check for bad input
	while(true){
		for(i = 0; i < bShip.length; i++){
			if(!validSpot(s1, x(bShip[i]), y(bShip[i]))){
				carrier = prompt("Invalid choice, please try again.").split(" ");
			}
		}
		break;
	}

	//place bShip
	for(i = 0; i < bShip.length; i++){
		s1.rows[x(bShip[i])].cells[y(bShip[i])].style.backgroundColor = 'green';
	}


	var crui = prompt("Input coordinates for your cruiser (i.e. A1 A2 A3").split(" ");

	//check for bad input
	while(true){
		for(i = 0; i < crui.length; i++){
			if(!validSpot(s1, x(crui[i]), y(crui[i]))){
				carrier = prompt("Invalid choice, please try again.").split(" ");
			}
		}
		break;
	}

	//place cruiser
	for(i = 0; i < crui.length; i++){
		s1.rows[x(crui[i])].cells[y(crui[i])].style.backgroundColor = 'green';
	}


	var sub = prompt("Input coordinates for your cruiser (i.e. A1 A2 A3").split(" ");

	//check for bad input
	while(true){
		for(i = 0; i < sub.length; i++){
			if(!validSpot(s1, x(sub[i]), y(sub[i]))){
				sub = prompt("Invalid choice, please try again.").split(" ");
			}
		}
		break;
	}

	//place sub
	for(i = 0; i < sub.length; i++){
		s1.rows[x(sub[i])].cells[y(sub[i])].style.backgroundColor = 'green';
	}

	var d = prompt("Input coordinates for your destroyer (i.e. A1 A2 A3").split(" ");

	//check for bad input
	while(true){
		for(i = 0; i < d.length; i++){
			if(!validSpot(s1, x(d[i]), y(d[i]))){
				d = prompt("Invalid choice, please try again.").split(" ");
			}
		}
		break;
	}

	//place destroyer
	for(i = 0; i < d.length; i++){
		s1.rows[x(d[i])].cells[y(d[i])].style.backgroundColor = 'green';
	}


	/*
	*As for the computer, it will put its ships in a pre desginated spot
	*/

	var s2 = Array(11);

	for(i = 0; i < s2.length; i++){
		s2[i] = new Array(11);
	}

	var h2 = Array(10);

	for(i = 0; i < h2.length; i++){
		h2[i] = new Array(10);
	}

	for(i = 1; i < 6; i++){
		s2[10][i] = true;
	}

	for(i = 4; i < 8; i++){
		s2[5][i] = true;
	}

	for(i = 1; i < 4; i++){
		s2[i][10] = true;
	}

	for(i = 5; i < 8; i++){
		s2[i][10] = true;
	}

	for(i = 3; i < 5; i++){
		s2[4][i] = true;
	}


	while(true){
		var guess = prompt("Take Your Shot! (i.e. A1 or B6)");

		if(s2[x(guess)][y(guess)] == true){
			alert("Its a hit!");
			h1.rows[x(guess)].cells[y(guess)].style.backgroundColor = 'red';
		}


	}















































}