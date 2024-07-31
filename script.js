// Inspiration for the CSS version. Using the same values,
// the CSS version rapidly diverges. Presumably, it is using
// 32-bit calculations.

// This script will log the first four random numbers, but
// even by the third, the CSS version is very different.


// Linear Congruential Generator
const q = 10000000;
const p = 1000;

function pad(number, count) {
  let value = number.toString()
  return " ".repeat(count - value.length)
}


// Returns a number x such that 0.0 <= x < 1.0
function lcg(seed = 1) {
  const a = 214013;
  const c = 2531011;
  const m = Math.pow(2, 31);

  let state = seed

  return function() {
    state = (a * state + c) % m;

    const s = pad(state, 10)
    const sp = pad(state % p, 3)
    console.log("state:", s, state, sp, state % p);
    
    // return state / 1000000000 % 1;
  };
}


// module.exports = lcg

let s = 1;
const a = 214013;
const c = 2531011;
const m = Math.pow(2, 31);

const random = lcg(s)


for ( let ii = 0; ii < 4; ii += 1 ) {
  random()
}

console.log("*****")

s = (a * s + c) % m
// Keep only last 3 figures of the new seed
console.log("s1: ", s % p, "t1:  ", s / q);

s = (a * s + c) % m
console.log("s2:", s % p, "t2:", s / q)

s = (a * s + c) % m
console.log("s3:", s % p, "t3: ", s / q)

s = (a * s + c) % m
console.log("s4:", s % p, "t4:", s / q)