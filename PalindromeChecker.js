function palindrome(str) {
  let newStr = [];
  str = String(str).toLowerCase().replace(/[_,.():\\\/\-\s]/g, '');
  let letter = str.split('');
  let regex = /str/i;
  console.log(str)


  for (let i = 0; i < str.length; i++) {
    newStr.push(letter.pop());

  }
  let text = newStr.join('');
  console.log(text);
  return (text == str) ? true : false
}


palindrome("0_0 (: /-\ :) 0-0");

palindrome("A man, a plan, a canal. Panama")

