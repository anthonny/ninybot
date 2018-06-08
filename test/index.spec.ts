import { hello } from '../lib/index';
import { should } from 'chai'
should();

describe('Hello function', () => {
    it('should return hello world', () => {
        const result = hello();
        result.should.equal('Hello World!');
    });
});