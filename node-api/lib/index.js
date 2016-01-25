/**
 * Lib
 */

module.exports.getComment = function(event, cb) {

  var response = {
    message: [
      {id: 1, author: "Peter Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"} 
    ]
  };

  return cb(null, response);
};