alert("Hello!");

document.querySelector('html').onclick = function(){
		alert("Ouch! Stop poking me!");
}

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc=myImage.getAttribute('src');
	alert("Watch the magic!");
	if(mySrc==='images/hi.jpg'){
		myImage.setAttribute('src','images/download.jpg');
	}else{
		myImage.setAttribute('src','images/hi.jpg');
	}
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Welcome to this page, '+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = "Welcome to this website, "+storedName; //note the diff from above, website/page.
}

myButton.onclick = function(){
	setUserName();
}