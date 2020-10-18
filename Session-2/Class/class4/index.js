let a = prompt ('nhap a');
    b = prompt ('nhap b');
    c = prompt ('nhap c');
let delta = b*b-4*a*c;
    if (delta > 0) {
        console.log ('Phuong trinh co 2 nghiem phan biet');
    } else if (delta < 0) {
        console.log ('Phuong trinh vo nghiem');
    } else {
        console.log ('Phuong trinh co 1 nghiem duy nhat');
    }