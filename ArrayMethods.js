const arr=['Michale','Steven','Peter'];

//push (add a element end of the array)
arr.push('Rodri');
console.log(arr); // [ 'Michale', 'Steven', 'Peter', 'Rodri' ]

//unshift  (add a element start of the array)
arr.unshift('Hussain');
console.log(arr);  // [ 'Hussain', 'Michale', 'Steven', 'Peter', 'Rodri' ]

//pop  (remove a element from end of the array)
arr.pop();
console.log(arr); //  [ 'Hussain', 'Michale', 'Steven', 'Peter' ]

// shift (remove a element from start of the array)
arr.shift();
console.log(arr);  // [ 'Michale', 'Steven', 'Peter' ]

//indexof (get index of an element in array)
const indexEle=arr.indexOf('Steven');
console.log(indexEle);  // 1

//includes (check a element available or not in array)
console.log(arr.includes('Steven')); //true

//entries (get index and element in a array in key value pair)
let [...entry] =arr.entries();
console.log(entry)  // [ [ 0, 'Michale' ], [ 1, 'Steven' ], [ 2, 'Peter' ] ]

//at  (get elemet by index)
console.log(arr.at(2));  //Peter
console.log(arr[2]);    //Peter


//concat  (join to array)
const arr2=["Rodri","Hussain","Arthur"]
const joinArray=arr.concat(arr2);
console.log(joinArray);  // [ 'Michale', 'Steven', 'Peter', 'Rodri', 'Hussain', 'Arthur' ]

//Join by spread operator 
const arr3=[...arr,...arr2];
console.log(arr3); // [ 'Michale', 'Steven', 'Peter', 'Rodri', 'Hussain', 'Arthur' ]


//slice (get a subarray (start,end))  does not change the main array 
const sliceArr=arr3.slice(2,5);
console.log(sliceArr);  // [ 'Peter', 'Rodri', 'Hussain' ]

//splice (delete multiple array element (start,number of element )) it change the main array 
arr3.splice(2,3);
console.log(arr3) // [ 'Michale', 'Steven', 'Arthur' ]

//reverse  (reverse the array it effect the main array )
arr3.reverse();
console.log(arr3); // [ 'Arthur', 'Steven', 'Michale' ]


//forEact (looping a array ) function(current elemnt,current index,array)

arr3.forEach(function(element,i,arr){
   console.log(`elemet ${element} at position ${i}`)
//    elemet Arthur at position 0
// elemet Steven at position 1
// elemet Michale at position 2
})

const numberArr=[15,20,25,7,10,3,5];
//Important 
// map (map returns a new array containing the results of applying 
//      operation on all original array elements)




//filter (filter returns a new array containing the array elements
//        that passed a specified test condition)
const newNumberArr=numberArr.filter(function(number){
    return number>10;
});
console.log(newNumberArr);  // [ 15, 20, 25 ]



//reduce (reduce boils reduces all array elements down to one single
//         value )
//accumlator 
const number=numberArr.reduce(function(acc,current,i,arr){
 return acc+current;
})
console.log(number); //85 (sum of the all aelement)