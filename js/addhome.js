

const validPin = 1234;

document.getElementById("add-amount-btn").addEventListener('click',function(e){
      e.preventDefault();

    const bank = document.getElementById("bank").value 
    const accountNumber = document.getElementById("account-number").value 
    const addAmount = parseInt(document.getElementById("add-amount").value )
    const addPin = parseInt(document.getElementById("add-pin").value)
    const availbleBalance = parseInt(document.getElementById("balance").innerText)
    
    if(accountNumber.length<11){
      alert("please provide valid account number")
      return;
    }

    if(addPin !== validPin){
      alert('please add valid pin code')
      return;
    }
    const totalAvalableBalance = availbleBalance + addAmount;
    document.getElementById("balance").innerText = totalAvalableBalance;
})