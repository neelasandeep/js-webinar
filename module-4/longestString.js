/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(list){
    let long=0;
    let str="";
    if(list.length===1 || typeof list==='string'){
        str= "";
    }else if(list.length>1){
       
            for(let i=0;i<list.length;i++){
                if(typeof list[i]=== 'string' ){
                    if(list[i].length>long){
                        long=list[i].length;
                        str=list[i];
                    }else if(list[i].length===long && list[i].localeCompare(str) >0){
                        str=str;
                        long=str.length;
                    }else{
                        str=list[i];
                    }
                  
                }
            }
        
    }
   console.log(str);
   
  return str;
}
module.exports=(longestString);