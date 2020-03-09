


const fs = require('fs');

const readFileAsArray = (fileName, value = () => {}) => {
  return new Promise((resolve, reject) => {
    if(typeof fileName !== 'string') {
      process.nextTick(
        value,
        new TypeError('Argument should be string')
      )
      return reject('Argument should be string')
    }

    fs.readFile(fileName, 'utf8', (err, data) => {
      if(err) {
        value(err)
        return reject(err)
      }
      const lines = data.trim().split('\n');
      resolve(lines)
      value(null, lines)
    })
  })
}

// Reading using Promise
readFileAsArray('./num.txt').then(data => {
  const evenNumbers = data.filter(num => num % 2 === 0)
  console.log('Even Numbers : ', evenNumbers)
}).catch(err => {
  console.log(err)
})

const printOddNumber = (error, data) => {
  if(error) throw error;
  const evenNumbers = data.filter(num => num % 2);
  console.log('Odd Numbers : ', evenNumbers)
}

// Reading Using callback
readFileAsArray('./num.txt', printOddNumber)