var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, element){
  var newarray = [element,...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = array.unshift(element)
  return array
}
