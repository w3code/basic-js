const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let num = 0;
  for(let i = 0; i < arr.length; i++){
    num = num += arr[i].filter(each => each === '^^' ).length;
  }
  return num;
};
