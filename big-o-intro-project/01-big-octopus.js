
const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

// console.log(fishies);
// console.log(fishies.sort((a,b)=>a.length - b.length));


function quadraticBiggestFish(fishes) {
  // Code goes here ...
  let biggestFish;
  for(let i=0;i<fishes.length;i++){
    biggestFish=fishes[i];
    for(let j=i+1;j<fishes.length;j++){
      if(fishes[j].length>biggestFish.length){
        biggestFish=fishes[j];
      }
    }
  }
  return biggestFish;
}

// console.log(quadraticBiggestFish(fishies));

function nlognBiggestFish(fishes) {
  fishes.sort((a,b)=> a.length - b.length);
  return fishes[fishes.length -1]
}
// console.log(nlognBiggestFish(fishies))


function linearBiggestFish(fishes) {
  let biggestFish = fishes[0];
  for (let i = 1 ; i < fishes.length; i++){
    if (fishes[i].length > biggestFish.length){
      biggestFish = fishes[i];
    }
  }
  return biggestFish;
}
// console.log(linearBiggestFish(fishies))





tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length ; i++){
    if(tilesArray[i] === direction){
      return i;
    }
  }
}

// console.log(slowDance("up", tilesArray)) // => 0
// console.log(slowDance("right-down", tilesArray)) // => 3


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
  return tilesObj[direction];
}


console.log(fastDance("down",tilesObj));
