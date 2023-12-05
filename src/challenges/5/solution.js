function cyberReindeer(road, time) {
  let sledPosition = road.indexOf("S");
  let emptyRoad = road.replace(/S/g, ".");
  const solution = [road];

  for (let i = 1; i < time; i++) {
    if (i === 5) {
      emptyRoad = emptyRoad.replaceAll("|", "*");
    }
    if (emptyRoad[sledPosition + 1] !== "|") {
      sledPosition++;
    }
    const currentRoad = emptyRoad.split("");
    currentRoad[sledPosition] = "S";

    solution.push(currentRoad.join(""));
  }
  return solution;
}

const road = "S..|...|..";
const time = 10; // units of time
const result = cyberReindeer(road, time);

result.forEach((r) => console.log(r));
