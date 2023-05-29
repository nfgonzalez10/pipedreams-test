export const capitalLetter = (str = "") => {
  const [, word] = str.split(str.charAt(0));
  return str.charAt(0).toUpperCase().concat(word);
};
