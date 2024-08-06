A = [1,2,3,4,5,'a','b','c',1,2,3,4,5]

function solutionRemove(A,x){ // 특정 값만 없애서 리턴하는 함수
      
    return A.filter(v => v != x);
}

function solutionUnique(A){ // 중복된 거 삭제하는 함수
    return A.filter((v,i, arr) => arr.indexOf(v) == i);  
}


console.log(solutionRemove(A,2));
console.log(solutionUnique(A));

