/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum(arr){
    let result=0;
if(Array.isArray(arr) && arr.length!==0){
    for(let i=0; i<arr.length;i++){
       
        if(typeof arr[i] ==='number'){
                result+=arr[i];
        }else if(Array.isArray(arr[i])){
           
            result+=arraySum(arr[i]);
        }
}

}else{
    result=0;
}
return result;
}
module.exports=(arraySum);