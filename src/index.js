
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return ([])

  }
  let arr = [...matrix]
  let n = arr.length;
    let i = 0;
    let result = [];
     if(n!==0) {
    while (i < n) {
      if (i%2===1){
         let add = arr[i].reverse();
       result = result + add + ','

      } else {
           let elseadd = arr[i]
  result = result + elseadd + ','

      }
      i = i + 1;
    }
      let newarr = result.split(',')
      newarr.pop()

let resres = newarr.map(string => +string)
return resres
    } else {
    
      return ([]) }

      
    


}

