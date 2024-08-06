const A = [1,2,3,4,5]

function reverseString(A){
    let temp = [...String(A)];
    result = temp.reverse();
    return result.join("");
}

let b = reverseString(32442);
console.log(b);