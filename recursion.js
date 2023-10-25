function fact(x1){
    console.log(x1)
    if(x1==0){
        return 1;
    }
    return x1*fact(x1-1); // recursion
}
let x= 5;
console.log('Finalconsole',fact(x))
