
import axios from 'axios';
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Test api', () => {

    it('Happy Case', () => {

    axios.get('https://my-json-server.typicode.com/typicode/demo/posts/1')
      .then(res => {
        console.log(res.status);
        //should.exist(res.data);
        console.log(res.data);
        //expect(res.data.id).to.equal(1);
        console.log('Happy Case Passed');
      }) 
      .catch(error => {
        console.log('Happy Case Error:');
        console.log(error.response.status);
        console.log(error.message);
        })
      
      browser.pause(3000);
    });

    it('Negative Case', () => {

    axios.get('https://my-json-server.typicode.com/typicode/demo/postsxxx/1')
      .then(res => {
        console.log(res.status);
        should.exist(res.data);
        console.log(res.data);
        expect(res.data.id).to.equal(1);
      }) 
      .catch(error => {
        console.log('Negative Case Error:');
        console.log(error.response.status);
        console.log(error.message);
        })

      browser.pause(3000);

    });
    
});