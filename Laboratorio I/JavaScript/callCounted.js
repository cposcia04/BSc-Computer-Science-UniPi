/*Funzione JavaScript callCounted(f) che, data una funzione f, 
restituisce una funzione g che si comporta esattamente come f, 
con l'aggiunta però di una proprietà g.calls che contiene, in ogni istante, 
il numero di volte che g è stata invocata.*/

function callCounted(f) {
    let g = (...args) => {
        g.calls++;
        return f(...args);
    }

    g.calls = 0;
    return g;
}
