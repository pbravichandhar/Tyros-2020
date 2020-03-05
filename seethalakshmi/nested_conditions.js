let Valv_num = process.stdin;
Valv_num.setEncoding('utf-8');
console.log("Enter the value:");
Valv_num.on('data', function (data) {
  if (data % 7 == 0) {
    console.log("Is a multiple of 7");
  }
  else if (data <= 30) {
    console.log(Math.sqrt(data));
  }
  else {
    console.log(data * data);
  }
});
