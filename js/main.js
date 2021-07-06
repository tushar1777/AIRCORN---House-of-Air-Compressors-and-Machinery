var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for(var i=0; i<removeCartItemButtons.length; i++)
{
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

let carts = document.querySelectorAll('.btn');
let products = [
    {
        name: 'Triple Piston Ingersol Tank Set',
        tag: 'tpits',
        price: 31000,
        inCart: 0
    },
    {
        name: 'Double Piston Long Tank Set',
        tag: 'dplts',
        price: 37000,
        inCart: 0
    },
    {
        name: 'Single Piston Small Set',
        tag: 'spss',
        price: 25000,
        inCart: 0
    },
    {
        name: 'Single Piston Double Compressor Tank Set',
        tag: 'spdcts',
        price: 40000,
        inCart: 0
    },
    {
        name: 'Double Piston High-Power Ingersol Tank Set',
        tag: 'dphpits1',
        price: 35000,
        inCart: 0
    },
    {
        name: 'Double Piston High-Power Ingersol Tank Set',
        tag: 'dphpits2',
        price: 24000,
        inCart: 0
    },
    {
        name: 'Triple Piston Ingersol Semi-Power Tank Set',
        tag: 'tpispts',
        price: 36000,
        inCart: 0
    },
    {
        name: 'Double Piston Single Compressor Long-Tank Set',
        tag: 'dpsclts',
        price: 29000,
        inCart: 0
    },
    {
        name: 'Double Piston Small-Tank Set',
        tag: 'dpsts',
        price: 29000,
        inCart: 0
    },
    {
        name: 'Double Piston Long-Small Tank Set',
        tag: 'dplsts',
        price: 27000,
        inCart: 0
    },
    {
        name: 'Double Piston Small Set',
        tag: 'dpss',
        price: 25000,
        inCart: 0
    },
    {
        name: 'Single Piston Small-Tank Set',
        tag: 'spsts',
        price: 23000,
        inCart: 0
    },
    {
        name: 'Single Piston Compressor and Small-Tank Old-Set',
        tag: 'spcastos',
        price: 24000,
        inCart: 0
    },
    {
        name: 'Triple Piston Kirloskar Small Tank-Set',
        tag: 'tpksts',
        price: 30000,
        inCart: 0
    },
    {
        name: 'Triple Piston High-Power Ingersol Tank Old-Set',
        tag: 'tphpitos',
        price: 33000,
        inCart: 0
    },
    {
        name: 'Double Piston Kirloskar Tank Old-Set',
        tag: 'dpktos',
        price: 36000,
        inCart: 0
    },
    {
        name: 'Double Piston Ingersoll Small Tank-Set',
        tag: 'dpists',
        price: 26000,
        inCart: 0
    },
    {
        name: 'Single Piston Curtis Small Tank-Set',
        tag: 'spcsts',
        price: 22000,
        inCart: 0
    },
    {
        name: 'Single Piston Kirloskar Compressor-Set',
        tag: 'spkcs',
        price: 18000,
        inCart: 0
    },
    {
        name: 'Impact Wrench-Set',
        tag: 'iws',
        price: 25000,
        inCart: 0
    },
    {
        name: 'Electric Impact wrench Set',
        tag: 'eiws',
        price: 30000,
        inCart: 0
    }
];

for(let i=0 ;i< carts.length; i++) {

    carts[i].addEventListener('click', () => {

        cartnumbers(products[i]);
        totalcost(products[i]);
    })
}

function onloadcartnumbers() {

    let productnumbers = localStorage.getItem('cartnumbers');

    if(productnumbers) {

        document.querySelector('.cartno span').textContent = productnumbers;
    }
}

function cartnumbers(product) {

    let productnumbers = localStorage.getItem('cartnumbers');
    productnumbers = parseInt(productnumbers);
    
    if(productnumbers) {

        localStorage.setItem('cartnumbers', productnumbers + 1);
        document.querySelector('.cartno span').textContent = productnumbers + 1;
    } 
    else {

        localStorage.setItem('cartnumbers',1);
        document.querySelector('.cartno span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {

            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {

        product.inCart = 1;
        cartItems = {
    
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalcost(product) {

    let cartcost = localStorage.getItem('totalcost');

    if(cartcost != null) {

        cartcost = parseInt(cartcost);
        localStorage.setItem("totalcost", cartcost + product.price); 
    }
    else {

        localStorage.setItem("totalcost", product.price);
    }
}

onloadcartnumbers();