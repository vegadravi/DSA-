 function test(x)
   {
    console.warn(x) // head recursion 5,4,3,2,1
    if(x>0){
        test(x-1) // recursion
    }
    console.warn(x) // tails recursion 0,1,2,3,4,5
   }
   let data=5
   test(data)
