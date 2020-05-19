const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter no of elements:', (number) => {
    arr(number);
});

function arr(number) {
    rl.question('Enter elements:', (elements) => {
        for (let i = 0; i < number; i++) {
			arr[i];
		}
	});
}
		
		
function isWristband(arr) {

	let wristband = 1;
	//horizontal check
	for(let i=0; i<arr.length; i++){
		for(let j=1;j<arr[i].length; j++){
			if(arr[i][j-1]!=arr[i][j]){
				wristband =0;
				break;
			}
		}
	}
	if(wristband==1) return true
	wristband =1
	//vertical check
	for(let j=0;j<arr[0].length;j++){
		for(let i=1;i<arr.length;i++){
			if(arr[i-1][j]!=arr[i][j]){
				wristband =0;
				break;
			}
		}
	}
	if(wristband==1) return true
	wristband =1
	//diagonal left check
	for(let i=1; i<arr.length;i++){
		for(let j=1; j<arr[0].length;j++){
			if(arr[i-1][j-1]!= arr[i][j]){
				wristband =0
				break;
			}
		}
	}
	if(wristband==1) return true
	wristband =1
	for(let i=1; i<arr.length; i++){
		for(let j=1; j<arr[0].length;j++){
			if(arr[i-1][j]!=arr[i][j-1]){
				wristband= 0
				break
			}
		}
	}
	return wristband
}
