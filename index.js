function writeCards(array, s){
    let new_array = [];
    for(let i = 0; i<array.length; i++){
        new_array.push("Thank you, "+`${array[i]}`+", for the wonderful "+`${s}`+" gift!")
    }
    return new_array;
}

function countDown(intega){
    let i=intega;
    while (i >=0){
    console.log(i)
    i--;
    }
}