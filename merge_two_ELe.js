// merge two Array #6
 let dataA=[9,12,13,50];
 let dataB=[3,4,7,8,9];
 let dataC=[];
 for(let i =0;i<dataA.length;i++){
    dataC[i]= dataA[i];
 }
 console.log(dataC)
 for(let i =0;i<dataB.length;i++){
    dataC[dataA.length+i]= dataB[i];
 }
 console.log(dataC) //[9,12,13,50,3,4,7,8,9]

//how to revers Data uisng defualt function
let dummy =[10,20,30,40,50];
dummy.reverse();
console.log(dummy)//[50,40,30,20,10]
