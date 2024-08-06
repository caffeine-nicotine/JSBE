function unionArray(A,B){ // [...new Set] 을 이용하는게 더 편리하긴 함.
    let o = {};
    for (let x of A)
        o[x] = x;
    for (let ch of B){
        o[ch] = ch;
    }
    return Object.values(o);
}

console.log(unionArray([1,2,3],[100,2,1,10]));