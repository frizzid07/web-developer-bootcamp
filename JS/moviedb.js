var movies = [
	{
		title: "Interstellar",
		hasSeen: true,
		rating: 4.8
	},
	{
		title: "Doctor Strange",
		hasSeen: true,
		rating: 4.5
	},
	{
		title: "Inception",
		hasSeen: false,
		rating: 4.7
	}
]

function gomovie() {
	movies.forEach(function (movie) {
		var status = "You have ";
		if(movie.hasSeen) {
			status += "seen ";
		}
		else {
			status += "not seen ";
		}
		status += "\"" +movie.title+ "\" = ";
		status += movie.rating+ " stars!";
		document.getElementById(movie.title).innerHTML = status;
	});
}