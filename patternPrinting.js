function pattern(number){
    let count =1;
    let space =number+2;


    for(let i=1;i<=number;i++){
       //space
       let gap="";
       for(let j=space;j>=0;j--){
         gap +=" ";
        
       }
       console.log(gap);

       //star print 
       let star="";
       for(let k=0;k<count;k++){
        star+="* "
        
       }
       console.log(star)

      console.log();
      count+=2;
      space-=2;
    }
}

pattern(4)