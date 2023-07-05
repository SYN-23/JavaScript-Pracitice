const str='Today is a very rainy day';

//indexof  (print index of a letter)
const indexPrint=str.indexOf('a');
console.log(indexPrint); //3

//substring (get a sub string by index)
const subStr=str.substring(0,2);
console.log(subStr);  //To

//slice  (get a sub string by index)
const sliceStr=str.slice(0,5);
console.log(sliceStr);  //Today

//tolowerCase  (convert a sting into loweCase)
const lowerStr=str.toLowerCase();
console.log(lowerStr);  //today is a very rainy day

//toUpperCase  (convert a sting into upperCase)
const upperStr=str.toUpperCase();
console.log(upperStr);   //TODAY IS A VERY RAINY DAY

//trim (remove white space)
const str1='  Today is a rainy day';
const trimStr=str1.trim();
console.log(trimStr);    //Today is a rainy day 

//replace  (replace a char to another char)
const str2='Today';
console.log(str2.replace('T','S')); //Soday

//incluedes  (check a char avialabe in a string )
const inculdesStr=str.includes('o');
console.log(inculdesStr);  //true

//split   (split a sting in to an array )
const arrStr=str.split(' ')
console.log(arrStr);   //[ 'Today', 'is', 'a', 'very', 'rainy', 'day' ]

//join   (join a array in to a string )
const arrJoin=arrStr.join(' ');  
console.log(arrJoin); //Today is a very rainy day

