-------------------------------------------------------------------------------------------
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
// if short trik merge two array
 let data1=[9,12,13,50];
 let data2=[3,4,7,8,9];
 let data3=[...data1,...data2];
 console.log(data3)
--------------------------------------------------------------------------------------------
// merge two Array using While loop #7
 let dataA = [9, 12, 13, 50];
let dataB = [3, 4, 7, 8, 9];
let dataC = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < dataA.length && d2 < dataB.length) {
    if (dataA[d1] < dataB[d2]) {
        dataC[d3] = dataA[d1];
        d1++;
    } else {
        dataC[d3] = dataB[d2];
        d2++;
    }
    d3++;
}

while (d1 < dataA.length) {
    dataC[d3] = dataA[d1];
    d1++;
    d3++;
}

while (d2 < dataB.length) {
    dataC[d3] = dataB[d2];
    d2++;
    d3++;
}

console.log(dataC);
