const _isPalindrome = (word: string) => {
  const chars:string[] = word.split('');
  if (chars.length % 2 == 1) {
    for (let i = 0; i < Math.floor(chars.length/2); i++) {
      if (chars[i] !== chars[chars.length-1 - i]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < chars.length/2; i++) {
      if (chars[i] !== chars[chars.length-1 - i]) {
        return false;
      }
    }
  }
  return true;
}