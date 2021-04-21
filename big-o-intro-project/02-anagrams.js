function firstAnagram(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  for(let i=0; i<arr1.length;i++){
   if (arr2.indexOf(arr1[i]) !== -1){
     arr2.splice(arr2.indexOf(arr1[i]),1)
   }
  }
  if(!arr2.length){
    return true;
  } else {
    return false;
  }
}

// console.log(firstAnagram("gizmo", "sally")); //false
// console.log(firstAnagram("elvis", "lives")); //true






function secondAnagram(str1, str2) {
  let newStr1 = str1.split("").sort().join("")
  let newStr2 = str2.split("").sort().join("")

  if (newStr1 === newStr2){
    return true;
  } else {
    return false;
  }
}
console.log(secondAnagram("gizmo", "sally")); //false
console.log(secondAnagram("elvis", "lives")); //true




/*Write a method secondAnagram that solves the problem by
sorting both strings alphabetically.
The strings are then anagrams if and only if
the sorted versions are the identical.*/











function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
