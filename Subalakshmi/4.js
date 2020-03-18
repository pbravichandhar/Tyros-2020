function Consecutive(){
        let n=10;
        String seq = "";
        for(int i = n - 1; i >= 1; i--){
            int sum = 0;
            seq = "";
            boolean status = false;
            for(int j = i; j >= 1; j--){
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
}
