//Rotation element right Side
function rotetion(arr){
    console.log(arr);
    var last_El = arr[arr.length-1];
     for(let i = arr.length -1 ; i>= 0; i--){
         console.log(arr[i] = arr[i-1]);
         arr[i] = arr[i-1]
     }
     arr[0] = last_El;
     console.log(arr); //[5,1,2,3,4]
}
rotetion([1,2,3,4,5]);


//Rotation element left side
function rotetion(arr){
    console.log(arr);
    var last_El = arr[0] ;
     for(let i = 0 ; i< arr.length-1 ; i++){
         console.log("arr [i]",[i], arr[i-1])
         arr[i] = arr[i+1]
         console.log( 'Finally Output',arr[0]);
     }
      arr[arr.length-1]= last_El;
console.log(arr); // [32,43,54,65,12]
}
rotetion([12,32,43,54,65]);
