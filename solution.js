

const add = (x,y) => { return x + y; }
const subtract = (x,y) => { return x - y; }
const times = (x,y) => { return x * y; }
const division = function(x,y) { return x / y; }


function calculate(x,y,f){
    if(typeof x === "number" && typeof y === "number"){
        return f(x,y);
    }
    else return 0;
}

console.log(calculate(10,20,add));
console.log(calculate(10,20,subtract));
console.log(calculate(10,20,times));
console.log(calculate(10,20,division));
console.log(calculate("10",20,add));

