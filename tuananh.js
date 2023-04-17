function tenHam(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
    if (i == 3) {
      return i
    }
  }
}


// Viet chuong tinh tong cua hay so S = 1 + 2 + 3...+ n
function tinhTong(number) {
  let sum = 0
  for (let i = 0; i < number; i++) {
    sum = sum + i
  }
  return sum
}

// viet chuong trinh dem so luong chu so le cua so nguyen duong n
function demSole(number) {
  let tongSoLe = 0
  for (let i = 0; i < number; i++) {
    if (i % 2 != 0) {
      tongSoLe++
    }
  }
  return `co tat ca ${tongSoLe} so le cua so nguyen duong ${number}`
}

// viet chuong tring giai va bien phuong trinh bac nhat ax + b = 0 
function phuongTrinhBacNhat(a, b) {
  let x
  if (a == 0) {
    if (b == 0) {
      return " co vo so nghiem"
    } else {
      return "vo nghiem "
    }
  } else {
    x = -b / a
    return `phuong trinh co 1 nghiem x = ${x}`
  }
}
// viet chuong trinh tinh tong cac gia tri le nguyen duong nho hon N
function tinhTongsole(number) {
  let sum = 0
  for (let i = 0; i < number; i++) {
    if (i % 2 !== 0) {
      sum += i
    }
  }
  return `tong cac so le bang: ${sum}`
}

console.log(tinhTongsole(5)) 