// 1.Change the text of a button with the ID "myButton" to "Clicked!" when it is clicked.
var myBtn = document.getElementById('myButton');
function clickOnBtn(){
    myBtn.innerHTML = "Clicked";
    console.log("You Clicked On Button Now")
}

// 2.Display an alert with the message "Button clicked!" when a button with the id "alertButton" is clicked. Add classname to this button ”myclass”.
var myAlertBtn = document.getElementById('alertButton');
myAlertBtn.addEventListener('click', function(){
    this.className += " myclass";
})

// // 3.Change the background color of a div with the ID "colorDiv" to blue when the mouse enters the div. Change it back to white when the mouse leaves the div
var divColor = document.getElementById('colorDiv');
function changeDivColor(){
    divColor.style.backgroundColor = 'blue';
}
divColor.addEventListener("mouseout", function(e){
    this.style.backgroundColor = 'white';
})

// // 4.Log the key pressed to the console when a key is pressed inside an input field with the ID "inputField". – hint (use keydown event)
var inputField = document.getElementById("inputField");
inputField.addEventListener('keydown', function(e){
    // console.log(e.key)
})

// // 5.Display the current value of an input field with the ID "inputField" in a div with the ID "displayDiv" when the input field's value changes. – hint (use input event)
function DisplayInputContent() {
    let text = document.getElementById("inputField").value;
    document.getElementById("displayDiv").innerHTML = "You wrote: " + text;
}

// // 6.Prevent the default action of a link with the ID "myLink" when it is clicked, and display an alert instead. 
function displayMsg(event){
    event.preventDefault();
    alert("You Clicked On W3school Link");
}

// // 7.Display the coordinates of the mouse pointer in a div with the ID "mouseDiv" when the mouse moves inside the div. – hint (use mousemove event)
function displayCoordinates(event){
    var mouseDiv = document.getElementById("mouseDiv");
    mouseDiv.innerHTML = "coordinates ";
    mouseDiv.innerHTML += " X:" + event.clientX + ",  Y:" + event.clientY;
    // console.log(" X:" + event.clientX + ",  Y:" + event.clientY)
}
function returnDisplayCoordinates(event){
    var mouseDiv = document.getElementById("mouseDiv");
    mouseDiv.innerHTML = "coordinates ";
}


// // 8.Toggle the visibility of a div with the ID "toggleDiv" when a button with the ID "toggleButton" is clicked.
var toogleDiv = document.getElementById("toogleDiv");
var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function(){
    toogleDiv.classList.toggle("myclass");
})

// // 9.Increment a counter displayed in a span with the ID "counter" each time a button with the ID "incrementButton" is clicked.
var incrementButton = document.getElementById("incrementButton");
var counter = document.getElementById("counter");
var count = 0;
incrementButton.addEventListener("click", function(){
    count++;
    counter.innerHTML = count;
})






