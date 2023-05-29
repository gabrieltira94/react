const ARRAY_START = 100;
const ARRAY_END = ARRAY_START + 100;

let i = ARRAY_START;
const generatedArray = [];

do {
  let muscle;

  if (i % 2 === 0)
    muscle = 'Upper Body';
  else if (i % 3 === 0)
    muscle = 'Rest';
  else
    muscle = 'Lower Body';

  generatedArray.push({
    muscle,
    day: i
  });

  i++;
} while (i < ARRAY_END);

console.log(generatedArray);
