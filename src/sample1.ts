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

