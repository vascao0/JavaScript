let soma = 0;
let valores = {};

function teste(arrNumber) {
  for (let i = 0; i < arrNumber.length; i++) {
    if (!valores[arrNumber[i]]) {
      soma += arrNumber[i];
      valores[arrNumber[i]] = true;
    }
  }
  console.log(soma);
}

teste([1, 1, 2]);

function removeDuplicates(arrElements) {
  let valores = {}
  for (let i = 0; i < arrElements.length; i++){
    if(!valores[arrElements[i]]){
      valores[arrElements[i]] = true
    }
  }
  console.log(valores)
}

removeDuplicates(["s", "s", "d"])