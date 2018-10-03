// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  function recursion(input) {
    if (input.classList && input.classList.contains(className)) {
      results.push(input);
    }
    if (input.childNodes.length > 0) {
      for (let i = 0; i < input.childNodes.length; i ++)
        recursion(input.childNodes[i])
    }
  }
  recursion(document.body);
  return results;
};
