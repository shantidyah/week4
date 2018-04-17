function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  var b=[];

  if(shoppers==''){
    return "[]";
  }
  for(var i = 0; i < listBarang.length; i++){
    var a={product:'',shopper:[],leftOver:'',totalProfit:''};
      a.product=listBarang[i][0];
      b.push(a);
  }//b udah punya 3 array, dia jadi array inti dan sudah ada product didalam array b 


  for (var l = 0; l < b.length; l++) {
    var z=listBarang[l][2];
    for(var m = 0; m < shoppers.length; m++){
      if(b[l].product===shoppers[m].product){
        if(z-shoppers[m].amount>=0){
          z-=shoppers[m].amount;
          b[l].shopper.push(shoppers[m].name);
        }
      }
      b[l].leftOver=z;
    }
  }//untuk memberikan nilai shopper dan leftover


  for(var j = 0; j < b.length; j++){
    b[j].totalProfit=((listBarang[j][2])-(b[j].leftOver))*listBarang[j][1];
  }//totalProfit
  return b;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
                         {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
                         {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
//
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
                         {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
                         {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
                         {name: 'Devi', product: 'Baju Zoro', amount: 1},
                         {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]
