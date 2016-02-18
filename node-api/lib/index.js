/**
 * Lib
 */

var getComment = function(event, cb) {

  var response = {
    comments: [
      {id: 1, author: "Peter Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"} 
    ]
  };

  return cb(null, response);
};

var postComment = function(event, cb) {

  var response = "success!";

  return cb(null, response);
};

module.exports.commentAll = function(event, cb) {
  switch(event.httpMethod) {
    case 'GET':
      return getComment(event, cb);
    case 'POST':
      return postComment(event, cb);
    default:
      var errMessage = "unhandled event: " + event.httpMethod;
      console.log(errMessage);
      return cb(errMessage, null);
  }
}