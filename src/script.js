let newarray = [];
function funct() {
    var productid = document.getElementById("productid").value;
    console.log(productid);
    var productname = document.getElementById("productname").value;
    console.log(productname);
    var productprice = document.getElementById("productprice").value;
    console.log(productprice);

    if (productid !== "" && productname !== "" && productprice !== "") {

        var obj = { product: productid, product_name: productname, product_price: productprice };
        console.log(obj);
        newarray.push(obj);
        console.log(newarray[0]['product']);

        var string1 = "<table><tr><th>Product Id</th><th>Product Name</th><th>Product Price</th></tr>";
        for (let x of newarray) {
            string1 += "<tr><td>" + x['product'] + "</td><td>" + x['product_name'] + "</td><td>USD " + x['product_price'] + "</td></tr>";
        };

        string1 += "</table>";
        document.getElementById("table").innerHTML = string1;
        document.getElementById("productid").value = "";
        document.getElementById("productname").value = "";
        document.getElementById("productprice").value = "";

    }

    else {
        alert("please fill all the details");
    }
}


