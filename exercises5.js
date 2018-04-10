function ubahHuruf(kata) {
  var perubahan=[];
  var alphabet=('abcdefghijklmnopqrstuvwxyz');
  alphabet=alphabet.split('');
  kata=kata.split('');

  for(i=0;i<kata.length;i++){
    for(j=0;j<alphabet.length;j++){
      if(kata[i]==alphabet[j]&&alphabet[j]=='z'){
        perubahan.push(alphabet[0]);
      }
      else if(kata[i]==alphabet[j]){
        perubahan.push(alphabet[j+1]);
      }
    }
  }
  perubahan=perubahan.join('');
  return perubahan;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
