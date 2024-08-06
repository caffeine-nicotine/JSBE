A = [1,1,2,3,1,2,3,1,0,1,4]

function findAll(A,x){
    let result = [];
    for(let i = 0; i < A.length; i++){
        if (A[i] === x) result.push(i)
    }
    return result;
}

console.log(findAll(A,1));

/*

function findAll(A, x){
    const result = [];
    let fromIndex = 0;
    while((pos = A.indexOf(x, fromIndex)) != -1){
        result.push(pos)};
        fromIndex = pos + 1;
    }
    return result;
}


*/