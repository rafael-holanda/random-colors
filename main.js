function hexGenerator(){
  const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  var hex = "#";
  for(var i = 0; i < 6; i++){
    hex += chars[Math.floor(Math.random() * 16)]
  }
  return hex;
}

// Function to convert hex format to RGB format // Needs to be finished
function hexToRGB(hex){
  var rgb = "(";
  var red = "", green = ""; blue = "";
  for(var i = 1; i < 7; i++){
    if(i == 1 || i == 2){
      red += hex[i];
      if(i == 2){
        rgb += `${parseInt(red, 16)}, `
      }
    }
    if(i == 3 || i == 4){
      green += hex[i];
      if(i == 4){
        rgb += `${parseInt(green, 16)}, `
      }
    }
    if(i == 5 || i == 6){
      blue += hex[i];
      if(i == 6){
        rgb += `${parseInt(blue, 16)})`
      }
    }
  }
  console.log("RGB: " + rgb);
  return rgb;
}

// #ffffff
// (255, 255, 255)

/*
var varHex = "ff";
var varRgb = parseInt(varHex, 16);
console.log(varRgb);
*/

function colorSet(){
  color = hexGenerator();
  console.log("HEX: " + color);
	document.getElementById("color-block").style.backgroundColor = color;
  document.getElementById("background").style.backgroundColor = color + "50";
  document.getElementById("hex").innerHTML = `<p>${color}</p>`;
  document.getElementById("rgb").innerHTML = `<p>${hexToRGB(color)}</p>`
}

colorSet();