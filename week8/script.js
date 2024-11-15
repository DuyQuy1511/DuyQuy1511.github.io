function calculate1() {
    var a = document.getElementById("a_value").value;    //.value là lấy giá trị của đối tượng
    var result = 1;
    var output = "Result: ";
    for (var i=1; i<=a; i++) {
        result *=i;
    }
    document.getElementById("result").innerHTML = "Result: " + result;
}

// cop function từ file html index2 xong link vs file JSON.Trong file HTMl sẽ ko còn hàm nữa


