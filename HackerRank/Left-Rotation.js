// link solve
//https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true

//code 
function rotateLeft(d, arr) {
    
    const n = arr.length;
    const rotatedArray = [];

    // Copy the elements to be rotated into the rotatedArray
    for (let i = d; i < n; i++) {
        console.log(arr[i]);
        rotatedArray.push(arr[i]);
    }
    console.log("First loop over",rotatedArray,d)

    // Copy the remaining elements to the rotatedArray
    for (let i = 0; i < d; i++) {
        console.log("Second looop start",arr[i],i)
        rotatedArray.push(arr[i]);
    }
    console.log("Final op",rotatedArray)
    return rotatedArray;
}

//output
5
First loop over [ 5 ] 4
Second looop start 1 0
Second looop start 2 1
Second looop start 3 2
Second looop start 4 3
Final op [ 5, 1, 2, 3, 4 ]
