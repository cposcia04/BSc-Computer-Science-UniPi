# Esercizi JavaScript

## **Livello 1: [Array e cicli](./Array%20e%20cicli)**

<details>
  <summary> Somma dei primi n numeri</summary>
  
  Scrivere una funzione [sum(n)](./Array%20e%20cicli/sum.js) che, dato un intero n, calcoli e restituisca la somma dei numeri da 1 a n.
</details>

<details>
  <summary> Trovare la posizione di un elemento in un array</summary>
  
Scrivere una funzione [trovaIndice(arr,x)](./trovaIndice.js) con arr un array ordinato di numeri e x un numero, che restituisce la posizione della prima occorrenza di x in arr.
 Se non occorre in la funzione restituisce -1.
</details>

<details> 
<summary> Conta elementi maggiori di una certa soglia</summary>
  
  Scrivere una funzione [contaMaggiore(arr,soglia)](./Array%20e%20cicli/contaMaggiore.js) che calcoli il numero di elementi di arr che sono maggiori di soglia.
  
  </details>

[Prodotto scalare](./prodotto_scalare.js): Si definisca una funzione prodotto_scalare(x,y)
che dati due array ne ritorni il prodotto scalare. Se gli array non hanno lo stesso numero di componenti, la funzione ritorna undefined.

[Array annidato 1](./flattenNestedArray.js): Un array annidato, o nested, è un array che contiene al suo interno degli interi e/o altri array annidati.
Si scriva una funzione Javascript flattenNestedArray che dato un array annidato restituisca un array contenente tutti gli interi nell'ordine di occorrenza.
Nel caso base in cui l'array annidato non contiene interi, si restituisca l'array vuoto. 

## Basi numeriche

[Codifica binaria](./zeriuni.js): Scrivere una funzione zeriuni che, dato un numero n (intero e positivo), restituisce un array di 0 e 1 che rappresenti la sua codifica su 8 bit. Gli 0 e 1 devono essere rappresentati come numeri, mettendo il più significativo nella posizione 0 dell'array restituito, e quello meno significativo nella posizione 7. La funzione zeriuni deve inoltre lanciare due eccezioni NonIntegerError e OutOfRangeError definite opportunamente:
l'eccezione NonIntegerError viene lanciata da zeriuni(n) quando il numero n non è intero, mentre
l'eccezione OutOfRangeError viene lanciata da zeriuni(n) quando il numero n è fuori dal range degli interi positivi rappresentabili su 8 bit.

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

[Taglia rami](./tagliaRami.js): Sia T un albero k-ario, e v un valore valido per un nodo dell'albero. Si scriva una funzione JavaScript tagliaRami(T,v) che modifichi T tagliando tutti i rami (attenzione: non la radice!) che hanno valore val divisore di v. L'operazione di taglio di un nodo elimina dall'albero il nodo in questione, e l'eventuale sotto-albero radicato nel nodo.

[Profondità minima](./minDepth.js): Si scriva una funzione JS minDepth(T), dove T è un albero binario (oggetti con chiavi val e sx e dx). La funzione deve restituire la minima profondità dell'albero T: la lunghezza del cammino più corto tra tutti quelli che vanno dalla radice alle sue foglie (la radice ha profondità zero).

[Taglia rami interni](./taglia_rami_interni.js): Dato un albero k-ario T, definire una funzione ricorsiva taglia_nodi_interni che, preso in input un intero positivo m, modifica T in-place, rimuovendo tutti i nodi interni (e i rispettivi sottalberi) che hanno meno di m figli.
L'albero vuoto è codificato con il valore null.



## Funzioni e generatori

**[callCounted](./callCounted.js)**: Scrivere una funzione callCounted che, data una funzione f, restituisce una funzione g che si comporta esattamente come f, con l'aggiunta però di una proprietà g.calls che contiene, in ogni istante, 
il numero di volte che g è stata invocata.

[Decadimento](./decadimento.js): Si definisca un generatore decadimento(n,k) che, dato in input un numero n, generi infiniti numeri interi ottenuti dividendo n per potenze successive di k. In altre parole, il generatore restituirà n/(k^0) la prima volta che viene invocato, poi a seguire n/(k^1), n/(k^2), n/(k^3), e così via. Si arrotondi ciascun valore generato da decadimento(n,k) all'intero più vicino utilizzando Math.round. Si assuma inoltre k come sempre diverso da 0.



