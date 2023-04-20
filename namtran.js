// // Bài 1
function PTB2(a, b, c) {
  let x = b * b - 4 * a * c;
  if (x < 0) {
    return "Phương trình vô nghiệm";
  } else if (x == 0) {
    let x = -b / (2 * a);
    return `Phương trình có nghiệm kép x = ${x}`;
  } else {
    let x1 = (-b + Math.sqrt(x)) / (2 * a);
    let x2 = (-b - Math.sqrt(x)) / (2 * a);
    return `Phương trình có hai nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`;
  }
}
console.log(PTB2(1,2,1))

// // Bài 2
let a = 5;
let b = 10;
let c = 15;

let max = Math.max(a, b, c);

console.log("Số lớn nhất là: " + max);

// // Bài 3
function kiemTraTamGiac(a, b, c) {
  if (a === b && b === c) {
    return "Tam giác đều";
  } else if (a === b || b === c || a === c) {
    return "Tam giác cân";
  } else if (a*a + b*b === c*c || a*a + c*c === b*b || b*b + c*c === a*a) {
    return "Tam giác vuông";
  } else if (a !== b && b !== c) {
    return "Tam giác thường";
  }
}
console.log(kiemTraTamGiac(2,4,3));