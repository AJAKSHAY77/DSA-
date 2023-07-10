const array = [10,20,30,40,50,60]
let position = 2
let newrl = 70

for(i=array.length-1;i>=0;i--){
    if(i>=position){
        array[i+1]=array[i]
        if(i==position){
            array[i]=newrl
        }

    }
}
console.log(array);

function insertel(){
    const array = [10,20,30,40,50,60,40,70]
    // 10,20,10000,30,40,50,60,40,70,
    const userinputposition = document.getElementById("position").value
    const userinputelement = document.getElementById("element").value

    const position = userinputposition;
    const insertelement = userinputelement
    for(i=array.length-1;i>=0;i--){
        if(i>=position){
            array[i+1] = array[i]
            if(i==position){
                array[i] = insertelement;
            }
        }
    }
     if(position<array.length && position!="" && insertelement!=""){
        alert(array)

     }else{
        alert("invalid input")
     }
    

}










