var assert = require('assert');
var should = require('should');

var lib = require('../node-api/lib');

describe('comment', function() {
    describe('all(GET)', function() {
        
        it('should get all comments', function() {
            var event = {httpMethod: 'GET'};
            var comments = {comments: [
              {id: 1, author: "Peter Hunt", text: "This is one comment"},
              {id: 2, author: "Jordan Walke", text: "This is *another* comment"} 
            ]};
            lib.commentAll(event, function(error, response) {
                should.not.exist(error);
                JSON.stringify(response).should.equal(JSON.stringify(comments));
            });
        });
        
        it('should post a comment', function() {
            var event = {httpMethod: 'POST'};
            lib.commentAll(event, function(error, response) {
                should.not.exist(error);
                response.should.equal('success!');
            });
        });
    });
})