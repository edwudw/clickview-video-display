$(document).ready(function () {
	// Load videos into table
	// Loop through videos array created by videos.js and add each to the table
	// console.log(videos);
	for (let i = 0; i < videos.length; i++) {
		addToTable(videos[i]);
	}

	// Search Tags function
	$("#searchTagButton").click(function () {
		let tagText = $("#searchTagBox").val(); // get search text
		$("#displayTableBody").empty(); // Empty Table
		for (let k = 0; k < videos.length; k++) { // iterate through videos array
			for (let j = 0; j < videos[k]["tags"].length; j++) { // iterate through tags array in every video object
				if (videos[k]["tags"][j] == tagText) { // if tag found, add to table
					addToTable(videos[k]);
					break;
				}
			}
		}
	});
});

// Converts duration stored into a readable format
function getDuration(duration) {
	duration = duration / 1000; // convert from milliseconds to seconds
	if (duration < 60) {
		return String(duration) + " secs"; // Return seconds
	} else {
		return String(Math.floor(duration / 60)) + " mins"; // Return minutes
	}
}

// Adds each video to the table displayed
function addToTable(video) {
	$tableBody = $("#displayTableBody");
	$tableBody.append("<tr>\
					     <td><img class='thumbnail' src=" + video['thumbnail'] + " alt='Video Thumbnail'></td>\
					     <td>" + video['name'] + "</td>\
					     <td>" + video['description'] + "</td>\
					     <td>" + getDuration(video['duration']) + "</td>\
					     <td><button type='button' class='btn btn-success'>Play</button></td>\
					   </tr>");

}