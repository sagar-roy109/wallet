document.getElementById('deposit').addEventListener('click', function(){
  var get_deposit_value = document.getElementById('depositValue').value;
  get_deposit_value = parseFloat(get_deposit_value);
  
  var get_deposit_amount = document.getElementById('depositAmount').innerText;
  get_deposit_amount = parseFloat(get_deposit_amount);
  var deposit_total = get_deposit_value + get_deposit_amount;
  document.getElementById('depositAmount').innerText = deposit_total;
 
  var get_balance = document.getElementById('balance').innerText;
  get_balance = parseFloat(get_balance);
  var total_balance = get_deposit_value + get_balance;
  document.getElementById('balance').innerText = total_balance;
})

