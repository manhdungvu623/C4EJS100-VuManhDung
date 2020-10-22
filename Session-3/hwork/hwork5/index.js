const n = prompt('Enter a sequence of Numbers, separated by commas (,)');
let list = [];
list = n.split(',');
    let s=0;
    console.log(list);
    for (let i=0; i<list.length; i++) {
        list[i] = Number(list[i]);
        s=s+ list[i];
    } alert(`The sum of them is ${s}`)