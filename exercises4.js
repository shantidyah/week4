function cariModus(arr) {
  var terbesar=[];
  for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[i]==arr[j]){
        terbesar.push(arr[j]);
      }
    }
   }
  if(terbesar==''||terbesar.length>=arr.length){
    return -1;
  }
  else if(terbesar.length===0||terbesar.length<arr.length){
    return terbesar[0];
  }

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
