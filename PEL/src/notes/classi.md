# Classi in C++

## Struttura base

Una classe raggruppa **dati** (attributi) e **operazioni** (metodi) in un'unica entità.

```cpp
class Punto2D {
private:
    double x, y;       // attributi (dati)

public:
    // Costruttore
    Punto2D(double x, double y) : x(x), y(y) {}

    // Metodi (getter)
    double getX() const { return x; }
    double getY() const { return y; }

    // Metodo che usa altri oggetti
    double distanza(const Punto2D& altro) const {
        double dx = x - altro.x;
        double dy = y - altro.y;
        return sqrt(dx*dx + dy*dy);
    }
};
```

## Private vs Public

- `private`: accessibile solo dall'interno della classe
- `public`: accessibile da chiunque

> **Regola**: attributi **sempre private**, accesso tramite getter/setter.

## Costruttore

Il costruttore ha lo **stesso nome** della classe e nessun tipo di ritorno.

```cpp
// Lista di inizializzazione (preferibile)
Punto2D(double x, double y) : x(x), y(y) {}

// Equivalente con assegnamento nel body
Punto2D(double x, double y) {
    this->x = x;
    this->y = y;
}
```

## Metodi const

Se un metodo non modifica l'oggetto, dichiaralo `const`:

```cpp
double getX() const { return x; }  // ✓ non modifica
void scala(double f) { x *= f; }   // ✗ modifica
```

## Usare vector come attributo

```cpp
class Studente {
private:
    string nome;
    int matricola;
    vector<int> voti;

public:
    Studente(const string& n, int m) : nome(n), matricola(m) {}

    void aggiungiVoto(int v) { voti.push_back(v); }

    double media() const {
        if (voti.empty()) return 0;
        int somma = 0;
        for (int v : voti) somma += v;
        return (double)somma / voti.size();
    }
};
```

## Pattern: Stack con vector

```cpp
class Stack {
private:
    vector<int> data;

public:
    void push(int val) { data.push_back(val); }

    int pop() {
        int val = data.back();
        data.pop_back();
        return val;
    }

    int top() const { return data.back(); }
    bool isEmpty() const { return data.empty(); }
    int size() const { return data.size(); }
};
```

## Checklist per creare una classe

1. Quali **dati** servono? → attributi `private`
2. Come si **costruisce**? → costruttore con lista di inizializzazione
3. Come si **leggono** i dati? → getter `const`
4. Come si **modificano**? → metodi che cambiano gli attributi
5. Servono **calcoli**? → metodi `const` che restituiscono risultati
