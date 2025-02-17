function trovaIndice(arr,x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == x) return i;
        else return -1;
    }
}
