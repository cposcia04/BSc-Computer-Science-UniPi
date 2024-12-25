/*Si scriva in TypeScript una funzione sanitize(obj, drop) dove il parametro obj è un oggetto, con un numero qualunque di proprietà arbitrarie. Le chiavi sono stringhe, 
mentre i valori possono essere di qualunque tipo, inclusi tipi base e altri oggetti con la stessa struttura (anche array, funzioni, ecc.).
Il parametro drop è un array di stringhe.
La funzione deve eliminare da obj tutte le proprietà la cui chiave compare fra quelle elencate in drop, a qualunque livello di annidamento si trovino.*/

type AnyObject = {[key: string]: any};

function sanitize(obj: AnyObject, drop: string[]): void {
    // Itera sulle chiavi dell'oggetto
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (drop.includes(key)) {
                // Rimuove la proprietà se è nel drop
                delete obj[key];
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                // Se il valore è un oggetto, richiama sanitize in modo ricorsivo
                sanitize(obj[key], drop);
            }
        }
    }
}
