function buildStaircase(range, symbol) {
    let patternArray = []
    for(let rows=1;rows<=range;rows++) { 
        for(let columns=1;columns<=rows;columns++){
            patternArray.push(symbol)
        }  
        for(let k=rows+1;k<=range;k++) {
            patternArray.push('-')
        }
        console.log(patternArray)
        patternArray = []
    }
}

buildStaircase(9, '&')
