function telephoneCheck(str) {
  let regex1 = /1?\s?\d{3}[-\s]\d{3}[-\s]?\d{4}/
  let regex2 = /1?\s?[(]\d{3}[)][-\s]?\d{3}[-\s]?\d{4}$/;
  let regex3 = /\d{10}/
  if (str == str.match(regex1) || str == str.match(regex2) || str == str.match(regex3)) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

telephoneCheck("555-555-5555");
telephoneCheck("1 (555) 555-5555")
telephoneCheck("1 555-555-5555")
telephoneCheck("1 555)555-5555")

