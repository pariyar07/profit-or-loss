var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var stk = Number(stocksQuantity.value);
    var curr= Number(currentPrice.value);

    stockProfitAndLoss(ip, stk, curr);
}

function stockProfitAndLoss(initial, stock, current){
    if(initial > current){
        var loss = (initial - current) * stock;
        var lossPercentage = (loss * initial) / stock;
        output(`Loss = ${loss} and Loss Percentage = ${lossPercentage} %`);
    }else if(current > initial){
        var profit = (current - initial) * stock;
        var profitPercentage = (profit * initial) / stock;
        output(`profit = ${profit} and profit Percentage = ${profitPercentage} %`);
    }else{
        output("You are stuck.")
    }
}

function output(message){
    outputBox.innerHTML = message;
}