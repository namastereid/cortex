/**
 * Lib
 */

module.exports.getComment = function(event, cb) {

  var response = {
    comments: [
      {id: 1, author: "Peter Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"} 
    ]
  };

  return cb(null, response);
};

module.exports.postComment = function(event, cb) {

  console.log(event);
  var response = "success!";

  return cb(null, response);
};