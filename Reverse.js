//1. Take a sentence as an input and reverse every word in that sentence.
//Example - This is a sunny day > shiT si a ynnus yad.

const str = ' This is a sunny day';
const reverseSentence = str => {
   const arr = str.split(" ");
   const reversed = arr.map(el => {
      return el.split('').reverse().join("");
   });
   return reversed.join(" ");
};
console.log(reverseSentence(str));



