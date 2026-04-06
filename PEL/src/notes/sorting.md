# Algoritmi di Ordinamento

## Bubble Sort

L'algoritmo più semplice: confronta coppie adiacenti e scambia se necessario. Ripeti finché non ci sono più scambi.

```cpp
void bubble_sort(vector<int>& v) {
    bool swapped = true;
    while (swapped) {
        swapped = false;
        for (int i = 0; i < (int)v.size() - 1; i++) {
            if (v[i] > v[i+1]) {
                int tmp = v[i];
                v[i] = v[i+1];
                v[i+1] = tmp;
                swapped = true;
            }
        }
    }
}
```

**Complessità**: O(n²) nel caso peggiore, O(n) nel caso migliore (già ordinato, grazie all'early termination).

## Come funziona lo swap

```cpp
// Swap manuale (senza std::swap)
int tmp = a;
a = b;
b = tmp;
```

> **Ricorda**: servono sempre 3 assegnamenti per scambiare due variabili.

## Early Termination

Se in un passaggio completo non avviene nessuno swap, il vettore è già ordinato → possiamo uscire subito. Questo è il flag `swapped`.

## Ordinamento parziale

A volte serve ordinare solo certi elementi (quelli in posizioni specifiche):

1. Prendi i valori nelle posizioni indicate
2. Ordina quei valori
3. Rimettili nelle posizioni originali

## Ordinamento con comparatore custom

Per ordinare con criteri diversi, modifica la condizione di confronto nel bubble sort:

```cpp
// Ordinamento decrescente
if (v[i] < v[i+1]) { /* swap */ }

// Per frequenza
if (freq(v[i]) < freq(v[i+1])) { /* swap */ }
```

## Complessità a confronto

| Algoritmo | Migliore | Medio | Peggiore |
|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) |
| Selection Sort | O(n²) | O(n²) | O(n²) |
| Insertion Sort | O(n) | O(n²) | O(n²) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) |
