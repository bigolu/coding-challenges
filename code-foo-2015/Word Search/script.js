/**
*This function solves the code-foo wordsearch and puts it on the page
**/
function Search(){
	//length of row and col of word search
	var row = 20;
	var col = 20;

	// creates 2d array of booleans indicating if a letter is part of a target word
	var partOfWord = new Array(row);
	for(i = 0; i < partOfWord.length; i++){
		partOfWord[i] = new Array(col);
	}

	//creates 2d of chars for the word search
	var wSearch = new Array(row);
	for(i = 0; i < wSearch.length; i++){
		wSearch[i] = new Array(col);
	}
	
	//load in input word search and split by spaces
	var chars = "O B M K A T A M A R I O C C S F T P H S \
	S M G S W G B O J K O N U U R I I A J D \
	T K H V O O N V X H O D L Z B E L S D O \
	E D I E P O N A Z R E U D L N X E D B C \
	V V Y E S M T I M N C I V E L A B P C B \
	E O C X S B K A S O W B S O R E T S E W \
	S U M I N A N X C T F R I E K P H B K R \
	M S B S T D X S T G K B A R N V U A M I \
	O V G U Y I G K H N B O O P D B V L D R \
	M U P N E K T U P I H K P Y T M E S G M \
	H M Z O G J T A F F N R Q L R U A R U A \
	G L A R O F B R N F C R Z K S K R N G R \
	L G W T J W I U C U A L A Y R N M E A K \
	U Q J A B T A M B L X V A T L Y X V S H \
	R O L P H R R L Y B K J E P T F X L J A \
	E M M Y J O O Z K N F R V N T A E O E M \
	A P Q I D E Z L N E V C A H G R R R L S \
	V M Z R T G Z M I B R N U T A E A D I R \
	E E O N Z I C G L A K S L E S K R P I F \
	R M F A T P Z C B I Z D T A J O F S W S".split(/(\s+)/);

	//load in chars to word search
	for(i = 0; i < row; i++){
		for(j = 0; j < col; chars.splice(0, 1)){
			if(chars[0].indexOf(" ") == -1){//some indices of chars may be just spaces so this check eliminates them	
				wSearch[i][j] = chars[0];
				j++;
			}
		}
	}

	//load in words to be found
	var words = "BLINKY \
	SHINRA \
	RAPTURE \
	ANIMUS \
	FIREFLY \
	WALKERS \
	TARDIS \
	EPONA \
	CREEPER \
	AVENGER \
	PATRONUS \
	WESTEROS \
	IFRIT \
	ARKHAM \
	VAULT \
	CLAPTRAP \
	NORMANDY \
	REAVER \
	HEISENBERG \
	STARK \
	MORDOR \
	BIRDMAN \
	TITAN \
	OCULUS \
	GOOMBA \
	KATAMARI".split(/(\s+)/);

	//num of words to be found
	var numWords = 26;

	//Array to store targets
	var targets = new Array(numWords);

	//eliminate any string that have just spaces and put the rest into targets
	for(i = 0; i < targets.length; words.splice(0, 1)){
		if(words[0].indexOf(" ") == -1){
			targets[i] = words[0];
			i++;
		}
	}

	//put words into html page
	targets.forEach(
		function(t){
			$("#list").append("<li>" + t + "</li>");
		}
	);

	//find any horizontal words
	for(i = 0; i < row; i++){
		var line = "";

		//put single line into string
		for(j = 0; j < col; j++){
			line += wSearch[i][j];
		}

		//check string for words
		targets.forEach(
			function(t){
				if(isInThere(line, t) != -1){

					//mark letters which will be highlighted in the word search
					for(y = i , z = isInThere(line, t), k = 0; k < t.length; z++, k++){
						partOfWord[y][z] = true;
					}

				}
			}
		);
	}

	//find any vertical words
	for(j = 0; j < col; j++){
		var line = "";

		//put single line into string
		for(i = 0; i < col; i++){
			line += wSearch[i][j];
		}

		//check string for words
		targets.forEach(
			function(t){
				if(isInThere(line, t) != -1){

					//mark letters which will be highlighted in the word search
					for(y = isInThere(line, t), z = j, k = 0; k < t.length; y++, k++){
						partOfWord[y][z] = true;
					}

				}
			}

		);
	}

	//check for bottom half diagonals from left to right
	for(x = 0; x < row; x++){
		var line = "";

		//put single line into string
		for(y = x, z = 0; (y < row) && (z < col); y++, z++){
			line += wSearch[y][z];
		}

		//check string for words
		targets.forEach(
			function(t){
				if(isInThere(line, t) != -1){

					//mark letters which will be highlighted in the word search
					for(y = isInThere(line, t) + x, z = isInThere(line, t), k = 0; k < t.length; y++, z++, k++){
						partOfWord[y][z] = true;
					}

				}
			}

		);

	}

	//check for top half diagonals from left to right
	for(x = 0; x < col; x++){
		var line = "";

		//put single line into string
		for(y = 0, z = x; (y < row) && (z < col); y++, z++){
			line += wSearch[y][z];
		}

		//check string for words
		targets.forEach(
			function(t){
				if(isInThere(line, t) != -1){

					//mark letters which will be highlighted in the word search
					for(y = isInThere(line, t), z = isInThere(line, t) + x, k = 0; k < t.length; y++, z++, k++){
						partOfWord[y][z] = true;
					}
	
				}
			}

		);

	}

	//check for bottom half diagonals from right to left
	for(x = row - 1; x >= 0; x--){
		var line = "";

		//put single line into string
		for(y = x, z = col - 1; (y < row) && (z >= 0); y++, z--){
			line += wSearch[y][z];
		}

		//check string for words
		targets.forEach(
			function(t){
				if(isInThere(line, t) != -1){ 

					//mark letters which will be highlighted in the word search
					for(y = isInThere(line, t) + x, z = col - 1 - isInThere(line, t), k = 0; k < t.length; y++, z--, k++){
						partOfWord[y][z] = true;
					}

				}
			}

		);

	}

	//check for top half diagonals from right to left
	for(x = col - 1; x >= 0; x--){
		var line = "";

		//put single line into string
		for(y = 0, z = x; (y < row) && (z >= 0); y++, z--){
			line += wSearch[y][z];
		}

		//check string for words
		targets.forEach(
			function(t){
				if(isInThere(line, t) != -1){ 

					//mark letters which will be highlighted in the word search
					for(y = isInThere(line, t), z = x - isInThere(line, t), k = 0; k < t.length; y++, z--, k++){
						partOfWord[y][z] = true;
					}
	
				}
			}

		);

	}

	//Now I put the highlighted word search into the html page!
	var table = "<table>"


	for(i = 0; i < row; i++){

		table += "<tr>";

		for(j = 0; j < row; j++){

			if(partOfWord[i][j]){
				table += "<td id=\"partOfWord\">" + wSearch[i][j] + "</td>";
			}
			else{
				table += "<td>" + wSearch[i][j] + "</td>";
			}
		
		}

		table += "</tr>"; 

	}

	table += "</table>";

	$(document).ready(function(){

		//put words into html page
		targets.forEach(
			function(t){
				$("#list").append("<li>" + t + "</li>");
			}
		);

		//put completed word search in html page
		$("#wordSearch").html(table);

	});

}

/**
*This function checks if a given string, target, or its reverse is a substring of another string, line 
*It then returns the index of the occurence or -1 if it is not there
**/
function isInThere(line, target){
	if(line.indexOf(target) != -1){
		return line.indexOf(target);
	}
	else if(line.indexOf(target.split("").reverse().join("")) != -1){
		return line.indexOf(target.split("").reverse().join(""));
	}
	else{
		return -1;
	}


}


//load code-foo word search onto page
Search();

















