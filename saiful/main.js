var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/saiful10.jpg') {
      myImage.setAttribute ('src','images/saiful31.jpg');
    }else {
	  myImage.setAttribute ('src','images/saiful10.jpg');
	}
   
}