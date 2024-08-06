// Problem 1
// function solution(str, n){
//     let answer = "";
//     for(n; n>0; n--){
//         for(let x of str) answer += x;
//     }
//     return answer;

//     /*
//         str.repeat(n) 이것도 가능


//     */
// }

// console.log(solution("hello", 5));

/////////////////////////////////////////////////////

// Problem 2
// str = "abcde";

// function solution(str){
//     for(let x of str){
//         console.log(x)
//     }
// }

// solution(str);

/////////////////////////////////////////////////////

// Problem 3


// function solution(str){
//     let answer = "";
//     for(let x of str){
//         if(x !== x.toUpperCase())
//             answer += x.toUpperCase();
//         else if(x !== x.toLowerCase())
//             answer += x.toLowerCase();
//     }
//     return answer;
// }

// console.log(solution("aBcDeFg"))

/////////////////////////////////////////////////////

// Problem 4

// function solution(a,b){
//     let compare = "";
//     compare = String(a) + String(b);
//     if(Number(compare) < Number(String(b) + String(a))){
//         compare = String(b) + String(a);
//     }
//     /*
//         이게 더 좋아보임.
//         const ab = String(a) + b;
//         const ba = String(b) + a;
//         return Math.max(Number(ab), Number(ba));

//         Method 2
//         return Math.max(Number(`${a}${b}`, `${b}${a}`))

//     */
//     return compare;
// }

// console.log(solution(12,3));

/////////////////////////////////////////////////////

// Problem 5

function process(str){
    let sol1 = "";
    let sol2 = "";
    let sol3 = "";

    sol1 = str[0] + str + str[0];
    // first+str+first
    sol2 = str[str.length-1] + str.substring(1,str.length-1) + str[0];
    // last+str.slice(1,-1)+first
    sol3 = str.substring(0,str.length/2) + str.substring(str.length/2+1, str.length);
    // str.slice(0, middle)+str.slice(middle+1);
    // Math.floor(str.length / 2) -> 소숫점 부분 다 날라가고 정수만 남음.
    // 혹은 parseInt() 해도 정수만 남는다.
    console.log(sol1);
    console.log(sol2);
    console.log(sol3);
}

process("hello");

/////////////////////////////////////////////////////
// console.log("hello Node");

// let count = 10;
// console.log(Number.MAX_VALUE);

// console.log(`3 + 5 = ${3+5}`);

// x = "3.24";
// console.log(x-0)

// what = "52" 