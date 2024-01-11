/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Game Over";

document.querySelector("html").addEventListener("click", function() {
alert("ouch! stop poking me!");
});
*/
function myFunction() 
{
	alert("ouch! Stop poking me!"); 
}

const myImage = document.getElementById("myImage"); 
const myHeader = document.getElementById("myHeader"); 
myImage.onclick = function() {
	let mySrc = myImage.getAttribute("src"); 
	 if(mySrc === "Images/MainPage-Logos/PSItemsItems-Logo.jpg")
	 {
		myImage.setAttribute("src", "Images/MainPage-Logos/PCItems-Logo.jpg");
		myHeader.textContent = "PC is cool!"; 
	 }
	 else 
	 {
		myImage.setAttribute("src", "Images/MainPage-Logos/PSItemsItems-Logo.jpg");
		myHeader.textContent = "PS5 is cool"; 
	}
};


