var result = document.querySelector('.results');
var Tcost = document.querySelector('#totalCost');
var done = document.querySelector('#Done');
var backToTop = document.querySelector('button');
var OrderDone = document.querySelector('#order-done');


window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
})

backToTop.addEventListener('click', function () {
  window.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'
  });
})

function loaded(){
  var counter = parseInt(getCookies("counter"));
  var d;
  var TotalCost = getCookies("TotalCost");
  console.log(counter)
  for(var i=0; i<counter; i++)
  {
    var name = getCookies("name-" + getCookies("item-" + i));
    var price = getCookies("price-" + getCookies("item-" + i));
    var img = getCookies("img-" + getCookies("item-" + i));
    var quantity = getCookies("quantity-" + getCookies("item-" + i));
    console.log(name);
    console.log(price);
    console.log(img);
    console.log(quantity);
    d = 
    `
    <div class="items-${i+1}">
    <p>${i+1}- ${name}</p>
    <div class="img"><img src="${img}"></div>
    <div class="spanW"><span> the quantity = ${quantity} KG</span></div>
    <div class="spanP"><span> the cost =  ${price} LE</span></div>
    <div class="btn">
      <input type="button" value="Delete"
        onclick = "remove(${i+1},'${price}')">
    </div>
    </div>
    `;
    result.innerHTML +=d ;
  }
  console.log("total cost = ",TotalCost)
  //to use it in remove function
  AddCookie("NewTotalCost",TotalCost,0);
  Tcost.innerHTML = `<span>Total Cost = ${TotalCost} LE</span>`;
}

function remove(id,price){
  document.querySelector('.items-'+id).remove();
  var totalCost = getCookies("NewTotalCost") - price;
  AddCookie("NewTotalCost",totalCost,0);
  console.log("New totalcost = ",totalCost);
  Tcost.innerHTML = `<span>Total Cost = ${totalCost} LE</span>`;
}

done.addEventListener('click',function(){
  var totalCost = getCookies("NewTotalCost");
  if(totalCost != 0){
    var confirmText = confirm("Are you sure to pay it?");
    if (confirmText) {
      OrderDone.style.display = "block";
      setTimeout(function(){
        location.href = "getProducts.html";
      },2000)
    }
    else{} //don't make anything
  }
  else{
    alert("you don't have a product");
  }
})