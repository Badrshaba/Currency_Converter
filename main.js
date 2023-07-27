//https://v6.exchangerate-api.com/v6/78aa7717b75ea2bdd51acf57/latest/USD

//https://openexchangerates.org/api/currencies.json

let result = document.querySelector(".exchange-rate");

let select = document.querySelectorAll("select");

let btn = document.querySelector("button");

let amount = document.querySelector("input");
let icon = document.querySelector("i")
const COUNTRY_API = "https://openexchangerates.org/api/currencies.json ";

fetch(COUNTRY_API)
  .then((res) => res.json())
  .then((countries) => {
    for (let county in countries) {
      select[0].innerHTML += `<option>${county}</option>`;
      select[1].innerHTML += `<option>${county}</option>`;
    }
icon.addEventListener("click",()=>{
    let swi = select[0].value
    select[0].value = select[1].value
    select[1].value = swi
}) 

    btn.addEventListener("click", () => {
      fetch(
        `https://v6.exchangerate-api.com/v6/78aa7717b75ea2bdd51acf57/latest/${select[0].value}`
      )
        .then((res) => res.json())
        .then((data) => {
          let dataObj = data.conversion_rates;
          let mResult = amount.value*dataObj[select[1].value]
          result.innerHTML=` ${amount.value} ${select[0].value} : ${mResult.toFixed(2)} ${select[1].value}`
        });
    });

    

  });




  