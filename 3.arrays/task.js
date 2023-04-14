function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).reduce((accum, avarage, index, array) => accum + avarage.age/array.length,0);
  return result;
}