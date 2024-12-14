// var merge = function(nums1, m, nums2, n) {
//     for(let i = m ,j = 0; j < n; i++,j++){
//         nums1[i] = nums2[j]

//     }
//     for(let i =0 ; i < nums1.length ; i++){
//         for(let j = 0; j < nums1.length; j++){
//             if(nums1[j] > nums1[j + 1]){
//             let temp = nums1[j];
//             nums1[j] = nums1[j + 1]
//             nums1[j + 1] = temp
//         }
//         }
//     }
// }
// function calculator(num1, num2, operator) {
//   let number = Math.random();
//   console.log(number);
  
//   if (number < 0.1) {
//     if (operator === "+") {
//       return num1 - num2;
//     } else if (operator === "-") {
//       return num1 / num2;
//     } else if (operator === "*") {
//       return num1 + num2;
//     } else if (operator === "/") {
//       return num1 ** num2;
//     }
//   } else {
//     if (operator === "+") {
//       return num1 + num2;
//     } else if (operator === "-") {
//       return num1 - num2;
//     } else if (operator === "*") {
//       return num1 * num2;
//     } else if (operator === "/") {
//       return num1 / num2;
//     }
//   }
// }
// console.log(calculator(2,6,"/")
// );


// let rand = Math.random()
// let first , second, third;
// if (rand < 0.33) {
//     first  = "Fire"
// }else if(rand > 0.33 && rand < 0.66){
//     first = "Amazing"
// }else{
//     first = 'Crazy'
// }
// rand = Math.random()
// if (rand < 0.33) {
//     second  = "Engine"
// }else if(rand > 0.33 && rand < 0.66){
//     second = "Food"
// }else{
//     second = 'Garment'
// }
// rand = Math.random()
// if (rand < 0.33) {
//     third  = "Bros"
// }else if(rand > 0.33 && rand < 0.66){
//     third = "Limited"
// }else{
//     third = 'Hub'
// }

// console.log(first, second , third);

// let fact = 1;
// let num = 3
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log(fact);

function factorial (number){
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c    
    
}
console.log(factorial(5));
