let list = []
let a = true;
while (active) {
    let a = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
    a = a.toUpperCase();
    if (a != 'C' && a != 'R' && a != 'U' && a != 'D') {
        alert('This command are not supported');
    }
    else {
        if (a == 'C') {
            let newItem = prompt('Enter the name of new item');
            list.push(newItem);
            alert('Done');
        }
        else if (a == 'R') {
            console.log('The current items are:');
            for (let i = 0; i < list.length; i++) {
                console.log(`${i+1}. ${list[i]}`);
            }
        }
        else if (a == 'U') {
            let index = prompt('Enter the position you want to update');
            let newName = prompt('Enter the new name');
            list[index-1] = newName;
            console.log('The current items are:');
            for (let i = 0; i < list.length; i++) {
                console.log(`${i+1}. ${list[i]}`);
            }
        }
        else {
            let index = prompt('Enter the position you want to delete');
            list.splice(index-1,1);
            alert('Done');
        }
    }
}