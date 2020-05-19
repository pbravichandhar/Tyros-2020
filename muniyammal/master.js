String.prototype.consonants = function () { return this.replace(/[aeiou]/gi, '') }
String.prototype.vowels = function () { return this.replace(/[aeiou]/gi, '') }

const counter = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

 // function for create encrypt surename,name,dob,gender

function masterEncrypt ({ name, surname, gender, dob }) {
  let A = (surname.consonants().slice(0,3) + surname.vowels() + '...').slice(0,3)
  let B = (name.consonants().replace(/(.).(?=..)/, '$1').slice(0,3) + name.vowels() + '...').slice(0,3)
  let C = dob.slice(-2) + counter[+dob.match(/\d+/g)[1]]
  let D = ('0' + dob.match(/\d+/)[0]).slice(-2)
  if (gender === 'M') {
    d -= -20
  }
  return ((A+B+C+D).toUpperCase());
}

// function call with arguments

console.log(masterEncrypt({ name: "SRIVIDYA", surname: "COLLEGE", gender: "S", dob: "15/04/1999" })) 