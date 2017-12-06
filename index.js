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
  // first 400 feet are free
  // between 200 and 2000 it costs 2 cents per foot
  // flat rate over 2000 to 2500
  // cannot drive over 2500 feet
      return 'cannot travel that far';
}
