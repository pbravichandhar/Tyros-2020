let input = window.prompt("Enter the string:");

let reversedString = "zyxvutsrqponmlkjihgfedcba";
let mirroredString = "";
let length = input.length;

for(let i = 0; i < length; i++){
    mirroredString = mirroredString + reversedString.charAt(input.charCodeAt(i) - 97);
}

window.alert("The mirrored String is "+mirroredString);

