/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

  function toCamelCase(inputArray){
      if(typeof inputArray!=='string')
      return '';
        let newString=inputArray.split(' ').filter((t)=>{return t})
                                    .map((x,i)=>{let str;
                                        x=x.replace(/[^a-zA-Z0-9]/g, "")
                                        if(i===0 && x!==''){ 
                                           str= x.toLowerCase();
                                        }else{
                                            str= x.charAt(0).toUpperCase()+x.substr(1).toLowerCase();
                                        }
                                     return str;
                                    });
                                   console.log(newString.join(''));
                                   return newString.join('');
        

    }


module.exports=(toCamelCase);