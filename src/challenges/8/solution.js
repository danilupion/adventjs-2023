function organizeGifts(gifts) {
  return Array.from(gifts.matchAll(/(\d+)([a-z])/g)).reduce((acc, match) => {
    const count = parseInt(match[1]);
    const type = match[2];

    const pallets = Math.floor(count / 50);
    const boxes = Math.floor((count % 50) / 10);
    const units = count % 10;

    return (
      acc +
      ("[" + type + "]").repeat(pallets) +
      ("{" + type + "}").repeat(boxes) +
      ("(" + type.repeat(units) + ")").repeat(Math.min(1, units))
    );
  }, "");
}

const result1 = organizeGifts("76a11b");
console.log(result1);
