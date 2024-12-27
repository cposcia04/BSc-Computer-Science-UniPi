function* decadimento(n,k) {
    let exp = 0;
    while (exp >= 0) {
        yield Math.round((n/(Math.pow(k,exp))));
        exp++;
    }
}
