function tagliaRami(T, v) {
    if (!T) {
        return; //se l'albero è vuoto non fare nulla
    }

    // Filtra i figli che non sono divisibili per v
    T.figli = T.figli.filter(figlio => figlio.val % v !== 0);

    // Applica ricorsivamente la funzione ai figli rimanenti
    for (let figlio of T.figli) {
        tagliaRami(figlio, v);
    }
}
