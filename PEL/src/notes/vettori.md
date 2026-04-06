# Vettori in C++

## Cos'è un vettore?

Un `vector<T>` è un array dinamico della Standard Library. A differenza degli array C-style, cresce automaticamente e gestisce la memoria per te.

```cpp
#include <vector>
using namespace std;

vector<int> v;           // vettore vuoto
vector<int> v(5, 0);     // 5 elementi, tutti 0
vector<int> v = {1,2,3}; // lista di inizializzazione
```

## Operazioni fondamentali

| Operazione | Sintassi | Complessità |
|---|---|---|
| Accesso | `v[i]` o `v.at(i)` | O(1) |
| Dimensione | `v.size()` | O(1) |
| Aggiunta in coda | `v.push_back(x)` | O(1) amm. |
| Rimozione in coda | `v.pop_back()` | O(1) |
| Vuoto? | `v.empty()` | O(1) |

## Iterazione

```cpp
// Con indice
for (int i = 0; i < v.size(); i++) {
    cout << v[i] << " ";
}

// Range-based for (preferibile)
for (int x : v) {
    cout << x << " ";
}

// Per modificare in-place
for (int& x : v) {
    x *= 2;
}
```

## Passaggio a funzioni

Sempre per **reference** (evita copie costose):

```cpp
// Sola lettura
void stampa(const vector<int>& v) { ... }

// Modifica
void ordina(vector<int>& v) { ... }
```

## Pattern comuni

### Contare occorrenze

```cpp
int count_element(const vector<int>& v, int el) {
    int c = 0;
    for (int x : v)
        if (x == el) c++;
    return c;
}
```

### Trovare il massimo

```cpp
int trova_max(const vector<int>& v) {
    int mx = v[0];
    for (int i = 1; i < v.size(); i++)
        if (v[i] > mx) mx = v[i];
    return mx;
}
```

### Filtrare elementi

```cpp
vector<int> filtra_pari(const vector<int>& v) {
    vector<int> res;
    for (int x : v)
        if (x % 2 == 0) res.push_back(x);
    return res;
}
```

> **Tip**: Quando crei un nuovo vettore come risultato, inizia sempre con un vettore vuoto e usa `push_back`.

## Matrici (vettori 2D)

```cpp
// Matrice 3x4 di zeri
vector<vector<int>> m(3, vector<int>(4, 0));

// Accesso
m[riga][colonna] = 5;

// Dimensioni
int righe = m.size();
int colonne = m[0].size();
```
