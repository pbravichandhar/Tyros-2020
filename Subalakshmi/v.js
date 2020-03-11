function Consecutive(){
    let n=10;
    let seq = "";
    for(let i = n - 1; i >= 1; i--){
        let sum = 0;
        seq = "";
        let status = false;
        for(let j = i; j >= 1; j--){
            sum += j;
            seq = j + " + " + seq;
            if(sum == n){
                status = true;
                break;
            }
        }
        if(status)
            console.log(seq.substring(0, seq.lastIndexOf('+')));
    }

}
