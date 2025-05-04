const item_1 = {
    "sno": "1",
    "name": "Avocado Salad",
    "price": "$25",
    "img_src": "/image/plate1.jpg"
}

const item_2 = {
    "sno": "2",
    "name": "Paruppu Sambar",
    "price": "$40",
    "img_src": "/image/plate2.jpg"
}

const item_3= {
    "sno": "3",
    "name": "Tomato Sambar",
    "price": "$500",
    "img_src": "/image/plate3.jpg"
}
const item_4 = {
    "sno":"4",
    "name":"Grill chicken",
    "price":"$1000",
    "img_src":"/image/plate3.jpg"
}

function option(list)
{
    if (list == "1"){
        document.getElementById("sno").innerHTML=item_1.sno
        document.getElementById("price").innerHTML=item_1.price
        document.getElementById("name").innerHTML=item_1.name
        document.getElementById("image").src=item_1.img_src

    }

    if (list == "2"){
        document.getElementById("sno").innerHTML=item_2.sno
        document.getElementById("price").innerHTML=item_2.price
        document.getElementById("name").innerHTML=item_2.name
        document.getElementById("image").src=item_2.img_src
    }

    if (list == "3"){
        document.getElementById("sno").innerHTML=item_3.sno
        document.getElementById("price").innerHTML=item_3.price
        document.getElementById("name").innerHTML=item_3.name
        document.getElementById("image").src=item_3.img_src

    }
    if (list == "4"){
        document.getElementById("sno").innerHTML=item_4.sno
        document.getElementById("price").innerHTML=item_4.price
        document.getElementById("name").innerHTML=item_4.name
        document.getElementById("image").src=item_4.img_src

    }
}

var cartQuantity = 0;
function cart(){
    cartQuantity +=1;
    document.getElementById("cart" ).innerHTML= cartQuantity;
    return cartQuantity;
    // console.log(`${cartQuantity}`);
}

function nandhini(p1,p2){
    let nandhu = p1*p2


    return nandhu;

  

}

 console.log(nandhini(4,3));

     






