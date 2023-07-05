const occured=(str)=>{
    
const obb={};

for(let i=0;i<str.length;i++){
    if(str[i] in obb){
        
        obb[str[i]] +=1;
     }
     else{
        let word=str[i]
        obb[word]=1;
    }
}
console.log(obb);
}


const str="aninditasarkar";
occured(str);