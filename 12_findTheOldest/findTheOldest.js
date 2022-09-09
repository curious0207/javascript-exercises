const findTheOldest = function(arr) {
    let max=0;
    const age=[];
    let st;
    for(let i=0;i<arr.length;i++){
        if(arr[i].yearOfDeath==undefined){
            const d = new Date();
            arr[i].yearOfDeath=d.getFullYear();
        }
        age[i]=arr[i].yearOfDeath-arr[i].yearOfBirth;
        if(age[i]>max){
            max=age[i];
            st=i;
        }
    }
    return arr[st];
};

// Do not edit below this line
module.exports = findTheOldest;
