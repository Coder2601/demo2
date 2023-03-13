// for(var i = 3;i<=15;i+=2){
//     console.log(i);
// }
// console.log('Loop ended');



// for(var x = 1;x<46; x++){
//     if(x%3===0 && x%5 !==0){
//         console.log(x+ ' Fizz');
//     } 
//     else if(x%3!==0 && x%5===0){
//         console.log(`${x} = Buzz`);
//     }
//     else if(x%3===0 && x%5 ===0){
//         console.log(x+' FizzBuzz');
//     }
// }


// var fname ='Divya ';
// var lname = 'Goyal';

// //Divya Goyal
// var fullName = fname.concat(lname);
// console.log(fullName);

// console.log(fullName.length);

// console.log(fname.toUpperCase());
// console.log(lname.toLowerCase());

// console.log(fname);
// console.log(fname.trim())

// var sen = 'Ram loves eating apple. Ram is happy';
// console.log(sen);

// var newSen = sen.replace(/ram/ig,'Saksham');
// console.log(newSen);

// console.log(fullName.slice(0,5));
// console.log(fullName.substring(0,4));

// console.log(fullName.charAt(5));




// const arr = ['oo','pp'];

// const[tag1,tag6='ll',...t4] = arr;
// console.log(t4);



// var fruits = ['apple','mango','grapes'];
// console.log(fruits);

// fruits.push('orange');
// fruits.push('orange');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift('tomato');
// fruits.unshift('tomato');
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// ['apple', 'mango', 'grapes', 'orange']

// for(var i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


// var arr = [];
// for(var i=1;i<=5;i++){
//     var x = prompt('Enter any name');
//     arr.push(x);
// }
// console.log(arr);
// var x = Math.floor(Math.random()*5)
// console.log(`${arr[x]} is going to buy lunch today!`);


// var mainArr = [];


// for(var i=0;i<5;i++){
//     if(i==1 || i==4){
//         var subArr = [];
//         for(var j=0;j<2;j++){
//             var ip = prompt('Enter any value');
//             subArr.push(ip);
//         }
//         mainArr.push(subArr);
//     }
//     else{
//         var x = prompt('Enter any value');
//         mainArr.push(x);    
//     }  
// }
// console.log(mainArr);



//defining objects with literal method
// var myList={
//     grapes:'1kg',
//     maggi:5,
//     bottle:['black','pink'],
//     scooty:true,
//     dist:8,
//     travel:function(){
//         if(this.dist<=2){
//             this.scooty=false;
//             console.log('Go on feet for shorter distances');
//             return this.scooty;
//         }else{
//             console.log('Take my Activa..!');
//             return this.scooty;
//         }
//     }
// }
// console.log(myList.travel());


//Method 2- using create method
// var myObj = Object.create(null);
// console.log(myObj); 

// myObj.fname='Divya';
// console.log(myObj.fname);


//Method 3 - using new keyword
// var myObj = new Object();
// console.log(myObj);

// myObj.fname='Divya';
// console.log(myObj.fname);


class CelloBottle{
    constructor(r,h){
        this.radius = r;
        this.height = h;
        this.logo='Cello'
    }
}

let myBottle = new CelloBottle(23,55);
console.log(myBottle);