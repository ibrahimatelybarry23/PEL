# Ricorsione

## Il concetto

Una funzione **ricorsiva** è una funzione che chiama se stessa. Ogni ricorsione ha:

1. **Caso base**: la condizione che ferma la ricorsione
2. **Passo ricorsivo**: la chiamata a se stessa con un problema più piccolo

```cpp
int fattoriale(int n) {
    if (n <= 1) return 1;        // caso base
    return n * fattoriale(n - 1); // passo ricorsivo
}
```

> **Regola d'oro**: se non c'è caso base → ricorsione infinita → stack overflow!

## Pattern ricorsivi su vettori

### Con indice

```cpp
int sum_from(const vector<int>& v, int idx) {
    if (idx >= v.size()) return 0;      // caso base
    return v[idx] + sum_from(v, idx+1); // passo ricorsivo
}
```

### Senza indice (creando sottovettori)

```cpp
int sum_positive(const vector<int>& v) {
    if (v.empty()) return 0;
    int last = v.back();
    vector<int> rest(v.begin(), v.end()-1);
    return (last > 0 ? last : 0) + sum_positive(rest);
}
```

## Pattern ricorsivi su numeri

### Scomporre le cifre

```cpp
int digit_sum(int n) {
    if (n < 10) return n;
    return n % 10 + digit_sum(n / 10);
}
```

### Potenza

```cpp
int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp - 1);
}
```

## Pattern ricorsivi su stringhe

```cpp
string reverse_string(const string& s) {
    if (s.length() <= 1) return s;
    return s.back() + reverse_string(s.substr(0, s.length()-1));
}
```

## Fibonacci

```cpp
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```

> **Nota**: Fibonacci ricorsivo puro ha complessità esponenziale O(2^n). Per n grandi serve la memoizzazione.

## Ricerca binaria ricorsiva

```cpp
int binary_search(const vector<int>& v, int target, int l, int r) {
    if (l > r) return -1;
    int mid = (l + r) / 2;
    if (v[mid] == target) return mid;
    if (v[mid] < target) return binary_search(v, target, mid+1, r);
    return binary_search(v, target, l, mid-1);
}
```

## MCD (Massimo Comun Divisore)

```cpp
int mcd(int a, int b) {
    if (a == b) return a;
    if (a > b) return mcd(a - b, b);
    return mcd(a, b - a);
}
```

## Come ragionare ricorsivamente

1. **Identifica il caso base**: qual è il caso più semplice che sai risolvere subito?
2. **Riduci il problema**: come puoi rendere il problema "più piccolo"?
3. **Combina**: come usi il risultato della sotto-chiamata per costruire la risposta?
4. **Fidati della ricorsione**: non cercare di "srotolare" mentalmente tutte le chiamate!
