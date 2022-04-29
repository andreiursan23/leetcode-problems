const romanToInt = (s) => {
  if (s.length > 15) {
    return
  }

  let result = 0;

  if (s.includes("IV") || s.includes("IX")) {
    result -= 2;
  }
  if (s.includes("XL") || s.includes("XC")) {
    result -= 20;
  }
  if (s.includes("CD") || s.includes("CM")) {
    result -= 200;
  }

  const letters = s.split("");

  letters.forEach((letter) => {
    switch (letter) {
      case "M":
        result += 1000;
        break;
      case "D":
        result += 500;
        break;
      case "C":
        result += 100;
        break;
      case "L":
        result += 50;
        break;
      case "X":
        result += 10;
        break;
      case "V":
        result += 5;
        break;
      case "I":
        result += 1;
        break;
      default:
        break;
    }
  });

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MDCCCLXXXIV"));
