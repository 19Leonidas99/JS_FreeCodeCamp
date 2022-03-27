function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100; // (In cents)
  let yourCash = {};
  let myCash = {};

  if (change === 0) {
    return {
      status: "CLOSED",
      change: cid
    };
  }
  // | Currency Unit       |	Amount             |
  const bills = [        // |---------------------|--------------------|
    ["FIFTY", 50000],    // | Fifty Dollars       |	$50 (FIFTY)        |
    ["TWENTY", 2000],    // | Twenty Dollars      |	$20 (TWENTY)       |
    ["TEN", 1000],       // | Ten Dollars         |	$10 (TEN)          |
    ["FIVE", 500],       // | Five Dollars        |	$5 (FIVE)          |
    ["ONE", 100],        // | Dollar              |	$1 (ONE)           |
    ["QUARTER", 25],     // | Quarter             |	$0.25 (QUARTER)    |
    ["DIME", 10],        // | Dime                |	$0.1 (DIME)        |
    ["NICKEL", 5],       // | Nickel              |	$0.05 (NICKEL)     |
    ["PENNY", 1]         // | Penny               |	$0.01 (PENNY)      |
  ];
  //Array to Object
  cid.forEach(money => {
    myCash[money[0]] = parseInt(money[1] * 100);
  });
  //Big bill first
  let i = 0;
  while(i < bills.length && change > 0) {
    let NameBill = bills[i][0];
    let ValueBill = bills[i][1];
    if (change - ValueBill > 0 && myCash[NameBill] >0) {

      yourCash[NameBill] = 0;

      while(change - ValueBill >= 0 && myCash[NameBill] > 0) {
        yourCash[NameBill] += ValueBill / 100;
        myCash[NameBill] = parseInt(myCash[NameBill] - ValueBill);
        change -= ValueBill;
      }
    }
    i++;
  }

  if(change === 0) {
    let Money = false;
    Object.keys(myCash).forEach(key => {
      if (myCash[key] > 0) {
        Money = true;
      };
    });

    if (Money) {
      return {
        status: 'OPEN',
        change: Object.keys(yourCash).map(key => {
          let obj = [key, yourCash[key]];
          console.log(JSON.stringify(obj));
          return obj;
        })};
    } else {
      console.log('No Money Left...');
      return {
        status: 'CLOSED',
        change: cid
      };
    }
  }
  return {
    status: 'INSUFFICIENT_FUNDS',
    change: []
  }
}
