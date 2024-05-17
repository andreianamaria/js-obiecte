// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
// Funcția primește 2 parametri ca date de intrare.
// Unul dintre parametri este obiectul, 
// iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.
// Input: obiect = { a: 1, b: 2 }, proprietate = “b”
// Output: { a: 1 }

const removeCertainProperty = (obj, propName) => {
  if (obj.hasOwnProperty(propName)) {
    delete obj[propName];
  }
}

const removeProp = (obj, propName) => {
  for (const prop in obj) {
    if (prop === propName) {
      delete obj[propName];
    }
  }
}

const obj = { a: 1, b: 2 };
const obj2 = { name: 'Popescu', age: 38, job: 'Programmer'};

removeCertainProperty(obj, 'b');
removeCertainProperty(obj2, 'cici');

console.log(obj);
console.log(obj2);

// met 2
const objOne = { a: 1, b: 2 };
const objTwo = { name: 'Popescu', age: 38, job: 'Programmer'};

removeProp(objOne, 'a');
removeProp(objTwo, 'age');

console.log(objOne);
console.log(objTwo);