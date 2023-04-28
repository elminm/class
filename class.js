//task 1

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//   }

//   setTechnologies(technologies) {
//     this.technologies = [
//       ...this.technologies,
//       ...technologies,
//     ];
//   }

//   setNewStatus(newStatus) {
//     this.status = newStatus;
//   }
// }

// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);

//task 2

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   compareAge(otherPerson) {
//     if (this.age === otherPerson.age) {
//       alert(`${this.name} and ${otherPerson.name} are the same age.`);
//     } else if (this.age < otherPerson.age) {
//       alert(`${this.name} is younger than ${otherPerson.name}.`);
//     } else {
//       alert(`${this.name} is older than ${otherPerson.name}.`);
//     }
//   }
// }

// const person1 = new Person('Maxim', 24);
// const person2 = new Person('Svetlana', 36);
// const person3 = new Person('Irina', 23);

// person1.compareAge(person2); 
// person2.compareAge(person3); 
// person3.compareAge(person1); 


//task 3

class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  };

  constructor(name, workingHours = CarService.DefaultWorkingHours) {
    this.name = name;
    this.workingHours = workingHours;
  }

  repairCar(carName) {
    if (!carName) {
      console.error('You need to specify the name of the car in order to repair it');
      return;
    }

    const currentHour = new Date().getHours();
    const serviceFromHour = parseInt(this.workingHours.from.split(':')[0]);
    const serviceTillHour = parseInt(this.workingHours.till.split(':')[0]);

    if (currentHour < serviceFromHour || currentHour >= serviceTillHour) {
      console.log('Unfortunately, we are closed now. Come back tomorrow');
    } else {
      console.log(`Now we will repair your car ${carName}! Please wait`);
    }
  }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');

// // task 4
// class Dictionary {
//   constructor(name) {
//     this.name = name;
//     this.words = {};
//   }

//   add(word, description) {
//     if (!this.words[word]) {
//       this.words[word] = {
//         word,
//         description
//       };
//     }
//   }

//   remove(word) {
//     delete this.words[word];
//   }

//   get(word) {
//     return this.words[word];
//   }

//   showAllWords() {
//     for (const word in this.words) {
//       console.log(`${this.words[word].word} - ${this.words[word].description}`);
//     }
//   }
// }
// const dictionary = new Dictionary('Explanatory Dictionary');

// dictionary.add('JavaScript', 'popular programming language');
// dictionary.add('Web developer', 'A person who creates new services and sites or maintains and supplements existing ones');

// dictionary.remove('JavaScript');

// dictionary.showAllWords();

// // task 5

// class HardWordsDictionary extends Dictionary {
//   constructor(name) {
//     super(name);
//   }

//   add(word, description) {
//     if (!(word in this.words)) {
//       const wordObj = {
//         word: word,
//         description: description,
//         isDifficult: true
//       };
//       this.words[word] = wordObj;
//     }
//   }
// }

// const hardWordsDictionary = new HardWordsDictionary('Hard words');
// hardWordsDictionary.add('amateur', 'One who practices science or art without special training, having only a superficial knowledge.');
// hardWordsDictionary.add('neologism', 'A new word or expression, as well as the new meaning of the old word.');
// hardWordsDictionary.add('quantum', 'The indivisible part of some quantity in physics.');

// hardWordsDictionary.remove('neologism');
// hardWordsDictionary.showAllWords();

// //task 6

// class Dictionary {
//   #name;
//   #words;

//   constructor(name) {
//     this.#name = name;
//     this.#words = {};
//   }

//   addNewWord(word, description) {
//     const newWord = {
//       word: word,
//       description: description,
//       isDifficult: false,
//     };
//     this.#words[word] = newWord;
//   }

//   add(word, description) {
//     if (!this.#words[word]) {
//       this.addNewWord(word, description);
//     } else {
//       console.log(`${word} already exists in the dictionary`);
//     }
//   }

//   remove(word) {
//     if (this.#words[word]) {
//       delete this.#words[word];
//     } else {
//       console.log(`${word} not found in the dictionary`);
//     }
//   }

//   showAllWords() {
//     for (const [word, details] of Object.entries(this.#words)) {
//       console.log(`${word} - ${details.description}`);
//     }
//   }

//   get mainName() {
//     return this.#name;
//   }

//   set setMainName(newName) {
//     this.#name = newName;
//   }

//   get allWords() {
//     return this.#words;
//   }
// }

// class HardWordsDictionary extends Dictionary {
//   add(word, description) {
//     const newWord = {
//       word: word,
//       description: description,
//       isDifficult: true,
//     };
//     this.#words[word] = newWord;
//   }
// }

// const hardWordsDictionary = new HardWordsDictionary('Difficult words');
// hardWordsDictionary.add('amateur', 'One who practices science or art without special training, having only a superficial knowledge.');
// hardWordsDictionary.add('neologism', 'A new word or expression, as well as the new meaning of the old word.');
// hardWordsDictionary.add('quantum', 'The indivisible part of some quantity in physics.');

// hardWordsDictionary.remove('neologism');
// hardWordsDictionary.showAllWords();

// console.log(hardWordsDictionary.mainName); 
// hardWordsDictionary.setMainName = 'New Dictionary';
// console.log(hardWordsDictionary.mainName); 
// console.log(hardWordsDictionary.allWords); 

//task 7

// class Developer {
//   constructor(fullName, age, position = 'Junior') {
//     this.fullName = fullName;
//     this.age = age;
//     this.position = position;
//     this.technologies = [];
//   }

//   code() {}

//   learnNewTechnology(technology) {
//     this.technologies.push(technology);
//   }
// }

// class JuniorDeveloper extends Developer {
//   constructor(fullName, age) {
//     super(fullName, age);
//     this.position = 'Junior';
//     this.technologies = ['HTML', 'CSS', 'JavaScript'];
//   }

//   code() {
//     console.log('Junior developer is writing code...');
//   }
// }

// class MiddleDeveloper extends Developer {
//   constructor(fullName, age) {
//     super(fullName, age, 'Middle');
//     this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
//   }

//   code() {
//     console.log('Middle developer is writing code...');
//   }
// }

// class SeniorDeveloper extends Developer {
//   constructor(fullName, age) {
//     super(fullName, age, 'Senior');
//     this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
//   }

//   code() {
//     console.log('Senior developer is writing code...');
//   }
// }
