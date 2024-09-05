/*Task-1
Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};--------------------------------------------------------*/

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
const goldenRodColor = colors["golden rod"];
console.log(goldenRodColor);

//output-PS C:\Projects(js)\js-object-task> node ./task-1,2,3,4,5.js
//#daa520---------------------------------------




//---------------------task-2--------------------------
/*Task-2
For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};--------------------------------------*/

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    passengerCapacity : 5
};

console.log(car['passengerCapacity'])

/*output-PS C:\Projects(js)\js-object-task> node ./task-1,2,3,4,5.js  
5--------------------------------------



//-------------task-3---------------------
/*Task-3
Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};-----------------------------------*/

/*const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

//output-marks-30//---------------------



/*Task-4
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
Output: 4-------------------------------------------*/

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let propertyCount = Object.keys(student).length;
console.log(propertyCount)
//output-4-----------------------------------

//--------task-5---------------------------//
/*Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:


key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean-------------------------------------*/

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        let value = myObject[key];
        let type = typeof value;
        console.log(`key: ${key} | type: ${type}`);
    }
}

/*output-key: name | type: string
key: age | type: number
key: city | type: string
key: isStudent | type: boolean-----------*/