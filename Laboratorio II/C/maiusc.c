#include <stdio.h>
#include <ctype.h>

int main() {
    char min, maiusc;
    scanf("%c", &min);

    maiusc = toupper(min);
    printf("%c\n", maiusc);
    
}
