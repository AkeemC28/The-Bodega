var trash = document.getElementsByClassName("ph-trash");
var plus = document.getElementsByClassName("ph ph-plus-circle");
var minus = document.getElementsByClassName("ph ph-minus-circle");

Array.from(plus).forEach(function (plusButton) {
  plusButton.addEventListener('click', function () {
    const quantityInput = this.parentNode.parentNode.querySelector('.quantity input');
    let quantity = parseInt(quantityInput.value);
    quantity += 1;
    quantityInput.value = quantity;

    // Send PUT request to update the quantity
    fetch('/messages', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quantity: quantity
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update quantity');
        }
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  });
});

Array.from(minus).forEach(function (minusButton) {
  minusButton.addEventListener('click', function () {
    const quantityInput = this.parentNode.parentNode.querySelector('.quantity input');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
      quantity -= 1;
      quantityInput.value = quantity;

      // Send PUT request to update the quantity
      fetch('/messages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quantity: quantity
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update quantity');
          }
        })
        .catch(error => {
          console.error(error);
          // Handle error
        });
    }
  });
});





// Array.from(trash).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText;
//     const quantity = this.parentNode.parentNode.childNodes[3].innerText;
//     fetch('messages', {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'name': name,
//         'quantity': quantity
//       })
//     }).then(function (response) {
//       window.location.reload();
//     });
//   });
// });


