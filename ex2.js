// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
// Funcția primește 2 parametri ca date de intrare.
// Unul dintre parametri este obiectul, 
// iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.
// Input: obiect = { a: 1, b: 2 }, proprietate = “b”
// Output: { a: 1 }

const removeCertainProperty = (obj, propName) => {
  const copyObj = { ...obj };
  if (copyObj.hasOwnProperty(propName)) {
    delete copyObj[propName];
  }
  return copyObj;
}

const removeProp = (obj, propName) => {
  let copyObj = Object.assign({}, obj);
  for (const prop in copyObj) {
    if (prop === propName) {
      delete copyObj[propName];
    }
  }
  return copyObj;
}

const obj = { a: 1, b: 2 };
const obj2 = { name: 'Popescu', age: 38, job: 'Programmer'};

console.log(removeCertainProperty(obj, 'b'));
console.log(removeCertainProperty(obj2, 'cici'));

// console.log(obj);
// console.log(obj2);

// met 2
const objOne = { a: 1, b: 2 };
const objTwo = { name: 'Popescu', age: 38, job: 'Programmer'};

console.log(removeProp(objOne, 'a'));
console.log(removeProp(objTwo, 'age'));

// console.log(objOne);
// console.log(objTwo);