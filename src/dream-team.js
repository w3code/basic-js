const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(Array.isArray(arr) != 1){
    return false
  } else{
    const nameArr = arr.filter(word => typeof word === 'string')
  console.log(arr.filter(word => typeof word === 'string'))
  let dreamTeamName = [];
  for(let i = 0; i < nameArr.length; i++){
    nameArr[i] = String(nameArr[i]).trim();
    nameArr[i].toUpperCase().charCodeAt(0) >= 65 && nameArr[i].toUpperCase().charCodeAt(0) <= 90 ? dreamTeamName.push(nameArr[i].toUpperCase().slice(0, 1)): false;
  }
  return dreamTeamName.sort().join('');
  }
};