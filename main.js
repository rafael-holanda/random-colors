function hexGenerator(){
  const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  var hex = "#";
  for(var i = 0; i < 6; i++){
    hex += chars[Math.floor(Math.random() * (16 - 0))]
  }
  return hex;
}

console.log(hexGenerator())
