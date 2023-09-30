function reverseWords(str) {
  // Go for it  
   return str.split(" ").map(
            function(a) {return a.split("").reverse().join("")}
           ).join(" ");

}



function timesFive(num) {
  return num * 5;
}
const answer = timesFive(3);
