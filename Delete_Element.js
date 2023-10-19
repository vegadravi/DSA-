let data = [23,32,6,51,34,5,80];
let position = 3;
for(let i = position; i<data.length-1;i++ ){
    console.log(data[i]);
    data[i] = data[i+1];
}
data.length = data.length - 1;
console.log(data)//[23,32,6,34,5,80]
