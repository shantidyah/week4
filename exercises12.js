function shoppingTime(memberId, money) {
  var shopping={};
  var list=[];
  var sale={
            'sepatu stacattu':1500000,
            'baju zoro':500000,
            'baju H&N':250000,
            'sweater uniklooh':175000,
            'casing handphone':50000
          };
  // var uang=money;
  var kembalian=0;


  if(memberId===undefined||memberId.length===0){
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  else{
    shopping.memberId=memberId;
  }

  if(money<50000){
    return "Mohon maaf uang tidak cukup";
  }
  else{
    shopping.money=money;
    }
  for(var key in sale){

    if(money-sale[key]>=0){
      money-=sale[key];
      // if(uang>=0){
        list.push(key);
        kembalian=money;
      // }
    }
    console.log(kembalian);
  }
  shopping.listPurchased=list;
  shopping.changeMoney=kembalian;
  return shopping;
}


//TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
