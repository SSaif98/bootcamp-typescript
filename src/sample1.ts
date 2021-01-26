console.log('Hello World');

function a(b: number){
    return b/2;
}
a(2);
//a(k);


let firstName: string = "Syed Saif";
let lastName: string = "Ali";
let age: number = 22;
let activeStudent: boolean = true;
let nameArray: string[]= ['saif','haider','ferhaj'];

let v: any;

v=3;
v='a';
v =['e,','y','d'];
console.log(v);


let d: unknown = 110;
let e= d === 4;
let f= d + 7;   // it can't run as the data type is unknown
 if(typeof d === 'number'){
    let g = d+8;
 }

 //custom data type
type Student = {
    name:string,
    age: number,
    courses: string[]
}

let studentData: Student = {
    name: 'Saif',
    age: 23,
    courses: ['Ai','Js']
}

let arr:number[]= [1,2,3,4];
let arr1:string[]= ['s','e',3]   //not allowed

let arr2:[boolean, string, number] = [true, 'saif', 23];
let arr3:[boolean, string, number]= [true, 'saif', 23,34,56];  //not allowed

let arr4:[boolean, string, ...number[]]= [true, 'saif', 23,34,56];

let arr4:[boolean, string, ...number[]]= [true, 'saif', 23,34,56,'saf']; //not allowed


//ReadOnly

const availableCourse: readonly string[]=['a','b','c'];
availableCourse[1]='d'  //you can't change it


//enum = if you want only index of the element
 enum PIAIC {
     CNC,
     iot,
     BC
 }

 console.log(PIAIC.BC);  //2