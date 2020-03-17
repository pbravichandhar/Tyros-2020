/**
 * 
 * @author: beniel
 * @since:17-03-2020
 * @version:1.0
 *  
 * @descripition 
 *        program to find the given word is present in a given puzzle or not.....
 */
let a = [
    ["P", "S", "U", "W", "H", "A", "T", "S"],
    ["L", "P", "A", "C", "K", "A", "G", "E"],
    ["N", "Y", "O", "L", "R", "D", "V", "L"],
    ["F", "I", "N", "G", "E", "Z", "B", "M"],
    ["I", "R", "E", "H", "Q", "N", "J", "O"],
    ["A", "T", "B", "V", "G", "Y", "E", "S"],
    ["J", "D", "U", "W", "U", "E", "S", "T"],
    ["P", "S", "T", "I", "C", "K", "E", "Y"]
];
let words = ["STICK", "MOST", "KEY", "VEIN", "YES", "PACKAGE", "TUBE", "TARGET", "ELM", "SPY","MLES"]
for (let element = 0; element < words.length; element++) {
    let flag=0;
    let b = words[element];
    let iteration_i, iteration_j;
    for (iteration_i = 0; iteration_i < a.length; iteration_i++) {
        for (iteration_j = 0; iteration_j < a.length; iteration_j++) {
            let k = 0;
            let count = 0;
            if (a[iteration_i][iteration_j] == b[k]) {
                if (iteration_i + b.length - 1 <= 7) {
                    k = 1;
                    count = 1;
                    let buttom = iteration_i;
                    for (let r = 1; r < b.length; r++) {
                        buttom++;
                        if (a[buttom][iteration_j] == b[k]) {
                            k++;
                            count++;
                        }
                        else {
                            break;
                        }
                        if (count == b.length) {
                            console.log(b + " String present");
                            flag=1;
                        }

                    }
                }
                if (iteration_j + b.length - 1 <= 7) {
                    k = 1;
                    count = 1;
                    let left = iteration_j;
                    for (let r = 0; r < b.length - 1; r++) {
                        left++;
                        if (a[iteration_i][left] == b[k]) {
                            k++;
                            count++;
                        }
                        else {
                            break;
                        }
                        if (count == b.length) {
                            console.log(b + " String present");
                            flag=1;
                        }

                    }
                }
                if (iteration_j - (b.length - 1) >= 0) {
                    k = 1;
                    count = 1;
                    let right = iteration_j;
                    for (let r = 0; r < b.length - 1; r++) {
                        right--;
                        if (a[iteration_i][right] == b[k]) {
                            k++;
                            count++;
                        }
                        else {
                            break;
                        }
                        if (count == b.length) {
                            console.log(b + " String present");
                            flag=1;;
                        }

                    }
                }
                if (iteration_i - (b.length - 1) >= 0) {
                    k = 1;
                    count = 1;
                    let top = iteration_i;
                    for (let r = 1; r < b.length; r++) {
                        top--;
                        if (a[top][iteration_j] == b[k]) {
                            k++;
                            count++;
                        }
                        else {
                            break;
                        }
                        if (count == b.length) {
                            console.log(b + " String present");
                            flag=1;
                        }

                    }
                }
            }
        }
    }
    if(flag==0){
        console.log( b+" not present")
    }
}
