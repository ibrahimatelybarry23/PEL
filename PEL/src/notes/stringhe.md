# Stringhe in C++

## La classe string

In C++ usiamo `std::string` al posto dei char array del C. È più sicura e ha metodi utilissimi.

```cpp
#include <string>
using namespace std;

string s = "ciao";
string s2("mondo");
string vuota;          // stringa vuota ""
```

## Operazioni fondamentali

| Operazione | Sintassi | Note |
|---|---|---|
| Lunghezza | `s.length()` o `s.size()` | Equivalenti |
| Accesso | `s[i]` | Char alla posizione i |
| Concatenazione | `s + " mondo"` | Crea nuova stringa |
| Sottostringa | `s.substr(pos, len)` | Da pos, lungo len |
| Ultimo char | `s.back()` | Equivale a s[s.size()-1] |
| Vuota? | `s.empty()` | true se lunghezza 0 |

## Scorrere una stringa

```cpp
// Con indice
for (int i = 0; i < s.length(); i++) {
    cout << s[i];
}

// Range-based
for (char c : s) {
    cout << c;
}

// Per modificare in-place
for (char& c : s) {
    c = toupper(c);
}
```

## Passaggio a funzioni

```cpp
// Sola lettura
int conta(const string& s) { ... }

// Modifica in-place
void minuscolo(string& s) { ... }
```

## Conversione maiuscole/minuscole

```cpp
// Manuale (senza <cctype>)
if (c >= 'A' && c <= 'Z')
    c = c - 'A' + 'a';  // maiuscola → minuscola

// Con <cctype>
c = tolower(c);
c = toupper(c);
```

## Pattern comuni

### Controllare se è vocale

```cpp
bool is_vowel(char c) {
    c = tolower(c);
    return c=='a' || c=='e' || c=='i' || c=='o' || c=='u';
}
```

### Contare parole

```cpp
int word_count(const string& s) {
    if (s.empty()) return 0;
    int count = 1;
    for (char c : s)
        if (c == ' ') count++;
    return count;
}
```

### Palindromo

```cpp
bool is_palindrome(const string& s) {
    int l = 0, r = s.length() - 1;
    while (l < r) {
        if (tolower(s[l]) != tolower(s[r])) return false;
        l++; r--;
    }
    return true;
}
```

> **Tip**: La tecnica dei due indici (l e r) che si avvicinano è fondamentale per molti problemi su stringhe.

## Conversione char ↔ int

```cpp
// Cifra char → intero
int val = c - '0';     // '7' → 7

// Intero → cifra char
char c = val + '0';    // 7 → '7'

// Valore nella tabella ASCII
int ascii = (int)c;    // 'A' → 65
```
