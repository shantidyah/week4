function changeMe(arr) {
  var a=[];

  for(var i = 0; i<arr.length; i++){
    var b=0;
    var arrLiteral={firstname:'',lastname:'',gender:'',age:''};
    for(var key in arrLiteral){
      arrLiteral[key]=arr[i][b];

      b++;
    }
    if(arrLiteral.age===undefined){

      arrLiteral.age='Invalid Birth Year';
    }
    else{
      arrLiteral.age=2018-arr[i][3];
    }
    a.push(arrLiteral);
  }
  if(a.length===0){
    console.log("");
  }
  else{
    var no=1;
    for(var j = 0;j<a.length;j++){
      console.log(no+'. '+a[j].firstname+' '+a[j].lastname);
      console.log(a[j]);
      no++;
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
