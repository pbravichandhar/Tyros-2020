function JoinArray(array){
  var val = ""
  for(var i = 0; i < array.length; i++)
    val += array[i].join("")
  return val
}

// Check if substring exists at given position with given letters 
function IsSubstring(str, subStr, pos, inc){ 
  var j = 0;
  for(var i = pos; i < str.length, j < subStr.length; i += inc, j++)
    if (str.charAt(i) != subStr.charAt(j)) return false
  if (j < subStr.length) return false
  return true
}

function WordCount(arr, word){ 
  var rowCount = arr.length
  var rowSize = arr[0].length
  var string = JoinArray(arr)
  var wordLen = word.length
  var wordCount = 0;
  // Search in rows
  for(var j = 0; j < rowCount; j++)
    for (var i = 0; i <= rowSize - wordLen; i++)
      wordCount += IsSubstring(string, word, j * rowSize + i, 1)
  // Search in columns
  for(var i = 0; i < rowSize; i++)
    for(var j = 0; j <= rowCount - wordLen; j++)
      wordCount += IsSubstring(string, word, j * rowSize + i, rowSize)
  return wordLen > 1 ? wordCount : wordCount / 2
}

var puzzle = [['S', 'T', 'I', 'C', 'K'], 
              ['T', ' ', ' ', ' ', ' '],
              ['I', ' ', ' ', 'K', ' '],
              ['C', 'I', 'K', 'E', 'Y'],
              ['K', ' ', ' ', 'Y', ' ']]

console.log("STICK  : " + WordCount(puzzle, "STICK")); 
console.log("KEY: " + WordCount(puzzle, "KEY")); 
console.log("CIKEY: " + WordCount(puzzle, "CIKEY")); 
console.log("K: " + WordCount(puzzle, "K")); 