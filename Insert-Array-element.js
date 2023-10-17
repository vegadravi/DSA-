//insert add value
let A1=[7,20,45,2,80,47,25,1,5];
let newEl = 0;
let position =2;
console.log("Stating Data",A1)
console.log("-----------------------")
//revers
for(let i = A1.length-1;i>=0;i--){
  console.log("Data Loop",A1[i])
  if(i >= position){
      console.log("-----------------------")
      console.log("if Looping",A1[i+1],"I Loop>>",i, "Main COde>>",A1[i+1]= A1[i])
      A1[i+1]= A1[i]
      if(i == position){
          A1[i] = newEl;
      }
  }
}

console.log("-----------------------")
console.log("Finally op",A1);

//insert add value
let myArray = [1, 2, 3, 4, 5];
insertAtIndex(myArray, 200000, 2);
function insertAtIndex(array, element, index) {
  if (index < 0 || index > array.length) {
    return "Index out of bounds";
  }
 
  for (let i = array.length; i > index; i--) {
      console.log('for loop',array.length, i > index,i--)
    console.log("function check",array[i - 1])
    array[i] = array[i - 1];
    console.log( 'For loop result',array[i])
  }
    console.log("Element array Index",element, array[index])
  array[index] = element;
  console.log(array)
  return array;
}
 
// Example usage:
 
console.log(myArray); // [1, 2, 6, 3, 4, 5]
 
