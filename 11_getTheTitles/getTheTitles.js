const getTheTitles = function(arr) {
  let titlearr=[];
  for(let i=0;i<arr.length;i++){
    titlearr.push(arr[i].title);
  }
  return titlearr;
};

// Do not edit below this line
module.exports = getTheTitles;
