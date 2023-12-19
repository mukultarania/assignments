/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

}

module.exports = isAnagram;



var obj1 = {
  sayName: function () {        //ES5
    console.log(this);          //Object
    function getName() {
      console.log(this);        //Window
    }
    getName();
  },
  sayAge: function () {         //ES6
    console.log(this);          //Object
    const age = () => {
      console.log(this.age);    //Object
    }
    age();
  },
  name: "Aman",
  age: 26,
}
