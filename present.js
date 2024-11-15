var to = '';
var gift_url = 'https://www.instagram.com/chahzzzznho?igsh=Y2xybzFpbHFzMm1v';
var gift_image_url = 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/462360157_1552427268975708_5756868044933605714_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=DzPWvH2twPgQ7kNvgFPBuib&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AEqpjRqMCM9Rz7HMNAKBB-j&oh=00_AYD8lsxmr-H4FlpJZiXKbGZB9QZ0QPHotbGCEOljcG1haA&oe=673D6725';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

