function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);



const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {return "Hole-in-one!";}
else if(strokes <= par - 2) {return "Eagle";}
else if (strokes == par - 1) {return "Birdie";}
else if (strokes == par) {return "Par";}
else if (strokes == par + 1) {return "Bogey";}
else if (strokes == par + 2) {return "Double Bogey";}
else if (strokes >= par + 3) {return "Go Home!";}
  // Only change code above this line
}

golfScore(5, 4);
