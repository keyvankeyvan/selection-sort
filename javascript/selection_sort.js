function selectionSort(arr) {
  const newArr = []
  while(arr.length > 0) {
    let min = Math.min(...arr)
    let indx = arr.indexOf(min)
    // for(number of arr){
    //   if(number < min){
    //     min = number
    //     indx = arr.indexOf(number)
    //   }
    // }
    newArr.push(min)
    arr.splice(indx,1)
  }

  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  let start = Date.now()
  
  for(let i = 0; i < 1000; i++){
    let longInput = longMaker()
    selectionSort(longInput)
  }
  let avgLongTime = (Date.now() - start)
  
  console.log(avgLongTime)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution


function longMaker()
{
  let longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  return longInput
}