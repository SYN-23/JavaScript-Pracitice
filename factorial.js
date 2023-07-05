const factorial=(number)=>{
    let sum=1;
while(number>0){
   sum=sum*number;
   number--;
}
console.log(sum);
}

factorial(3);