/**
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 */

// var maxSequence = function (arr) {
//   let sum = 0;
//   let max = 0;
//   let flag = false;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       flag = true;
//     }
//     sum += arr[i];
//     let temp = 0;
//     for (let j = i; j < arr.length; j++) {
//       temp += arr[j];
//       if (temp > max && temp >= sum) {
//         max = temp;
//       }
//     }
//   }
//   if (flag == false) {
//     return 0;
//   } else if (max > sum) {
//     return max;
//   } else {
//     return sum;
//   }
// };

// console.log(maxSequence([-1, -2, -3, -4, -5]));
// console.log(maxSequence([]));
// console.log(maxSequence([-5, -4, -3, -2, -1]));
// console.log(maxSequence([96, -1, -2, -3]));

// var countBits = function(n) {
//     let temp = 1
//     let bitArr = []
//     while(temp <= n){
//         bitArr.push(temp)
//         temp*=2
//     }
//     let count = 0
//     for(let i = bitArr.length-1; i >=0 ; i--) {
//         if(n - bitArr[i] >= 0 ){
//             n-=bitArr[i]
//             count++
//         }
//     }
//     return count
// }

// console.log(Math.log2(64));
// console.log(Math.ceil(Math.log2(63)));
