function changeVocals (str) {
  var alphabet='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var vocal='aiueoAIUEO';
  var changevocals=[];

//   if(str.length<5){
//     return 'Minimal karakter yang diinput adalah 5 karakter';
//   }
//   else{
    for(i=0;i<str.length;i++){
      if(vocal.indexOf(str[i])==-1){
        changevocals.push(str[i]);
      }
      else{
        changevocals.push(alphabet[(alphabet.indexOf(str[i]))+1]);
      }
    }
    return changevocals;
//   }
}

function reverseWord (str) {
  var reverseword=str.reverse();
  return reverseword;
}

function setLowerUpperCase (str) {
  var loweruper=[];
  str=str.join('');
  var upper=str.toUpperCase();
//   var lower=str.toLowerCase();
  for(i=0;i<str.length;i++){
    if(str[i]===upper[i]){
     var a = str[i].toLowerCase();
     loweruper.push(a);
    }
    else{
      a=str[i].toUpperCase();
      loweruper.push(a);
    }
  }
  return loweruper;
}

function removeSpaces (str) {
  var kata=[];
  for(i=0;i<str.length;i++){
    if(str[i]!==' '){
      kata.push(str[i]);
    }
  }
  return kata.join('');
}

function passwordGenerator (name) {
  if(name.length<5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  var change=changeVocals(name);
  var reverse=reverseWord(change);
  var lowerupercase=setLowerUpperCase(reverse);
  var space=removeSpaces (lowerupercase);

  return space;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
