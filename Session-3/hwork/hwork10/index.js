let arr=[];
const names = prompt('Enter a sequence of name');
arr = names.split(',');
for (let i=0; i<arr.length; i++) {
    arr[i] = `<${arr[i]}>`;
}
console.log(`${names}=>${arr}`);