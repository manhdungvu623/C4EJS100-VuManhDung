const n = prompt('Enter a sequence of number');
let arr = []; arr1 = [];
arr = n.split(',');
for (let i=0; i<arr.length; i++) {
    if (Number(arr[i])%2==1) {
        arr1.push(arr[i]);
    }
}
console.log(`${n} => ${arr1}`);