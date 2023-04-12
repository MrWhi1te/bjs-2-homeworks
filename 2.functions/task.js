function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum/arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let result = 0;
  if(arr.length > 0){
    result = arr.reduce((sum,current) => sum + current);
  }
  return result;
}

function differenceMaxMinWorker(...arr) {
  let result = 0;
  if(arr.length > 0){
    let max = arr.reduce((a,b) => Math.max(a,b));
    let min = arr.reduce((a,b) => Math.min(a,b));
    result = max-min;
  }
  return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result = 0;
  if(arr.length > 0){
    for(let i=0;i<arr.length;i++){
      if((arr[i]%2) == 0){
        sumEvenElement+= arr[i];
      }
      else{
        sumOddElement+= arr[i];
      }
    }
  }
  result = sumEvenElement-sumOddElement;
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;
  if(arr.length > 0){
    for(let i=0;i<arr.length;i++){
      if(arr[i]%2 == 0){
        sumEvenElement+=arr[i];
        countEvenElement++;
      }
    }
    result = sumEvenElement/countEvenElement;
  }
  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i=0;i<arrOfArr.length;i++){
    const result = func(...arrOfArr[i]);
    if(result>maxWorkerResult){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
