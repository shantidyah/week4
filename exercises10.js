function checkAB(num) {
  var jarak=[];
  var ab=[];

   for(var i=0;i<num.length;i++){
    if(num[i]=='a'||num[i]=='b'&&ab==[]){
      jarak.push(i);
      ab.push(num[i]);
    }
    else if(num[i]=='a'||num[i]=='b'&&num[i]==ab[0]){
      jarak[0]=i;
    }
    else if(num[i]=='a'||num[i]=='b'&&num[i]!=ab[0]){
      jarak.push(i);
      ab.push(num[i]);
    }
  }
  var a=[];

  console.log(jarak);
  console.log(ab);
  for(j=0;j<ab.length;j++){
    if(jarak[0]-jarak[j]==4||jarak[j]-jarak[0]==4){
      a.push(jarak[j]);
    }
  }

  if(a.length!=''){
    return true;
  }
  else{
    return false;
  }

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
