alert("Hello!");

/*document.querySelector('html').onclick = function(){
		alert("Ouch! Stop poking me!");
}*/

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc=myImage.getAttribute('src');
	alert("Surprise!!!");
	if(mySrc==='images/clickme.jfif'){
		myImage.setAttribute('src','images/TPbirthday.jpg');
	}else{
		myImage.setAttribute('src','images/clickme.jfif');
	}
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
	var myName = prompt('Whose birthday is it?');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Happy Birthday '+myName+'!!!';
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = "Happy Birthday "+storedName+'!!!'; //note the diff from above, website/page.
}

myButton.onclick = function(){
	setUserName();
}