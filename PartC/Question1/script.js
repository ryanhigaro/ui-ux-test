const nameList = [
  {
    name: "John",
    age: 24,
    occupation: "Engineer",
  },
  {
    name: "Doe",
    age: 28,
    occupation: "Doctor",
  },
  {
    name: "Micheal",
    age: 32,
    occupation: "Teacher",
  },
  {
    name: "Daryl",
    age: 29,
  },
];

function filterAge() {
  return nameList.filter((person) => person.age > 28);
}

function calcAge() {
  const totalAge = nameList.reduce((prevValue, currValue) => {
    return prevValue + currValue.age;
  }, 0);
  return totalAge;
}

function createStringTemplate() {
  const arrayText = [];
  nameList.map((person) => {
    person.occupation
      ? arrayText.push(person.name + " - " + person.occupation)
      : arrayText.push(person.name);
  });
  return arrayText;
}

document.getElementById("answer1").innerHTML = JSON.stringify(filterAge());
document.getElementById("answer2").innerHTML = JSON.stringify(calcAge());
document.getElementById("answer3").innerHTML = JSON.stringify(createStringTemplate());
