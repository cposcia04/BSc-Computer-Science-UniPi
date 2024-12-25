# Esercizi JavaScript

## Classi
* **[Esercizio 1](talk.js)**: Si consideri un sistema di gestione di talk, dove un generico talk è rappresentabile mediante la** classe Talk**, 
i cui campi sono _title_ (stringa), _speaker_ (stringa) e _duration_ (numerico, in minuti). 
Il sistema prevede la possibilità di definire tre tipi specifici di Talk, ovvero **Lecture**, **Seminar** e **Webinar**:
La classe Lecture rappresenta una lezione di un dato **course**, indicato nel costruttore, e fornisce un **getter-setter** **teacher** che corrisponde allo speaker del talk in questione. La **classe Seminar** rappresenta un seminario tenuto all'interno di un dato **event**, indicato nel costruttore.
La **classe Webinar** che rappresenta anch'essa un seminario tenuto all'interno di un event, con tale evento però tenuto online.
Si noti quindi che **Webinar** costituisce un caso specifico di Seminar.
Si implementino le classi Talk, Lecture, Seminar e Webinar, organizzandole in modo da sfruttare al meglio l'ereditarietà. 
Si implementi inoltre una** funzione pickSeminar** che, dato un** array talk**s di Talk, restituisce il titolo del seminario più breve contenuto in talks. 
**Se non ci sono seminari, restituisce undefined.**

---

* **[callCounted](./callCounted.js)**: Scrivere una funzione callCounted che, data una funzione f, restituisce una funzione g che si comporta esattamente come f, con l'aggiunta però di una proprietà g.calls che contiene, in ogni istante, 
il numero di volte che g è stata invocata.

