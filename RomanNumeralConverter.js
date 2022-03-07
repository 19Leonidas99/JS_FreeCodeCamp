function convertToRoman(num) {
  let digits = String(+num).split('');
  const key = [
    '','I','II','III','IV','V','VI','VII','VIII','IX',
    '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
    '','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'
  ];
  var roman = '';
  for (let i = 0; i < 3; i++) {
    roman = (key[+digits.pop() + (i * 10)] || '') + roman, console.log(roman, i);
  }

  return Array(+digits.join('') + 1).join('M') + roman;
}

console.log(convertToRoman(36));
