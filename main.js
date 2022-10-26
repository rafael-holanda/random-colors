function hexGenerator(){
  const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  var hex = "#";
  for(var i = 0; i < 6; i++){
    hex += chars[Math.floor(Math.random() * 16)]
  }
  return hex;
}

// Function to convert hex format to RGB format // Needs to be finished
/* function hexToRGB(hexColor){
  rgbColor = hexColor;
  for(var i = 1; i < 7; i++){

  }
} */

function colorSet(){
  color = hexGenerator();
  console.log(color);
	document.getElementById("color-block").style.backgroundColor = color;
  document.getElementById("background").style.backgroundColor = color + "50";
  document.getElementById("hex").innerHTML = `<p>${color}</p>`;
}

colorSet();