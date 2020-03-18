let s = "ABC";
function Permutations()
{
	// Recursive function to generate all permutations of a let
		if (remaining.length() == 0) {
			console.log(candidate);
		}

		for (let i = 0; i < remaining.length(); i++)
		{
			let newCandidate = candidate + remaining.charAt(i);

			let newRemaining = remaining.sublet(0, i) +
								  remaining.sublet(i + 1);

			permutations(newCandidate, newRemaining);
        }

	// Find Permutations of a let in Java
	
	
	console.log (	permutations("", s));
}