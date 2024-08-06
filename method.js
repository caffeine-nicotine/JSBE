a = [1,2,3,4,-5,-6];

function shuffle(a){
    const length = a.length;
    let resultArray = new Array(length);
    for(let i = 0; i < length; i++){
        let index = parseInt(length * Math.random());
        resultArray[i] = a[index];
    }

    return resultArray;
}

function absMax(A){
    return A.map(x => (x > 0) ? x : -x)
}

let temp = shuffle(a);
const max = (a) => { return a.reduce((x,y) => ( x > y ) ? x : y ) ; }
const min = (a) => { return a.reduce((x,y) => ( x < y ) ? x : y ) ; }
const sum = (a) => { return a.reduce((x,y) => x + y ); }

const multiply = (a) => { return a.reduce((x,y) => x*y); } 

console.log(temp);
console.log(multiply(a));
console.log(absMax(a));