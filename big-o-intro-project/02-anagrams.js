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
// console.log(secondAnagram("gizmo", "sally")); //false
// console.log(secondAnagram("elvis", "lives")); //true




/*Write a method secondAnagram that solves the problem by
sorting both strings alphabetically.
The strings are then anagrams if and only if
the sorted versions are the identical.*/





function thirdAnagram(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let obj1 = {};
  let obj2 = {};
  for(let i=0;i<arr1.length;i++){
    let char = arr1[i];
    if(obj1[char]===undefined){
      obj1[char]=1;
    }else{
      obj1[char]+=1;
    }
  }
  // console.log(obj1);
  for(let i=0;i<arr2.length;i++){
    let char = arr2[i];
    if(obj2[char]===undefined){
      obj2[char]=1;
    }else{
      obj2[char]+=1;
    }
  }
  // console.log(obj2)
  for(key in obj1){
    if(obj1[key]!==obj2[key]){
      return false;
    }
  }
  // if(obj1===obj2){
  //   return true;
  // }else{
  //   return false;
  // }
return true;
}

console.log(thirdAnagram("gizmo", "sally")); //false
console.log(thirdAnagram("elvis", "lives")); //true

function fourthAnagram(str1, str2) {
  // Code goes here ....
}


