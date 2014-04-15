(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){

    $('.deposit').click(depositAmt);
    $('.withdrawl').click(withdrawlAmt);

  }

  var input;
  var balance = 1000;
  var fee;
  var deposit;
  var withdrawl;
  updateBalance();

  function depositAmt(){
    getInput();
    deposit = input;
    balance = balance + input;
    addTableData();
    clearValues();
    updateBalance();
  }

  function withdrawlAmt(){
    getInput();
    withdrawl = input;
    if((balance-input)<0){
      fee = 50;
      balance -= fee + input;
    }
    else{
      balance = balance-input;
    }

    addTableData();
    clearValues();
    updateBalance();
  }

  function updateBalance(){
    if(balance >= 0){
      $('#balance').text(balance);
    }
    else{
      $('#balance').text('(' + balance + ')');
    }
  }

  function clearValues(){
    fee = '';
    deposit = '';
    withdrawl = '';
  }

  function getInput(){
     input = $('.inputBox').val()*1;
  }

  function addTableData(){
    var $td1 = $('<td class="fee">').text(fee);
    var $td2 = $('<td class="dep">').text(deposit);
    var $td3 = $('<td class="with">').text(withdrawl);
    var $td4;
    if(balance < 0){
     $td4 = $('<td class="bal">').text('(' + balance + ')');
    }else{
      $td4 = $('<td class="bal">').text(balance);}

    var $tr = $('<tr>');

    $tr.append($td1, $td2, $td3, $td4);

    $('#ledgerTable > tbody').append($tr);
  }
})();
