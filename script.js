const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector(".output")


 const calcProfit = (initial, quantity,current) => {

    if(initial > current) {

        const loss = (initial - current ) * quantity;
        const lossPercent = (loss / (initial*quantity) ) * 100; 

        output.innerText = `😩 loss is ${loss} rupees which is ${lossPercent}%`;
        
        // console.log(`😩 loss is ${loss} rupees which is ${lossPercent}%`);


    } 
    
    else if (initial < current ) {

        const gain = (current - initial  ) * quantity;
        const gainPercent = (gain / (initial*quantity) ) * 100; 
        
        output.innerText = ` 👀 gain is ${gain} rupees which is ${gainPercent}%`;

        // console.log(` 👀 gain is ${gain} rupees which is ${gainPercent}%`);
 
    } 

    else {

        output.innerText = `✌ No Profit - no Loss.`;

        // console.log(`✌ No Profit - no Loss.`);

    }


 } 


 
 const submitHandler = () => {

     
     const initial = Number(initialPrice.value);
     const quantity = Number(stocksQuantity.value);
     const current = Number(currentPrice.value);
  
     console.log(initial);

     calcProfit(initial,quantity,current);


 }


submitButton.addEventListener("click", submitHandler);

