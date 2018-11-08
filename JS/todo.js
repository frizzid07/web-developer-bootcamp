// Declaring an empty array
var todolist = [];
console.log("Todo List initialised!");
// Asking user what to do
var res = prompt("What do you want to do?");

while (res !== "exit") {
	// To add new entry
	if (res === "create") {
		var entry = prompt("Enter new item in Todo List:");
		addtodo(entry);
	}
	//To delete an entry
	else if (res === "delete") {
		if (todolist.length != 0) {
			var del = prompt("Enter item to delete from Todo List:");
			deletetodo(del);
		}
		else {
			console.log("Cannot delete items from an empty list!");
			alert("Cannot delete items from an empty list!");
		}
	}
	//Modify an existing entry
	else if (res === "modify") {
		if (todolist.length != 0) {
			var olditem = prompt("Enter the item to be modified from Todo List:");
			modifytodo(olditem);
		}
		else {
			console.log("Cannot modify items from an empty list!");
			alert("Cannot modify items from an empty list!");
		}
	}
	// View contents of Todo List
	else if (res === "list") {
		//Checking existing items
		if (todolist.length !== 0) {
			console.log("Contents of Todo List");
			console.log(todolist);
		}
		else {
			console.log("No existing items in the list!");
			alert("No existing items in the list!");
		}
	}
		
	else {
		console.log(res+ " is an invalid command!");
		alert(res+ " is an invalid command!");
	}
	// Ask again
	res = prompt("What do you want to do?");
}

console.log("Todo List closed!");
alert("Todo List closed!");


// For new entry
function addtodo(x) {

	// Pushed to array todolist
	todolist.push(x);
	console.log("New entry " +x+ " added to the list. Todo List now has " +todolist.length+ " item(s)!");
	alert("New entry " +x+ " added to the list. Todo List now has " +todolist.length+ " item(s)!");

}

// For deleting entry
function deletetodo(x) {
	
		if (todolist.includes(x)) {
			// Popped from array todolist
			todolist.splice(todolist.indexOf(x), 1);
			console.log("Entry " +x+ " deleted. " +todolist.length+ " item(s) remaining in the list!");
			alert("Entry " +x+ " deleted. " +todolist.length+ " item(s) remaining in the list!");
		}
		// Entry does not exist
		else {
			console.log("Entry " +x+ " does not exist. Ensure you have typed correctly!");
			alert("Entry " +x+ " does not exist. Ensure you have typed correctly!");
		}

}

// For modifying entry
function modifytodo(x) {
	
		if (todolist.includes(x)) {
			// Getting modified item
			var newitem = prompt("Enter the modified value of " +x+ " from Todo List:");
			//Retrieving original index of item in array and replacing it
			var index = todolist.indexOf(x);
			todolist[index] = newitem;
			console.log("Entry " +x+ " was modified to " +newitem);
			alert("Entry " +x+ " was modified to " +newitem);		
		}
		// Entry does not exist
		else {
			console.log("Entry " +x+ " does not exist. Ensure you have typed correctly!");
			alert("Entry " +x+ " does not exist. Ensure you have typed correctly!");
		}

}