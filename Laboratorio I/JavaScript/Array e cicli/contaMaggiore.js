function contaMaggiore(arr,soglia) {

    let contatore = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > soglia) {
            contatore++;
        }
    }
    return contatore;
}
