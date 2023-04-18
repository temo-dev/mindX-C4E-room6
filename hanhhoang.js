function demSoLe(number) {
    let tongSoLe = 0
    for (let i = 0; i < number; i++) {
        if (i % 2 != 0) {
            tongSoLe++
        }
    }
    return `có tất cả ${tongSoLe} số lẻ của số nguyên dương ${number}`
}

// chương trình giải phương trình bật nhất ax + b = 0
function phuongTrinhBatNhat (a,b) {
    let x;
    if (a == 0) {
        if (b == 0) {
            return `Phương trình có vô số nghiệm`
        } else {
            return `Phương trình vô nghiệm`
        }
    } else {
        x = -b / a
        return `Phương trình có 1 nghiệm là x = ${x}` 
    }
}
 function soNguyenDuong (number) {
    let sumSoLe = 0
    for (i = 0; i < number; i++) {
        if  (i % 2 !== 0) {
            sumSoLe += i
        }
    }
    return `trong ${number} số nguyên dương thì tổng số lẻ là ${sumSoLe}`
 }
 console.log(soNguyenDuong(10))


// 1 2 3 4 5 6 7 8 9 10