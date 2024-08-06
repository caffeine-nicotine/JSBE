
function makeSet(){
    const S = new Set();
    while(S.size < 10){
        let number = parseInt(Math.random() * 20);
        S.add(number);
    }
    return S;
}

function union(S, T){
    return new Set([...S,...T]);
}

function intersection(S, T){
    return new Set([...S].filter(x => T.has(x)));
}

function difference(S, T){
    return new Set([...S].filter(x => !T.has(x)));
}

let S = makeSet();
S = new Set([...S].sort((x,y) => x - y));
let T = makeSet();
T = new Set([...T].sort((x,y) => x - y));

console.log(S);
console.log(T);
console.log(union(S,T));
console.log(intersection(S,T));
console.log(difference(S,T));
// function union(set) {
//     return new Set([...this, ...set]);
// }

// console.log()