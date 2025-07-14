const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const masterBtn = document.getElementById('masterBtn');
const paypalBtn = document.getElementById('paypalBtn');
const submitBtn = document.getElementById('submitBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

submitBtn.onclick = function(){
    if(visaBtn.checked){
        console.log('This User is paying Via VisaCard');
    }
    else if(masterBtn.checked){
        console.log('This User is making Payment Via MasterCard');
    }
    else if(paypalBtn.checked){
        console.log('Payment is being made via payPal');
    }
}

