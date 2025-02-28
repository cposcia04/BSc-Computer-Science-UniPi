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
