const images = [
	"https://kevinpeterhe.github.io/photogenerator/images/1.png",
  "https://kevinpeterhe.github.io/photogenerator/images/2.png",
  "https://kevinpeterhe.github.io/photogenerator/images/3.png",
  "https://kevinpeterhe.github.io/photogenerator/images/4.png",
  "https://kevinpeterhe.github.io/photogenerator/images/5.png",
  "https://kevinpeterhe.github.io/photogenerator/images/6.png",
  "https://kevinpeterhe.github.io/photogenerator/images/7.png",
  "https://kevinpeterhe.github.io/photogenerator/images/8.png",
  "https://kevinpeterhe.github.io/photogenerator/images/9.png",
  "https://kevinpeterhe.github.io/photogenerator/images/10.png",
  "https://kevinpeterhe.github.io/photogenerator/images/11.png",
  "https://kevinpeterhe.github.io/photogenerator/images/12.png",
  "https://kevinpeterhe.github.io/photogenerator/images/13.png",
  "https://kevinpeterhe.github.io/photogenerator/images/14.png"

]

const colorArray = [
  "#940927",
  "#0f4094", 
  "#7c8fa9",
  "#7d41c0", 
  "#1d2b2f", 
  "#271f3e",
  "#0b3039", 
  "#c3e1e1",
  "#bbc5a5", 
  "#6a8fa2", 
  "#000000",
  "#000000",
  "#c3ccd1",
  "#928f7f"
]

// const gradientArray = [
//   "linear-gradient(45deg, #753a88, #cc2b5e)",
//   "blue", 
//   "linear-gradient(45deg, #56B4D3, #348F50)",
//   "black", 
//   "yellow", 
//   "linear-gradient(45deg, #9733EE, #DA22FF)",
//   "green", 
//   "linear-gradient(45deg, #DD2476, #FF512F)",
//   "purple", 
//   "linear-gradient(45deg, #DD2476, #FF512F)", 
//   "orange", 
//   "gray",
//   "red"
// ]

// var random = Math.floor(Math.random() * images.length)
let i = 0

// to place Random image without repeating same image twice
const placeImage = function (x, y) {
  var newRandom = Math.floor(Math.random() * images.length);
  if(newRandom == i && images.length > 1){
    placeImage(x, y)
  } else {
    i = newRandom
    
// NOW PLACE THE IMAGE
const nextSrc = images[i]

// Create a brand new image and add it to the page
const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")

  img.style.left = x + "px"
  img.style.top = y + "px"

  if (window.innerWidth > 600) {
        var scale = 0.5
} else {
        var scale = 0.25
}

img.style.transform = "translate(-50%, -50%) scale(" + scale + ") rotate(" + (Math.random() * 10 - 5) + "deg)";
    
document.querySelector("section.collage").appendChild(img);

let container = document.getElementById('container');
    container.style.background = colorArray[newRandom];
    // container.style.backgroundImage = gradientArray[newRandom];
    // container.style.backgroundImage = 'linear-gradient('
    // + '45deg' + ', ' + colorArray[newRandom] + ', ' + colorArray[newRandom] + ')';
  }
}

document.querySelector("section.collage").addEventListener("click", function () {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
})

document.querySelector("section.collage").addEventListener("touchend", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})