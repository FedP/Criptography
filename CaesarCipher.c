#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <math.h>
#include <stdlib.h>

int main(int argc, string argv[])
// argc = argument count, argv = argument vector = array of arguments
{
    if (argc == 2)
    {
        //printf("Hello, you just put 2 arguments!\n");
    }
    else
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    
    char collect[strlen(argv[1])];
    int collecttr = 0;

    for (int p = 0; p < strlen(argv[1]); p++)
    {
        if ((isdigit(argv[1][p])) != 0)
        {
            //printf("Yes it is a digit!\n");
        }
        else
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
        // if (isdigit(argv[1][p] != 0 ))
        //printf("bbb%c\n", argv[1][p]);
        collect[p] = argv[1][p];
        collecttr = atoi(collect);
    }
    //printf("The key cipher is: %i\n", collecttr);
    //printf("The key cipher is: %s\n", argv[1]);

    string text = get_string("plaintext: ");
    int str = strlen(text);
    int texttoint[str];
    char inttotext[str];

    for (int i = 0; i < str; i++)
    {
        int lettertoint = (int) text[i];
        //printf("-----\n");
        //printf("%i - %d \n", c, c - atoi(argv[1]));
        //printf("%i - %s \n",  atoi(argv[1]), argv[1]);

        if (isalpha(text[i]) != 0)
        {
            if (islower(text[i]) != 0)
            {
                // int c = (int) text[i];
                //printf("numerber of the text: %i\n", lettertoint);
                texttoint[i] = (lettertoint - 97 + atoi(argv[1])) % 26;
                printf("array element: %i\n",texttoint[i]);
                inttotext[i] = 'a' + texttoint[i];
                printf("Array converted element : %s\n", inttotext);
            }
            else
            {
                // int c = (int) text[i];
                //printf("number of the text: %i\n", lettertoint);
                texttoint[i] = (lettertoint - 65 + atoi(argv[1])) % 26;
                //printf("array element : %i\n",texttoint[i]);
                inttotext[i] = 'A' + texttoint[i];
                printf("Array converted element : %s\n", inttotext);
            }

        }
        else
        {
            inttotext[i] = text[i];
        }

    }
    //printf("\n--\n");
    printf("ciphertext: %s\n", inttotext);

}
