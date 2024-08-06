function otp(){
    const canPassword = "abcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for(let i = 0; i<6; i++){
        let pos = parseInt(canPassword.length * Math.random());
        result += canPassword[pos]
    }
    console.log(result);
}

otp();