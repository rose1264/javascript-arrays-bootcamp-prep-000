var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, element){
  var newarray = [element,...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, 'foo'){
  return array = ['foo', ...array]
}
