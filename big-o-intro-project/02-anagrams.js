// function firstAnagram(str1, str2) {
//   // Code goes here ....
//   let arr1 = str1.split("");
//   let arr2 = str2.split("");
//   for(let i=0; i<arr1.length;i++){
//     console.log("arr1: ",arr1[i])
//     console.log("arr2: ",arr2.indexOf(arr1[i]))
//    arr2.splice(arr2.indexOf(arr1[i]),1)
//    console.log(arr2)
//   }
//   if(!arr2.length){
//     return true;
//   }
// }

function firstAnagram(str1, str2) {
  for(let i=0;i<str1.length;i++){
    str2.replace(str2.indexOf(str1[i]),"")
  }
    if(!str2.length){
    return true;
  }
}0

console.log(firstAnagram("gizmo", "sally"));
// console.log(firstAnagram("elvis", "lives"));

function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
