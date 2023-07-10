const array = [90,89,65,4,78,12,18,45,67,89]
// const position = 6
// for(i=position;i<array.length-1;i++){
//     array[i] = array[i+1]
//     console.log( i,array[i]);

// }
// array.length = array.length-1
// console.log(array);


function delete_element(){
    const output = document.getElementById("output")
    const userinput = document.getElementById("position").value
    for(i=userinput;i<array.length-1;i++){
        array[i] = array[i+1]

    }

    array.length = array.length-1
    
    

    output.innerHTML = `after deleting array is ${array}`
}

