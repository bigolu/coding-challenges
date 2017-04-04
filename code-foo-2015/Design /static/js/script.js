//mkae request for articles
function showArticles(){
	var ign;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/api", true);
	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4) {
  			artLoader(xhr.responseText);
  		}
	}
	xhr.send();
}

//add articles to page
function artLoader(data){
	data = jQuery.parseJSON(data);
	data = data.results;
	var item = "";
	console.log(data);

	for(i =0; i < data.data.length; i++){
		item += "<div id=\"listItem\"> <div id=\"l1\"> <p>" + (i + 1) + "</p> </div> <div id=\"l2\"> <p>" + data.data[i].metadata.headline + "<br>" + data.data[i].metadata.subHeadline + "</p> </div> <div id=\"l3\"><p></p></div></div>"; 
	}

	$("#content").html(item);
}

//make request for video
function showVideos(){
	var ign;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/api2", true);
	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4) {
  			vidLoader(xhr.responseText);
  		}
	}
	xhr.send();
}

//add videos to page
function vidLoader(data){
	data = jQuery.parseJSON(data);
	data = data.results;
	var item = "";
	console.log(data);

	for(i =0; i < data.data.length; i++){
		item += "<div id=\"listItem\"> <div id=\"l1\"> <p>" + (i+ 1) + "</p> </div> <div id=\"l2\"> <p><a href=\"" + data.data[i].metadata.url + "\" target=\"_blank\">" + data.data[i].metadata.name + "</a><br>" + data.data[i].metadata.genre + "</p> </div> <div id=\"l3\"><p></p></div></div>"; 
	}

	$("#content").html(item);
}


//the next two blocks switch between the video and articles page
$("#choice2").click(
	function(){
		$("h1").html("ARTICLES");
		$("#choice2").css("background-color", "#C10E02");
		$("#c2").css("color", "white");
		$("#c1").css("color", "#C10E02");
		$("#choice1").css("background-color", "white");
		$("#choice1").css("border", "2px solid #C10E02");

		showArticles();
	}
);

$("#choice1").click(
	function(){
		$("h1").html("VIDEOS");
		$("#choice1").css("background-color", "#C10E02");
		$("#c1").css("color", "white");
		$("#c2").css("color", "#C10E02");
		$("#choice2").css("background-color", "white");
		$("#choice2").css("border", "2px solid #C10E02");

		showVideos();
	}
);

//the page starts on video by default
showVideos();
