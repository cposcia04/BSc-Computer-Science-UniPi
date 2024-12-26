//Soluzione ricorsiva
function flattenNestedArray(arr) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { 
      res = res.concat(flattenNestedArray(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}
