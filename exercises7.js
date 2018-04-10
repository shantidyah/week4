function digitPerkalianMinimum(angka) {
  var b=[];
  var c=[];
  for(i=0;i<=angka;i++){
    if(angka%i==0){
      var a=angka/i;
      b.push(a,i);
    }
  }
  b=b.toString().split(',');
  for(j=0;j<b.length;j=j+2){
    c.push(b[j].length+b[j+1].length);
  }
  var min=Math.min.apply(null,c);
  return min;
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
