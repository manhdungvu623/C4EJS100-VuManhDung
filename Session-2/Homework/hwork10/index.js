let w = prompt ('nhap can nang');
    h = prompt ('nhap chieu cao');
let BMI = w/(h*h);
    if (BMI < 18.5) {
        console.log('gay');
    } else if (BMI < 24.9) {
        console.log('binh thuong');
    } else if (BMI < 29.9) {
        console.log('hoi beo');
    } else if (BMI < 34.9) {
        console.log('beo phi cap do 1');
    } else if (BMI < 39.9) {
        console.log('beo phi cap do 2');
    } else if (BMI >40) {
        console.log ('beo phi cap do 3');
    }