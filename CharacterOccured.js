function occured(title,check){
let temp=0;
const result=title.toLowerCase();
for(let i=0;i<title.length;i++){
    if(result.charAt(i)==check){
        temp++;
    }
}
console.log(check+" occured times of "+temp);
}


occured("Sayan Das",'s');
occured("Sayan Das",'a');
occured("Sayan Das",'y');
occured("Sayan Das",'n');
occured("Sayan Das",'d');