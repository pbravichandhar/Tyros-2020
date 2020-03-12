/*

*/
let a = ['abc', 'def', 'ijk']
let b = [];
let count = 0;
if (a.length != 3) {
    console.log("invalide input try in length of 3");
} else {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            for (let z = 0; z < a.length; z++) {
                if ((i != j) && (j != z) && (z != i)) {
                    b.push(a[i]);
                    b.push(a[j]);
                    b.push(a[z]);
                    count++;
                    console.log(b)
                    b = [];
                }
            }
        }
    }
    console.log("Total combination for an given " + a + " is " + count)
}