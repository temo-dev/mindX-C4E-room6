
// ----------------------------------------------------------------------------------------------------------

// Chuong trinh phuong trinh bac 2 ax^2 + bx + c = 0
function giaiPhuongtrinhBac2 (a,b,c){
    let delta = b** - 4*a*c
        if (delta ==0){
            x = -b/2*a
            return `Phuong trinh co nghiem kep x = ${x}`
        } else if (delta < 0){
            return `Phuong trinh khong co nghiem thuc`
        } else {
            x1 = (-b + Math.sqrt(delta)) / (2 * a)
            x2 = (-b - Math.sqrt(delta)) / (2 * a)
            return `phuong trinh co 2 nghiem la X1 = ${Math.floor(x1)} va X2 = ${Math.floor(x2)}`
        }
    }
console.log(giaiPhuongtrinhBac2(1,2,0))


// ----------------------------------------------------------------------------------------------------------
// // chuong trinh kiem tra tam giac
function testTriangle (a,b,c){
    switch (true){
        case a==b && b==c:
            return "Tam giac deu";
        case a==b || a==c || b==c:
            return "Tam giac can";
        case a!=b && a!=c && b!=c:
            return "Tam giac thuong";
        default:
            return "Tam giac duoc tao thanh tu 3 canh, vui long kiem tra lai";
    }
}
console.log(testTriangle (5,4,5))


// ----------------------------------------------------------------------------------------------------------
// Chuong trinh so lon nhat a.b.c 
function testNumber(a,b,c) {
    if (a > b && a > c) {
        return `so lon nhat trong 3 so ${a},${b},${c} la ${a}`;
    }
    if (b > a && b > c) {
        return `so lon nhat trong 3 so ${a},${b},${c} la ${b}`;
    }
    if (c > a && c > b) {
        return `so lon nhat trong 3 so ${a},${b},${c} la ${c}`;
    }
}
console.log(testNumber(25,26,27))