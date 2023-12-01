const giftIds = [5, 1, 5, 1];

function findFirstRepeated(gifts) {
  const repeatedGifts = [];
  for (let gift of gifts) {
    if (repeatedGifts.includes(gift)) {
      return gift;
    }
    repeatedGifts.push(gift);
  }
  return -1;
}

const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
