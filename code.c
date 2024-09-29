#include <stdio.h>
#include <netdb.h>
#include <string.h>

void resolve_hostname(const char *hostname) {
    struct hostent *he;
    char buffer[256];

// the bug is due to 'gethostname' function.

    he = gethostbyname(hostname);
    if (he == NULL) {
        herror("gethostbyname");
        return;
    }

    // Potentially unsafe use of buffer
    strcpy(buffer, he->h_name);
    printf("Resolved hostname: %s\n", buffer);
}

int main() {
    resolve_hostname("example.com");
    return 0;
}

