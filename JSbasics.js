console.log("Hello World!");	

// Javascript Fundamentals
// Variables
let name
name="Keerthi";

// Constant
const pi=3.14;


//PRIIMITIVE Data Types

//Number
let house="Parimala"
//string 
let num='1';

console.log(name , pi ,house, num);

//Boolean
let option= true;

//undefined
let height;

//Null
let a=null;

//REFERENCE Data Types

//Arrays with strings
let shopping=[];
shopping=['paiintBrish','Beans','Carrot','MandalaArt'];
console.log(shopping, shopping[3]);

//Arrays with numbers
 let numbers=[];
 numbers=[15,2,38,4,53,22,5];
 console.log(numbers.sort(function (a,b) {
 	return a-b;
 }));

 //adding and removing from array
 numbers.push(4);

 //In Javascript, Arrays can have values of different datatypes.
 let mix=[1, 'Keerthi',0.23,true];
 console.log(mix);


 //Objects
 //object 1
let pen={

	color:'black',
	type:'ink pen',
	price:20

};

console.log(pen);
console.log(pen.color);

//object 2
let Keerthi={
	age:29,
	gender:'female',
	address: 'Kadubeesanahalli',
	contact: [9535045024,9483966860]

};
console.log(Keerthi.contact[1]);

//Functions

function product(a,b){
	console.log(a*b);
}

product(3,6);

// Conditional Statements
//IF statement
let y=10;
let z=20;
if(y>z){
	console.log('y is greater than z');
}
console.log('y is lesser than z');

//IF ELSE statement
let a1=10;
let a2=20;
let a3=90;
if(a1>a2)
	console.log('a1 is greater than a2');
else (a1>a3)
	console.log('a1 is greater than a3');
console.log('a1 is the least number');


//LOOPS
//while
let numb=[10,20,40,56,40];
let i=0;
while(numb[i]<100){
	console.log(numb[i]);
	i++;
}

//do-while
let numb1=[1,2,3,4,5];
let j=0;
do{
	console.log(numb1[j]);
	j++;
}while(numb1[j]<4);

//FOR loop
let numb2=[2,54,63,24];
let k;
for(k=0;k<4;k++){
	console.log(numb2[k]);
}

//switch case

let Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
switch(Days[1]){
	case 'Sunday': console.log('Its a Holiday on Sunday');
	break;
	case 'Monday': console.log('Its a Working day on Monday');
	break;
	case 'Tuesday': console.log('Its a Working day on Tuesday');
	break;
	case 'Wednesday': console.log('Its a Working day on Wednesday');
	break;
	case 'Thursday': console.log('Its a Working day on Thursday');
	break;
	case 'Friday': console.log('Its a Working day on Friday');
	break;
	default: console.log('Its a Holiday on Saturday');

}