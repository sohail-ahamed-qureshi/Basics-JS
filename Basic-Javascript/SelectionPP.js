//1 ability to generate random number and check min and max number
let arr = new Array(5);
for(let i = 0; i< arr.length; i++){
    arr[i] = Math.floor(100+ Math.random() * 899);
    console.log(arr[i]);
}
console.log("maximum number "+Max(arr));
console.log("minimum number "+Min(arr));

function Max(arr){
    let max = arr[0];
    let i = arr.length;
    while(i--){
        max = arr[i] > max ? arr[i] : max;
    }
    return max;
}

function Min(arr){
    let min = arr[0];
    let i = arr.length;
    while(i--){
        min = arr[i] < min ? arr[i] : min;
    }
    return min;
}