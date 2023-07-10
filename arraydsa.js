const array = [10,20,30,40,50,60]

// for(i=0;i<array.length;i++){
    
// }
// console.log(array[1]);//accsessing


console.log(array);
console.log(array);
function aj(){
    const userinput = document.getElementById("element").value
    if(userinput<array.length && userinput!=""){
        alert(array[userinput])
    }else{
        alert(`invalid input`)
    }
    

}
