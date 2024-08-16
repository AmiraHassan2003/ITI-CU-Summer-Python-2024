//  1- create a web page that open existing small window and scroll it’s content to the end .
// 1) a- check if the small window still opened, close it.
let smallWindow;

function openWindow() {
    smallWindow = window.open("./newWindow.html", "_blank", "width=500,height=300");
    if (smallWindow) {
        console.log("Small window opened.");
    } else {
        console.log("Failed to open the small window.");
    }
}

function closeWindow() {
    if (smallWindow && !smallWindow.closed) {
        smallWindow.close();
        console.log("Small window has been closed.");
    } else {
        console.log("Small window is already closed or was not opened.");
    }
}

// 1 ) b- Try to write your name on the small window document using document.write 
// smallWindow.document.write("Hi my name is Amira (with using document.write)");

// 1) c- Now don’t use document.write(Forbidden) instead use document.createElement to add your name inside a div and add that div to the small window’s body.
if (smallWindow && !smallWindow.closed) {
    let myDiv = smallWindow.document.createElement('div');
    let myText = smallWindow.document.createTextNode("Hi my name is Amira");
    myDiv.appendChild(myText);
    smallWindow.document.body.appendChild(myDiv);
}

//    2- Using document object method on the lecture’s HTML page
// 2) a- Find all images in page by two ways (document default collection and document methods).
console.log(" ### 1) get Images By TagName ### ");
var myImagesByTagName = document.getElementsByTagName('img'); // collection
for (var i = 0; i < myImagesByTagName.length; i++) {
    console.log(myImagesByTagName[i]);
}

console.log(" ### 2) get Images By querySelectorAll ### ");
var MyimagesByQuerySelectorAll = document.querySelectorAll('img');
for (var i = 0; i < MyimagesByQuerySelectorAll.length; i++) {
    console.log(MyimagesByQuerySelectorAll[i]);
}

// 2) b- Find all options for City drop down list.
var getOptionsById = document.getElementById('languages').options;
if(getOptionsById){
    console.log(" ### 1) get Options By Id ### ");
    for(var i=0; i<getOptionsById.length; i++){
        console.log("getOptions text : " + getOptionsById[i].text + " getOptions value : " + getOptionsById[i].value);
    } 
}

var getOptionsByQuerySelectorAll = document.querySelectorAll('#languages option');
if(getOptionsByQuerySelectorAll){
    console.log(" ### 2) get Options By Query Selector All ### ");
    for(var i=0; i<getOptionsByQuerySelectorAll.length; i++){
        console.log("getOptions text : " + getOptionsByQuerySelectorAll[i].text + " getOptions value : " + getOptionsByQuerySelectorAll[i].value);
    }
}

var selectElements = document.getElementsByTagName('select');
if(selectElements){
    console.log(" ### 3) get Options By TagName ### ");    
    for (var i = 0; i < selectElements.length; i++) {
        var options = selectElements[i].options;    
        for (var j = 0; j < options.length; j++) {
            console.log("getOptions text: " + options[j].text + " | Option value: " + options[j].value);
        }
    }
}

// 2) c- Find all rows(tds) for second table in page.
var myTables = document.getElementsByTagName('table');
if(myTables.length >= 2){
    var secondTable = myTables[1];
    var Rows = secondTable.getElementsByTagName('tr');
    for(var i=0; i<Rows.length; i++){
        var columns = Rows[i].getElementsByTagName('td');
        for(var j=0; j<columns.length; j++){
            console.log(columns[j].textContent);
        }
    }
}


// 2) d- Find all elements that contain class name fontBlue and Bgrey.
var getEements = document.querySelectorAll('.fontBlue.Bgrey');
if(getEements){
    console.log(" ### Elements with class 'fontBlue' and 'Bgrey' ### ");
    getEements.forEach(function(element) {
        console.log(element.textContent);
    });
}


// 3- Display the date with time on the document title (document.title) which changed every second to show time with date.
function viewDate(){
    setInterval(function(){
        var myDate = new Date().toLocaleString();
        document.title = myDate;
        // console.log(myDate);
    },1000)
}
viewDate()

// 4- create img slider that changes the pictures every 4 seconds or when user presses button next/prev
function changeImage() {
    var myImages = ["pic1.png", "pic3.jpeg", "pic4.jpeg", "pic5.jpeg", "pic6.jpeg"];
    var myDiv = document.getElementsByClassName('changePic');
    if (myDiv) {
        var myImg = myDiv[0].getElementsByTagName('img')[0];
        myImg.src = "./resources/" + myImages[0];
        if (myImg) {
            var currentImage = 1;
            setInterval(function() {
                myImg.src = "./resources/" + myImages[currentImage];
                currentImage = (currentImage + 1) % myImages.length;
            }, 4000);
            // console.log(myImg);
        }
    }
}
changeImage();






