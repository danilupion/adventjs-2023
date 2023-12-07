function drawGift(size, symbol) {
  const border = "#".repeat(size);
  const body = symbol.repeat(Math.max(0, size - 2));

  let gift =
    border + body + "#".repeat(Math.min(Math.max(0, size - 1), 1)) + "\n";

  for (let i = 0; i < size - 2; i++) {
    const bottom =
      "#" +
      symbol.repeat(size - 2) +
      "#" +
      symbol.repeat(Math.max(0, size - i - 3)) +
      "#".repeat(Math.min(1, Math.max(0, size - i - 2)));

    const top = " ".repeat(i + 1) + bottom;

    gift = top + "\n" + gift + bottom + "\n";
  }

  const borderTimes = Math.min(Math.max(0, size - 1), 1);

  return (
    (" ".repeat(Math.max(0, size - 1)) + border + "\n").repeat(borderTimes) +
    gift +
    (border + "\n").repeat(borderTimes)
  );
}

console.log(drawGift(1, "^"));
console.log(drawGift(2, "^"));
console.log(drawGift(3, "^"));
console.log(drawGift(4, "^"));
console.log(drawGift(5, "^"));
