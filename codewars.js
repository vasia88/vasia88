function reverseWords(str) {
  // Go for it  
   return str.split(" ").map(
            function(a) {return a.split("").reverse().join("")}
           ).join(" ");

}
