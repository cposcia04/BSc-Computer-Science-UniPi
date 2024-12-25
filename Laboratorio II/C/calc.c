#include <stdio.h>

int main() {
    double a, b;
    char operatore;

    scanf("%lf %lf", &a, &b);
    scanf(" %c", &operatore);  

    double risultato;
    switch (operatore) {
        case '+':
            risultato = a + b;
            break;
        case '-':
            risultato = a - b;
            break;
        case '/':
            risultato = a / b;
            break;
        case '%':
            risultato = (int)a % (int)b;
            break;
        default:
            printf("Operatore non valido\n");
            return 1;
    }

    printf("%.1lf\n", risultato);

    return 0;
}
