const n = prompt('enter a sequence of numbers, separated by ,');
let list = [];
list = n.split(",");
let min = 0;
min = Number(list[0]);
for (let i=0; i<list.length; i++) {
    if (min>Number(list[i])) {
        min = Number(list[i])
    }
} alert(`The smallest number is ${min}`);