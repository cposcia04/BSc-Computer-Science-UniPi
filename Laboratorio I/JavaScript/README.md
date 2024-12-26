# Esercizi JavaScript

## **Array**
[Prodotto scalare](./prodotto_scalare.js): Si definisca una funzione prodotto_scalare(x,y)
che dati due array ne ritorni il prodotto scalare. Se gli array non hanno lo stesso numero di componenti, la funzione ritorna undefined.

[Array annidato 1](./flattenNestedArray.js): Un array annidato, o nested, è un array che contiene al suo interno degli interi e/o altri array annidati.
Si scriva una funzione Javascript flattenNestedArray che dato un array annidato restituisca un array contenente tutti gli interi nell'ordine di occorrenza.
Nel caso base in cui l'array annidato non contiene interi, si restituisca l'array vuoto. 

## **Classi**
[Gestione di talk](talk.js): Si consideri un sistema di gestione di talk, dove un generico talk è rappresentabile mediante la **classe Talk**, 
i cui campi sono _title_ (stringa), _speaker_ (stringa) e _duration_ (numerico, in minuti). 
Il sistema prevede la possibilità di definire tre tipi specifici di Talk, ovvero **Lecture**, **Seminar** e **Webinar**:
La classe Lecture rappresenta una lezione di un dato **course**, indicato nel costruttore, e fornisce un **getter-setter** **teacher** che corrisponde allo speaker del talk in questione. La **classe Seminar** rappresenta un seminario tenuto all'interno di un dato **event**, indicato nel costruttore.
La **classe Webinar** che rappresenta anch'essa un seminario tenuto all'interno di un event, con tale evento però tenuto online.
Si noti quindi che **Webinar** costituisce un caso specifico di Seminar.
Si implementino le classi Talk, Lecture, Seminar e Webinar, organizzandole in modo da sfruttare al meglio l'ereditarietà. 
Si implementi inoltre una **funzione pickSeminar** che, dato un **array talk**s di Talk, restituisce il titolo del seminario più breve contenuto in talks. 
**Se non ci sono seminari, restituisce undefined.**

## Alberi
[sxltdx](./sxltdx.js): Si scriva una funzione sxltdx(T) che, dato un albero binario T come definito a lezione, in cui i nodi hanno valore numerico, modifichi l'albero scambiando fra loro i figli sx e dx di ogni nodo se sono entrambi presenti, in modo che il valore del figlio destro sia sempre maggiore o uguale al valore del figlio sinistro.

[Trova padre](./trovaPadre.js): Si scriva una funzione trovaPadre(T,n) che, dato un albero k-ario T, e un nodo n appartenente a T, restituisca il nodo padre di n in T. Se n è la radice di T, allora trovaPadre deve restituire undefined.





---

**[callCounted](./callCounted.js)**: Scrivere una funzione callCounted che, data una funzione f, restituisce una funzione g che si comporta esattamente come f, con l'aggiunta però di una proprietà g.calls che contiene, in ogni istante, 
il numero di volte che g è stata invocata.



