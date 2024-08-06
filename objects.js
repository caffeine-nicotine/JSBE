function frequency(str){
    f = {};
    for (let ch of str)
        f[ch] = (f[ch] ?? 0) + 1;
    console.log("빈도수 = ", f);
    const maxVal = Math.max(...Object.values(f)); // 객체를 배열로 풀어헤쳐서 맥스값 찾기.
    /*
    for (let [key, value] of Object.entries(f))
        if (Value == maxVal)
            console.log(`가장 많이 입력된 문자 = ${key} (발생 빈도수 = ${value})`);

    */
    
    
    console.log("가장 많이 입력된 문자 = ", maxVal);
    

    /*
    f = {};
    for (let ch of str) {
        f[ch] = (f[ch] ?? 0) + 1; // f[ch] 가 있으면 f[ch] 값을, 없으면 0 에 1을 더하여 저장.
    console.log("빈도수 = ", f);
    
    */
}

frequency("UUAUUGCUUCUCCUACUG");