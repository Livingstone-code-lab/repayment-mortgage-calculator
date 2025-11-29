let container1 = document.getElementById("container1");
let deleteBtn = document.getElementById("delete-btn");
let form = document.getElementById("form");
let amountOnly = document.getElementById("amount-only");
let input1 = document.getElementById("mortgage-amount");
let select = document.querySelector("select");
let option = document.getElementsByTagName("option");
let termDiv = document.getElementById("term-div-1");
let input2 = document.getElementById("mortgage-term");
let years = document.getElementById("years");
let rateDiv = document.getElementById("rate-div-1");
let input3 = document.getElementById("interest-rate");
let percentage = document.getElementById("percentage");
let repaymentDiv = document.getElementById("repay-div");
let interestOnlyDiv = document.getElementById("interest-div");
let calculate = document.getElementById("calculate-btn");
let input = document.getElementsByTagName("input");
let container2 = document.getElementById("container2");
let message = document.querySelectorAll(".message");
let emptyResultDiv = document.getElementById("empty-inputs");
let resultBox = document.getElementById("result-box");
let monthRepayment = document.getElementById("monthly-repayment");
let sumOfRepayment = document.getElementById("total-repayment");
let repaymentRadio = document.getElementById("repayment");
let interestOnlyRadio = document.getElementById("interest-only");



calculate.addEventListener("click", () => {

const clearMessage = () => {
      setTimeout(() => {
        message.forEach(m => m.textContent = "");
       
      }, 2000);
    };


    const resetErrorStyles = () => {
        setTimeout(() => {
       amountOnly.style.border = "";
        termDiv.style.border = "";
        rateDiv.style.border = "";
        select.style.backgroundColor = "";
        select.style.color = "";
        years.style.backgroundColor = "";
        years.style.color = "";
        percentage.style.backgroundColor = "";
        percentage.style.color = "";
     }, 2000);
    };


    const mortgageType = document.querySelector("input[name='mortgage-type']:checked");


    let hasError = false;
    


      if (input1.value.trim() === "") {
        message[0].textContent = "This field is required";
      message[0].style.color = "red";
      message[0].style.fontSize = "0.5rem";
      amountOnly.style.border = "1px solid red";
      select.style.backgroundColor = "red";
      select.style.color = "white";
      clearMessage();
      resetErrorStyles();
        hasError = true;
    }

    
    if (input2.value.trim() === "") {
        message[1].textContent = "This field is required";
      message[1].style.color = "red";
      message[1].style.fontSize = "0.5rem";
      termDiv.style.border = "1px solid red";
      years.style.backgroundColor = "red";
      years.style.color = "white";
      clearMessage();
      resetErrorStyles();
        hasError = true;
    }

    
    if (input3.value.trim() === "") {
        message[2].textContent = "This field is required";
      message[2].style.color = "red";
      message[2].style.fontSize = "0.5rem";
      rateDiv.style.border = "1px solid red";
      percentage.style.backgroundColor = "red";
      percentage.style.color = "white";
      clearMessage();
      resetErrorStyles();
        hasError = true;
    }


    

    if (!mortgageType) {
        message[3].textContent = "This field is required";
       message[3].style.color = "red";
       message[3].style.fontSize = "0.5rem";
    
      hasError = true;
      clearMessage(); 
    }


    if (hasError) {
       emptyResultDiv.classList.add("empty-inputs");
       emptyResultDiv.removeAttribute("hidden");
       resultBox.classList.add("result-box");
       return;
    } else {
        emptyResultDiv.classList.remove("empty-inputs");
         emptyResultDiv.setAttribute("hidden", ""); 
         resultBox.classList.remove("result-box");
    }
    

    const radioBtn = mortgageType.value;
    


    function calculateRepaymentInputs() {
    const currency = select.value;
    const mortgageAmount = Number(input1.value);
    const amountOfYears = Number(input2.value);
    const interestRate = Number(input3.value);
    const convertYrsToMonth = amountOfYears * 12;
 

    let monthlyRepayment;
    let totalRepayment;
    let monthlyInterestRate = (interestRate / 100) / 12;  


    if (radioBtn === "repayment") {
        monthlyRepayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, convertYrsToMonth)) / (Math.pow(1 + monthlyInterestRate, convertYrsToMonth) - 1);
       totalRepayment = monthlyRepayment * convertYrsToMonth;
    } else if (radioBtn === "interest-only") {
       monthlyRepayment = mortgageAmount * monthlyInterestRate;
       totalRepayment = monthlyRepayment * convertYrsToMonth;
     }
      
     let formattedMonthly;
     let formattedTotal;

     if (currency === "GBP") {
    formattedMonthly = monthlyRepayment.toLocaleString('en-GB', {style: "currency", currency: "GBP"});
     formattedTotal = totalRepayment.toLocaleString('en-GB', {style: "currency", currency: "GBP"});
   }else if (currency === "USD") {
     formattedMonthly = monthlyRepayment.toLocaleString('en-US', {style: "currency", currency: "USD"});
     formattedTotal = totalRepayment.toLocaleString('en-US', {style: "currency", currency: "USD"});
   } else if (currency === "EUR") {
    formattedMonthly = monthlyRepayment.toLocaleString('de-DE', {style: "currency", currency: "EUR"});
     formattedTotal = totalRepayment.toLocaleString('de-DE', {style: "currency", currency: "EUR"});
   } else if (currency === "JPY") {
     formattedMonthly = monthlyRepayment.toLocaleString('ja-JP', {style: "currency", currency: "JPY"});
     formattedTotal = totalRepayment.toLocaleString('ja-JP', {style: "currency", currency: "JPY"});
   } else if (currency === "FRF") {
     formattedMonthly = monthlyRepayment.toLocaleString('fr-FR', {style: "currency", currency: "FRF"});
     formattedTotal = totalRepayment.toLocaleString('fr-FR', {style: "currency", currency: "FRF"});
   } else if (currency === "KRW") {
     formattedMonthly = monthlyRepayment.toLocaleString('ko-KR', {style: "currency", currency: "KRW"});
     formattedTotal = totalRepayment.toLocaleString('ko-KR', {style: "currency", currency: "KRW"});
   } else if (currency === "RUB") {
      formattedMonthly = monthlyRepayment.toLocaleString('ru-RU', {style: "currency", currency: "RUB"});
     formattedTotal = totalRepayment.toLocaleString('ru-RU', {style: "currency", currency: "RUB"});
   } else if (currency === "MNT") {
      formattedMonthly = monthlyRepayment.toLocaleString('mn-MN', {style: "currency", currency: "MNT"});
     formattedTotal = totalRepayment.toLocaleString('mn-MN', {style: "currency", currency: "MNT"});
   } else if (currency === "KZT") {
      formattedMonthly = monthlyRepayment.toLocaleString('kk-KZ', {style: "currency", currency: "KZT"});
     formattedTotal = totalRepayment.toLocaleString('kk-KZ', {style: "currency", currency: "KZT"});
   } else if (currency === "PHP") {
      formattedMonthly = monthlyRepayment.toLocaleString('en-PH', {style: "currency", currency: "PHP"});
     formattedTotal = totalRepayment.toLocaleString('en-PH', {style: "currency", currency: "PHP"});
   } else if (currency === "NGN") {
      formattedMonthly = monthlyRepayment.toLocaleString('en-NG', {style: "currency", currency: "NGN"});
     formattedTotal = totalRepayment.toLocaleString('en-NG', {style: "currency", currency: "NGN"});
   } else if (currency === "KHR") {
      formattedMonthly = monthlyRepayment.toLocaleString('km', {style: "currency", currency: "KHR"});
     formattedTotal = totalRepayment.toLocaleString('km', {style: "currency", currency: "KHR"});
   };


       monthRepayment.textContent = formattedMonthly;
       sumOfRepayment.textContent = formattedTotal;

      return totalRepayment;
    }

    calculateRepaymentInputs();

});


deleteBtn.addEventListener("click", () => {
    input1.value = "";
    input2.value = "";
    input3.value = "";
    document.querySelectorAll("input[name='mortgage-type']").forEach(r => r.checked = false);
});


 repaymentRadio.addEventListener("change", () => {
  repaymentDiv.style.backgroundColor = "lightyellow";
   repaymentDiv.style.border = "1px solid hsl(61, 70%, 52%)";

   interestOnlyDiv.style.backgroundColor = "";
   interestOnlyDiv.style.border = "";
});


interestOnlyRadio.addEventListener("change", () => {
   interestOnlyDiv.style.backgroundColor = "lightyellow";
   interestOnlyDiv.style.border = "1px solid hsl(61, 70%, 52%)";

   repaymentDiv.style.backgroundColor = "";
   repaymentDiv.style.border = "";
});

