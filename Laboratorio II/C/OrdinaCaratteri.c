#include <stdio.h>
#include <ctype.h>

int main() {
    char car1, car2;

    scanf("%c %c", &car1, &car2);

    car1 = tolower(car1);
    car2 = tolower(car2);

    if(car1 < car2) {
        printf("<");
    } else if (car1 == car2) {
        printf("="); 
    } else {
        printf(">");
    }
}
