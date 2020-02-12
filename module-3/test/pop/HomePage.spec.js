const ElementFinder = require('../mock/ElementFinder');
const ElementArrayFinder = require('../mock/ElementArrayFinder');
const expect = require('chai').expect;
const HomePage=require('../../pop/HomePage');
const Element = require('../../pop/Element');

describe.only('HomePage Class', () => {
    // TODO: write tests
    beforeEach(() => {
        global.element = ElementFinder.element;
    });

    afterEach(() => {
        delete global.element;
    });
    
    it('should be defined',()=>{
        expect(HomePage).to.be.instanceOf(Function);
    });
    it('locator sholud be defined',()=>{
            const element=new HomePage('Body','http://epam.com',{css:'h1'});
            expect(element.locator).not.to.be.undefined;
            expect(element.locator.css).to.equal('h1');
    });
    describe('it should have a parent undefined',()=>{
        it('it should not defined',()=>{
            const element = new HomePage('Home', 'http://epam.com', {css: 'body'});

           
            expect(element.parent).not.to.be.undefined;
            expect(element.parent).to.be.null;
        });
      
        it('should not contain a child of defined',()=>{
            const element=new HomePage('Body','http://epam.com',{css:'h1'});
          
            expect(element.child).not.to.be.undefined;
            expect(element.child).to.eql({});
        });
        it('should contain child element at title',()=>{
            const element=new HomePage('Body','http://epam.com',{css:'h1'});
            const child=new Element('Title',{cse:'body'});
            expect(element.setChild).not.to.be.undefined;
            element.setChild(child);

            expect(element.child.Title).to.eql(child);

        });
    });
});