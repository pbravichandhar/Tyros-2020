/**
 * @author:Subalakshmi
 * @since:24-03-2020
 * @Task:14
 * program : Master Encrypt
 * Program Descryption:
 * Example: 
 *       
 *       masteCode({
         name: "Mickey",
         surname: "Mouse",
         gender: "M",
         dob: "16/1/1928"
         }) ➞ "MSOMKY28A16"
         
**/

String.prototype.consonants = function () { return this.replace(/[aeiou]/gi, '') }
String.prototype.vowels = function () { return this.replace(/[^aeiou]/gi, '') }

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

 // function for create encrypt surename,name,dob,gender

function encrypt ({ name, surname, gender, dob }) {
  let a = (surname.consonants().slice(0,3) + surname.vowels() + 'XXX').slice(0,3)
  let b = (name.consonants().replace(/(.).(?=..)/, '$1').slice(0,3) + name.vowels() + 'XXX').slice(0,3)
  let c = dob.slice(-2) + months[+dob.match(/\d+/g)[1]]
  let d = ('0' + dob.match(/\d+/)[0]).slice(-2)
  if (gender === 'F') {
    d -= -40
  }
  return (a+b+c+d).toUpperCase()
}

// function call with arguments

console.log(encrypt({ name: "Mickey", surname: "Mouse", gender: "M", dob: "16/2/1928" }))