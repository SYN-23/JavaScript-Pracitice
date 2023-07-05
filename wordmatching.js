const matching=(str,word)=>{
 const result=str.toLowerCase();
 const matchWord=word.toLowerCase();

 

 let count=0;
 for(let i=0;i<result.length-1;i++){
    
    for(let j=i+1;j<result.length;j++){
     let s=result.substring(i,j)   ;
    if(s==matchWord){
        count++;
       console.log(s) 
    }
}
 }
console.log(count)

}



matching("We are stackmern MernStack learning Mern Stack Course", "Mern")