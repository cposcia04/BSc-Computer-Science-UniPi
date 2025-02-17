function contaMaggiore(arr,soglia) {

    let contatore = 0; //inizializzo il contatore a 0
    for(let i = 0; i < arr.length; i++) { //itero su ogni elemento di arr
        if(arr[i] > soglia) { //se elemento > soglia incrementa il contatore di +
            contatore++; 
        }
    }
    return contatore; //restituisce il numero 
}
