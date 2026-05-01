# Overloading deli operatori 
In C++ l’overloading degli operatori ti permette di dare significato agli operatori standard per i tuoi tipi, così il codice con le classi “sembra” più naturale e leggibile. Per una lista personalizzata, gli operatori più comuni sono =, [], ==, !=, << e >>, mentre alcuni operatori come . :: ?: non si possono sovraccaricare.

``` cpp
struct Cella{
    int info;
    Cella * next;
};
const List& List::operator=(const List& s) {
    if (this == &s) return *this;

    while (head != nullptr) {
        Cella* tmp = head;
        head = head->next;
        delete tmp;
    }

    head = nullptr;
    Cella* tail = nullptr;
    Cella* pcs = s.head;

    while (pcs != nullptr) {
        Cella* nuovo = new Cella;
        nuovo->info = pcs->info;
        nuovo->next = nullptr;

        if (head == nullptr) {
            head = nuovo;
            tail = nuovo;
        } else {
            tail->next = nuovo;
            tail = nuovo;
        }

        pcs = pcs->next;
    }

    return *this;
}

```
`this` è un puntatore alla classe che punta all'oggetto che sta eseguendo il metodo. 

`c= a `  $\equiv$ `c.operator=(a)` 
`c=a=b`-> associatività a destra dell'operatore assegnamento 
1. `a=b`
2. c = b
equivale a 
`c.operator(a.operator=(b))` 
deve ritornare una const refernce a `List`

## Implementazione con

```cpp
const List& List::operator=(const vectot<int>& v) {

}
```


## implementazione con intero

``` cpp
const List & List::operator=(int n){
     if (this == &s) return *this;

    while (head != nullptr) {
        Cella* tmp = head;
        head = head->next;
        delete tmp;
    }

Cella * pc = s.head;
head = new Cella; 
head->info= n;
head->next = nullptr;
}
```

## Operatore somma 

$b+c=$
`b.operator+(c)`

``` cpp
const List&List:: operator+(const List & l)const{
    list res =*this; // chiama il copy constructor
    Cella * pc = l.head; 
    while(pc){
        append(pc->info);
        pc= pc->next;
    }
    return res; 
}
```

il tipo `+` fa il concatenamento delle liste => 

## Operatore moltiplicazione 
```cpp
List List::operator*(int n) const{
    list res; 
    while(n>0){
        res = resr+(*this);
        n--;
    }
    return res;
}
```

```cpp
List operator +(intm,const List & l )
```