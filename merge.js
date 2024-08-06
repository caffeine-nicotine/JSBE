function merge(target,...sources){
    /*

    for (let obj of sources) { // 배열엔 of
        for (let key in obj) { // 오브젝트에는 in 을 쓴다.
            if(!(key in target))
                target[key] = obj[key];
        }
    }
    return target;  

    */
    console.log(target);
    console.log(sources);    
    
    return target;
}

function restrict(target,...sources){
    /*

    for (let key in target){
        for (let obj of sources)
            if (!(key in obj)){
                delete target[key];
                break;
            }
    }
    return target;
    
    */
    console.log(target);
    console.log(sources);    
    
    
    return target;
}


console.log(merge({x:1}, {x:2, y:2}, {y:3,z:4}));
console.log("---------------");
console.log(restrict({x:1,y:4},{x:2,y:2},{y:3,z:4}));















