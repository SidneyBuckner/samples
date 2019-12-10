const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const sum = nums.reduce((num, total) => {
// //   return (total += num);
// // });

// // console.log(sum);

// // One liner Function without the return:

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = nums.reduce((num, total) => (total += num));

// console.log(sum);
const sumOfNums = nums.reduce((total, currentNum) => {
  total + currentNum;

  return total;
});

// TODO: Write a Function that takes an array of numbers and returns the average
// Average = add numbers divided by array length

function average(nums) {
  return nums.reduce((total, num) => total + num) / nums.length;
}
console.log(average(nums));
