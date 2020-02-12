const ElementArrayFinder = require('../test/mock/ElementArrayFinder');

class Elements extends ElementArrayFinder{
    constructor(name,locator){
        super(locator);
        this.locator=locator;
       this.name=name;
        this.children=null;
        this.parent = null;
    }
    setParent(parent){
        if(parent){
            this.parent=parent;
           
        }
    }
    all(){
        return ElementArrayFinder.all(this.locator)
    }
}
module.exports = (Elements);