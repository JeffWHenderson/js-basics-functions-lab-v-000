// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
   return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264
  } else {
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
      return 0
  } else if (distance < 2000){
      return distance * 2 / 100
  } else if (distance < 2500) {
      return 25
  } else {
      return 'cannot travel that far'
  }
  // between 200 and 2000 it costs 2 cents per foot
    //    distance in feet * 2 / 100
  // flat rate over 2000 to 2500
    // return 25
  // cannot drive over 2500 feet
    //return 'cannot travel that far';
}
