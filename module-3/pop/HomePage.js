
class HomePage{
    constructor(name,url,locator){
        this.name=name;
        this.url=url;
        this.locator=locator;
        this.parent=null;
        this.child={};
    }
    setChild(child){
        if (this.child.hasOwnProperty(child.name)) {

            throw new Error(`this ${child.name} already exists`);

        } else {
            this.child[child.name] = child;
        }
    }
}
module.exports=(HomePage);
