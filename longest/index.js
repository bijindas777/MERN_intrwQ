
const sen = "i love you"

function findLongestWord(str) { 

    var strSplit = str.split(' ')
    var longestWord = 0
    for(let i = 0;i<strSplit.length;i++){
      if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length
      }
    }
      return longestWord; 
  
  }
     const longestOne = findLongestWord(sen) 
 
  console.log(longestOne);

