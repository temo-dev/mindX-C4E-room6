// Bài 1
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

let a = 1;
let b = 2;
let c = 3;

let KQ = PTB2(a, b, c);
console.log(KQ);

// Bài 2
let a = 20;
let b = 20;
let c = 20;

  if (a >= b && a >= c)
  {
    console.log("Số lớn nhất là a: " + a);
  }
  else if (b >= a && b >= c)
  {
    console.log("Số lớn nhất là b: " + b);
  }
  else
  {
    console.log("Số lớn nhất là c: " + c);
  }

// Bài 3
let a = 3;
let b = 4;
let c = 5;

if (a + b > c && b + c > a && c + a > b) {
  if (a === b && b === c) {
    console.log("Tam giác đều");
  } else if (a === b || b === c || c === a) {
    console.log("Tam giác cân");
  } else if (a*a + b*b === c*c || b*b + c*c === a*a || c*c + a*a === b*a) {
    console.log("Tam giác vuông");
  } else if (a*a + b*b < c*c || b*b + c*c < a*a || c*c + a*a < b*b) {
    console.log("Tam giác tù");
  } else {
    console.log("Tam giác nhọn");
  }
} else {
  console.log("Ba cạnh này không tạo thành một tam giác");
}