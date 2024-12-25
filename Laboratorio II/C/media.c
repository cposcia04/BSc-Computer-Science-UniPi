#include <stdio.h>

int main(void) {
    float num1, num2, num3, media;

    scanf("%f %f %f", &num1, &num2, &num3);

    media = (num1+num2+num3) / 3;

    printf("%.3f\n", media);

}
