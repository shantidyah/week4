function kaliTerusRekursif(angka) {
  var a=angka.toString();
  var c=1;
  if(a.length===1){
    return parseInt(a);
  }
  else{
    var b=a.split('');
    for(i=0;i<a.length;i++){
      c*=parseInt(a[i]);
    }
    return kaliTerusRekursif(c);
  }

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
