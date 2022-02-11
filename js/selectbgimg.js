var imgArr=["https://api.vvhan.com/api/bing?type=sj"];

var index = parseInt(Math.random()*(imgArr.length-1));
var currentImage=imgArr[index];
document.body.style.backgroundImage="url("+currentImage+")"


