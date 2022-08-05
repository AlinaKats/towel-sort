
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) {
    return [];
  }
  let newArray = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {

      changeArr = matrix[i].reverse();
      newArray.push(changeArr);

    } else {
      newArray.push(matrix[i]);
    }
  }
  console.log(newArray);
  let result = newArray.flat(1);
  console.log(result);
  return result;
}
