/* You should have a bouncer function that takes an array as argument. 
The bouncer function should return a new array that contains 
the same elements as the array passed in as argument with the falsy elements removed. 
The bouncer function should not change the array passed in as an argument.
*/


function bouncer(arr) {
  const result = [];

  for (let item of arr) {
    if (item) {
      result.push(item);
    }
  }

  return result;
}