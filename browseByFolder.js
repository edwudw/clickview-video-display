
$(document).ready(function () {

	window.sortedVideos = sortVideosArray();
	let currentFolderObject = window.sortedVideos; // Stores current folder object;

	$("#byFolderButton").click(function () {
		// Show Folder Grid
		$("#byFolderDisplay").css("display", "block");
		// Hide everything
		$("#displayTable").css("display", "none");
		$("#byFolderButton").css("display", "none");
		$("#searchByTag").css("display", "none");
		displayFolder(sortedVideos); // Display folders on webpage

		RefreshButtonEventListener(currentFolderObject);

	});

});



function RefreshButtonEventListener(currentFolderObject) {
    // Remove handler from existing elements
    $(".folder-col").off(); 
    if (currentFolderObject == sortedVideos) {
    	$("#backButton").css("display", "none"); // hide button when at root
    }
    // Re-add event handler for all matching elements
	$(".folder-col").on("click", function () {
		$("#backButton").css("display", "block"); // show button
		$("#byFolderDisplay").empty(); // get rid of all children, clear display
		currentFolderObject = currentFolderObject[$(this).children("h3").text()];
		displayFolder(currentFolderObject);

	});

	// Function to go to parent folder
	$("#backButton").click(function () {
		if (currentFolderObject != sortedVideos) {
			$("#byFolderDisplay").empty(); // get rid of all children, clear display
			displayFolder(currentFolderObject["parent"]); // Show parent folder
		}
	})

}

// display folders on application
function displayFolder(folder) {
	if (folder["content"] != null) {
		$("#displayTableBody").empty(); // Empty Table first
		$("#displayTable").css("display", "table"); // Show Table
		addToTable(folder["content"]);
	} else {
		$("#displayTable").css("display", "none");
	}
	$("#byFolderDisplay").append("<div class='row folder-row'></div>"); // add row to grid of folders
	for (let attr in folder) { // iterate through JSON attributes
		if (folder.hasOwnProperty(attr) && attr != "type" && attr != "content" && attr != "parent") { // add folder to DOM
			$(".folder-row").append("\
				<div class='folder-col col'>\
				  <img class='folderImage' src='folder.jpg' alt='folderImage'>\
				  <h3>" + attr + "</h3>\
				</div>"
			);	
		}
	}
	
	RefreshButtonEventListener(folder); // Add event listener again	(as dynamically created elements need event listener)
}

// Sorts videos by folder, creates new JSON object that is a tree
function sortVideosArray() {
	let mainObject = {"type": "folder"}; // Object that will hold array of objects
	// Loop through videos array
	let currObject;
	for (let i = 0; i < videos.length; i++) {
		let folderArray = videos[i].folder.split("->"); // Split folder name into array of separate strings
		currObject = mainObject;
		// Loop through array of folders
		for (let j = 0; j < folderArray.length; j++) {
			if (currObject[folderArray[j]] == null) { // if folder does not exist, create it
				currObject[folderArray[j]] = {};
				currObject[folderArray[j]]["parent"] = currObject; // Add parent of current folder
			}

			currObject = currObject[folderArray[j]]; // reset currObject
			currObject["type"] = "folder"; // add type
		}
		currObject["content"] = videos[i]; // add content to end of tree node
	}
	console.log(mainObject);
	return mainObject;


}

