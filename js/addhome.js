  
  
  // rsusable fucntion making important

  function getInputValue(id){
     const getInput = document.getElementById(id)
     const getInputV = getInput.value 
     const getInputVInt = parseInt(getInputV)

    return getInputVInt;
  }
  
  function getInputValueOnly(id){
      const getInput = document.getElementById(id)
      const getInputVOnly = getInput.value 
     

    return getInputVOnly;
  }
  
// functions for innertext

function getInnerText(id){
  const getInnerT = document.getElementById(id)
  const getInnerTvalue = getInnerT.innerText
  const getInnerTextNumber = parseInt(getInnerTvalue)
   return getInnerTextNumber;
}

  // funtions for set innerText  

 function setInnerText(value){
  const setInnerElement = document.getElementById("balance")
  setInnerElement.innerText = value;

  return setInnerElement;
 }
  

//  fucntoin for toggle buttonm

function toggleHandle(id){
  const forms = document.getElementsByClassName("form")
  for(const form of forms){
    form.style.display= 'none';
  }
  document.getElementById(id).style.display="block";
}



  // add money js coding

const validPin = 1234;
const validAccount = 12345678910;

document.getElementById("add-amount-btn").addEventListener('click',function(e){
  e.preventDefault()
  const bank = getInputValueOnly("bank")
  const accountNumber = getInputValueOnly("account-number")

  // const amount = getInputValue("add-amount")
  const amount = getInputValue("add-amount")

  const pinNumber =  getInputValue("add-pin")
  // const pinNumber = parseInt(document.getElementById("add-pin").value )

  // const availableBalance = parseInt(document.getElementById("balance").innerText) 
   const availableBalance = getInnerText("balance");

  if(accountNumber.length<11){
    alert("Invalid account Number");
    return;
  }

  if(pinNumber!==validPin){
    alert("Invalid pin Number");
    return;
  }

  const totalAvailableBalance = amount + availableBalance;
   document.getElementById("balance").innerText = totalAvailableBalance;
})





// add money js end

// cashout js start

document.getElementById("cashout-btn").addEventListener('click',function(e){
  e.preventDefault()
  // const agentNumber = document.getElementById("agent-number").value 
  const agentNumber = getInputValueOnly("agent-number")
  // const amount = parseInt(document.getElementById("cash-amount").value )

  const amount = getInputValue("cash-amount")
  // const pinNumber = parseInt(document.getElementById("cash-pin").value )

  const pinNumber =getInputValue("cash-pin")
  // const availableBalance = parseInt(document.getElementById("balance").innerText) 
  const availableBalance = getInnerText("balance");


  if(agentNumber.length<11){
    alert("Invalid account Number");
    return;
  }

  if(pinNumber!==validPin){
    alert("Invalid pin Number");
    return;
  }

  const totalAvailableBalance = availableBalance - amount ;
   document.getElementById("balance").innerText = totalAvailableBalance;
})


// cashout js end

// toggling js start
document.getElementById("add-money-parent").addEventListener('click',function(){
  toggleHandle("add-money-form");
})
document.getElementById("cashout-money-parent").addEventListener('click',function(){
  toggleHandle("cashout-form");

})

document.getElementById("transfer-money-parent").addEventListener('click',function(){

  toggleHandle("transfer-form");

})