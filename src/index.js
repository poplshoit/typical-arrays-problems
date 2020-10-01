
exports.min = function min (array) {
  if(!array || !array.length) {
    return 0;
  };
  let minCount = array[0];
  for(var i = 0; i < array.length; i++) {
    if(minCount > array[i]) {
     minCount = array[i];
    }
  }
  return minCount;
} 

exports.max = function max (array) {
  if(!array || !array.length) {
    return 0;
  };
  let maxCount = array[0];
  for(var i = 0; i < array.length; i++) {
    if(maxCount < array[i]) {
     maxCount = array[i];
    }
  }
  return maxCount;
} 


exports.avg = function avg (array) {
  if(!array || !array.length) {
    return 0;
  };
  let sumArray = 0;
    for(let i = 0; i < array.length; i++) {
      sumArray += array[i];
    }
    return sumArray / array.length ;
}
