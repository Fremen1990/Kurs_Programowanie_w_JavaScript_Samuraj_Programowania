// FILTER ( I PRZYPOMNIENIE MAP)

//ARRRAY
const arr = [34, 216, 109, 2934, 12, 10, 29];

//FILTERS
const oddNumbers = arr.filter(number => number % 2);
const evenNumbers = arr.filter(number => !(number % 2));
const numbersBiggerThen100 = arr.filter(number => number > 100);

//MAP
const double = arr.map(number => (number * 2));
const people = arr.map(number => number + " osób")

//forEach

arr.forEach((number, index) => arr[index] = number * 2);

//SEARCH