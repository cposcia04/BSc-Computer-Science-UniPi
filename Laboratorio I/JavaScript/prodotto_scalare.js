function prodotto_scalare(x,y) {
    let result = 0;

  if(x.length !== y.length) { //Se gli array hanno lunghezze diverse ritorna undefined
        return undefined;
    }

    for(let i = 0; i < x.length; i++) { 
        result += x[i] * y[i]; 
    }

    return result;
}
