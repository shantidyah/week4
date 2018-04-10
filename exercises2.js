function fpb(angka1, angka2) {

  var arrayangka1=[];
  var arrayangka2=[];
  var faktor=0;

  for(i=0;i<=angka1;i++){
    if(angka1%i===0){
      arrayangka1.push(i);
    }
  }
  for(j=0;j<angka2;j++){
    if(angka2%j===0){
      arrayangka2.push(j);
    }
  }

  for(k=0;k<arrayangka1.length;k++){
    for(l=0;l<arrayangka2.length;l++){
      if(arrayangka1[k]==arrayangka2[l]){
        faktor=arrayangka1[k];
      }
    }
  }
  return faktor;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
