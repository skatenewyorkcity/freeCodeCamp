function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  // slice return values after howMany
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
