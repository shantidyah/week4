function hitungHuruf(kata) {
  var jum=[];
  var hasil=0;
  var pjgkata=[];

  kata=kata.split(' ');

  for(i=0;i<kata.length;i++){
    var b='';
    for(j=0;j<kata[i].length;j++){
      if(b.indexOf(kata[i].charAt(j))==-1){
        b+=kata[i][j];
      }
    }
    jum.push(b);
  }
  for(k=0;k<kata.length;k++){
    hasil=kata[k].length-jum[k].length;
    pjgkata.push(hasil);
  }
  var a=Math.max.apply(null,pjgkata);
  pjgkata=pjgkata.indexOf(a);


return kata[pjgkata];
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
