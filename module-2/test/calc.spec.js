const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    it('should display proper inpuy',()=>{
        expect(calc(3).v).to.equal(3);
    });
    it('should should give  result 8',()=>{
        //given
        const c=calc(3);
        //when
        c.add(5);
        //then
        expect(c.v).to.equal(8);
    });
    it('should should give  result 1',()=>{
        //given
        const c=calc(3);
        //when
        c.minus(2);
        //then
        expect(c.v).to.equal(1);
    });
    it('should should give  result 2',()=>{
        //given
        const c=calc(4);
        //when
        c.sqrt();
        //then
        expect(c.v).to.equal(2);
    });
    it('should should give  result 30 by performing *',()=>{
        //given
        const c=calc(3);
        //when
        c.times(10);
        //then
        expect(c.v).to.equal(30);
    });
    it('should should give  result 5 by performing division',()=>{
        //given
        const c=calc(10);
        //when
        c.divide(2);
        //then
        expect(c.v).to.equal(5);
    });
    it('should should give  result 0 by performing modulo',()=>{
        //given
        const c=calc(10);
        //when
        c.modulo(5);
        //then
        expect(c.v).to.equal(0);
    });
    it('should should give  error by performing division',()=>{
        //given
        const c=calc(10);
        //when +then
        
        //then
        expect(()=>c.divide(0)).to.throw;
    });
    it('should should give  error by performing sqrt',()=>{
        //given
        const c=calc(-3);
        //when +then
        
        //then
        expect(()=>c.sqrt(2)).to.throw;
    });
    it('should should give  result 24 by performing operations',()=>{
        //given
        const c=calc(3);
        //when +then
        c.add(7).minus(4).times(4);
        
        //then
        expect(c.v).to.equal(24);
    });


});