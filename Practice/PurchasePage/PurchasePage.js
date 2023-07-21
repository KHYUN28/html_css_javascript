function calculateTotal() {
  const form = document.getElementById('orderForm');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  let total = 0;

  for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          const price = parseInt(checkboxes[i].value);
          total += price;
      }
  }

  const orderResultDiv = document.getElementById('orderResult');
  const totalprice = total.toLocaleString();
  orderResultDiv.innerHTML = `주문 금액: ${totalprice}원`;
}
