$(document).ready(function () {
	// Load videos into table
	// Loop through videos array created by videos.js and add each to the table
	// console.log(videos);
	for (let i = 0; i < videos.length; i++) {
		addToTable(videos[i]);
	}
});

// Adds each video to the table displayed
function addToTable(video) {
	$tableBody = $("#displayTableBody");
	$tableBody.append("<tr>\
					     <td><img class='thumbnail' src=" + video['thumbnail'] + " alt='Video Thumbnail'></td>\
					     <td>" + video['name'] + "</td>\
					     <td>" + video['description'] + "</td>\
					     <td><button type='button' class='btn btn-success'>Play</button></td>\
					   </tr>");

}