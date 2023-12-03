function findNaughtyStep(original, modified) {
  for (let i = 0; i < Math.max(original.length, modified.length); i++) {
    if (original[i] !== modified[i]) {
      return original[i + 1] === modified[i] ? original[i] : modified[i];
    }
  }

  return "";
}

console.log(findNaughtyStep("stepfor", "stepor"));
console.log(findNaughtyStep("abcd", "abcde"));
