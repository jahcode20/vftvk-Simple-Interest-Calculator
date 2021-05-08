function updateRate() 
{
    const rateval = document.querySelector("#rate").value;
    document.querySelector("#rate_val").innerText=rateval;
}

const button = document.querySelector("#comput")
button.addEventListener("click", compute)
function compute(){
    let rate = document.querySelector("#rate").value;
    const years = document.querySelector("#years").value;
    let principal = document.querySelector("#principal");
    const year = new Date().getFullYear()+parseInt(years);
    const interest = parseInt(principal.value) * years * rate /100;
    const amount = parseInt(interest) + parseInt(principal.value)
    const rate_val = document.getElementById("rate_val");
    rate_val.innerText = rate
    const result = document.getElementById("result")
    
    if(principal.value === "" || parseInt(principal.value) < 1){
        alert("Please Enter a positive number");
        principal.focus();
        return false;
  }
  result.innerHTML = "If you deposit "+principal.value+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
 return true
}
