function first(A, n=1 /* n=1 처럼 디폴트 설정 가능 */){


    return A.slice(0,n);
}

function last(A, n=1){
    return A.slice(-n);
}

console.log(first([],3));
console.log(last([7,9,0,-2],6));