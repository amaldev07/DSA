/*
    Given an array of integers, and a number ‘sum’, print all pairs in the array 
    whose sum is equal to ‘sum’.

    Examples :
    Input  :  arr[] = {1, 5, 7, -1, 5}, 
            sum = 6
    Output : (1, 5) (7, -1) (1, 5)
    Input  :  arr[] = {2, 5, 17, -1}, 
            sum = 7
    Output :  (2, 5) 
----------------------
Method 1
2 pointer
------------------
  let hm = new Map(); //<el><count>
  for(let i =0;i<arr.length;i++){
    el = arr[i];
    hm.set(el, hm.get(el)+1); 
  }
  for(let i =0;i<arr.length;i++){
   x = arr[i];
   y = sum-x;
   if(hm.get(y)){
    loop though hm.get(y) , which is count 
    add that much pairs to output pair array
   }
  }
------------------------------------------
Method 2
using hash map
create a hm
  arr[] = {1, 5, 7, -1, 5}, sum = 6
loop abpove arr
take el 1
check 5(6-1) is present in stack, if yes, create the pair
add 1 to stack

  

 */
