function showVideos(){
	var ign;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/api", true);
	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4) {
  			ign = xhr.responseText;
  		}
	}
	xhr.send();

	console.log(ign);


}

function showArticles(data){
	console.log(data);



}

showVideos();























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


