// viết chương trình bậc 2 
function phuongTrinhBacHai (a,b,c) {
let y = b * b - 4 * a * c
    if (y > 0) {
        x1 = (-b + Math.sqrt(y)) / (2 * a)
        x2 = (-b - Math.sqrt(y)) / (2 * a)
        return `Phương trình có 2 nghiệm phân biệt x1 = ${x1}, x2= ${x2}`
    } else if (y == 0) {
        x1 = x2 = -b / (2 * a)
        return `Phương trình có nghiệm kép x1 = x2 = ${x1}`
    } else {
        return `Phương trình vô nghiệm`
    }
}
console.log(phuongTrinhBacHai(2,4,2))

// viết chương trình số lớn nhất a.b.c
function soLonNhat (a,b,c) {
    if (a > b && a > c) {
        return `Số lớn nhất là ${a}`
    }
    if (b > a && b > c) {
        return `Số lớn nhất là ${b}`
    }
    if (c > b && c > a) {
        return `Số lớn nhất là ${c}`
    }
}
console.log(soLonNhat(1,4,2))
// viết chương trình nhập 3 cạnh của 1 tam giác, cho biết đó là tam giác gì
function tamGiac (a,b,c) {
    if(a + b <= c || a + c <= b ||  b + c <= a){return `Tam giác không hợp lệ`} 
    else if((a == b) && (b == c)) {return `Đây là tam giác đều`}
    else if (a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c) {return `Đây là tam giác vuông`}
    else if (a == b || a == c || b == c) {return `Đây là tam giác cân`}
    else {return `Đây là tam giác thường`}
        }
console.log(tamGiac(3,4,5))