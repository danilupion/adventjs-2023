function adjustLights(lights) {
  const possibleLights = ["🔴", "🟢"];

  return Math.min(
    ...lights.reduce(
      ([red, green], light, index) => {
        return [
          red + (possibleLights[index % 2] === light),
          green + (possibleLights[(index + 1) % 2] === light),
        ];
      },
      [0, 0],
    ),
  );
}

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (you change the fourth light to 🔴)

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
// -> 2 (you change the second light to 🟢 and the third to 🔴)

console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
// -> 0 (they are already alternating)

console.log(adjustLights(["🔴", "🔴", "🔴"]));
// // -> 1 (you change the second light to 🟢)
