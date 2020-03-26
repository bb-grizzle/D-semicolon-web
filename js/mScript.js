window.onload = function(){
	setInterval(()=>{
		 introRanBg();
		changeRanColor();
	},500)
	
}

function introRanBg(){
	var ranNumb = Math.floor( Math.random()*16)+1;
	var numb = "";
	if(ranNumb<10){
		numb  = "0" + ranNumb;
	}else{
		
		numb  = ranNumb;
	}
	
	var imageNumb = "image/intro/intro_" + numb + ".png";
	
	var bg = document.querySelector(".intro-bg");
	bg.src = imageNumb;
}

function changeRanColor(){
	var semi = document.querySelector(".semi");
	var color = ["b", "w"];
	var ran = Math.floor(Math.random()*2);
	var imgSrc = "image/semicolon_" + color[ran] +".svg";
	
	semi.src = imgSrc;
}