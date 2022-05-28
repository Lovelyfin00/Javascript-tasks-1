// Question 1

let cardTitle = document.querySelector('.team-name');
teamName = cardTitle.innerHTML='Team Apollo';
teamNameStyle = document.querySelector('.team-name').style.color="#FF8D29";


// Question 2

let groupNames = ['Omokaro Loveth', 'Ifeoma Okafor', 'Shodipe Oladele', 'Stanley Chijioke', 'Avwunudiogba Ogaga', 'Kasie Ugwu', 'Anyanwu Chukwuemeka']
console.log(groupNames[0]);


// Question 3

let aboutMe = {
    firstName : 'Loveth',
    lastName : 'Omokaro',
    bestMovie : 'Squid Games',
    bestFood : 'Pounded yam with black soup',
    complexion : 'Melanin popping',
    birthMonth : "May",
    state : 'Edo state',
    groupName : 'Apollo'
}
console.log(aboutMe.bestMovie);



// Qestion 4

let noun = "Esther";
let verb = 'dance';
let adjective = 'perfect'

console.log(noun + ' loves to ' + verb);
console.log('I have a sister named ' + noun + ' and she loves to ' +  verb + " at parties");
console.log(noun + 'has a ' + adjective + ' smile');
console.log('Every time I go to meet ' + noun + ' I always see her ' + verb + ' because she loves things that are ' + adjective);
console.log('I would love to ' + verb + ' like ' + noun + " but I'm not " + adjective + ' at it.');



// Question 5

remainderOfDivision = (firstNumber, secondNumber) => {
    return (firstNumber % secondNumber);
}
console.log(remainderOfDivision(22, 5));



// Question 6

almightyFormla = (a, b, c) => {

    let firstRoot = Math.floor(((-1 * b + Math.sqrt(b**2 - 4*a*c))/2*a));
    let secondRoot = Math.floor(((-1 * b - Math.sqrt(b**2 - 4*a*c))/2*a));

    return ('The first root of te quandratic equation is ' + firstRoot + ' while the second root of the quandratic equation is ' + secondRoot);
}
console.log(almightyFormla(1,-8,5));



// Questio 8


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "I once had a " + myAdjective + " " + myNoun + " but one day, it " + myVerb + " away from home " + myAdverb + ".";
console.log(wordBlanks);



// QUestion 8

areaOfCircle = (radius) => {
    let solution = (3.142 * (radius**2));
    return solution;
}
console.log('The area of the circle is ' + areaOfCircle(9));




// Question 9

let principalAmount = 8200;
let interestRate = 17.5/100;
let timeInYears = 2.6;

let simpleInterst = principalAmount * (1 + interestRate*timeInYears);

console.log('The simple interest gotten is ' + simpleInterst + ' Naira');





//  Question 10

console.log('The result of 10 % 4 is ' + 10%4);





//  Question 11

`For test data 1`

meritMass1 = 78;
meritHeight1 = 1.69;

nutjobMass1 = 92;
nutjobHeight1 = 1.95;

let meritBmi1 = (meritMass1/(meritHeight1**2));
console.log(meritBmi1);

let nutjobBmi1 = (nutjobMass1/(nutjobHeight1**2));
console.log(nutjobBmi1);

let meritHigherBMI1 = (meritBmi1 > nutjobBmi1);
console.log('Is Merit BMI higher? ' + meritHigherBMI1)



// For test data 2

nutjobMass2 = 95;
nutjobHeight2 = 1.88;

meritMass2 = 85;
meritHeight2 = 1.76;


let meritBmi2 = (meritMass2/(meritHeight2**2));
console.log(meritBmi2);

let nutjobBmi2 = (nutjobMass2/(nutjobHeight2**2));
console.log(nutjobBmi2);

let meritHigherBMI2 = (meritBmi2 > nutjobBmi2);
console.log('Is Merit BMI higher? ' + meritHigherBMI2)











