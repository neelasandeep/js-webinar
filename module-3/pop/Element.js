

class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }
    setParent(parent) {
        if(parent){
            this.parent=parent;
           
        }
        if(this.parent!==null)
        throw new Error(`this ${child.name} already exists`);
    }
    
    addChildren(child) {
        
        if (this.children.hasOwnProperty(child.name)) {

            throw new Error(`this ${child.name} already exists`);

        } else {
            this.children[child.name] = child;
        }

    }
    get(name) {
        if (!name) {
            return element(this.locator);
        }
        let subchild = this.children;
        while (subchild[name].name !== name){
          subchild = subchild.chidren;
            }
           
    return element(subchild[name].locator);
        
       
    }
}
module.exports = (Element);