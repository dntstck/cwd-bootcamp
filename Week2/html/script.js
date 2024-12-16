// shopping list

function Shoppingitem(name, price, inCart=false){
    this.name = name;
    this.price = price;
    this.inCart = inCart;
}

async function getShoppingList(){
    const response = await fetch("https://fakestoreapi.com/products/");
    const shopItems = await response.json();
    const outputItems = [];
    console.log(response)

    for (let i = 0; i < shopItems.length; i++){

        const item = new Shoppingitem(shopItems[i].title, Shoppingitem[i].price);
        outputItems.push(item);
    } 

    return outputItems.push(item)


}

function dailyImg() {
    fetch("https://picsum.com/500/500")
    .then((res) => {
        console.log(res.url);
        const newImg = document.getElementById('dailyimg');
        newImg.setAttribute("src", res.url);
    });
}



//const item = new Shoppingitem("laptop", "1500");

//dailyImg();
//getShoppingList();