const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) != 1) {
    throw new error;
  } else {
    let newArr = arr.slice();
    for (let i = 0; i < newArr.length; i++) {
      if (typeof newArr[i] === 'string') {
        switch (newArr[i]) {
          case '--discard-next':
            newArr[i + 1] = 'delete';
            newArr[i] = 'delete'
            i++;
            break;
          case '--discard-prev':
            newArr[i - 1] = 'delete';
            newArr[i] = 'delete'
            break;
          case '--double-next':
            newArr[i] = newArr[i + 1];
            break;
          case '--double-prev':
            newArr[i] = newArr[i - 1];
            break;
          default:
            break;
        }
      }
    }
    return newArr.filter(word => word != 'delete' && word != undefined)
  }
};