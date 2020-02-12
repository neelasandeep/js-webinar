const Element = require('../pop/Element');
class Layout extends Element{
    constructor(name,url,locator){
        super(name,locator);
        this.url=url;
     }
     load(){
         return this.url;
     }
    
    

}
module.exports = (Layout);