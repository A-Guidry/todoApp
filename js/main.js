function todoList() {
	var item = document.getElementById("todoInput").value
	// creates text
	var text = document.createTextNode(item)
	// creates the li element
	var newItem = document.createElement("li")
	// creates class on li
	newItem.className = "listItem"
	// creates check box for li
	var checkbox = document.createElement('input')
     // creates checkbox attribute
     checkbox.setAttribute("type", "checkbox", "id","myCheck")      
     // styles check box
     checkbox.className = "liCheckBok"
	// add text into li for one instence
	newItem.appendChild(text)
	// grab ordered list and add li to that list
	document.getElementById("todoList").appendChild(newItem).appendChild(checkbox)

// end function
}

document.addEventListener('click', function(e) {
    e = e || window.event
    var target = e.target
    // finding the parent element 
    var parent = target.parentNode
	// taking what we checked and is this element an LI (or any element)
	if (parent.nodeName == "LI" ) {
		// if true, hide the element
		parent.style.display = "none"
	}

}, false)
