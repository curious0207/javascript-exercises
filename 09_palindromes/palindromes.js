const palindromes = function (str) {
    str=str.toUpperCase();
    let arr=str.split("");
    let end=arr.length-1;
    for(let i=0;i<arr.length/2;i++){
        while(arr[i]=='!'||arr[i]==','||arr[i]==' '||arr[i]=='.'){
            i++;
        }
        while(arr[end]=='!'||arr[end]==','||arr[end]=='.'||arr[end]==' '){
            end-=1;
        }
        if(arr[i]!=arr[end]){
            // console.log(arr[i] +"  " +arr[end]);
            // console.log(i +"  " +end);
            return false;
        }
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
