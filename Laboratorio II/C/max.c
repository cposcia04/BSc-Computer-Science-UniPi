#include <stdio.h>

int main() {
    int num1,num2,num3,max;

    scanf("%d %d %d", &num1, &num2, &num3);

    max = num1;

    if((num2 > num1) && (num3 < num2)) {
        max = num2;
    } else if (num3 > num1 && num3 > num1) {
        max = num3;
    } else {
        max = num1;
    }

    printf("%d\n", max);
}
