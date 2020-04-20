function yearWasBorn(age) {
  return age;
}

function introduceing(name, age) {
  const theYear = yearWasBorn(age);
  const yearsOld = 17;
  const message =
    "Hello this is" +
    name +
    "and she was born in " +
    theYear +
    " and she is " +
    yearsOld +
    " years old.";
  return message;
}

console.log(introduceing(" Yasmin ", 2003));

// function getAgeInDays(age) {
//   return age * 365;
// }

// function createGreeting(name, age) {
//   const ageInDays = getAgeInDays(age);
//   const message =
//     "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
//   return message;
// }
// console.log(createGreeting("hana", 12));
