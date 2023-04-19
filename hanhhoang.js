// Viết chương trình giải phương trình bật 2 ax2 + bx + c = 0 
function giaiPhuongTrinhBat2 (a,b,c) {
    let x1;
    let x2;
    let delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
        return `Phương trình vô nghiệm`
    } if (delta == 0) {
        x1 = x2 = -(b / 2 * a)
        return `Phương trình có nghiệm kép x1 = x2 = ${x1}`
    } else {
        x1 = (-b - Math.sqrt(delta)) / 2 * a
        x2 = (-b + Math.sqrt(delta)) / 2 * a
        return `Phương trình có 2 nghiệm là x1 = ${x1} và x2 = ${x2}`
    }
}
console.log(giaiPhuongTrinhBat2(1,2,1)); 



// Viết chương trình số lớn nhất a,b,c
function soLonNhat(a,b,c) {
    let maxNumber = Math.max(a,b,c);
    return `Số lớn nhất là ${maxNumber}`
}
    console.log(soLonNhat(1,3,2));



// Viết phương trình nhập 3 cạnh của tam giác, biết đó là tam giác gì
function tamGiac(a,b,c) {
    if (a === b && b === c) {
        return `Tam giác đều`
    } if (a === b || b === c || a === c) {
        return `Tam giác cân`
    } if (a !== b && b !== c) {
        return `Tam giác thường`
    } else {
        return `Không phải tam giác`
    }
}
console.log(tamGiac(4,4,4));
