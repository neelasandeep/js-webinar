/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */



function arrayEqual(arr1, arr2) {
   
    let result=true;
    if(arr1.length!== arr2.length)
    {
        console.warn(`arr1 not equal to arr0`);
        result=false;
    }else{
      for(let i=0;i<arr1.length;i++){
         console.log(typeof arr1);
            if(arr1[i]!==arr2[i]){
                result=false;
                console.warn(`arr1 not equal to arr2`);
                break;
            
          }
         
      }
    }
   return result;
}
module.exports = (arrayEqual);