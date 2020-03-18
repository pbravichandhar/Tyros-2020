let permArr = [], usedChars = [];
function permute(input) {
	//convert input into a char array (one element for each character)
	let i, ch, chars = input.split("");
	for (i = 0; i < chars.length; i++) {
		//get and remove character at index "i" from char array
		ch = chars.splice(i, 1);
		//add removed character to the end of used characters
		usedChars.push(ch);
		//when there are no more characters left in char array to add, add used chars to list of permutations
		if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
		//send characters (minus the removed one from above) from char array to be permuted
		permute(chars.join(""));
		//add removed character back into char array in original position
		chars.splice(i, 0, ch);
		//remove the last character used off the end of used characters array
		usedChars.pop();
	}
}

function calcPerms(str2permute, display, txtArea, delimiter) {
	if (delimiter == "\\n") delimiter = "\n";
	let doIt = false;
	let strLen = str2permute.length;

	if (strLen == 0) {
		//can't permute zero-length string
	}else if(strLen >= 10) {
		alert("It would take too long and use too much memory to calculate the permutations of a " + strLen + "-character string using JavaScript.\nPlease use a different method.");
	}else if(strLen > 5) {
		doIt = confirm("This may take a while.\nAre you sure you want to continue?");
	}else
		doIt = true;

	if(doIt) {
		if (display) txtArea.value = "Please wait...";
		permArr = [];
		permute(str2permute.toString());
		if (display) {
			txtArea.value = permArr.join(delimiter);
			permArr = [];
		}
	}
}