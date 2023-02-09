let bubbleSort = (inputArr)=>{
    let len = inputArr.length
    for(let i = 0;i<len;i++){
        if(inputArr[j]>inputArr[j+1]){
            let temp = inputArr[j]
            inputArr[j]=inputArr[j+1]
            inputArr[j+1]=temp
        }
    }
    return inputArr;
}
console.log(bubbleSort('[6,2,4,7]'));