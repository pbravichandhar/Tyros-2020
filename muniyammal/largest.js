var arr = "";
function largest(arr) {
	var large = arr[0];
	for(var i=0; i<arr.length; i++){
		if(large < arr[i]) {
			large = arr[i];
		}
	}
	return large;
}

var input ={name:"raju", notes: [10,20,30],topnotes:''};
 input.topnotes = largest(input.notes);
console.log(input);