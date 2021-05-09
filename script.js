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
    const interest = (parseInt(principal.value) * years * rate) /100;
    const rate_val = document.getElementById("rate_val");
    rate_val.innerText = rate
    const result = document.getElementById("result")
    
    if(principal.value === "" || parseInt(principal.value) < 1){
        alert("Please Enter a positive number");
        principal.focus();
        return false;
  }
  
  result.innerHTML = "If you deposit <span>"+principal.value+"</span><br\>at an interest rate of <span>"+rate+"%</span><br\>You will receive an amount of <span>"+interest+"</span>,<br\>in the year <span>"+year+"</span><br\>"
 return true
}
