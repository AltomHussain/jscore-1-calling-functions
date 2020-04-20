function yearWasBorn(age) {
  return age;
}

function introduceing(name, age) {
  const theYear = yearWasBorn(age);
  const yearsOld = 45;
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

console.log(introduceing(" Yasmin ", 1975));
