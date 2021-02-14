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


document.getElementById('widthdraw').addEventListener('click', function(){
    var get_widthdraw_value = document.getElementById('widthdrawValue').value;
    var get_widthdraw_value_float = parseFloat(get_widthdraw_value);

    var get_widthdraw_amount = document.getElementById('widthdrawAmount').innerText;
    get_widthdraw_amount = parseFloat(get_widthdraw_amount);

    var widthdraw_total = get_widthdraw_value_float + get_widthdraw_amount;

    document.getElementById('widthdrawAmount').innerText = widthdraw_total;


 var get_balance = document.getElementById('balance').innerText;
  get_balance = parseFloat(get_balance);
  var total_balance =  get_balance - get_widthdraw_value_float;

  if(get_widthdraw_value == "" ){
      alert("Please Enter Amount");
      document.getElementById('widthdrawAmount').innerText = get_widthdraw_amount;
  }else if(total_balance < 0 ){
    document.getElementById('balance').innerText = 0;
    document.getElementById('widthdrawAmount').innerText = get_widthdraw_amount;
    
  }else {
    document.getElementById('balance').innerText = total_balance;
  }
  





})
