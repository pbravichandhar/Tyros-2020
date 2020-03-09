const sort = require("readline")
const s = sort.createInterface({
    input : process.stdin,
    output : process.stdout
})
let sort_array = [];
s.question('Enter the elements:', (stringr) => {
    arraysort(string);

            function sort(a, b) {
                if (a > b) {
                  return 1;
                } else if (a < b) {
                  return -1;
                } else if (a === b) {
                  return 0;
                }
                else{
                    console.log('invalid....');
                }
           s.close();
            }
        });