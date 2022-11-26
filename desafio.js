/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const ethanolPrice = 2.97;
const gasPrice = 5.05;
const typeFuel = 'Ethanol';
const kmPerLiter = 10;
const distanceInKM = 100;

const consumedLiters = distanceInKM / kmPerLiter;

if (typeFuel === 'Ethanol') {
    const moneySpent = consumedLiters * ethanolPrice;
    console.log(moneySpent.toFixed(2));
} else {
    const moneySpent = consumedLiters * gasPrice;
    console.log(moneySpent.toFixed(2));
}



