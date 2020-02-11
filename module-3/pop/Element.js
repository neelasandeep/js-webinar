
const ElementFinder = require('../test/mock/ElementFinder');
class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }
    setParent(parent) {
        this.parent = parent;
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

     return element(this.children[name].locator);
    }
}
module.exports = (Element);