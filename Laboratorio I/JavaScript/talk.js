/*Si consideri un sistema di gestione di talk, dove un generico talk è rappresentabile mediante la classe Talk, 
i cui campi sono title (stringa), speaker (stringa) e duration (numerico, in minuti). 
Il sistema prevede la possibilità di definire tre tipi specifici di Talk, ovvero Lecture, Seminar e Webinar:
La classe Lecture rappresenta una lezione di un dato course, indicato nel costruttore, e fornisce un getter-setter teacher che corrisponde allo speaker del talk in questione.
La classe Seminar rappresenta un seminario tenuto all'interno di un dato event, indicato nel costruttore.
La classe Webinar che rappresenta anch'essa un seminario tenuto all'interno di un event, con tale evento però tenuto online.
Si noti quindi che Webinar costituisce un caso specifico di Seminar.
Si implementino le classi Talk, Lecture, Seminar e Webinar, organizzandole in modo da sfruttare al meglio l'ereditarietà. 
Si implementi inoltre una funzione pickSeminar che, dato un array talks di Talk, restituisce il titolo del seminario più breve contenuto in talks. 
Se non ci sono seminari, restituisce undefined.*/


// Classe base Talk
class Talk {
  constructor(title, speaker, duration) {
    this.title = title; // Titolo del talk
    this.speaker = speaker; // Relatore del talk
    this.duration = duration; // Durata del talk (in minuti)
  }
}

// Classe Lecture, estensione di Talk
class Lecture extends Talk {
  constructor(title, speaker, duration, course) {
    super(title, speaker, duration); // Chiamata al costruttore della classe base
    this.course = course; // Corso associato alla lezione
  }

  // Getter per il relatore (alias "teacher")
  get teacher() {
    return this.speaker;
  }

  // Setter per il relatore
  set teacher(newTeacher) {
    this.speaker = newTeacher;
  }
}

// Classe Seminar, estensione di Talk
class Seminar extends Talk {
  constructor(title, speaker, duration, event) {
    super(title, speaker, duration); // Chiamata al costruttore della classe base
    this.event = event; // Evento associato al seminario
  }
}

// Classe Webinar, estensione di Seminar
class Webinar extends Seminar {
  constructor(title, speaker, duration, event) {
    super(title, speaker, duration, event); // Chiamata al costruttore di Seminar
  }
}

// Funzione per selezionare il seminario più breve
function pickSeminar(talks) {
  let shortestSeminar = null; // Variabile per tracciare il seminario più breve

  // Iterazione su tutti i talk
  for (let talk of talks) {
    // Controlla se il talk è un'istanza di Seminar
    if (talk instanceof Seminar) {
      // Aggiorna il seminario più breve se necessario
      if (!shortestSeminar || talk.duration < shortestSeminar.duration) {
        shortestSeminar = talk;
      }
    }
  }

  // Restituisce il titolo del seminario più breve o null se non esiste
  return shortestSeminar ? shortestSeminar.title : null;
}
