let total = 0;

function handleClick(target){
    const selectedItemsContainer = document.getElementById('selected-items');

    const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    console.log(li);

    selectedItemsContainer.appendChild(li);
    
   console.log(target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[0])

   const price = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[0];
  

   total = parseFloat(total) + parseFloat(price);

   console.log(total);
   const totalPrice = total.toFixed(2);
   document.getElementById('total-price').innerText = totalPrice;
 const purchase = document.getElementById('purchase');
 if(total>0){
    purchase.removeAttribute('disabled')
 }
   const applyButton = document.getElementById('apply-btn');
    const coupon = document.getElementById('coupon');
    const couponCode = coupon.value;
   
    

    if(total >= 200){
        applyButton.removeAttribute('disabled')
     }
    
document.getElementById('apply-btn').addEventListener('click', function(){
    const totalField = document.getElementById('total')
    const totalString = parseFloat(totalPrice) - (parseFloat(totalPrice) * .20) ;
    const totalDiscount = parseFloat(totalString);
    const newDiscount = totalDiscount.toFixed(2);
    totalField.innerText = newDiscount;

    const discountField = document.getElementById('discount');
    const discountString = totalPrice - newDiscount;
    discountField.innerText = discountString.toFixed(2);
})
const goHome = document.getElementById('go-home');
goHome.addEventListener('click', function(){
    location.reload();
})
}




