
function isWristband(arr) {
    
	let wristband = true
	//horizontal check
	for(let i=0; i<arr.length; i++){
		for(let j=1;j<arr[i].length; j++){
			if(arr[i][j-1]!=arr[i][j]){
				wristband =false;
				break;
			}
		}
	}
	if(wristband) return true
	wristband =true
	//vertical check
	for(let j=0;j<arr[0].length;j++){
		for(let i=1;i<arr.length;i++){
			if(arr[i-1][j]!=arr[i][j]){
				wristband =false;
				break;
			}
		}
	}
	if(wristband) return true
	wristband =true
	//diagonal left check
	for(let i=1; i<arr.length;i++){
		for(let j=1; j<arr[0].length;j++){
			if(arr[i-1][j-1]!= arr[i][j]){
				wristband =false
				break;
			}
		}
	}
	if(wristband) return true
	wristband =true
	for(let i=1; i<arr.length; i++){
		for(let j=1; j<arr[0].length;j++){
			if(arr[i-1][j]!=arr[i][j-1]){
				wristband= false
				break
			}
		}
	}
	return wristband
}
console.log(isWristband([['A', 'A'], ['B', 'B'], ['C', 'C']]))
console.log(isWristband([['A', 'B'], ['A', 'B'], ['A', 'B']]))
console.log(isWristband([['A', 'B'], ['A', 'B'], ['A', 'C'], ['A', 'B']]))
console.log(isWristband([['A', 'B', 'C'], ['C', 'A', 'B'], ['B', 'C', 'A'], ['A', 'B', 'C']]))
console.log(isWristband([['A', 'B', 'C'], ['C', 'A', 'B'], ['D', 'C', 'A'], ['E', 'D', 'C']]))
console.log(isWristband([['A', 'B', 'C'], ['B', 'A', 'B'], ['D', 'C', 'A'], ['E', 'D', 'C']]))
console.log(isWristband([['A', 'B', 'C'], ['B', 'C', 'A'], ['C', 'A', 'B'], ['A', 'B', 'A']]))
console.log(isWristband([['A', 'A'], ['B', 'B'], ['C', 'C'], ['C', 'C']]))
console.log(isWristband([['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'B']]))