import {expect} from 'chai';
import getJson from '../src/js/services/getJson.js';

describe('getJson', () => {
	it('should exists a getJson function', () => {
    expect(getJson).to.not.be.undefined;
  });
});
describe('getJson', () => {
	it('the function getJson return a string', () => {
 		var dataJson = [];
		const fileJson = "sections.json";
		getJson(dataJson, fileJson)
			.then(function(){
 				var result = dataJson[0];
 				expect(result).to.be.a('string')
 			})
	})
})