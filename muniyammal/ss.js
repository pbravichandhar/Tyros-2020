function isarrange(array) {

	let arrange = true
	//horizontal check
	for(let start=0; start<array.length; start++){
		for(let end=1;end<array[start].length; end++){
			if(array[start][end-1]!=array[start][end]){
				arrange =false;
				break;
			}
		}
	}
	if(arrange) return true
	arrange =true
	//vertical check
	for(let end=0;end<array[0].length;end++){
		for(let start=1;start<array.length;start++){
			if(array[start-1][end]!=array[start][end]){
				arrange =false;
				break;
			}
		}
	}
	if(arrange) return true
	arrange =true
	//diagonal left check
	for(let index=1; index<array.length;index++){
		for(let first=1; first<array[0].length;first++){
			if(array[index-1][first-1]!= array[index][first]){
				arrange =false
				break;
			}
		}
	}
	if(arrange) return true
	arrange =true
	for(let index=1; index<array.length; index++){
		for(let first=1; first<array[0].length;first++){
			if(array[index-1][first]!=array[index][first-1]){
				arrange= false
				break
			}
		}
	}
	return arrange
}
console.log(isarrange([['A', 'A'], ['B', 'B'], ['C', 'C']]))
console.log(isarrange([['A', 'B'], ['A', 'B'], ['A', 'B']]))
console.log(isarrange([['A', 'B'], ['A', 'B'], ['A', 'C'], ['A', 'B']]))
console.log(isarrange([['A', 'B', 'C'], ['C', 'A', 'B'], ['B', 'C', 'A'], ['A', 'B', 'C']]))
console.log(isarrange([['A', 'B', 'C'], ['C', 'A', 'B'], ['D', 'C', 'A'], ['E', 'D', 'C']]))
console.log(isarrange([['A', 'B', 'C'], ['B', 'A', 'B'], ['D', 'C', 'A'], ['E', 'D', 'C']]))
console.log(isarrange([['A', 'B', 'C'], ['B', 'C', 'A'], ['C', 'A', 'B'], ['A', 'B', 'A']]))
console.log(isarrange([['A', 'A'], ['B', 'B'], ['C', 'C'], ['C', 'C']]))
console.log(isarrange([['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'B']])) 