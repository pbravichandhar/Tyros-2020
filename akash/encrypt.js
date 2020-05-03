const months = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "H",
  7: "L",
  8: "M",
  9: "P",
  10: "R",
  11: "S",
  12: "T",
};

const performEncrytion = ({ name, surname, gender, dob }) => {
  let outputData = "";

  outputData =
    outputData + encryptSurname(surname) + encryptName(name) + enryptDOBandGender(dob, gender);

  return outputData.toUpperCase();
};

const removeVowels = (value) => {
  return value.replace(/a|e|i|o|u|A|E|I|O|U/g, "");
};

const encryptSurname = (surname) => {
  let removedVowelName = removeVowels(surname);
  if (surname.length < 3) {
    return surname + "X";
  } else if (removedVowelName.length < 3) {
    return removedVowelName + surname.match(/a|e|i|o|u/g)[0];
  } else if (removedVowelName.length > 3) {
    return (
      removedVowelName.charAt(0) +
      removedVowelName.charAt(2) +
      removedVowelName.charAt(3)
    );
  } else {
    return removedVowelName;
  }
};

const encryptName = (name) => {
  let removedVowelName = removeVowels(name);
  if (name.length < 3) {
    return surname + "X";
  } else if (removedVowelName.length < 3) {
    return removedVowelName + surname.match(/a|e|i|o|u/g)[0];
  } else if (removedVowelName.length > 3) {
    return (
      removedVowelName.charAt(0) +
      removedVowelName.charAt(2) +
      removedVowelName.charAt(3)
    );
  } else {
    return removedVowelName;
  }
};

const enryptDOBandGender = (dob, gender) => {
  const year = dob.split("/")[2].slice(2);
  const month = dob.split("/")[1].match(/\d+/g);
  let day = parseInt(dob.split("/")[0]);

  if(gender === "F") {
    day += 40
  } else {
    if(day > 0 && day < 10) {
      day = "0" + day
    } 
  }
  return year + months[month] + day
};

console.log(
  performEncrytion({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900",
  })
);
//output: DBTMTT00A01
