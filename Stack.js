// Stack 
//let data= [1,2,4,5,6,7,8];
let data=[];
let currentSize = data.length;
let max = 5;
//push
function push(newval){
    if(currentSize >= max){
        alert("stack is full"+newval)
    }
    data[currentSize] =newval;
    currentSize += 1;
}
//pop
function pop(){
    if(currentSize>0){
        currentSize -=1;
        data.length = currentSize;
    }else{
        console.log("stack already empty")
    }
}
push(20);
push(30);
push(40);
push(50);
push(60);
push(70);
push(80);
push(90);
pop()
pop()
push(700);
push(800);
push(900);
console.log(data);
