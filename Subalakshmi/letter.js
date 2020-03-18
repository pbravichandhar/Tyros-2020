/* replace letter */
function strReplace(){
    let myStr = 's@ar@ @he @ime';
    let newStr = myStr.replace(/@/g, "t");
    console.log(newStr);
}
console.log(strReplace());  //function call