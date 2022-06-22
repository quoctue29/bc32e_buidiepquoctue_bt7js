//bài 1
/*
    4 yếu của vòng lặp: 
    B1: Xác định yếu tố thay đổi (khởi tạo giá trị bắt đầu) => Nó sẽ bị thay đổi trong vòng lặp
    B2: Thiết lặp điều kiện lặp (đúng thì làm và lặp lại)
    B3: Cài đặt khối xử lý 
    B4: Thay đổi giá trị của biến khai báo ở bước 1
*/

document.getElementById('btnXemKetQua').onclick = function() {
    var sum = 0;
    var n = 1;

    while (true) {
        sum += n;
        if (sum > 10000) {
            break;
        }
        n++;
    }
document.getElementById('ketQua_b1').innerHTML = n;
}





// bài2
/*
    4 yếu của vòng lặp: 
    B1: Xác định yếu tố thay đổi (khởi tạo giá trị bắt đầu) => Nó sẽ bị thay đổi trong vòng lặp
    B2: Thiết lặp điều kiện lặp (đúng thì làm và lặp lại)
    B3: Cài đặt khối xử lý 
    B4: Thay đổi giá trị của biến khai báo ở bước 1
*/

document.getElementById('btnTinhGiaiThua').onclick = function() {
    //input number
    var iSo = Number(document.getElementById('nhapSo_2').value);
    //output 
    var giaiThua = 1;
    for (soHang = 1; soHang <= iSo; soHang++) {
        giaiThua = giaiThua * soHang;
    }
    document.getElementById('ketQua_b2').innerHTML= 'Giai Thừa là ' + giaiThua;
}



// bài 3 
/*
    4 yếu của vòng lặp: 
    B1: Xác định yếu tố thay đổi (khởi tạo giá trị bắt đầu) => Nó sẽ bị thay đổi trong vòng lặp
    B2: Thiết lặp điều kiện lặp (đúng thì làm và lặp lại)
    B3: Cài đặt khối xử lý 
    B4: Thay đổi giá trị của biến khai báo ở bước 1
*/

//mũ
function mu(x,n) {
    var i = 1;
    for ( var mu = 1; i <= n; i++ ) {
        mu *= x;
    }
    return mu;
}
//tổng
function tong(x,n) {
    var i = 1;
    for ( var sum = 0; i <= n; i++ ) {
        sum += mu(x,i);
    }
    return sum;
}
    
document.getElementById('btnTinhTong').onclick = function() {
    //input number 
    var soX = Number(document.getElementById('nhapX').value);
    var soN = Number(document.getElementById('nhapN').value);
    //output 
    var ketQua = '';
    //process
    ketQua = tong(soX,soN);
    document.getElementById('ketQua_b3').innerHTML ='Tổng là ' + ketQua;
}
//bài 4
/*
    4 yếu của vòng lặp: 
    B1: Xác định yếu tố thay đổi (khởi tạo giá trị bắt đầu) => Nó sẽ bị thay đổi trong vòng lặp
    B2: Thiết lặp điều kiện lặp (đúng thì làm và lặp lại)
    B3: Cài đặt khối xử lý 
    B4: Thay đổi giá trị của biến khai báo ở bước 1
*/
document.getElementById("btnDiv").onclick = function () {
    showDiv();
  };
  
  // hàm show div
  function showDiv() {
    // input n = 0
    var n = 1;
    //   output showDiv: string
    var showDiv = document.getElementById("showDiv");
    //   progress
    //  B1: giá trị thay đổi n = 0
    while (n <= 10) {
      // B2: điều kiện lặp
  
      // B3: khối lệnh xử lý
      if (n % 2 === 0) {
        var div = document.createElement("div");
        div.innerHTML = "Div chẵn: " + n;
        div.style.backgroundColor = "red";
        div.style.color = "#000";
        showDiv.appendChild(div);
      } else {
        var div = document.createElement("div");
  
        div.innerHTML = "Div lẻ: " + n;
        div.style.backgroundColor = "blue";
        div.style.color = "#000";
  
        showDiv.appendChild(div);
      }
  
      // B4: thay đổi điều kiện lặp
      n++;
    }
    return showDiv;
}