 "use strict";

let buttons = document.querySelectorAll("button");


for(let onebtn of buttons){
	onebtn.addEventListener("click", function() {

		document.querySelector(".mytext.active").classList.remove("active");
		this.nextElementSibling.classList.add("active");
	})

}