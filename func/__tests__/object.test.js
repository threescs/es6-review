const assert = require("assert")

const {
    cleanObj,
    shallowClone
} = require("../lib/object")

describe('Object', function(){

    describe('#cleanObj()', () => {
        it('需要清除 age,返回{name:"尚成帅"}', () => {
            assert.deepEqual(
                cleanObj({name:"尚成帅",age:18},["age"],"age"),
                {
                    name:"尚成帅"
                }
            );
        })
    });
    describe('#shallowClone()', () => {
        it('浅克隆 {name:"尚成帅"}', () => {
            assert.deepEqual(
                shallowClone({name:"尚成帅"}),
                {
                    name:"尚成帅"
                }
            );
        })
    });
})