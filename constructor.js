function Student(id, name, grade){
    this.id = id;
    this.name = name;
    this.grade = grade;

    this.toString = function() {
        console.log
    }

    this.jsonInfo = function() {
        console.log(JSON.stringify(this));
    }

}

const s1 = new Student(1003,'홍길동', 3.14);
const s2 = new Student(1001,'이순신', 3.87);
const s3 = new Student(1002,'김철수', 2.88);

let A = [s1,s2,s3];
A = A.sort((x,y) => {
    if (x.name < y.name)
        return -1;
    else if (x.name > y.name)
        return 1;
    else
        return 0;
})

console.log(JSON.stringify(A));

A.sort((x,y) => y.grade - x.grade);

console.log(JSON.stringify(A));