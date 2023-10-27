// recursing using reverse
let data= [1,2,4,5,6,7,8]
let temp;
function customeRe(data,start,end){
    console.log(data)
    if(start<=end){
    temp = data[start];
    data[start]= data[end];
    data[end]= temp;
    customeRe(data,start+1,end-1)
    }
}
customeRe(data,0,data.length-1)
console.log("Welcome to Programiz!");
//defualt functino
data.reverse()
console.log(data.reverse())
