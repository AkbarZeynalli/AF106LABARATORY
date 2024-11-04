// Sual1:
// let arr = [1,2,3,4,5]
// arr.push(6)
// arr.unshift(0)
// console.log(arr);


// Sual2:
// let arr1 = [1,2,3,4,5]
// let arr2= [6,7,8,9,10]

// for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i])
// }console.log(arr1);


// Sual3:
// function twoparametrs(arr,simpleparam) {
//     arr.unshift(simpleparam)
//     return arr
// }
// let arr1 = [1,2,3,4,5]
// let number = 0;
// console.log(twoparametrs(arr1,number));


// Sual4:
// let arr1 = [1,2,3,4,5]
// let number = 0
// for (let i = 0; i < arr1.length; i++) {
// number += arr1[i]
// }
// console.log(number**2);


// Sual5:
// let arr1 = [1,2,3]
// let newarr = []
// for (let i = 0; i < arr1.length; i++) {
//     newarr.push(arr1[i]*2)    
// }
// console.log(newarr);


// Sual6:
// let arr = [1,2,3,4,5,-1,-2,-3,]
// let plusnumber = 0 
// let minusnumber = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]> 0){
//         plusnumber = arr[i]
//         plusnumber *= arr[i]
//     }
//     else{
//         minusnumber = arr[i]
//         minusnumber *= arr[i]
//     }
// }
// let avarage = (plusnumber +minusnumber)/2
// console.log(plusnumber);
// console.log(minusnumber);
// console.log(avarage);


// Sual7:
// let x = []
// let y = []
// for (let i = 1; i <= 10; i++) {
//     x.push(i)
// }
// for (let i = 1; i <= 5; i++) {
//     y.push(i*2)
// }
// console.log(x);
// console.log(y);


// Sual8:
// let arr = ['Keep','Remove','Keep','Remove','Keep','Remove']
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == 'Remove'){
//         arr[i] = 'Keep'
//     }
// }
// console.log(arr);


// Sual9:
// let arr  = [1,2,3,4,5,6]
// let arrTest = []
// let number = 2;
// function hesablama(arr1,num) {
//     for (let i = 0; i < arr1.length; i++) {
//         if(arr1[i] % num ==0){
//             arrTest.push(arr1[i])
//         }
//     }
//     return arrTest
// }
// console.log(hesablama(arr,number));


// Sual10:
// let arr = ['h','o','l','a']
// let name="";
// for (let i = 0; i < arr.length; i++) {
//     name += arr[i]
// }
// console.log(name);


// Sual11:
// let arr = [1,2,3,4,5]
// let arr2 = [-1,-2,-3,-4,-5]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]> 0){
//         arr[i] = -arr[i]
//     } 
//     if (arr2[i]<0) {
//         // arr2[i] = arr2[i] *(-1)
//         arr2[i] = -arr2[i]
//     }
// }
// console.log(arr);
// console.log(arr2);