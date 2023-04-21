
// giải phương trình bậc 2 //


function giaiPTBac2(a, b, c) {
    let delta = b * b - 4 * a * c;
    let x1, x2;
    if (delta > 0) {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return "Phương trình có 2 nghiệm: x1 = " + x1 + ", x2 = " + x2;
    } else if (delta == 0) {
      x1 = -b / (2 * a);
    return "Phương trình có nghiệm kép: x1 = x2 = " + x1;
    } else {
    return "Phương trình vô nghiệm!";
    }
}
console.log(giaiPTBac2(1, -5, 6));



// tìm số lớn nhất trong các số a,b,c//

function soLonNhat(a,b,c,d,e)
{
let max;
if(a>=b){max=a;} else{max=b}
if(c>=max){max=c;}
if(d>=max){max=d;}
if(e>=max){max=e;}
return "Số lớn nhất là:" + max;
}
console.log(soLonNhat(10,15,9,16,13));

// phan loại tam giác//

function canhTamGiac(a,b,c)
{
    if(a+b<=c||a+c<=b||b+c<=a)
    {
        return "thông số không hợp lệ";
    }
    else
    {
        if(a==b&&b==c){return "tam giác đều"}
        if(a==b||b==c||a==c){return "tam giác cân"}
        if(a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a){ return "Tam giác vuông"}
        return "tam giác thường"
    }
}
console.log(canhTamGiac(3,3,5))