//in direct recursion
let money = 100;
let apple = 0;
function buyApple(x){
 if(x>0){
     console.log("I have",x,"Rs",apple)
    buyMore(x)
 }else{
    console.log("I don't have more Money",apple)
 }
}
function buyMore(x){
    apple++;
    buyApple(x-20);
    //console.log("buy more",x)
}
buyApple(money)

console.log("Welcome to Programiz!");
