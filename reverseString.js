function reverseString(){
    let word="reversed";
    let newWord="";

    const array=[];
    for(let i=0;i<word.length;i++){
        array[i]=word.charAt(i);
    }

    for(let i=array.length-1;i>=0;i--){
        newWord +=array[i]
    }
    console.log(newWord);
}

