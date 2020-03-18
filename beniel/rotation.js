/**
 * 
 * @author: beniel
 * @since:17-03-2020
 * @version:1.0
 * @descripition 
 *        input = [1,2,3,4,5]
 *        we give the rotation value 4 then the array will change
 *          [1,2,3,4,5] -> [ 2, 3, 4, 5, 1 ] -> [ 3, 4, 5, 1, 2 ]-> [ 4, 5, 1, 2, 3 ] -> [ 5, 1, 2, 3, 4 ]
 *      
 *       the final arrau will return like [ 5, 1, 2, 3, 4 ] for the given input array [1,2,3,4,5]
 */
let input = [1, 2, 3, 4, 5]
let output = []
let rotation = 21;
while (rotation > input.length) {
  rotation -= input.length;
}
for (let index = 0; index <= input.length; index++) {
  if (rotation >= input.length) {
    rotation = 0;
  }
  else {
    output.push(input[rotation]);
    rotation++;
  }
}
console.log(output)