// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

function calculateVertical(block) {
   return distanceFromHqInBlocks(block) * 264
}
