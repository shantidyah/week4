function totalDigitRekursif(angka) {
  var a=angka.toString();
  if(a.length===1){
    return parseInt(a);
  }
  else{
    return parseInt(a[a.length-1])+parseInt(totalDigitRekursif(a.slice(0,a.length-1)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
