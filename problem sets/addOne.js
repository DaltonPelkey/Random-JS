var nums = [1,2,3];

function addOne(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i]+1;
  }
  console.log(arr);
}

addOne(nums);