var slider_content=document.getElementById("box");
var images=['image/slide1','image/slide2','image/slide3'];
var i=images.length;
var time=4000;

	function nextImage(){
		if (i<images.length){
			i=i+1;
		}
		else{
			i=1;
		}
			slider_content.innerHTML="<img src="+images[i-1]+".jpg>";
	}
	function prewImage(){
		if(i<images.length+1 && i>1){
			i=i-1;
		}
		else{
			i=images.length;
		}
		
		slider_content.innerHTML="<img src="+images[i-1]+".jpg>";
	}
setInterval(nextImage, time);