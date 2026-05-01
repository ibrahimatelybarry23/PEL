---
title: "Ricorsione su Liste"
author: "Gemini CLI"
date: 2026-04-28
tags: [recursion, linked-list, c++]
version: "1.0.1"
---

# Ricorsione su Liste Concatenate

Le liste concatenate sono strutture dati intrinsecamente ricorsive: una lista è definita da un nodo (`head`) e da una "sottolista" (il resto della lista puntato da `next`).

## Stampa Ricorsiva

La ricorsione permette di invertire l'ordine di stampa molto facilmente semplicemente cambiando la posizione della chiamata ricorsiva.

### In ordine (Head Recursion)
```cpp
void stampa(Cella* l) {
    if (l == nullptr) return; // Caso base
    cout << l->info << " ";   // Azione prima della chiamata
    stampa(l->next);          // Passo ricorsivo
}
```

### In ordine inverso (Tail Recursion)
```cpp
void stampaInversa(Cella* l) {
    if (l == nullptr) return;
    stampaInversa(l->next);   // Passo ricorsivo (va fino alla fine)
    cout << l->info << " ";   // Azione mentre torna indietro dallo stack
}
```

## Operazioni di Ricerca e Conteggio

### Lunghezza della lista
```cpp
int lunghezza(Cella* l) {
    if (l == nullptr) return 0;
    return 1 + lunghezza(l->next);
}
```

### Ricerca di un valore
```cpp
bool cerca(Cella* l, int n) {
    if (l == nullptr) return false;
    if (l->info == n) return true;
    return cerca(l->next, n);
}
```

## Modifica della Struttura (Passaggio per Riferimento)

L'uso del **riferimento al puntatore** (`Cella*&`) semplifica enormemente la modifica dei collegamenti, poiché `l` rappresenta esattamente il campo `next` del nodo precedente.

### Inserimento in coda
```cpp
void inserisciInCoda(Cella*& l, int n) {
    if (l == nullptr) { // Trovata la fine della lista
        l = new Cella;
        l->info = n;
        l->next = nullptr;
    } else {
        inserisciInCoda(l->next, n);
    }
}
```

### Eliminazione dell'ultimo elemento (Elimina Fine)
Utilizzando la firma richiesta: `Cella*& l` e `int n`.

```cpp
int eliminaFineRicorsivo(Cella*& l, int& n) {
    if (l == nullptr) return 0;
    else{
       
        int k =  eliminaFineRicorsivo(l->next, n);
        if(k<n){
            delete l;
            return k+1;
        } 
        else return n;x
    }   
}
```

### Cancellazione di un valore specifico
```cpp
void eliminaValore(Cella*& l, int n) {
    if (l == nullptr) return;
    
    if (l->info == n) {
        Cella* temp = l;
        l = l->next; // Collega il precedente direttamente al successivo
        delete temp;
        // Non serve tornare, potrei voler eliminare tutte le occorrenze
        eliminaValore(l, n); 
    } else {
        eliminaValore(l->next, n);
    }
}
```

## Ricorsione su Indice (Posizione `n`)

In questo pattern, `n` non rappresenta un valore da cercare, ma la **posizione** (0 per la testa, 1 per il secondo, ecc.) su cui operare.

### Eliminare l'n-esimo elemento
Sfruttando il riferimento `Cella*& l`, possiamo modificare il puntatore che punta al nodo da eliminare senza cercare il precedente.

```cpp
void eliminaN(Cella*& l, int n) {
    if (l == nullptr) return; // Posizione n non esiste

    if (n == 0) {
        // Caso Base: siamo sul nodo da eliminare
        Cella* temp = l;
        l = l->next; // Il precedente ora punta al successivo di questo
        delete temp;
    } else {
        // Passo Ricorsivo: riduciamo n e avanziamo
        eliminaN(l->next, n - 1);
    }
}
```

## Vantaggi della Ricorsione su Liste
1. **Codice Pulito**: Non servono puntatori "prev" o "curr" d'appoggio.
2. **Backtracking**: È facile eseguire operazioni "mentre si torna indietro" (es. stampa inversa).
3. **Eleganza**: Si sposa perfettamente con la definizione matematica della struttura.

> ⚠️ **Attenzione**: Per liste estremamente lunghe (migliaia di nodi), la ricorsione può causare un **Stack Overflow**. In contesti di produzione si preferisce spesso l'approccio iterativo.
