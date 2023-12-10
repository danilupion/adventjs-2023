function createChristmasTree(ornaments, height) {
  let tree = "";
  let ornamentsCount = 0;
  const ornamentsLength = ornaments.length;
  for (let i = 0; i < height; i++) {
    const elementsInRow = i + 1;
    const index = ornamentsCount % ornamentsLength;
    const ornamentsToUse = (
      ornaments.slice(index, ornamentsLength) + ornaments.slice(0, index)
    )
      .repeat(Math.ceil(elementsInRow / ornamentsLength))
      .slice(0, elementsInRow);
    tree +=
      " ".repeat(height - i - 1) + ornamentsToUse.split("").join(" ") + "\n";
    ornamentsCount += elementsInRow;
  }
  return tree + " ".repeat(height - 1) + "|\n";
}

console.log(createChristmasTree("+-*/", 6));
