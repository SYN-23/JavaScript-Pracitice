const password=(str)=>{
 const length=str.length;
 let specialFlag=0;
 let UpperFlag=0;
 let spaceFlag=0;
 const format = /^[!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?]*$/;

 if(length<8){
    console.log("unvalid");
 }else{
  for(let i=0;i<length;i++){
    
    for(let j='A';j<='Z';j++){
      if(str[i]==j){
        UpperFlag=1;
        console.log(j);
        
        
      }
    }

    if(str[i]=='+' || str[i]==' '){
      spaceFlag=1;
      break;
    }else{
      console.log("no space")
    }
  }

if(format.test(str)){
  specialFlag=1;
}else{
  console.log("hi")
}
}


if(specialFlag==1 && UpperFlag==1 && spaceFlag !=1){
  console.log("valid");
}else{
  console.log("unvalid");
}
  

}


password("A12345678@")