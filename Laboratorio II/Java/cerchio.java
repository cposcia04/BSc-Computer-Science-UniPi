public class Cerchio implements FormeGeometriche {
    private double raggio;

    // Costruttore della classe Cerchio
    public Cerchio(double raggio) {
        this.raggio = raggio;
    }

  // Getter per il raggio
    public double getRaggio() {
        return raggio; // Restituisce il valore del raggio
    }

    // Implementazione del metodo area per il cerchio
    @Override
    public double area() {
        return Math.PI * raggio * raggio; // Formula dell'area del cerchio: π * raggio^2
    }
}
