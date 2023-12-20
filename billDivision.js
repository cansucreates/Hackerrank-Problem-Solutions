// Two friends Anna and Brian, are deciding how to split
// the bill at a dinner. Each will only pay for the items
// they consume. Brian gets the check and calculates
// Anna's portion. You must determine if his calculation
// is correct.

//pseudo code:

// 1. get the total bill
// 2. calculate Anna's share by minus bill[k]
// 3. split in half
// 4. check anna's share is equal to b
// 5. if it is then print Bon Appetite
// 6. if b is higher than annas Shared
// 7. return b - anna's actual charge

function bonAppetit(bill, k, b) {
  let annasShare = (bill.reduce((acc, val) => acc + val, 0) - bill[k]) / 2;

  if (annasShare === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annasShare);
  }
}
