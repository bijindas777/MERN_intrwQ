

function addMatrix(){

    const matrix1 = [[1,2,3]   
                    [4,5,6]
                    [7,8,9]]
    
       const   matrix2 = [[9,8,7]
                     [6,5,4]
                     [3,2,1]]
    
                     const result = [];
    
        for(let i =0;i<matrix1.length;i++){
            result.push([]);
            for(let j=0;j<matrix1[i].length;j++){
                result[i][j]= matrix1[i][j]+ matrix2[i][j]
            }
        }
        return result
        
}
    console.log(addMatrix);