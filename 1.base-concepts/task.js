"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-4*a*c;
  if(D===0){
    let rt = -b/(2*a);
    arr.push(rt);
  }
  if(D>0){
    let rt = (-b + Math.sqrt(D) )/(2*a);
    let rt1 = (-b - Math.sqrt(D) )/(2*a);
    arr.push(rt,rt1);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent /= 100;
  let percentMonth = percent/12;
  let bodyCredit = amount - contribution;
  let payment = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth)**countMonths) - 1)));
  let totalAmount = payment * countMonths; 
  return +totalAmount.toFixed(2);
}