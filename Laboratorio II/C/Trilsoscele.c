/*Scrivere il programma TriIsoscele che riceva in input due interi che 
rappresentano la base e l’altezza di un triangolo isoscele e stampi il perimetro e 
l’area del triangolo rappresentato su due righe come nell’esempio. Per calcolare la 
radice quadrata utilizzare la funzione sqrt(x) della libreria math.h (utilizzare la direttiva 
#include < math.h > 
e compilare aggiungendo l’opzione -lm alla fine).*/

#include <stdio.h>
#include <math.h>

int main() {
    float base, altezza = 0;
    float ipotenusa, perimetro, area = 0;

    scanf("%f %f", &base, &altezza);

    ipotenusa = sqrt(pow(base/2, 2) + pow(altezza, 2));
    perimetro = 2 * ipotenusa + base;
    area = (base * altezza) / 2;

    printf("%.6f\n", perimetro);
    printf("%.6f\n", area);

    return 0;
}
