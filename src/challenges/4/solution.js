function decode(message) {
  const matches = Array.from(message.matchAll(/\([^()]*\)/g)).map((m) => ({
    match: m[0],
    replacement: m[0].slice(1, -1).split("").reverse().join(""),
  }));

  return matches.length
    ? decode(
        matches.reduce(
          (acc, { match, replacement }) => acc.replace(match, replacement),
          message,
        ),
      )
    : message;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo
//
const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!
//
const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
