let arr =['milk','apple','lion'];
let n = arr.length;
let temp;
   for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
     if (arr[j] < arr [j - 1]) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
     }
    }
   }
   for (let i = 0; i < n; i++) {
     console.log(arr[i]) ;
   }