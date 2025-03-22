document.addEventListener("DOMContentLoaded", function () {
  //select total price
  const totalPrice = document.querySelector(".total");

  //function to update the total price
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card").forEach((item) => {
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      const unitPrice = parseFloat(item.querySelector(".unit-price").textContent.replace("$", " "));
      total += quantity * unitPrice;
    })
   totalPrice.textContent = `${total} $`;

  }
 //Select all product cards

 document.querySelectorAll(".card").forEach((item) => {
         const plusBtn = item.querySelector(".fa-plus-circle");
         const minsBtn = item.querySelector(".fa-minus-circle");
         const quantitySpan = item.querySelector(".quantity");
         const deleteBtn = item.querySelector(".fa-trash-alt");
         const likeBtn = item.querySelector(".fa-heart");

                //increase quantity
             plusBtn.addEventListener("click", () => {
              let quantity = parseInt(quantitySpan.textContent);
              quantitySpan.textContent = quantity + 1;
              
              updateTotal();
             });

                //decrease quantity
             minsBtn.addEventListener("click", () =>  {
              let quantity = parseInt(quantitySpan.textContent);
              if (quantity > 0) {
                quantitySpan.textContent = quantity - 1;

                updateTotal();
              }


             })

               //delete item from cart
               deleteBtn.addEventListener("click", () => {
               item.parentElement.parentElement.remove();
               
               updateTotal();
               });

               //like button
              likeBtn.addEventListener("click", () => {
                likeBtn.classList.toggle("liked");
              });

 });
// initial total price calculation
updateTotal();
});