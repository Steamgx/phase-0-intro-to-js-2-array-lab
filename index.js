// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  // Reset the array before each test
  cats.length = 0;
});

cats.push("Milo", "Otis", "Garfield");


// Destructive methods (modify the original array)
function destructivelyAppendCat(bridan) {
  cats.push(bridan);
}

function destructivelyPrependCat(godwin) {
  cats.unshift(godwin);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive methods (return a new array)
function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}
 



