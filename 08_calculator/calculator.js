const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let sum=1;
  for(let i=0;i<arr.length;i++){
    sum*=arr[i];
  }
  return sum;
};

const power = function(base,power) {
  let pro=base;
	for(let i=1;i<power;i++){
    base*=pro;
  }
  return base;
};

const factorial = function(num) {
	let pro=1;
  for(let i=num;i>=1;i--){
    pro*=i;
  }
  return pro;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
