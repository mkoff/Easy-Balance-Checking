function balance(book) {
  let strArr = book.replace(/[^a-z\d+.\n\s]/gi, '').split(/\n+/g);
  
  let originalBalance = 0,
      firstOriginalBalance = 0;
      totalExp = 0,
      averageExp = 0;
  
  strArr.forEach((v, i, ar) => {
    
    if(i != 0){
      ar[i] = ar[i].split(/\s/g);
      
      let numberFix = +ar[i][2];

      if(+ar[i][2] >= 0){
        originalBalance = originalBalance - numberFix;
        totalExp = totalExp + +ar[i][2];
        averageExp++;
        ar[i][2] = numberFix.toFixed(2) + ' Balance ' + originalBalance.toFixed(2) + '\r';
      }
      
      ar[i] = ar[i].join(' ');
      
    }else{
      originalBalance = +ar[i];
      let orBl = originalBalance.toFixed(2);
      firstOriginalBalance = +ar[i];
      ar[i] = "Original Balance: " + orBl + '\r';
    }

    v.length < 1 ? ar.splice(i, 1) : false;

  });

  strArr.push('Total expense  '+totalExp.toFixed(2) + '\r');
  strArr.push('Average expense  '+(totalExp/(strArr.length-2)).toFixed(2)); //1 arr OriginalBalance, 2 arr TotalExpence

  return strArr.join('\n');

}