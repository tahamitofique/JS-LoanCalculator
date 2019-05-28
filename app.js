const formm=document.querySelector('#loan-form');
const loan=document.getElementById('amount');
const intrst=document.getElementById('interest');
const repay=document.getElementById('years');
const monthpay=document.getElementById('monthly-payment');
const tpay=document.getElementById('total-payment');
const tint=document.getElementById('total-interest');

formm.addEventListener('submit',calculat);

function calculat(e){
    loann=loan.value;
    interest=intrst.value /100;
    repayy=repay.value *12;
    const totalint=loann*interest;
    const totalpay=parseInt(loann)+totalint;
    const monthly=totalpay/repayy;
    monthpay.value=monthly.toFixed(2);
    tpay.value=totalpay;
    tint.value=totalint;
    e.preventDefault();
}