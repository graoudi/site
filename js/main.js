/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let carts = document.querySelectorAll('add-cart');

let products = [
   
    {
       name: 'Sole',
    tag: 'filet',
    price: 6.95,
    inCart: 0
    
    },
     {
       name: 'Sole',
    tag: 'filet',
    price: 6.95,
    inCart: 0
    
    },
     {
       name: 'Sole',
    tag: 'filet',
    price: 10.00,
    inCart: 0
    
    },
     {
       name: 'Sole',
    tag: 'filet',
    price: 6.95,
    inCart: 0
    
    },
    
     {
       name: 'Sole',
    tag: 'filet',
    price: 6.95,
    inCart: 0
    
    },
    
     {
       name: 'Sole',
    tag: 'filet',
    price: 7.95,
    inCart: 0
    
    },
     {
       name: 'Sole',
    tag: 'filet',
    price: 8.00,
    inCart: 0
    
    }
   
];

for(let i=0; i< carts.lenght; i++) {
    carts[i].addEventListener('clique', () => {
        cartNumbers(products[i]);
        totalCost(product[i]);
    })
}

function onLoadCarNumbers() {
    let productNumbers = localStorage.getItem('NumeroAupanier');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}



function cartNumbers(product){
    let productNumbers= localStorage.getItem('NumeroAupanier');
    
    productNumbers = parseInt(productNumbers);
  console.log(productNumbers );
    
    if(productNumbers){
        localStorage.setItem('NombreAupanier', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.Storage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent =1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);
    if(cartItems === undefined){
        cartItems= {
                    ...cartItems,
                    [product.tag]: product
        }
    } else{
    product.inCart =1; 
     cartItems= {
        [product.tag]: product
    }
}
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    
}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
   
    
    if(cartCost != NULL){
         cartCost = parseInt(cartCost);
   
    localStorage.setItem("totalCost", cartCost + product.price); }
 else {
    localStorage.setItem("totalCost", product.price); 
}
}

function displayCart(){
    let cartItems= localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer= document.querySelector("products");
    if (cartItems && productContainer){
        productContainer.innerHTML = '';
        Objet.Values(cartItems).map(item=>{productContainer.innerHTML += `
    <div class= "price">€${item.price},00</div>
    <div class= "total">€${item.inCart* item.price},00</div> 
`;
            
        });
      productContainer.inerHTML += `
<div class= "basketTotalContainer"> <h4 class="basketTotalTitle"> Total du paner </h4>
<h4 class= "basketTotal"> €${cartCost},00 </h4>
`  ;
        
    }
}

onLoadCarNumbers();
displayCart();