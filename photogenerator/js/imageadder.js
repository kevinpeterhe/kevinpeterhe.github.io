const images = [
	"https://kevinpeterhe.github.io/photogenerator/images/1.png",
  "https://kevinpeterhe.github.io/photogenerator/images/2.png",
  "https://kevinpeterhe.github.io/photogenerator/images/3.png",
  "https://kevinpeterhe.github.io/photogenerator/images/4.png",
  "https://kevinpeterhe.github.io/photogenerator/images/5.png",
  "https://kevinpeterhe.github.io/photogenerator/images/6.png",
  "https://kevinpeterhe.github.io/photogenerator/images/7.png",
  "https://kevinpeterhe.github.io/photogenerator/images/8.png",
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
  "#6a8fa2", 
  "#000000",
  "#000000",
  "#c3ccd1",
  "#928f7f"
]

const gradientArray = [
  "linear-gradient(45deg, #eb5f6f, #bfe9ff)",
  "linear-gradient(45deg, #112653, #e78ebe)", 
  "linear-gradient(45deg, #385573, #c2d4e8)",
  "linear-gradient(45deg, #b55eaf, #8cd6dc)", 
  "linear-gradient(45deg, #274046, #E6DADA)", 
  "linear-gradient(45deg, #642B73, #bc7d89)",
  "linear-gradient(45deg, #0e1d24, #30515a)", 
  "linear-gradient(45deg, #5e8e90, #dcecec)",
  "linear-gradient(45deg, #1e4457, #92aec4)", 
  "linear-gradient(45deg, #232526, #5e5e60)", 
  "linear-gradient(45deg, #232526, #5e5e60)",
  "linear-gradient(45deg, #0a0b0f, #616f7c)",
  "linear-gradient(45deg, #11101e, #928f7f)"
]

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
    // container.style.background = colorArray[newRandom];
    container.style.backgroundImage = gradientArray[newRandom];
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