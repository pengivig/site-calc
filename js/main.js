
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const totalPriceElement = document.querySelector('#total-price');
const inputs = document.querySelectorAll('input');

const typeRadio = document.querySelectorAll('input[name="type"]')
const buildingRadio = document.querySelectorAll('input[name="building"]');
const roomsRadio = document.querySelectorAll('input[name="rooms"]')
const optionsRadio = document.querySelectorAll('input[type="checkbox"]')

const basePrice = 6000;
let totalPrice;

calculate();

squareRange.addEventListener('input', function(){
squareInput.value = squareRange.value;
})

squareInput.addEventListener('input', function(){
squareRange.value = squareInput.value;

})

for (const input of inputs) {
   input.addEventListener('input', calculate)
}

function calculate(){
   totalPrice = squareInput.value * basePrice;
   typeMultiply();
   buildingMultiply();
   roomsMultiply();
   optionsMultiply();
   const formatter = new Intl.NumberFormat('ru');
   totalPriceElement.innerText = formatter.format(totalPrice);

}


function typeMultiply(){
  for (const radio of typeRadio){
   if (radio.checked){
      totalPrice *= parseFloat(radio.value)
   }
  }

}

function buildingMultiply(){
   for(const radio of buildingRadio){
      if(radio.checked){
         totalPrice *= parseFloat(radio.value)
      }
   }
}

function roomsMultiply(){
   for(const radio of roomsRadio){
      if(radio.checked){
         totalPrice *= parseFloat(radio.value)
      }
   }
}

function optionsMultiply(){
   for(const radio of optionsRadio){
      if(radio.checked){
         totalPrice *= radio.value
      }
   }
}