function rot13(str) {
  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  let letter = String(str).split('');
  console.log(letter, letter.length);

  let newStr = [];
  let arr = [];
  let regex = /./g;

  for (let i = 0; i < letter.length; i++) {
    if (alphabet.includes(letter[i])){
      let L = alphabet[alphabet.indexOf(letter[i])];
      //console.log(alphabet.indexOf(letter[i]), L);
      arr.push(L);

      if (alphabet.indexOf(letter[i]) < 13) {
        newStr.push(alphabet[alphabet.indexOf(letter[i]) + 13]);

      } else if (alphabet.indexOf(letter[i]) >= 13) {
        newStr.push(alphabet[alphabet.indexOf(letter[i]) - 13]);
      }
    } else if(letter[i] == letter[i].match(regex)) {
      arr.push(letter[i]);
      newStr.push(letter[i]);
    }
  }
  let text = newStr.join('');
 //console.log(arr)
  console.log(text);
  return text
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
