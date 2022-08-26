const removeFromArray = function(arr,...theArgs) {
    for(const arg of theArgs){
        for(let i=0;i<arr.length;i++){
            if(arg===arr[i]){
                arr.splice(i,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
