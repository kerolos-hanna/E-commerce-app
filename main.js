var div1 = document.querySelector('.GetProducts-1');
var div2 = document.querySelector('.GetProducts-2');
var div3 = document.querySelector('.GetProducts-3');
var div4 = document.querySelector('.GetProducts-4');
var h1 = document.querySelector('h1');
var iconCart = document.querySelector('.button-check a>i');
// var background = document.querySelector('.button-check');
var a = document.querySelector('a');
var backToTop = document.querySelector('button');

window.addEventListener('scroll',function(){
  if(window.pageYOffset > 100){
    backToTop.style.display = "block";
  }
  else{
    backToTop.style.display = "none";
  }
})

backToTop.addEventListener('click',function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://5bcce576cf2e850013874767.mockapi.io/task/categories/1");
xhr.send();

xhr.onreadystatechange = function(){
  if(xhr.status == 200 && xhr.readyState == 4){
    var product = JSON.parse(xhr.response);
    product.products.forEach((item => {
      var d = `
      <div class = "class-${item.id}">
      <p>${item.id}- 
      ${item.name}</p>
      <div class="img"><img src="${item.product_img}"></div>
      <div class="spanW"><span> weight = ${item.weight}</span></div>
      <div class="spanP"><span> price = ${item.price}</span></div>
      <div class="btn">
        <input type="number" id="Quantity-${item.id}" placeholder="The quantity" min="0">
        <input type="button" value="Add to cart"
        onclick = "fun('${item.id}','${item.name}','${item.price}'.split('L'),
        'Quantity-${item.id}', '${item.product_img}')
        " >
      </div>
      </div>
      `;
      div1.innerHTML += d;
    }))
  }
}

// function getQun(QuantityId){
//   console.log(document.querySelector('#' + QuantityId).value);
//   return document.querySelector('#' + QuantityId).value
// }
var counter = 0;
var items = [];
a.addEventListener('click',(e)=>{
  var TotalCost = 0;
  //store counter and items to get them in another page
  AddCookie("counter",counter,0);
  //item[i] to know what item is 
  for (var i = 0; i < counter; i++) {
    AddCookie("item-"+i,items[i],0);
    console.log("item = ", items[i])
    console.log(getCookies("name-"+items[i]))
    //price of each item
    var x = parseInt(getCookies("price-" + items[i]));
    TotalCost += x;
    console.log(TotalCost);

  }
  console.log("TotalCost = ", TotalCost);
  //store Total Cost in Cookies
  AddCookie("TotalCost",TotalCost,0);
  // location.href = "cart.html";
})



function fun(id,name,price,QuantityId,img){
  // button.style.display = "inline-block";
  h1.style.textAlign = "left";
  iconCart.style.display = "block";
  items[counter] = id;
  counter++;
  //to show what i have in cart
  iconCart.innerHTML = " " + counter;
  quantity = document.querySelector('#' + QuantityId).value
  console.log(quantity)
  if(quantity == ""){
    quantity = 1;
  }
  AddCookie("name-"+id, name, 0);
  AddCookie("quantity-" + id, quantity, 0);
  AddCookie("price-"+id, price[0] * quantity, 0);
  AddCookie("img-"+id,img,0);
  console.log(img)
  console.log(getCookies("name-"+id));
  console.log(getCookies("price-"+id));
}

// /*Propagation */
// div1.addEventListener('click',function(e){
//   console.log(e.target.value)
// })

var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://5bcce576cf2e850013874767.mockapi.io/task/categories/2");
xhr2.send();

xhr2.onreadystatechange = function () {
  if (xhr2.status == 200 && xhr2.readyState == 4) {
    var product = JSON.parse(xhr2.response);
    product.products.forEach((item => {
      var d = `
      <div class = "class-${item.id}">
      <p>${item.id}- 
      ${item.name}</p>
      <div class="img"><img src="${item.product_img}"></div>
      <div class="spanW"><span> weight = ${item.weight}</span></div>
      <div class="spanP"><span> price = ${item.price}</span></div>
      <div class="btn">
      <input type="number" id="Quantity-${item.id}" placeholder="The quantity" min="0">
      <input type="button" value="Add to cart"
      onclick = "fun('${item.id}','${item.name}','${item.price}'.split('L'),
      'Quantity-${item.id}', '${item.product_img}')
      " >
      </div>
      </div>
      `
      div2.innerHTML += d;
    }))
  }
}



 // imgLink = document.querySelectorAll('.img');
// imgLink.forEach((item, index) => {
//   item.addEventListener('click', function () {
//     productContent.innerHTML += index;
//     console.log(index);
//   })
// })

var xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://5bcce576cf2e850013874767.mockapi.io/task/categories/3");
xhr3.send();

xhr3.onreadystatechange = function () {
  if (xhr3.status == 200 && xhr3.readyState == 4) {
    var product = JSON.parse(xhr3.response);
    product.products.forEach((item => {
      var d = `
      <div class = "class-${item.id}">
      <p>${item.id}- 
      ${item.name}</p>
      <div class="img"><img src="${item.product_img}"></div>
      <div class="spanW"><span> weight = ${item.weight}</span></div>
      <div class="spanP"><span> price = ${item.price}</span></div>
      <div class="btn">
        <input type="number" id="Quantity-${item.id}" placeholder="The quantity" min="0">
        <input type="button" value="Add to cart"
        onclick = "fun('${item.id}','${item.name}','${item.price}'.split('L'),
        'Quantity-${item.id}', '${item.product_img}')
        " >
      </div>
      </div>
      `;
      div3.innerHTML += d;
    }))
  }
}

var xhr4 = new XMLHttpRequest();
xhr4.open("GET", "https://5bcce576cf2e850013874767.mockapi.io/task/categories/4");
xhr4.send();

xhr4.onreadystatechange = function(){
  if(xhr4.status == 200 && xhr4.readyState == 4){
    var product = JSON.parse(xhr4.response);
    product.products.forEach((item => {
      var d = `
      <div class = "class-${item.id}">
      <p>${item.id}- 
      ${item.name}</p>
      <div class="img"><img src="${item.product_img}"></div>
      <div class="spanW"><span> weight = ${item.weight}</span></div>
      <div class="spanP"><span> price = ${item.price}</span></div>
      <div class="btn">
        <input type="number" id="Quantity-${item.id}" placeholder="The quantity" min="0">
        <input type="button" value="Add to cart"
        onclick = "fun('${item.id}','${item.name}','${item.price}'.split('L'),
        'Quantity-${item.id}', '${item.product_img}')
        " >
      </div>
      </div>
      `;
      div4.innerHTML += d;
    }))
  }
}

