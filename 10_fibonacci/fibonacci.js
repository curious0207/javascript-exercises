const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }
    if(typeof(n)=="string"){
        n=+n;
    }
    let  a=1;
    let b=1;
    if(n==1||n==2){
        return a;
    }
    for(let i=1;i<=n-2;i++){
        c=a+b;
        a=b;
        b=c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
