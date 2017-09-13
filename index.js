function theBeatlesPlay(musician, instrument) {
  var array = [];
  for (let i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const newFacts = [];
  let i = 0;
  while (i < facts.length){
    newFacts.push(`${facts[i]}!!!`);
    i++;
    }
    return newFacts
  }

function iLoveTheBeatles(n) {
  var array = [];
  let i = 0;
  do {
    array.push("I love the Beatles!")
  } while (i < 15);
  i++
}
