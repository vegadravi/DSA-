let data = [23,32,6,6,51,34,5,80];
let Search = 6;
let index= '';
// leaner searcing
for(i=0; i<data.length; i++){
    //console.log(data[i]);
    if(data[i] === Search){
        index = i;
    }
}
console.log(data.indexOf(Search));

//Question
// if one array in duplicate element are available so how to find index multiple

//using defualt function
console.log(data.indexOf(Search));
//delete for defult function
data.splice(2,1)
console.log(data.splice(2,1))
