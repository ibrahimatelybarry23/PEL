export const EXERCISES = [
  {
    id: 1,
    category: "Vettori",
    difficulty: "Facile",
    title: "Somma dei due massimi",
    description: "Dato un vettore di interi, restituire la somma dei due elementi più grandi.\nSe ha un solo elemento, restituire quello. Se vuoto, restituire 0.",
    signature: "int trova_somma_massima(const vector<int>& v)",
    publicCases: [
      {
        "input": "v = {3,7,1,9,2}",
        "expected": "16"
      }
    ],
    hints: [
      "Gestisci casi limite: vuoto e size==1",
      "Inizializza max1 e max2 con i primi due elementi",
      "Usa else if dopo il primo aggiornamento"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<vector<int>>t={{3,7,1,9,2},{5},{},{-1,-5,-2},{10,10,1},{7,7},{7,7},{7,7},{7,7},{7,7}};
int e[]={16,5,0,-3,20,14,14,14,14,14};int p=0;
for(int i=0;i<10;i++){int r=trova_somma_massima(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int trova_somma_massima(const vector<int>& v) {
}`
  },
  {
    id: 2,
    category: "Vettori",
    difficulty: "Facile",
    title: "Filtra numeri pari",
    description: "Dato un vettore di interi, restituire un NUOVO vettore con solo gli elementi pari, ordine preservato.",
    signature: "vector<int> filter_even(const vector<int>& v)",
    publicCases: [
      {
        "input": "v = {1,2,3,4,5,6,7,8}",
        "expected": "{2,4,6,8}"
      }
    ],
    hints: [
      "Crea vettore vuoto",
      "Controlla v[i] % 2 == 0",
      "push_back degli elementi"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<vector<int>>t={{1,2,3,4,5,6,7,8},{1,3,5},{2,4},{},{0,1,2},{-2,-1,0},{-2,-1,0},{-2,-1,0},{-2,-1,0},{-2,-1,0}};
vector<vector<int>>e={{2,4,6,8},{},{2,4},{},{0,2},{-2,0},{-2,0},{-2,0},{-2,0},{-2,0}};int p=0;
for(int i=0;i<10;i++){auto r=filter_even(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got=";pv(r);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(r);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `vector<int> filter_even(const vector<int>& v) {
}`
  },
  {
    id: 3,
    category: "Vettori",
    difficulty: "Medio",
    title: "Elemento più frequente",
    description: "Restituire l'elemento che appare più volte. A parità, il minore.",
    signature: "int trova_max_freq(const vector<int>& v)",
    publicCases: [
      {
        "input": "v = {3,7,3,5,7,2}",
        "expected": "3"
      }
    ],
    hints: [
      "Scrivi count_element di appoggio",
      "Tieni max_freq e max_freq_val",
      "Se freq==max_freq && val<max_freq_val aggiorna"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<vector<int>>t={{3,7,3,5,7,2},{1,1,1,2,2},{5},{1,2,2,3,3},{9,9,1,1,1},{4,4,4,2,2},{4,4,4,2,2},{4,4,4,2,2},{4,4,4,2,2},{4,4,4,2,2}};
int e[]={3,1,5,2,1,4,4,4,4,4};int p=0;
for(int i=0;i<10;i++){int r=trova_max_freq(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int count_element(const vector<int>& v, int el) {
}
int trova_max_freq(const vector<int>& v) {
}`
  },
  {
    id: 4,
    category: "Vettori",
    difficulty: "Medio",
    title: "Rimuovi duplicati",
    description: "Restituire un NUOVO vettore senza duplicati. Prima occorrenza preservata, ordine mantenuto.",
    signature: "vector<int> remove_duplicates(const vector<int>& v)",
    publicCases: [
      {
        "input": "v = {3,1,4,1,5,3,2,4}",
        "expected": "{3,1,4,5,2}"
      }
    ],
    hints: [
      "Nuovo vettore vuoto",
      "count_element sul NUOVO vettore",
      "Se 0 push_back"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
int count_element(const vector<int>&v,int el){int c=0;for(int x:v)if(x==el)c++;return c;}
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<vector<int>>t={{3,1,4,1,5,3,2,4},{1,1,1},{1,2,3},{},{5,5,5,5},{1,2,1,3,2},{1,2,1,3,2},{1,2,1,3,2},{1,2,1,3,2},{1,2,1,3,2}};
vector<vector<int>>e={{3,1,4,5,2},{1},{1,2,3},{},{5},{1,2,3},{1,2,3},{1,2,3},{1,2,3},{1,2,3}};int p=0;
for(int i=0;i<10;i++){auto r=remove_duplicates(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got=";pv(r);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(r);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `vector<int> remove_duplicates(const vector<int>& v) {
}`
  },
  {
    id: 5,
    category: "Vettori",
    difficulty: "Medio",
    title: "Merge vettori ordinati",
    description: "Due vettori ordinati restituire un nuovo vettore ordinato. Non usare sort.",
    signature: "vector<int> merge(const vector<int>& a, const vector<int>& b)",
    publicCases: [
      {
        "input": "a={1,3,5,7}, b={2,4,6,8}",
        "expected": "{1,2,3,4,5,6,7,8}"
      }
    ],
    hints: [
      "Due indici i,j da 0",
      "Confronta e metti il minore",
      "Dopo il while aggiungi i rimasti"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<int>a1={1,3,5,7},b1={2,4,6,8},a2={1,2},b2={3,4,5},a3={},b3={1,2},a4={5},b4={},a5={1,1},b5={1,1},a6={1,3},b6={2,4};
vector<vector<int>>e={{1,2,3,4,5,6,7,8},{1,2,3,4,5},{1,2},{5},{1,1,1,1},{1,2,3,4},{1,2,3,4},{1,2,3,4},{1,2,3,4},{1,2,3,4}};
vector<vector<int>>r={merge(a1,b1),merge(a2,b2),merge(a3,b3),merge(a4,b4),merge(a5,b5),merge(a6,b6)};int p=0;
for(int i=0;i<10;i++){if(r[i]==e[i]){cout<<"PASS "<<i<<" got=";pv(r[i]);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(r[i]);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `vector<int> merge(const vector<int>& a, const vector<int>& b) {
}`
  },
  {
    id: 6,
    category: "Vettori",
    difficulty: "Medio",
    title: "Matrice trasposta",
    description: "Data una matrice, restituire la trasposta. Elemento [i][j] diventa [j][i].",
    signature: "vector<vector<int>> transpose(const vector<vector<int>>& m)",
    publicCases: [
      {
        "input": "m = {{1,2,3},{4,5,6}}",
        "expected": "{{1,4},{2,5},{3,6}}"
      }
    ],
    hints: [
      "Crea matrice con dimensioni invertite",
      "vector<vector<int>> res(cols, vector<int>(rows))",
      "res[j][i] = m[i][j]"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv2(const vector<vector<int>>&m){cout<<"{";for(size_t i=0;i<m.size();i++){if(i)cout<<",";cout<<"{";for(size_t j=0;j<m[i].size();j++){if(j)cout<<",";cout<<m[i][j];}cout<<"}"; }cout<<"}";}
int main(){
vector<vector<vector<int>>>t={{{1,2,3},{4,5,6}},{{1}},{{1,2},{3,4},{5,6}},{{1,2,3,4}},{{1},{2},{3}},{{1,2},{3,4}},{{1,2},{3,4}},{{1,2},{3,4}},{{1,2},{3,4}},{{1,2},{3,4}}};
vector<vector<vector<int>>>e={{{1,4},{2,5},{3,6}},{{1}},{{1,3,5},{2,4,6}},{{1},{2},{3},{4}},{{1,2,3}},{{1,3},{2,4}},{{1,3},{2,4}},{{1,3},{2,4}},{{1,3},{2,4}},{{1,3},{2,4}}};int p=0;
for(int i=0;i<10;i++){auto r=transpose(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got=";pv2(r);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv2(r);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `vector<vector<int>> transpose(const vector<vector<int>>& m) {
}`
  },
  {
    id: 7,
    category: "Stringhe",
    difficulty: "Facile",
    title: "Conta vocali",
    description: "Restituire il numero di vocali (aeiou, maiuscole e minuscole).",
    signature: "int count_vowels(const string& s)",
    publicCases: [
      {
        "input": "s = \"Hello World\"",
        "expected": "3"
      }
    ],
    hints: [
      "Funzione is_vowel di appoggio",
      "Scorri e conta",
      "Gestisci maiuscole con tolower"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"Hello World","AEIOU","xyz","","aEiOu","ciao","ciao","ciao","ciao","ciao"};
int e[]={3,5,0,0,5,3,3,3,3,3};int p=0;
for(int i=0;i<10;i++){int r=count_vowels(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_vowel(char c) {
}
int count_vowels(const string& s) {
}`
  },
  {
    id: 8,
    category: "Stringhe",
    difficulty: "Facile",
    title: "Converti in minuscolo",
    description: "Convertire maiuscole in minuscole in place.",
    signature: "void to_lowercase(string& s)",
    publicCases: [
      {
        "input": "s = \"Hello World\"",
        "expected": "\"hello world\""
      }
    ],
    hints: [
      "char& nel range-based for",
      "c >= 'A' && c <= 'Z'",
      "c = c - 'A' + 'a'"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"Hello World","ABC","already","","123ABC","MiXeD","MiXeD","MiXeD","MiXeD","MiXeD"};
string e[]={"hello world","abc","already","","123abc","mixed","mixed","mixed","mixed","mixed"};int p=0;
for(int i=0;i<10;i++){string s=t[i];to_lowercase(s);if(s==e[i]){cout<<"PASS "<<i<<" got="<<s<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<s<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void to_lowercase(string& s) {
}`
  },
  {
    id: 9,
    category: "Stringhe",
    difficulty: "Facile",
    title: "Conta parole",
    description: "Restituire il numero di parole separate da spazi. Stringa vuota restituisce 0.",
    signature: "int word_count(const string& s)",
    publicCases: [
      {
        "input": "s = \"the quick brown fox\"",
        "expected": "4"
      }
    ],
    hints: [
      "Conta spazi + 1",
      "Stringa vuota restituisce 0",
      "Confronta char con spazio"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"the quick brown fox","","hello","a b c d e","ciao mondo","uno due tre","uno due tre","uno due tre","uno due tre","uno due tre"};
int e[]={4,0,1,5,2,3,3,3,3,3};int p=0;
for(int i=0;i<10;i++){int r=word_count(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int word_count(const string& s) {
}`
  },
  {
    id: 10,
    category: "Stringhe",
    difficulty: "Medio",
    title: "Decompressione stringa",
    description: "Stringa compressa (lettera+cifra): la cifra indica quante volte ripetere la lettera.",
    signature: "string decompress(const string& s)",
    publicCases: [
      {
        "input": "s = \"a1b7c2\"",
        "expected": "\"abbbbbbbcc\""
      }
    ],
    hints: [
      "Scorri di 2: i += 2",
      "s[i] lettera, s[i+1] cifra",
      "Converti cifra: s[i+1] - '0'"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"a1b7c2","x3y2","","z1","a3b3","m2n4","m2n4","m2n4","m2n4","m2n4"};
string e[]={"abbbbbbbcc","xxxyy","","z","aaabbb","mmnnnn","mmnnnn","mmnnnn","mmnnnn","mmnnnn"};int p=0;
for(int i=0;i<10;i++){string r=decompress(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `string decompress(const string& s) {
}`
  },
  {
    id: 11,
    category: "Stringhe",
    difficulty: "Medio",
    title: "Cifrario di Cesare",
    description: "Shift ogni lettera in avanti. Non-lettere invariati. Wrap: z+1=a. Case preservato.",
    signature: "string caesar_cipher(const string& s, int shift)",
    publicCases: [
      {
        "input": "s=\"Hello, World!\", shift=3",
        "expected": "\"Khoor, Zruog!\""
      }
    ],
    hints: [
      "Maiuscole e minuscole separatamente",
      "(c - 'a' + shift) % 26 + 'a'",
      "Non-lettere invariati"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"Hello,World!","xyz","abc","ABC","a b c","Zzz","Zzz","Zzz","Zzz"};
int sh[]={3,3,0,26,1,1,1,1,1,1};
string e[]={"Khoor,Zruog!","abc","abc","ABC","b c d","Aaa","Aaa","Aaa","Aaa"};int p=0;
for(int i=0;i<10;i++){string r=caesar_cipher(t[i],sh[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `string caesar_cipher(const string& s, int shift) {
}`
  },
  {
    id: 12,
    category: "Stringhe",
    difficulty: "Medio",
    title: "Palindromo case-insensitive",
    description: "Verificare se la stringa è palindroma ignorando il case.",
    signature: "bool is_palindrome(const string& s)",
    publicCases: [
      {
        "input": "s = \"Racecar\"",
        "expected": "true"
      }
    ],
    hints: [
      "Due indici l,r",
      "tolower() per confrontare",
      "l++, r-- finche l < r"
    ],
    testCode: `#include<iostream>
#include<string>
#include<cctype>
using namespace std;
__USER_CODE__
int main(){
string t[]={"Racecar","hello","A","AbBa","","Madam","Madam","Madam","Madam","Madam"};
bool e[]={1,0,1,1,1,1,1,1,1,1};int p=0;
for(int i=0;i<10;i++){bool r=is_palindrome(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_palindrome(const string& s) {
}`
  },
  {
    id: 13,
    category: "Stringhe",
    difficulty: "Medio",
    title: "Anagramma",
    description: "Verificare se due stringhe sono anagrammi (stessi char, stesse frequenze).",
    signature: "bool is_anagram(const string& a, const string& b)",
    publicCases: [
      {
        "input": "a=\"listen\", b=\"silent\"",
        "expected": "true"
      }
    ],
    hints: [
      "Lunghezze diverse = false",
      "Per ogni char di a conta in entrambe",
      "Se count diverso = false"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string a[]={"listen","hello","aab","abc","a","rat","rat","rat","rat","rat"};
string b[]={"silent","world","abb","cba","a","tar","tar","tar","tar","tar"};
bool e[]={1,0,0,1,1,1,1,1,1,1};int p=0;
for(int i=0;i<10;i++){bool r=is_anagram(a[i],b[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_anagram(const string& a, const string& b) {
}`
  },
  {
    id: 14,
    category: "Stringhe",
    difficulty: "Medio",
    title: "Rotazione di stringhe",
    description: "Verificare se T è una rotazione di S.",
    signature: "bool rotazione(const string& S, const string& T)",
    publicCases: [
      {
        "input": "S=\"abc\", T=\"cab\"",
        "expected": "true"
      }
    ],
    hints: [
      "Lunghezze diverse = false",
      "Per ogni j genera S.substr(j)+S.substr(0,j)",
      "Confronta con T"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string s[]={"abc","abc","abc","ab","abcd","hello","hello","hello","hello","hello"};
string t[]={"cab","acb","abc","abc","cdab","llohe","llohe","llohe","llohe","llohe"};
bool e[]={1,0,1,0,1,1,1,1,1,1};int p=0;
for(int i=0;i<10;i++){bool r=rotazione(s[i],t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool rotazione(const string& S, const string& T) {
}`
  },
  {
    id: 15,
    category: "Stringhe",
    difficulty: "Difficile",
    title: "Rimuovi duplicati adiacenti e spazi",
    description: "In place: rimuovi spazi e duplicati ADIACENTI.",
    signature: "void clean_string(string& s)",
    publicCases: [
      {
        "input": "s = \"aabbc  dd\"",
        "expected": "\"abcd\""
      }
    ],
    hints: [
      "Costruisci stringa res vuota",
      "Salta spazi",
      "Salta se char == ultimo di res"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"aabbc  dd","hello world","abc","","aaaa","aa bb","aa bb","aa bb","aa bb","aa bb"};
string e[]={"abcd","heloworld","abc","","a","ab","ab","ab","ab","ab"};int p=0;
for(int i=0;i<10;i++){string s=t[i];clean_string(s);if(s==e[i]){cout<<"PASS "<<i<<" got="<<s<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<s<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void clean_string(string& s) {
}`
  },
  {
    id: 16,
    category: "Stringhe",
    difficulty: "Difficile",
    title: "Inverti solo le vocali",
    description: "Restituire stringa con vocali invertite. Consonanti e spazi invariati.",
    signature: "string reverse_vowels(const string& s)",
    publicCases: [
      {
        "input": "s = \"hello world\"",
        "expected": "\"hollo werld\""
      }
    ],
    hints: [
      "Due indici l,r",
      "Avanzi l finche non vocale",
      "Swap vocali, continua"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"hello world","aeiou","abc","xyz","","leetcode","leetcode","leetcode","leetcode","leetcode"};
string e[]={"hollo werld","uoiea","abc","xyz","","leotcede","leotcede","leotcede","leotcede","leotcede"};int p=0;
for(int i=0;i<10;i++){string r=reverse_vowels(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_vowel(char c) {
}
string reverse_vowels(const string& s) {
}`
  },
  {
    id: 17,
    category: "Sorting",
    difficulty: "Medio",
    title: "Bubble Sort + Early Term",
    description: "Ordinare crescente con Bubble Sort. Se nessuno swap in un passaggio esci.",
    signature: "void bubble_sort(vector<int>& v)",
    publicCases: [
      {
        "input": "v = {5,3,1,4,2}",
        "expected": "{1,2,3,4,5}"
      }
    ],
    hints: [
      "While con flag continua",
      "Ciclo interno confronta adiacenti",
      "Nessuno swap = esci"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<vector<int>>t={{5,3,1,4,2},{1,2,3},{3,1},{},{5,5,3,3,1},{9,8,7,6},{9,8,7,6},{9,8,7,6},{9,8,7,6},{9,8,7,6}};
vector<vector<int>>e={{1,2,3,4,5},{1,2,3},{1,3},{},{1,3,3,5,5},{6,7,8,9},{6,7,8,9},{6,7,8,9},{6,7,8,9},{6,7,8,9}};int p=0;
for(int i=0;i<10;i++){auto v=t[i];bubble_sort(v);if(v==e[i]){cout<<"PASS "<<i<<" got=";pv(v);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(v);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void bubble_sort(vector<int>& v) {
}`
  },
  {
    id: 18,
    category: "Sorting",
    difficulty: "Difficile",
    title: "Ordinamento parziale",
    description: "Ordinare solo gli elementi nelle posizioni indicate. Gli altri invariati.",
    signature: "void partial_sort(vector<int>& v, vector<int>& pos)",
    publicCases: [
      {
        "input": "v={9,2,10,13,3}, pos={0,4,2}",
        "expected": "{3,2,9,13,10}"
      }
    ],
    hints: [
      "Bubble sort su positions",
      "Confronta v[pos[j]] con v[pos[j+1]]",
      "Swap sugli stessi indici"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<int>v1={9,2,10,13,3},p1={0,4,2},v2={3,1,2,5,4},p2={0,1,2},v3={5,4,3,2,1},p3={0,4},v4={1,2,3},p4={0,1,2},v5={7,5,3,1},p5={0,2},v6={10,20,5},p6={0,1,2};
partial_sort(v1,p1);partial_sort(v2,p2);partial_sort(v3,p3);partial_sort(v4,p4);partial_sort(v5,p5);partial_sort(v6,p6);
vector<vector<int>>r={v1,v2,v3,v4,v5,v6},e={{3,2,9,13,10},{1,2,3,5,4},{1,4,3,2,5},{1,2,3},{3,5,7,1},{5,10,20},{5,10,20},{5,10,20},{5,10,20},{5,10,20}};int p=0;
for(int i=0;i<10;i++){if(r[i]==e[i]){cout<<"PASS "<<i<<" got=";pv(r[i]);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(r[i]);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void partial_sort(vector<int>& v, vector<int>& positions) {
}`
  },
  {
    id: 19,
    category: "Sorting",
    difficulty: "Difficile",
    title: "Ordina per frequenza",
    description: "Più frequenti prima. A parità, minore prima.",
    signature: "void sort_by_freq(vector<int>& v)",
    publicCases: [
      {
        "input": "v = {3,1,1,2,2,2,3}",
        "expected": "{2,2,2,1,1,3,3}"
      }
    ],
    hints: [
      "count_element per frequenze",
      "Bubble sort con comparatore custom",
      "Parita di freq = valore minore prima"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
int count_element(const vector<int>&v,int el){int c=0;for(int x:v)if(x==el)c++;return c;}
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<vector<int>>t={{3,1,1,2,2,2,3},{5,5,3,3,3,1},{1,2,3},{4,4,4},{1,1,2,2},{9,9,9,1,1},{9,9,9,1,1},{9,9,9,1,1},{9,9,9,1,1},{9,9,9,1,1}};
vector<vector<int>>e={{2,2,2,1,1,3,3},{3,3,3,5,5,1},{1,2,3},{4,4,4},{1,1,2,2},{9,9,9,1,1},{9,9,9,1,1},{9,9,9,1,1},{9,9,9,1,1},{9,9,9,1,1}};int p=0;
for(int i=0;i<10;i++){auto v=t[i];sort_by_freq(v);if(v==e[i]){cout<<"PASS "<<i<<" got=";pv(v);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(v);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void sort_by_freq(vector<int>& v) {
}`
  },
  {
    id: 20,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Potenza ricorsiva",
    description: "base^exp ricorsivamente. base^0 = 1.",
    signature: "int power(int base, int exp)",
    publicCases: [
      {
        "input": "base=2, exp=5",
        "expected": "32"
      }
    ],
    hints: [
      "exp==0 restituisce 1",
      "base * power(base, exp-1)",
      "No cicli"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
int b[]={2,3,5,1,2,4,4,4,4,4};int x[]={5,0,3,100,10,3};int e[]={32,1,125,1,1024,64,64,64,64,64};int p=0;
for(int i=0;i<10;i++){int r=power(b[i],x[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int power(int base, int exp) {
}`
  },
  {
    id: 21,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Fibonacci",
    description: "fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2).",
    signature: "int fib(int n)",
    publicCases: [
      {
        "input": "n=0",
        "expected": "0"
      }
    ],
    hints: [
      "n==0 restituisce 0, n==1 restituisce 1",
      "fib(n-1)+fib(n-2)",
      "n<=1 return n"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
int t[]={0,1,6,10,3,7,7,7,7,7};int e[]={0,1,8,55,2,13,13,13,13,13};int p=0;
for(int i=0;i<10;i++){int r=fib(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int fib(int n) {
}`
  },
  {
    id: 22,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Somma ricorsiva vettore",
    description: "Somma elementi da idx in poi ricorsivamente.",
    signature: "int sum_from(const vector<int>& v, int idx)",
    publicCases: [
      {
        "input": "v={1,2,3,4,5}, idx=0",
        "expected": "15"
      }
    ],
    hints: [
      "idx >= v.size() restituisce 0",
      "v[idx] + sum_from(v, idx+1)",
      "No cicli"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={1,2,3,4,5},v2={},v3={10},v4={1,2,3};
int r[]={sum_from(v1,0),sum_from(v1,3),sum_from(v2,0),sum_from(v3,0),sum_from(v4,3),sum_from(v4,1)};
int e[]={15,9,0,10,0,5,5,5,5,5};int p=0;
for(int i=0;i<10;i++){if(r[i]==e[i]){cout<<"PASS "<<i<<" got="<<r[i]<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r[i]<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int sum_from(const vector<int>& v, int idx) {
}`
  },
  {
    id: 23,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Coefficiente binomiale",
    description: "C(n,k)=1 se k=0 o k=n. Altrimenti C(n-1,k-1)+C(n-1,k).",
    signature: "int binomialCoeff(int n, int k)",
    publicCases: [
      {
        "input": "n=5, k=2",
        "expected": "10"
      }
    ],
    hints: [
      "k==0 || k==n restituisce 1",
      "binomialCoeff(n-1,k-1)+binomialCoeff(n-1,k)",
      "No cicli"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
int n[]={5,4,3,6,10,7};int k[]={2,0,3,3,5,3};int e[]={10,1,1,20,252,35,35,35,35,35};int p=0;
for(int i=0;i<10;i++){int r=binomialCoeff(n[i],k[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int binomialCoeff(int n, int k) {
}`
  },
  {
    id: 24,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Conta modi per somma",
    description: "In quanti modi si ottiene n come somma di elementi riusabili?",
    signature: "int count(vector<int>& numbers, int n)",
    publicCases: [
      {
        "input": "numbers={4,2,1}, n=5",
        "expected": "6"
      }
    ],
    hints: [
      "n==0 restituisce 1",
      "n<0 restituisce 0",
      "Per ogni elem: acc += count(numbers, n-elem)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>n1={4,2,1},n2={1,2},n3={5},n4={1},n5={1,2,3},n6={2,3};
int tg[]={5,3,3,4,4,6,6,6,6,6};int e[]={6,4,0,1,7,6,6,6,6,6};int p=0;
vector<vector<int>*>vs={&n1,&n2,&n3,&n4,&n5,&n6,&n6,&n6,&n6,&n6};
for(int i=0;i<10;i++){int r=count(*vs[i],tg[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int count(vector<int>& numbers, int n) {
}`
  },
  {
    id: 25,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Massimo ricorsivo",
    description: "Trovare il massimo di un vettore ricorsivamente. No cicli.",
    signature: "int max_recursive(const vector<int>& v, int idx)",
    publicCases: [
      {
        "input": "v={3,7,1,9,2}, idx=0",
        "expected": "9"
      }
    ],
    hints: [
      "idx==v.size()-1 restituisce v[idx]",
      "Confronta v[idx] col massimo del resto",
      "int rest = max_recursive(v, idx+1)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={3,7,1,9,2},v2={5},v3={1,2,3,4,5},v4={5,4,3,2,1},v5={-1,-5,-2},v6={10,10,10};
int e[]={9,5,5,5,-1,10,10,10,10,10};
int r[]={max_recursive(v1,0),max_recursive(v2,0),max_recursive(v3,0),max_recursive(v4,0),max_recursive(v5,0),max_recursive(v6,0)};int p=0;
for(int i=0;i<10;i++){if(r[i]==e[i]){cout<<"PASS "<<i<<" got="<<r[i]<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r[i]<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int max_recursive(const vector<int>& v, int idx) {
}`
  },
  {
    id: 26,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Ricerca binaria ricorsiva",
    description: "Vettore ORDINATO + target restituisce indice. Non trovato restituisce -1.",
    signature: "int binary_search(const vector<int>& v, int target, int left, int right)",
    publicCases: [
      {
        "input": "v={1,3,5,7,9}, target=5",
        "expected": "2"
      }
    ],
    hints: [
      "left > right restituisce -1",
      "mid = (left+right)/2",
      "v[mid]==target restituisce mid"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v={1,3,5,7,9};vector<int>v2={2};vector<int>v3={1};
int tg[]={5,4,1,9,2,1,1,1,1,1};int e[]={2,-1,0,4,0,0,0,0,0,0};int p=0;
vector<vector<int>*>vs={&v,&v,&v,&v,&v2,&v3,&v3,&v3,&v3,&v3};
for(int i=0;i<10;i++){auto&vv=*vs[i];int r=binary_search(vv,tg[i],0,(int)vv.size()-1);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int binary_search(const vector<int>& v, int target, int left, int right) {
}`
  },
  {
    id: 27,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Stringa invertita ricorsiva",
    description: "Invertire una stringa con ricorsione. No cicli.",
    signature: "string reverse_string(const string& s)",
    publicCases: [
      {
        "input": "s = \"hello\"",
        "expected": "\"olleh\""
      }
    ],
    hints: [
      "Vuota o length 1 restituisce s",
      "s.back() + reverse_string(s.substr(0,s.length()-1))",
      "No cicli"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"hello","","a","abcde","ab","ciao","ciao","ciao","ciao","ciao"};
string e[]={"olleh","","a","edcba","ba","oaic","oaic","oaic","oaic","oaic"};int p=0;
for(int i=0;i<10;i++){string r=reverse_string(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `string reverse_string(const string& s) {
}`
  },
  {
    id: 28,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "Primi in un vettore",
    description: "Restituire vettore con i primi N numeri primi.",
    signature: "vector<int> fill_with_primes(int size)",
    publicCases: [
      {
        "input": "size=5",
        "expected": "{2,3,5,7,11}"
      }
    ],
    hints: [
      "is_prime: i*i<=n",
      "while v.size() < size",
      "num++ dopo ogni controllo"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
int t[]={5,1,8,3,4,10,10,10,10,10};
vector<vector<int>>e={{2,3,5,7,11},{2},{2,3,5,7,11,13,17,19},{2,3,5},{2,3,5,7},{2,3,5,7,11,13,17,19,23,29},{2,3,5,7,11,13,17,19,23,29},{2,3,5,7,11,13,17,19,23,29},{2,3,5,7,11,13,17,19,23,29},{2,3,5,7,11,13,17,19,23,29}};int p=0;
for(int i=0;i<10;i++){auto r=fill_with_primes(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got=";pv(r);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(r);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_prime(int n) {
}
vector<int> fill_with_primes(int size) {
}`
  },
  {
    id: 29,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "Goldbach",
    description: "Ogni pari >= 4 e somma di due primi. Restituire le prime n coppie.",
    signature: "vector<vector<int>> verifyGoldbach(int n)",
    publicCases: [
      {
        "input": "n=3",
        "expected": "{{2,2},{3,3},{3,5}}"
      }
    ],
    hints: [
      "val=4, incrementa di 2",
      "Cerca p: is_prime(p) && is_prime(val-p)",
      "push_back({p, val-p})"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
bool is_prime(int n){if(n<=1)return false;int i=2;bool p=true;while(i*i<=n&&p){if(n%i==0)p=false;i++;}return p;}
__USER_CODE__
void pv2(const vector<vector<int>>&m){cout<<"{";for(size_t i=0;i<m.size();i++){if(i)cout<<",";cout<<"{";for(size_t j=0;j<m[i].size();j++){if(j)cout<<",";cout<<m[i][j];}cout<<"}"; }cout<<"}";}
int main(){
int t[]={3,1,5,2,4,6,6,6,6,6};
vector<vector<vector<int>>>e={{{2,2},{3,3},{3,5}},{{2,2}},{{2,2},{3,3},{3,5},{5,5},{3,7}},{{2,2},{3,3}},{{2,2},{3,3},{3,5},{5,5}},{{2,2},{3,3},{3,5},{5,5},{3,7},{5,7}},{{2,2},{3,3},{3,5},{5,5},{3,7},{5,7}},{{2,2},{3,3},{3,5},{5,5},{3,7},{5,7}},{{2,2},{3,3},{3,5},{5,5},{3,7},{5,7}},{{2,2},{3,3},{3,5},{5,5},{3,7},{5,7}}};int p=0;
for(int i=0;i<10;i++){auto r=verifyGoldbach(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got=";pv2(r);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv2(r);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `vector<vector<int>> verifyGoldbach(int n) {
}`
  },
  {
    id: 30,
    category: "Classi",
    difficulty: "Facile",
    title: "Classe Punto2D",
    description: "Classe con x,y (double). Costruttore, getX, getY, distanza da altro punto.",
    signature: "class Punto2D { ... }",
    publicCases: [
      {
        "input": "Punto2D(3,4).distanza(Punto2D(0,0))",
        "expected": "5.0"
      }
    ],
    hints: [
      "Attributi privati double x,y",
      "Lista di inizializzazione nel costruttore",
      "distanza: sqrt(pow(dx,2)+pow(dy,2))"
    ],
    testCode: `#include<iostream>
#include<cmath>
using namespace std;
__USER_CODE__
int main(){
Punto2D p1(3,4),p2(0,0),p3(1,1),p4(3,4);int p=0;
double r0=p1.distanza(p2);if(abs(r0-5)<0.01){cout<<"PASS 0 got="<<r0<<endl;p++;}else cout<<"FAIL 0 got="<<r0<<endl;
double r1=p2.distanza(p2);if(abs(r1)<0.01){cout<<"PASS 1 got="<<r1<<endl;p++;}else cout<<"FAIL 1 got="<<r1<<endl;
double r2=p3.getX();if(abs(r2-1)<0.01){cout<<"PASS 2 got="<<r2<<endl;p++;}else cout<<"FAIL 2 got="<<r2<<endl;
double r3=p1.getY();if(abs(r3-4)<0.01){cout<<"PASS 3 got="<<r3<<endl;p++;}else cout<<"FAIL 3 got="<<r3<<endl;
double r4=p1.distanza(p4);if(abs(r4)<0.01){cout<<"PASS 4 got="<<r4<<endl;p++;}else cout<<"FAIL 4 got="<<r4<<endl;
double r5=p3.getY();if(abs(r5-1)<0.01){cout<<"PASS 5 got="<<r5<<endl;p++;}else cout<<"FAIL 5 got="<<r5<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class Punto2D {
private:
public:
};`
  },
  {
    id: 31,
    category: "Classi",
    difficulty: "Medio",
    title: "Classe Stack",
    description: "Pila di int con vector. push, pop (restituisce), top, isEmpty, size.",
    signature: "class Stack { ... }",
    publicCases: [
      {
        "input": "push(5); push(3); top()",
        "expected": "3"
      }
    ],
    hints: [
      "vector<int> privato",
      "push = push_back, top = back()",
      "pop: salva back(), poi pop_back(), return"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
Stack s;int p=0;
s.push(5);s.push(3);
int r0=s.top();if(r0==3){cout<<"PASS 0 got="<<r0<<endl;p++;}else cout<<"FAIL 0 got="<<r0<<endl;
int r1=s.pop();if(r1==3){cout<<"PASS 1 got="<<r1<<endl;p++;}else cout<<"FAIL 1 got="<<r1<<endl;
int r2=s.top();if(r2==5){cout<<"PASS 2 got="<<r2<<endl;p++;}else cout<<"FAIL 2 got="<<r2<<endl;
Stack s2;s2.push(1);int r3=s2.size();if(r3==1){cout<<"PASS 3 got="<<r3<<endl;p++;}else cout<<"FAIL 3 got="<<r3<<endl;
Stack s3;bool r4=s3.isEmpty();if(r4){cout<<"PASS 4 got="<<r4<<endl;p++;}else cout<<"FAIL 4 got="<<r4<<endl;
s3.push(10);s3.push(20);s3.pop();int r5=s3.top();if(r5==10){cout<<"PASS 5 got="<<r5<<endl;p++;}else cout<<"FAIL 5 got="<<r5<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class Stack {
private:
public:
};`
  },
  {
    id: 32,
    category: "Classi",
    difficulty: "Medio",
    title: "Classe Rettangolo",
    description: "base, altezza. Metodi: area, perimetro, isQuadrato, scala(fattore).",
    signature: "class Rettangolo { ... }",
    publicCases: [
      {
        "input": "Rettangolo(4,5).area()",
        "expected": "20"
      }
    ],
    hints: [
      "double base, altezza privati",
      "area=b*h, perimetro=2*(b+h)",
      "scala: b*=f; h*=f"
    ],
    testCode: `#include<iostream>
#include<cmath>
using namespace std;
__USER_CODE__
int main(){
int p=0;Rettangolo r1(4,5);
double a0=r1.area();if(abs(a0-20)<0.01){cout<<"PASS 0 got="<<a0<<endl;p++;}else cout<<"FAIL 0 got="<<a0<<endl;
double a1=r1.perimetro();if(abs(a1-18)<0.01){cout<<"PASS 1 got="<<a1<<endl;p++;}else cout<<"FAIL 1 got="<<a1<<endl;
Rettangolo r2(3,3);bool a2=r2.isQuadrato();if(a2){cout<<"PASS 2 got="<<a2<<endl;p++;}else cout<<"FAIL 2 got="<<a2<<endl;
Rettangolo r3(3,4);bool a3=r3.isQuadrato();if(!a3){cout<<"PASS 3 got="<<a3<<endl;p++;}else cout<<"FAIL 3 got="<<a3<<endl;
Rettangolo r4(2,3);r4.scala(2);double a4=r4.area();if(abs(a4-24)<0.01){cout<<"PASS 4 got="<<a4<<endl;p++;}else cout<<"FAIL 4 got="<<a4<<endl;
Rettangolo r5(5,5);bool a5=r5.isQuadrato();if(a5){cout<<"PASS 5 got="<<a5<<endl;p++;}else cout<<"FAIL 5 got="<<a5<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class Rettangolo {
private:
public:
};`
  },
  {
    id: 33,
    category: "Classi",
    difficulty: "Difficile",
    title: "Classe Studente",
    description: "nome, matricola, voti. aggiungiVoto, media, votoMassimo, votoMinimo, superatoEsami (>=18).",
    signature: "class Studente { ... }",
    publicCases: [
      {
        "input": "voti={28,30} media()",
        "expected": "29.0"
      }
    ],
    hints: [
      "vector<int> voti privato",
      "media: somma/size (vuoto = 0)",
      "superatoEsami: conta voti >= 18"
    ],
    testCode: `#include<iostream>
#include<vector>
#include<string>
#include<cmath>
using namespace std;
__USER_CODE__
int main(){
int p=0;Studente s("Mario",12345);
s.aggiungiVoto(28);s.aggiungiVoto(30);
double r0=s.media();if(abs(r0-29)<0.01){cout<<"PASS 0 got="<<r0<<endl;p++;}else cout<<"FAIL 0 got="<<r0<<endl;
int r1=s.votoMassimo();if(r1==30){cout<<"PASS 1 got="<<r1<<endl;p++;}else cout<<"FAIL 1 got="<<r1<<endl;
int r2=s.votoMinimo();if(r2==28){cout<<"PASS 2 got="<<r2<<endl;p++;}else cout<<"FAIL 2 got="<<r2<<endl;
s.aggiungiVoto(15);int r3=s.superatoEsami();if(r3==2){cout<<"PASS 3 got="<<r3<<endl;p++;}else cout<<"FAIL 3 got="<<r3<<endl;
Studente s2("Luigi",99999);double r4=s2.media();if(abs(r4)<0.01){cout<<"PASS 4 got="<<r4<<endl;p++;}else cout<<"FAIL 4 got="<<r4<<endl;
s2.aggiungiVoto(20);s2.aggiungiVoto(18);int r5=s2.superatoEsami();if(r5==2){cout<<"PASS 5 got="<<r5<<endl;p++;}else cout<<"FAIL 5 got="<<r5<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class Studente {
private:
public:
};`
  },
  {
    id: 34,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "MCD di due interi",
    description: "Calcola ricorsivamente il Massimo Comun Divisore di a e b.\nProprietà: se a>b allora MCD(a,b)=MCD(a-b,b). Caso base: a==b.",
    signature: "int mcd(int a, int b)",
    publicCases: [
      {
        "input": "a=22, b=14",
        "expected": "2"
      }
    ],
    hints: [
      "Caso base: a==b restituisce a",
      "Se a>b: mcd(a-b, b)",
      "Se a<b: mcd(a, b-a)"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
int a[]={22,12,7,100,15,36,36,36,36,36};
int b[]={14,8,7,75,5,24,24,24,24,24};
int e[]={2,4,7,25,5,12,12,12,12,12};int p=0;
for(int i=0;i<10;i++){int r=mcd(a[i],b[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int mcd(int a, int b) {
}`
  },
  {
    id: 35,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Somma elementi positivi",
    description: "Dato un vettore, calcola ricorsivamente la somma degli elementi positivi.\nLa funzione accetta SOLO il vettore come parametro (no idx).",
    signature: "int sum_positive(const vector<int>& v)",
    publicCases: [
      {
        "input": "v = {1,-2,3,-4,5}",
        "expected": "9"
      }
    ],
    hints: [
      "v.empty() -> 0",
      "Prendi l'ultimo: v.back()",
      "Crea il resto: vector<int>(v.begin(), v.end()-1)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<vector<int>>t={{1,-2,3,-4,5},{},{-1,-2,-3},{1,2,3},{-5,0,5},{10},{10},{10},{10},{10}};
int e[]={9,0,0,6,5,10,10,10,10,10};int p=0;
for(int i=0;i<10;i++){int r=sum_positive(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int sum_positive(const vector<int>& v) {
}`
  },
  {
    id: 36,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Somma delle cifre",
    description: "Dato un intero non-negativo, calcola ricorsivamente la somma delle sue cifre.\nEsempio: 452 -> 4+5+2 = 11",
    signature: "int digit_sum(int n)",
    publicCases: [
      {
        "input": "n = 452",
        "expected": "11"
      }
    ],
    hints: [
      "n < 10 -> return n",
      "Ultima cifra: n % 10",
      "Resto: digit_sum(n / 10)"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
int t[]={452,0,9,100,999,123,123,123,123,123};
int e[]={11,0,9,1,27,6,6,6,6,6};int p=0;
for(int i=0;i<10;i++){int r=digit_sum(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int digit_sum(int n) {
}`
  },
  {
    id: 37,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Vettori uguali",
    description: "Verifica ricorsivamente se due vettori sono uguali.\nSe hanno dimensione diversa sono subito diversi.",
    signature: "bool vectors_equal(const vector<int>& a, const vector<int>& b, int idx)",
    publicCases: [
      {
        "input": "a={1,2,3}, b={1,2,3}, idx=0",
        "expected": "true"
      }
    ],
    hints: [
      "Prima controlla se size() diverso -> false",
      "idx >= a.size() -> true",
      "a[idx]!=b[idx] -> false"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>a1={1,2,3},b1={1,2,3},a2={1,2,3},b2={1,2,4},a3={},b3={},a4={1},b4={1,2},a5={5,5,5},b5={5,5,5},a6={1,2},b6={2,1};
bool e[]={1,0,1,0,1,0,0,0,0,0};int p=0;
bool r[]={vectors_equal(a1,b1,0),vectors_equal(a2,b2,0),vectors_equal(a3,b3,0),vectors_equal(a4,b4,0),vectors_equal(a5,b5,0),vectors_equal(a6,b6,0)};
for(int i=0;i<10;i++){if(r[i]==e[i]){cout<<"PASS "<<i<<" got="<<r[i]<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool vectors_equal(const vector<int>& a, const vector<int>& b, int idx) {
}`
  },
  {
    id: 38,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Ribalta stringa in-place",
    description: "Ribalta la stringa sul posto ricorsivamente (senza creare copie).\nUsa due indici l e r che si avvicinano.",
    signature: "void reverse_inplace(string& s, int l, int r)",
    publicCases: [
      {
        "input": "s=\"hello\", l=0, r=4",
        "expected": "\"olleh\""
      }
    ],
    hints: [
      "l >= r -> return (caso base)",
      "Scambia s[l] e s[r]",
      "Poi: reverse_inplace(s, l+1, r-1)"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"hello","","a","ab","abcde","ciao","ciao","ciao","ciao","ciao"};
string e[]={"olleh","","a","ba","edcba","oaic","oaic","oaic","oaic","oaic"};int p=0;
for(int i=0;i<10;i++){string s=t[i];if(!s.empty())reverse_inplace(s,0,(int)s.size()-1);if(s==e[i]){cout<<"PASS "<<i<<" got="<<s<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<s<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void reverse_inplace(string& s, int l, int r) {
}`
  },
  {
    id: 39,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "MCD di un vettore",
    description: "Calcola ricorsivamente il MCD di tutti gli elementi del vettore.\nProprietà: MCD(a,b,c) = MCD(a, MCD(b,c)).\nmcd(a,b) e gia disponibile.",
    signature: "int mcd_vector(const vector<int>& v, int idx)",
    publicCases: [
      {
        "input": "v={12,8,4}, idx=0",
        "expected": "4"
      }
    ],
    hints: [
      "idx==v.size()-1 -> return v[idx]",
      "mcd(v[idx], mcd_vector(v, idx+1))",
      "mcd(a,b) e gia definita nel codice di test"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
int mcd(int a,int b){if(a==b)return a;return a>b?mcd(a-b,b):mcd(a,b-a);}
__USER_CODE__
int main(){
vector<vector<int>>t={{12,8,4},{7},{100,75,25},{6,4,2},{15,10,5},{36,24,12},{36,24,12},{36,24,12},{36,24,12},{36,24,12}};
int e[]={4,7,25,2,5,12,12,12,12,12};int p=0;
for(int i=0;i<10;i++){int r=mcd_vector(t[i],0);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int mcd_vector(const vector<int>& v, int idx) {
}`
  },
  {
    id: 40,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Rappresentazione binaria",
    description: "Dato un intero non-negativo, restituisce una stringa con la sua rappresentazione binaria.\nIl bit piu significativo e il primo carattere.",
    signature: "string to_binary(int n)",
    publicCases: [
      {
        "input": "n = 0",
        "expected": "\"0\""
      }
    ],
    hints: [
      "n < 2 -> return to_string(n)",
      "Cifra corrente: n % 2",
      "to_binary(n/2) + to_string(n%2)"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int t[]={0,1,2,5,10,255,255,255,255,255};
string e[]={"0","1","10","101","1010","11111111","11111111","11111111","11111111","11111111"};int p=0;
for(int i=0;i<10;i++){string r=to_binary(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `string to_binary(int n) {
}`
  },
  {
    id: 41,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Stringa esadecimale in intero",
    description: "Data una stringa con un numero in base 16 (solo minuscole: 0-9, a-f),\nrestituisce ricorsivamente il suo valore intero.",
    signature: "int from_hex(const string& s)",
    publicCases: [
      {
        "input": "s = \"0\"",
        "expected": "0"
      }
    ],
    hints: [
      "s.empty() -> 0",
      "Cifra finale: s.back() (0-9 -> -'0', a-f -> -'a'+10)",
      "16 * from_hex(s.substr(0, s.size()-1)) + cifra"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"0","1","a","ff","10","1f","1f","1f","1f","1f"};
int e[]={0,1,10,255,16,31,31,31,31,31};int p=0;
for(int i=0;i<10;i++){int r=from_hex(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int from_hex(const string& s) {
}`
  },
  {
    id: 42,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "Permutazioni di una stringa",
    description: "Data una stringa con tutti caratteri distinti, restituisce un vettore con tutte le sue permutazioni.\nEsempio: permutations(\"ab\") = {\"ab\", \"ba\"}",
    signature: "vector<string> permutations(const string& s)",
    publicCases: [
      {
        "input": "s = \"ab\"",
        "expected": "{\"ab\",\"ba\"}"
      }
    ],
    hints: [
      "s.size()<=1 -> return {s}",
      "Per ogni indice i: scambia s[0] con s[i]",
      "Ricorri su s.substr(1), preponi s[0] a ogni risultato"
    ],
    testCode: `#include<iostream>
#include<vector>
#include<string>
#include<algorithm>
using namespace std;
__USER_CODE__
int main(){
int p=0;
auto r1=permutations("ab");sort(r1.begin(),r1.end());
vector<string>e1={"ab","ba"};
if(r1==e1){cout<<"PASS 0 got="<<r1.size()<<endl;p++;}else cout<<"FAIL 0 got="<<r1.size()<<endl;
auto r2=permutations("abc");sort(r2.begin(),r2.end());
if((int)r2.size()==6&&r2[0]=="abc"&&r2[5]=="cba"){cout<<"PASS 1 got="<<r2.size()<<endl;p++;}else cout<<"FAIL 1 got="<<r2.size()<<endl;
auto r3=permutations("");
if(r3.size()==1&&r3[0]==""){cout<<"PASS 2 got="<<r3.size()<<endl;p++;}else cout<<"FAIL 2 got="<<r3.size()<<endl;
auto r4=permutations("a");
if(r4.size()==1&&r4[0]=="a"){cout<<"PASS 3 got="<<r4.size()<<endl;p++;}else cout<<"FAIL 3 got="<<r4.size()<<endl;
auto r5=permutations("abcd");
if((int)r5.size()==24){cout<<"PASS 4 got="<<r5.size()<<endl;p++;}else cout<<"FAIL 4 got="<<r5.size()<<endl;
auto r6=permutations("bc");sort(r6.begin(),r6.end());
vector<string>e6={"bc","cb"};
if(r6==e6){cout<<"PASS 5 got="<<r6.size()<<endl;p++;}else cout<<"FAIL 5 got="<<r6.size()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `vector<string> permutations(const string& s) {
}`
  },
  {
    id: 43,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Torre di Hanoi - mosse",
    description: "Calcola ricorsivamente il numero minimo di mosse per spostare n dischi.\nFormula: T(1)=1, T(n) = 2*T(n-1) + 1",
    signature: "int hanoi_count(int n)",
    publicCases: [
      {
        "input": "n = 1",
        "expected": "1"
      }
    ],
    hints: [
      "n == 0 -> 0",
      "n == 1 -> 1",
      "2 * hanoi_count(n-1) + 1"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
int t[]={1,2,3,4,5,10,10,10,10,10};
int e[]={1,3,7,15,31,1023,1023,1023,1023,1023};int p=0;
for(int i=0;i<10;i++){int r=hanoi_count(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int hanoi_count(int n) {
}`
  },
  {
    id: 44,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Vettore ordinato?",
    description: "Verifica ricorsivamente se un vettore e ordinato in modo non-decrescente.",
    signature: "bool is_sorted_rec(const vector<int>& v, int idx)",
    publicCases: [
      {
        "input": "v={1,2,3,4,5}, idx=0",
        "expected": "true"
      }
    ],
    hints: [
      "idx >= v.size()-1 -> true (vettore vuoto o un elemento)",
      "v[idx] > v[idx+1] -> false",
      "else: is_sorted_rec(v, idx+1)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={1,2,3,4,5},v2={5,3,1},v3={1},v4={},v5={1,1,2},v6={2,1,3};
bool e[]={1,0,1,1,1,0,0,0,0,0};int p=0;
bool r[]={is_sorted_rec(v1,0),is_sorted_rec(v2,0),is_sorted_rec(v3,0),is_sorted_rec(v4,0),is_sorted_rec(v5,0),is_sorted_rec(v6,0)};
for(int i=0;i<10;i++){if(r[i]==e[i]){cout<<"PASS "<<i<<" got="<<r[i]<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_sorted_rec(const vector<int>& v, int idx) {
}`
  },
  {
    id: 45,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Prodotto ricorsivo",
    description: "Dato un vettore di interi, calcola ricorsivamente il prodotto di tutti gli elementi a partire da idx.\nVettore vuoto o idx fuori bounds restituisce 1.",
    signature: "int product_from(const vector<int>& v, int idx)",
    publicCases: [
      {
        "input": "v={2,3,4}, idx=0",
        "expected": "24"
      }
    ],
    hints: [
      "idx >= v.size() restituisce 1",
      "v[idx] * product_from(v, idx+1)",
      "No cicli"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={2,3,4},v2={},v3={5,1,2},v4={1,1,1,1},v5={-2,3},v6={10};
int e[]={24,1,2,1,-6,10,10,10,10,10};int p=0;
int r[]={product_from(v1,0),product_from(v2,0),product_from(v3,1),product_from(v4,0),product_from(v5,0),product_from(v6,0)};
for(int i=0;i<10;i++){if(r[i]==e[i]){cout<<"PASS "<<i<<" got="<<r[i]<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r[i]<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int product_from(const vector<int>& v, int idx) {
}`
  },
  {
    id: 46,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Palindromo ricorsivo",
    description: "Verifica ricorsivamente se una stringa è palindroma.\nUsa due indici l e r che si avvicinano al centro.",
    signature: "bool is_palindrome_rec(const string& s, int l, int r)",
    publicCases: [
      {
        "input": "s=\"racecar\", l=0, r=6",
        "expected": "true"
      }
    ],
    hints: [
      "l >= r -> true (caso base)",
      "s[l] != s[r] -> false",
      "Altrimenti: is_palindrome_rec(s, l+1, r-1)"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"racecar","hello","a","abba","","ab","ab","ab","ab","ab"};
bool e[]={1,0,1,1,1,0,0,0,0,0};int p=0;
for(int i=0;i<10;i++){
bool r=t[i].empty()?true:is_palindrome_rec(t[i],0,(int)t[i].size()-1);
if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_palindrome_rec(const string& s, int l, int r) {
}`
  },
  {
    id: 47,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Conta occorrenze carattere",
    description: "Data una stringa e un carattere, conta ricorsivamente quante volte il carattere appare.\nLa funzione accetta solo la stringa e il carattere (no idx).",
    signature: "int count_char(const string& s, char c)",
    publicCases: [
      {
        "input": "s=\"hello\", c='l'",
        "expected": "2"
      }
    ],
    hints: [
      "s.empty() -> 0",
      "Primo carattere: s[0] == c ? 1 : 0",
      "Poi: count_char(s.substr(1), c)"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"hello","","banana","aaa","xyz","abcabc","abcabc","abcabc","abcabc","abcabc"};
char ch[]={'l','a','a','a','a','b'};
int e[]={2,0,3,3,0,2,2,2,2,2};int p=0;
for(int i=0;i<10;i++){int r=count_char(t[i],ch[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int count_char(const string& s, char c) {
}`
  },
  {
    id: 48,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Potenza veloce",
    description: "Calcola base^exp ricorsivamente in O(log n) usando la proprietà:\nse exp è pari: base^exp = (base^(exp/2))^2\nse exp è dispari: base^exp = base * base^(exp-1)",
    signature: "long long fast_power(long long base, int exp)",
    publicCases: [
      {
        "input": "base=2, exp=10",
        "expected": "1024"
      }
    ],
    hints: [
      "exp == 0 -> 1",
      "exp pari: long long half = fast_power(base, exp/2); return half*half",
      "exp dispari: return base * fast_power(base, exp-1)"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
long long b[]={2,3,2,5,2,7,7,7,7,7};int x[]={10,0,11,4,0,3};
long long e[]={1024,1,2048,625,1,343,343,343,343,343};int p=0;
for(int i=0;i<10;i++){long long r=fast_power(b[i],x[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `long long fast_power(long long base, int exp) {
}`
  },
  {
    id: 49,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Sottosequenza ricorsiva",
    description: "Verifica ricorsivamente se T è una sottosequenza di S.\nT è sottosequenza di S se tutti i caratteri di T appaiono in S nello stesso ordine (non necessariamente contigui).",
    signature: "bool is_subsequence(const string& s, const string& t, int i, int j)",
    publicCases: [
      {
        "input": "s=\"abcde\", t=\"ace\", i=0, j=0",
        "expected": "true"
      }
    ],
    hints: [
      "j >= t.size() -> true (T esaurito: successo)",
      "i >= s.size() -> false (S esaurito: fallimento)",
      "s[i]==t[j] -> avanza entrambi; altrimenti avanza solo i"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string s[]={"abcde","abcde","abc","abc","axbycz","abc","abc","abc","abc","abc"};
string t[]={"ace","aec","","abcd","xyz","abc","abc","abc","abc","abc"};
bool e[]={1,0,1,0,1,1,1,1,1,1};int p=0;
for(int i=0;i<10;i++){bool r=is_subsequence(s[i],t[i],0,0);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_subsequence(const string& s, const string& t, int i, int j) {
}`
  },
  {
    id: 50,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "Merge Sort",
    description: "Ordina un vettore in ordine crescente implementando ricorsivamente il Merge Sort.\nDividi a metà, ordina le due metà, poi fondi.",
    signature: "void merge_sort(vector<int>& v, int left, int right)",
    publicCases: [
      {
        "input": "v={5,3,1,4,2}, left=0, right=4",
        "expected": "{1,2,3,4,5}"
      }
    ],
    hints: [
      "left >= right -> return (caso base)",
      "mid = (left+right)/2",
      "Chiama merge_sort sulle due metà, poi fondi con un vettore temporaneo"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<vector<int>>t={{5,3,1,4,2},{1},{3,1},{},{5,5,3,3,1},{9,8,7,6},{9,8,7,6},{9,8,7,6},{9,8,7,6},{9,8,7,6}};
vector<vector<int>>e={{1,2,3,4,5},{1},{1,3},{},{1,3,3,5,5},{6,7,8,9},{6,7,8,9},{6,7,8,9},{6,7,8,9},{6,7,8,9}};int p=0;
for(int i=0;i<10;i++){auto v=t[i];if(!v.empty())merge_sort(v,0,(int)v.size()-1);if(v==e[i]){cout<<"PASS "<<i<<" got=";pv(v);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(v);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void merge_sort(vector<int>& v, int left, int right) {
}`
  },
  {
    id: 51,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Conta pari ricorsivo",
    description: "Dato un vettore, conta ricorsivamente quanti elementi sono pari.\nUsa solo idx come parametro aggiuntivo.",
    signature: "int count_even(const vector<int>& v, int idx)",
    publicCases: [
      {
        "input": "v={1,2,3,4,6}, idx=0",
        "expected": "3"
      }
    ],
    hints: [
      "idx >= v.size() -> 0",
      "(v[idx] % 2 == 0 ? 1 : 0) + count_even(v, idx+1)",
      "No cicli"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<vector<int>>t={{1,2,3,4,6},{},{1,3,5},{2,4,6},{0,1,2},{-2,1,4},{-2,1,4},{-2,1,4},{-2,1,4},{-2,1,4}};
int e[]={3,0,0,3,2,2,2,2,2,2};int p=0;
for(int i=0;i<10;i++){int r=count_even(t[i],0);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int count_even(const vector<int>& v, int idx) {
}`
  },
  {
    id: 52,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Tutti positivi",
    description: "Verifica ricorsivamente se TUTTI gli elementi del vettore sono positivi (> 0).\nUsa idx come parametro aggiuntivo.",
    signature: "bool all_positive(const vector<int>& v, int idx)",
    publicCases: [
      {
        "input": "v={1,2,3}, idx=0",
        "expected": "true"
      }
    ],
    hints: [
      "idx >= v.size() -> true (nessun elemento negativo trovato)",
      "v[idx] <= 0 -> false",
      "Altrimenti: all_positive(v, idx+1)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<vector<int>>t={{1,2,3},{1,-1,3},{},{0,1,2},{5,5,5},{-1},{-1},{-1},{-1},{-1}};
bool e[]={1,0,1,0,1,0,0,0,0,0};int p=0;
for(int i=0;i<10;i++){bool r=all_positive(t[i],0);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool all_positive(const vector<int>& v, int idx) {
}`
  },
  {
    id: 53,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Primo elemento che soddisfa",
    description: "Dato un vettore e un target, restituisci ricorsivamente l'indice della prima occorrenza del target.\nSe non trovato restituisce -1.",
    signature: "int find_first(const vector<int>& v, int target, int idx)",
    publicCases: [
      {
        "input": "v={3,7,1,7,2}, target=7, idx=0",
        "expected": "1"
      }
    ],
    hints: [
      "idx >= v.size() -> -1",
      "v[idx] == target -> idx",
      "Altrimenti: find_first(v, target, idx+1)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={3,7,1,7,2},v2={1,2,3},v3={5},v4={},v5={1,1,1},v6={2,4,6};
int tg[]={7,5,5,1,1,4,4,4,4,4};
int e[]={1,-1,0,-1,0,1,1,1,1,1};int p=0;
vector<vector<int>*>vs={&v1,&v2,&v3,&v4,&v5,&v6,&v6,&v6,&v6,&v6};
for(int i=0;i<10;i++){int r=find_first(*vs[i],tg[i],0);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int find_first(const vector<int>& v, int target, int idx) {
}`
  },
  {
    id: 54,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Inverti vettore in-place",
    description: "Inverti ricorsivamente il vettore usando due indici l e r.\nScambia gli estremi e avanza verso il centro.",
    signature: "void reverse_vec(vector<int>& v, int l, int r)",
    publicCases: [
      {
        "input": "v={1,2,3,4,5}",
        "expected": "{5,4,3,2,1}"
      }
    ],
    hints: [
      "l >= r -> return (caso base)",
      "swap(v[l], v[r])",
      "reverse_vec(v, l+1, r-1)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<vector<int>>t={{1,2,3,4,5},{1,2},{42},{},{3,1,4,1,5},{10,20,30},{10,20,30},{10,20,30},{10,20,30},{10,20,30}};
vector<vector<int>>e={{5,4,3,2,1},{2,1},{42},{},{5,1,4,1,3},{30,20,10},{30,20,10},{30,20,10},{30,20,10},{30,20,10}};int p=0;
for(int i=0;i<10;i++){auto v=t[i];if(!v.empty())reverse_vec(v,0,(int)v.size()-1);if(v==e[i]){cout<<"PASS "<<i<<" got=";pv(v);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(v);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void reverse_vec(vector<int>& v, int l, int r) {
}`
  },
  {
    id: 55,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Minimo e massimo D&C",
    description: "Trova ricorsivamente il minimo e il massimo di v[left..right] con Divide & Conquer.\nRestituisce una coppia {min, max}.",
    signature: "pair<int,int> minmax(const vector<int>& v, int left, int right)",
    publicCases: [
      {
        "input": "v={3,7,1,9,2}, left=0, right=4",
        "expected": "{1,9}"
      }
    ],
    hints: [
      "left == right -> {v[left], v[left]}",
      "mid = (left+right)/2",
      "Combina: min(lMin,rMin), max(lMax,rMax)"
    ],
    testCode: `#include<iostream>
#include<vector>
#include<utility>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={3,7,1,9,2},v2={5},v3={4,2},v4={1,1,1},v5={-3,-1,-5},v6={10,20,5,15};
vector<pair<int,int>>e={{1,9},{5,5},{2,4},{1,1},{-5,-1},{5,20},{5,20},{5,20},{5,20},{5,20}};int p=0;
vector<pair<vector<int>*,pair<int,int>>>tc={{&v1,{0,4}},{&v2,{0,0}},{&v3,{0,1}},{&v4,{0,2}},{&v5,{0,2}},{&v6,{0,3}}};
for(int i=0;i<10;i++){auto[vp,lr]=tc[i];auto[l,r]=lr;auto res=minmax(*vp,l,r);if(res==e[i]){cout<<"PASS "<<i<<" got={"<<res.first<<","<<res.second<<"}"<<endl;p++;}else cout<<"FAIL "<<i<<" got={"<<res.first<<","<<res.second<<"}"<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `pair<int,int> minmax(const vector<int>& v, int left, int right) {
}`
  },
  {
    id: 56,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Somma D&C",
    description: "Calcola la somma di v[left..right] con Divide & Conquer.\nDividi a metà, somma le due metà ricorsivamente.",
    signature: "int sum_dc(const vector<int>& v, int left, int right)",
    publicCases: [
      {
        "input": "v={1,2,3,4,5}, left=0, right=4",
        "expected": "15"
      }
    ],
    hints: [
      "left == right -> v[left]",
      "mid = (left+right)/2",
      "sum_dc(left,mid) + sum_dc(mid+1,right)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={1,2,3,4,5},v2={7},v3={1,2,3},v4={-1,-2,-3},v5={10,10},v6={1,1,1,1,1,1};
tuple<vector<int>*,int,int>tc[]={{&v1,0,4},{&v2,0,0},{&v3,1,2},{&v4,0,2},{&v5,0,1},{&v6,0,5}};
int e[]={15,7,5,-6,20,6,6,6,6,6};int p=0;
for(int i=0;i<10;i++){auto[vp,l,r]=tc[i];int res=sum_dc(*vp,l,r);if(res==e[i]){cout<<"PASS "<<i<<" got="<<res<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<res<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int sum_dc(const vector<int>& v, int left, int right) {
}`
  },
  {
    id: 57,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Conta inversioni",
    description: "Due elementi v[i] e v[j] formano un'inversione se i < j ma v[i] > v[j].\nConta ricorsivamente le inversioni. Suggerimento: usa Merge Sort modificato.",
    signature: "int count_inversions(vector<int>& v, int left, int right)",
    publicCases: [
      {
        "input": "v={3,1,2}, left=0, right=2",
        "expected": "2"
      }
    ],
    hints: [
      "left >= right -> 0",
      "Conta inv nella metà sinistra + destra + tra le due",
      "Durante il merge: quando prendi da destra, aggiungi (mid-i+1) inversioni"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={3,1,2},v2={1,2,3},v3={3,2,1},v4={1},v5={2,1},v6={1,3,2,3,1};
vector<int>e1=v1,e2=v2,e3=v3,e4=v4,e5=v5,e6=v6;
int e[]={2,0,3,0,1,4,4,4,4,4};int p=0;
for(int i=0;i<10;i++){
vector<vector<int>*>vs={&v1,&v2,&v3,&v4,&v5,&v6,&v6,&v6,&v6,&v6};
auto v=*vs[i];
int r=v.size()<=1?0:count_inversions(v,0,(int)v.size()-1);
if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int merge_count(vector<int>& v, int left, int mid, int right) {
    vector<int> tmp;
    int i = left, j = mid+1, inv = 0;
    while (i <= mid && j <= right) {
        if (v[i] <= v[j]) tmp.push_back(v[i++]);
        else { inv += mid - i + 1; tmp.push_back(v[j++]); }
    }
    while (i <= mid)  tmp.push_back(v[i++]);
    while (j <= right) tmp.push_back(v[j++]);
    for (int k = left; k <= right; k++) v[k] = tmp[k-left];
    return inv;
}
int count_inversions(vector<int>& v, int left, int right) {
}`
  },
  {
    id: 58,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Tutti i sottoinsiemi",
    description: "Genera tutti i sottoinsiemi di un vettore di interi (l'ordine degli elementi in ogni sottoinsieme non conta, ma l'ordine dei sottoinsiemi nella lista sì: segui l'ordine naturale include/escludi).",
    signature: "void subsets(const vector<int>& v, int idx, vector<int>& curr, vector<vector<int>>& res)",
    publicCases: [
      {
        "input": "v={1,2,3}",
        "expected": "{{},{1},{1,2},{1,2,3},{1,3},{2},{2,3},{3}}"
      }
    ],
    hints: [
      "idx == v.size() -> push_back curr e return",
      "Ramo ESCLUDI: subsets(v, idx+1, curr, res) senza aggiungere",
      "Ramo INCLUDI: curr.push_back(v[idx]); ...; curr.pop_back()"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>v1={1,2,3},v2={},v3={5},v4={1,2};
vector<vector<vector<int>>>e={{{},{1},{1,2},{1,2,3},{1,3},{2},{2,3},{3}},{{}},{{},{5}},{{},{1},{1,2},{2}},{{},{1},{1,2},{2}},{{},{1},{1,2},{2}},{{},{1},{1,2},{2}},{{},{1},{1,2},{2}},{{},{1},{1,2},{2}},{{},{1},{1,2},{2}}};int p=0;
vector<vector<int>*>vs={&v1,&v2,&v3,&v4,&v4,&v4,&v4,&v4,&v4,&v4};
for(int i=0;i<10;i++){vector<int>curr;vector<vector<int>>res;subsets(*vs[i],0,curr,res);if(res==e[i]){cout<<"PASS "<<i<<endl;p++;}else cout<<"FAIL "<<i<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void subsets(const vector<int>& v, int idx,
             vector<int>& curr, vector<vector<int>>& res) {
}`
  },
  {
    id: 59,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Combinazioni di k elementi",
    description: "Genera tutte le combinazioni di k elementi scelti da {1..n}.\nL'output deve essere in ordine lessicografico.",
    signature: "void combine(int n, int k, int start, vector<int>& curr, vector<vector<int>>& res)",
    publicCases: [
      {
        "input": "n=4, k=2",
        "expected": "{{1,2},{1,3},{1,4},{2,3},{2,4},{3,4}}"
      }
    ],
    hints: [
      "curr.size() == k -> push_back e return",
      "for i da start a n: aggiungi, ricorri, rimuovi",
      "Pruning: se n - i + 1 < k - curr.size() interrompi"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<tuple<int,int>>tc={{4,2},{3,3},{2,1},{1,1},{3,1},{4,3}};
vector<vector<vector<int>>>e={{{1,2},{1,3},{1,4},{2,3},{2,4},{3,4}},{{1,2,3}},{{1},{2}},{{1}},{{1},{2},{3}},{{1,2,3},{1,2,4},{1,3,4},{2,3,4}},{{1,2,3},{1,2,4},{1,3,4},{2,3,4}},{{1,2,3},{1,2,4},{1,3,4},{2,3,4}},{{1,2,3},{1,2,4},{1,3,4},{2,3,4}},{{1,2,3},{1,2,4},{1,3,4},{2,3,4}}};int p=0;
for(int i=0;i<10;i++){auto[n,k]=tc[i];vector<int>curr;vector<vector<int>>res;combine(n,k,1,curr,res);if(res==e[i]){cout<<"PASS "<<i<<endl;p++;}else cout<<"FAIL "<<i<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void combine(int n, int k, int start,
             vector<int>& curr, vector<vector<int>>& res) {
}`
  },
  {
    id: 60,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Labirinto: conta percorsi",
    description: "Data una griglia NxM di 0 (libero) e 1 (muro), conta ricorsivamente quanti percorsi distinti vanno da (0,0) a (N-1,M-1) muovendosi solo destra o giù.",
    signature: "int count_paths(const vector<vector<int>>& grid, int r, int c)",
    publicCases: [
      {
        "input": "grid={{0,0,0},{0,0,0},{0,0,0}}",
        "expected": "6"
      }
    ],
    hints: [
      "r==N-1 && c==M-1 -> 1 (arrivo)",
      "grid[r][c]==1 -> 0 (muro)",
      "r o c fuori bounds -> 0",
      "count_paths(r+1,c) + count_paths(r,c+1)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<vector<vector<int>>>g={
  {{0,0,0},{0,0,0},{0,0,0}},
  {{0,1},{0,0}},
  {{0,0},{1,0}},
  {{0}},
  {{0,0,0},{0,1,0},{0,0,0}},
  {{0,0},{0,0}}
};
int e[]={6,1,1,1,2,2,2,2,2,2};int p=0;
for(int i=0;i<10;i++){int r=count_paths(g[i],0,0);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int count_paths(const vector<vector<int>>& grid, int r, int c) {
    int N = grid.size(), M = grid[0].size();
}`
  },
  {
    id: 61,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "N-Regine",
    description: "Posiziona N regine su una scacchiera NxN in modo che nessuna si attacchi.\nRestituisce tutte le soluzioni come vettori di colonne (queen_col[riga]).",
    signature: "void n_queens(int n, int row, vector<int>& cols, vector<vector<int>>& res)",
    publicCases: [
      {
        "input": "n=4",
        "expected": "2 soluzioni"
      }
    ],
    hints: [
      "row == n -> salva soluzione",
      "Per ogni col: controlla conflitti con le righe precedenti",
      "Conflitto: cols[i]==c oppure abs(cols[i]-c)==row-i"
    ],
    testCode: `#include<iostream>
#include<vector>
#include<cmath>
using namespace std;
__USER_CODE__
int main(){
int t[]={4,1,3,5,6,8,8,8,8,8};int e[]={2,1,0,10,4,92,92,92,92,92};int p=0;
for(int i=0;i<10;i++){vector<int>cols;vector<vector<int>>res;n_queens(t[i],0,cols,res);if((int)res.size()==e[i]){cout<<"PASS "<<i<<" got="<<res.size()<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<res.size()<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_safe(const vector<int>& cols, int row, int col) {
    for (int i = 0; i < row; i++)
        if (cols[i] == col || abs(cols[i]-col) == row-i)
            return false;
    return true;
}
void n_queens(int n, int row, vector<int>& cols, vector<vector<int>>& res) {
}`
  },
  {
    id: 62,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "Sudoku Solver",
    description: "Risolvi una griglia Sudoku 9x9 con backtracking.\n0 rappresenta una cella vuota. Modifica la griglia in-place e restituisce true se risolvibile.",
    signature: "bool solve_sudoku(vector<vector<int>>& board)",
    publicCases: [
      {
        "input": "griglia valida con soluzione unica",
        "expected": "true, griglia completata"
      }
    ],
    hints: [
      "Cerca la prima cella con 0",
      "Prova 1-9: controlla riga, colonna e box 3x3",
      "Se nessun numero funziona: backtrack (rimetti 0)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<vector<int>>b1={
  {5,3,0,0,7,0,0,0,0},{6,0,0,1,9,5,0,0,0},{0,9,8,0,0,0,0,6,0},
  {8,0,0,0,6,0,0,0,3},{4,0,0,8,0,3,0,0,1},{7,0,0,0,2,0,0,0,6},
  {0,6,0,0,0,0,2,8,0},{0,0,0,4,1,9,0,0,5},{0,0,0,0,8,0,0,7,9}
};
bool r1=solve_sudoku(b1);
bool valid=true;
if(r1){for(auto&row:b1){int s=0;for(int x:row)s+=x;if(s!=45)valid=false;}}else valid=false;
cout<<(valid?"PASS 0":"FAIL 0")<<endl;
vector<vector<int>>b2={
  {1,2,3,4,5,6,7,8,9},{4,5,6,7,8,9,1,2,3},{7,8,9,1,2,3,4,5,6},
  {2,1,4,3,6,5,8,9,7},{3,6,5,8,9,7,2,1,4},{8,9,7,2,1,4,3,6,5},
  {5,3,1,6,4,2,9,7,8},{6,4,2,9,7,8,5,3,1},{9,7,8,5,3,1,6,4,2}
};
bool r2=solve_sudoku(b2);cout<<(r2?"PASS 1":"FAIL 1")<<endl;
cout<<"SCORE "<<(int(valid)+int(r2))<<"/10"<<endl;}`,
    starterCode: `bool is_valid(vector<vector<int>>& b, int r, int c, int num) {
    for (int i = 0; i < 9; i++)
        if (b[r][i]==num || b[i][c]==num) return false;
    int br = (r/3)*3, bc = (c/3)*3;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            if (b[br+i][bc+j]==num) return false;
    return true;
}
bool solve_sudoku(vector<vector<int>>& board) {
}`
  },
  {
    id: 63,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Scala: conta modi",
    description: "Puoi salire 1 o 2 gradini alla volta. In quanti modi distinti puoi raggiungere il gradino n?\nUsa memoizzazione.",
    signature: "int climb_stairs(int n, vector<int>& memo)",
    publicCases: [
      {
        "input": "n=3",
        "expected": "3"
      }
    ],
    hints: [
      "n <= 0 -> 1 (modo di non fare nulla) / gestisci caso base n=0",
      "memo[n] != -1 -> return memo[n]",
      "memo[n] = climb_stairs(n-1) + climb_stairs(n-2)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
int t[]={3,5,1,2,10,6,6,6,6,6};
int e[]={3,8,1,2,89,13,13,13,13,13};int p=0;
for(int i=0;i<10;i++){vector<int>memo(t[i]+1,-1);int r=climb_stairs(t[i],memo);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int climb_stairs(int n, vector<int>& memo) {
}`
  },
  {
    id: 64,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Longest Increasing Subsequence",
    description: "Dato un vettore, calcola la lunghezza della più lunga sottosequenza strettamente crescente.\nUsa memoizzazione su (idx, prev_idx).",
    signature: "int lis(const vector<int>& v, int idx, int prev, vector<vector<int>>& memo)",
    publicCases: [
      {
        "input": "v={10,9,2,5,3,7,101,18}",
        "expected": "4"
      }
    ],
    hints: [
      "idx == v.size() -> 0",
      "memo[idx][prev+1] != -1 -> return memo",
      "Scegli: escludi idx (0 + lis(idx+1,...)) o includi se v[idx] > v[prev] (1 + lis(idx+1,...))"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int solve_lis(const vector<int>&v){int n=v.size();vector<vector<int>>memo(n,vector<int>(n+1,-1));return lis(v,0,-1,memo);}
int main(){
vector<vector<int>>t={{10,9,2,5,3,7,101,18},{1,2,3,4,5},{5,4,3,2,1},{3},{7,7,7},{1,3,2,4},{1,3,2,4},{1,3,2,4},{1,3,2,4},{1,3,2,4}};
int e[]={4,5,1,1,1,3,3,3,3,3};int p=0;
for(int i=0;i<10;i++){int r=solve_lis(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int lis(const vector<int>& v, int idx, int prev, vector<vector<int>>& memo) {
}`
  },
  {
    id: 65,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Edit Distance",
    description: "Calcola il minimo numero di operazioni (inserisci, elimina, sostituisci) per trasformare s1 in s2.\nUsa memoizzazione su (i, j).",
    signature: "int edit_distance(const string& s1, const string& s2, int i, int j, vector<vector<int>>& memo)",
    publicCases: [
      {
        "input": "s1=\"horse\", s2=\"ros\"",
        "expected": "3"
      }
    ],
    hints: [
      "i < 0 -> j+1 (inserisci tutto ciò che resta)",
      "j < 0 -> i+1 (elimina tutto ciò che resta)",
      "s1[i]==s2[j] -> edit_distance(i-1,j-1)",
      "else: 1 + min(ins, del, sost)"
    ],
    testCode: `#include<iostream>
#include<string>
#include<vector>
using namespace std;
__USER_CODE__
int solve_ed(const string&a,const string&b){int n=a.size(),m=b.size();vector<vector<int>>memo(n,vector<int>(m,-1));return edit_distance(a,b,n-1,m-1,memo);}
int main(){
string a[]={"horse","","abc","intention","abc","kitten","kitten","kitten","kitten","kitten"};
string b[]={"ros","abc","abc","execution","","sitting","sitting","sitting","sitting","sitting"};
int e[]={3,3,0,5,3,3,3,3,3,3};int p=0;
for(int i=0;i<10;i++){int r=solve_ed(a[i],b[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int edit_distance(const string& s1, const string& s2,
                  int i, int j, vector<vector<int>>& memo) {
}`
  },
  {
    id: 66,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "Partition Equal Subset",
    description: "Dato un vettore, verifica se può essere diviso in due sottoinsiemi con la stessa somma.\nUsa memoizzazione su (idx, somma_rimanente).",
    signature: "bool can_partition(const vector<int>& v, int idx, int target, vector<vector<int>>& memo)",
    publicCases: [
      {
        "input": "v={1,5,11,5}",
        "expected": "true (partizione: {11},{1,5,5})"
      }
    ],
    hints: [
      "target == 0 -> true",
      "idx >= v.size() || target < 0 -> false",
      "Prova: includi v[idx] oppure escludilo",
      "Somma totale dispari -> false subito"
    ],
    testCode: `#include<iostream>
#include<vector>
#include<numeric>
using namespace std;
__USER_CODE__
bool solve_cp(const vector<int>&v){int sum=accumulate(v.begin(),v.end(),0);if(sum%2!=0)return false;int t=sum/2;int n=v.size();vector<vector<int>>memo(n,vector<int>(t+1,-1));return can_partition(v,0,t,memo);}
int main(){
vector<vector<int>>t={{1,5,11,5},{1,2,3,5},{2,2},{1,1},{3,3,3,4,5},{1},{1},{1},{1},{1}};
bool e[]={1,0,1,1,0,0,0,0,0,0};int p=0;
for(int i=0;i<10;i++){bool r=solve_cp(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool can_partition(const vector<int>& v, int idx, int target,
                   vector<vector<int>>& memo) {
}`
  },
  {
    id: 67,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Interlaccia due stringhe",
    description: "Genera ricorsivamente tutte le stringhe ottenute interlacciando i caratteri di s1 e s2 mantenendo l'ordine relativo di ciascuna.",
    signature: "void interleave(const string& s1, const string& s2, int i, int j, string curr, vector<string>& res)",
    publicCases: [
      {
        "input": "s1=\"ab\", s2=\"c\"",
        "expected": "{\"abc\",\"acb\",\"cab\"}"
      }
    ],
    hints: [
      "i==s1.size() && j==s2.size() -> salva curr",
      "Se i < s1.size(): aggiungi s1[i] e ricorri con i+1",
      "Se j < s2.size(): aggiungi s2[j] e ricorri con j+1"
    ],
    testCode: `#include<iostream>
#include<string>
#include<vector>
#include<algorithm>
using namespace std;
__USER_CODE__
int main(){
vector<tuple<string,string,vector<string>>>tc={
  {"ab","c",{"abc","acb","cab"}},
  {"","xy",{"xy"}},
  {"a","",{"a"}},
  {"ab","cd",{"abcd","acbd","acdb","cabd","cadb","cdab"}}
};int p=0;
for(auto&[s1,s2,exp]:tc){vector<string>res;interleave(s1,s2,0,0,"",res);sort(res.begin(),res.end());vector<string>ex=exp;sort(ex.begin(),ex.end());if(res==ex){cout<<"PASS"<<endl;p++;}else cout<<"FAIL"<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void interleave(const string& s1, const string& s2,
                int i, int j, string curr, vector<string>& res) {
}`
  },
  {
    id: 68,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Genera tutte le maiuscolizzazioni",
    description: "Data una stringa alfanumerica, genera ricorsivamente tutte le versioni con ogni lettera maiuscola o minuscola.\nLe cifre rimangono invariate.",
    signature: "void letter_case(const string& s, int idx, string curr, vector<string>& res)",
    publicCases: [
      {
        "input": "s=\"a1b\"",
        "expected": "{\"a1b\",\"a1B\",\"A1b\",\"A1B\"}"
      }
    ],
    hints: [
      "idx == s.size() -> salva curr",
      "Se s[idx] è cifra: ricorri senza biforcazione",
      "Se lettera: biforca in minuscolo e maiuscolo"
    ],
    testCode: `#include<iostream>
#include<string>
#include<vector>
#include<cctype>
#include<algorithm>
using namespace std;
__USER_CODE__
int main(){
vector<pair<string,int>>tc={{"a1b",4},{"12",1},{"C",2},{"ab",4},{"3z",2},{"a1b2",4}};int p=0;
for(auto&[s,exp]:tc){vector<string>res;letter_case(s,0,"",res);if((int)res.size()==exp){cout<<"PASS got="<<res.size()<<endl;p++;}else cout<<"FAIL got="<<res.size()<<" exp="<<exp<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void letter_case(const string& s, int idx, string curr, vector<string>& res) {
}`
  },
  {
    id: 69,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "Flood Fill",
    description: "Data una griglia di colori, partendo dalla cella (r,c) sostituisci ricorsivamente il colore originale con newColor per tutti i pixel connessi (4-direzioni).",
    signature: "void flood_fill(vector<vector<int>>& grid, int r, int c, int oldColor, int newColor)",
    publicCases: [
      {
        "input": "grid={{1,1,1},{1,1,0},{1,0,0}}, r=1, c=1, new=2",
        "expected": "{{2,2,2},{2,2,0},{2,0,0}}"
      }
    ],
    hints: [
      "r o c fuori bounds -> return",
      "grid[r][c] != oldColor -> return",
      "Aggiorna e ricorri nelle 4 direzioni"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv2(const vector<vector<int>>&m){for(auto&r:m){for(int x:r)cout<<x<<" ";cout<<endl;}}
int main(){
vector<vector<int>>g1={{1,1,1},{1,1,0},{1,0,0}};
flood_fill(g1,1,1,1,2);
vector<vector<int>>e1={{2,2,2},{2,2,0},{2,0,0}};int p=0;
if(g1==e1){cout<<"PASS 0"<<endl;p++;}else{cout<<"FAIL 0"<<endl;pv2(g1);}
vector<vector<int>>g2={{0,0,0},{0,1,1}};
flood_fill(g2,1,1,1,3);
vector<vector<int>>e2={{0,0,0},{0,3,3}};
if(g2==e2){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1"<<endl;
vector<vector<int>>g3={{1,2,1}};
flood_fill(g3,0,0,1,5);
vector<vector<int>>e3={{5,2,1}};
if(g3==e3){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2"<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void flood_fill(vector<vector<int>>& grid, int r, int c,
                int oldColor, int newColor) {
    int N = grid.size(), M = grid[0].size();
}`
  },
  {
    id: 70,
    category: "Ricorsione",
    difficulty: "Difficile",
    title: "Word Search",
    description: "Data una griglia di caratteri e una parola, verifica se la parola esiste nella griglia seguendo celle adiacenti (4-direzioni) senza riusarle.",
    signature: "bool word_search(vector<vector<char>>& board, const string& word, int r, int c, int idx)",
    publicCases: [
      {
        "input": "board={{A,B,C},{S,F,C},{A,D,E}}, word=\"ABCCED\"",
        "expected": "true"
      }
    ],
    hints: [
      "idx == word.size() -> true",
      "Fuori bounds o char diverso -> false",
      "Segna visitato (board[r][c]='#'), ricorri, ripristina"
    ],
    testCode: `#include<iostream>
#include<vector>
#include<string>
using namespace std;
__USER_CODE__
bool find_word(vector<vector<char>>&b,const string&w){
for(int i=0;i<(int)b.size();i++)for(int j=0;j<(int)b[0].size();j++)if(word_search(b,w,i,j,0))return true;return false;}
int main(){
vector<vector<char>>b1={{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
int p=0;
bool r0=find_word(b1,"ABCCED");cout<<(r0?"PASS 0":"FAIL 0")<<endl;p+=r0;
vector<vector<char>>b2=b1;
bool r1=find_word(b2,"SEE");cout<<(r1?"PASS 1":"FAIL 1")<<endl;p+=r1;
vector<vector<char>>b3=b1;
bool r2=!find_word(b3,"ABCB");cout<<(r2?"PASS 2":"FAIL 2")<<endl;p+=r2;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool word_search(vector<vector<char>>& board, const string& word,
                 int r, int c, int idx) {
}`
  },
  {
    id: 71,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Conta vocali (solo stringa)",
    description: "Data una stringa, scrivi una funzione ricorsiva che conti le vocali.\nLa funzione ha come UNICO parametro la stringa: NON puoi aggiungere idx.\nUsa s.substr(1) per ridurre il problema.\nGestisci maiuscole e minuscole.",
    signature: "int count_vowels_rec(const string& s)",
    publicCases: [
      {
        "input": "s = \"Hello\"",
        "expected": "2"
      }
    ],
    hints: [
      "s.empty() -> 0",
      "is_vowel(s[0]) ? 1 : 0",
      "+ count_vowels_rec(s.substr(1))"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"Hello","","AEIOU","xyz","aEiOu","ciao","ciao","ciao","ciao","ciao"};
int e[]={2,0,5,0,5,3,3,3,3,3};int p=0;
for(int i=0;i<10;i++){int r=count_vowels_rec(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_vowel(char c) {
}
int count_vowels_rec(const string& s) {
}`
  },
  {
    id: 72,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Permutazioni stringa (da_perm + fissa)",
    description: "Genera tutte le permutazioni di una stringa con caratteri distinti.\nUsa la firma storica del PDF: permuta(da_perm, fissa, res).\nIl ciclo for sceglie quale carattere spostare da da_perm a fissa ad ogni passo.",
    signature: "void permuta(string da_perm, string fissa, vector<string>& res)",
    publicCases: [
      {
        "input": "permuta(\"abc\",\"\",res)",
        "expected": "6 stringhe distinte"
      }
    ],
    hints: [
      "da_perm.empty() -> res.push_back(fissa); return",
      "for i in 0..da_perm.size()-1",
      "nuovo_da_perm = substr(0,i)+substr(i+1); nuova_fissa = fissa+da_perm[i]"
    ],
    testCode: `#include<iostream>
#include<string>
#include<vector>
#include<set>
using namespace std;
__USER_CODE__
int main(){
string dp[]={"abc","ab","","a","abcd","ab","ab","ab","ab","ab"};
string fx[]=>{"","","xy","","","z"};
int exp[]={6,2,1,1,24,2};int p=0;
for(int i=0;i<10;i++){
vector<string>res;permuta(dp[i],fx[i],res);
set<string>st(res.begin(),res.end());
bool ok=(int)res.size()==exp[i]&&(int)st.size()==exp[i];
if(ok){cout<<"PASS "<<i<<" got="<<res.size()<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<res.size()<<" exp="<<exp[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void permuta(string da_perm, string fissa, vector<string>& res) {
}`
  },
  {
    id: 73,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Ribalta stringa in-place (wrapped)",
    description: "Ribalta ricorsivamente una stringa in-place: NON creare una copia, modifica s direttamente.\nEsporta una funzione con firma pulita void ribalta(string& s).\nInternamente usa un helper void ribalta_helper(string& s, int l, int r).",
    signature: "void ribalta(string& s)   // wrapper pulito",
    publicCases: [
      {
        "input": "s = \"hello\"",
        "expected": "\"olleh\""
      }
    ],
    hints: [
      "ribalta_helper: l >= r -> return",
      "swap(s[l], s[r])",
      "ribalta_helper(s, l+1, r-1)",
      "ribalta chiama helper con 0 e s.size()-1"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"hello","","a","abcd","racecar","ab","ab","ab","ab","ab"};
string e[]={"olleh","","a","dcba","racecar","ba","ba","ba","ba","ba"};int p=0;
for(int i=0;i<10;i++){string s=t[i];ribalta(s);if(s==e[i]){cout<<"PASS "<<i<<" got="<<s<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<s<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void ribalta_helper(string& s, int l, int r) {
}
void ribalta(string& s) {
}`
  },
  {
    id: 74,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "MCD di un vettore (solo vettore)",
    description: "Dato un vettore di interi positivi, calcola ricorsivamente il MCD di tutti gli elementi.\nProprietà: MCD(a,b,c) = MCD(a, MCD(b,c)).\nLa funzione ha come UNICO parametro il vettore (no idx).\nUsa v.back() e vector<int>(v.begin(), v.end()-1).",
    signature: "int mcd_vettore(const vector<int>& v)   // solo vettore!",
    publicCases: [
      {
        "input": "v={12,8,4}",
        "expected": "4"
      }
    ],
    hints: [
      "v.size()==1 -> return v[0]",
      "int last = v.back()",
      "vector<int> rest(v.begin(), v.end()-1); return mcd(last, mcd_vettore(rest))"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
int mcd(int a,int b){return a==b?a:(a>b?mcd(a-b,b):mcd(a,b-a));}
__USER_CODE__
int main(){
vector<vector<int>>t={{12,8,4},{7},{6,9,12},{100,75,25},{3,3,3},{14,21,35},{14,21,35},{14,21,35},{14,21,35},{14,21,35}};
int e[]={4,7,3,25,3,7,7,7,7,7};int p=0;
for(int i=0;i<10;i++){int r=mcd_vettore(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int mcd_vettore(const vector<int>& v) {
}`
  },
  {
    id: 75,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Rappresentazione binaria",
    description: "Dato un intero positivo, restituisci ricorsivamente la sua rappresentazione binaria come stringa.\nIl bit più significativo deve essere il PRIMO carattere.\nEsempio: 6 -> \"110\"",
    signature: "string to_binary(int n)",
    publicCases: [
      {
        "input": "n=6",
        "expected": "\"110\""
      }
    ],
    hints: [
      "n==0 -> \"0\", n==1 -> \"1\" (casi base)",
      "Ultima cifra: char('0' + n%2)",
      "to_binary(n/2) + char('0' + n%2)"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int t[]={6,1,8,5,10,255,255,255,255,255};
string e[]={"110","1","1000","101","1010","11111111","11111111","11111111","11111111","11111111"};int p=0;
for(int i=0;i<10;i++){string r=to_binary(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `string to_binary(int n) {
}`
  },
  {
    id: 76,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Esadecimale a intero (un solo parametro)",
    description: "Data una stringa che rappresenta un numero in base 16 (es. \"1F\", \"a3\"),\nconvertila ricorsivamente a intero con una funzione che ha UN SOLO parametro.\nRicorri sul prefisso s.substr(0, s.size()-1) e aggiungi il valore dell'ultimo carattere.",
    signature: "int from_hex(const string& s)   // un solo parametro!",
    publicCases: [
      {
        "input": "s = \"1F\"",
        "expected": "31"
      }
    ],
    hints: [
      "s.empty() -> 0",
      "int val = hex_char_val(s.back())",
      "from_hex(s.substr(0, s.size()-1)) * 16 + val"
    ],
    testCode: `#include<iostream>
#include<string>
#include<cctype>
using namespace std;
__USER_CODE__
int main(){
string t[]={"1F","a","FF","0","10","2A","2A","2A","2A","2A"};
int e[]={31,10,255,0,16,42,42,42,42,42};int p=0;
for(int i=0;i<10;i++){int r=from_hex(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int hex_char_val(char c) {
    if (c >= '0' && c <= '9') return c - '0';
    if (c >= 'a' && c <= 'f') return 10 + c - 'a';
    if (c >= 'A' && c <= 'F') return 10 + c - 'A';
    return 0;
}
int from_hex(const string& s) {
}`
  },
  {
    id: 77,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Genera stringhe di lunghezza n (ciclo + ricorsione)",
    description: "Dato un intero len e una stringa alphabet, genera ricorsivamente tutte le stringhe di lunghezza esatta len composte solo da caratteri di alphabet.\nAd ogni livello di ricorsione usa un ciclo for sui caratteri dell'alfabeto.",
    signature: "void gen_strings(int len, const string& alpha, string curr, vector<string>& res)",
    publicCases: [
      {
        "input": "len=2, alpha=\"ab\"",
        "expected": "{\"aa\",\"ab\",\"ba\",\"bb\"}"
      }
    ],
    hints: [
      "len==0 -> res.push_back(curr); return",
      "for (char c : alpha) { ... }",
      "gen_strings(len-1, alpha, curr+c, res)  — nessun undo (curr per valore)"
    ],
    testCode: `#include<iostream>
#include<string>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
string al[]={"ab","xyz","ab","a","abc","ab","ab","ab","ab","ab"};
int ln[]={2,1,0,3,2,3,3,3,3,3};
int exp[]={4,3,1,1,9,8};int p=0;
for(int i=0;i<10;i++){vector<string>res;gen_strings(ln[i],al[i],"",res);if((int)res.size()==exp[i]){cout<<"PASS "<<i<<" got="<<res.size()<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<res.size()<<" exp="<<exp[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void gen_strings(int len, const string& alpha, string curr, vector<string>& res) {
}`
  },
  {
    id: 78,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Combination Sum con riuso (ciclo + ricorsione)",
    description: "Dato un vettore di interi positivi distinti ordinati e un target, trova tutte le combinazioni (con riuso dello stesso elemento) che sommano esattamente a target.\nUsa un ciclo for da idx in poi + ricorsione. Stessa struttura del backtracking, ma i è ripassato (non i+1).",
    signature: "void combination_sum(const vector<int>& nums, int target, int idx, vector<int>& curr, vector<vector<int>>& res)",
    publicCases: [
      {
        "input": "nums={2,3,6,7}, target=7",
        "expected": "{{2,2,3},{7}}"
      }
    ],
    hints: [
      "target==0 -> salva curr; return",
      "target<0 -> return (pruning)",
      "for i da idx: push, ricorri con i (stesso i = riuso), pop"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<int>n1={2,3,6,7},n2={2,3,5},n3={2},n4={1},n5={2,3},n6={3,4,5};
int tg[]={7,8,1,4,6,5,5,5,5,5};
int exp[]={2,3,0,1,3,1};int p=0;
vector<vector<int>*>vs={&n1,&n2,&n3,&n4,&n5,&n6,&n6,&n6,&n6,&n6};
for(int i=0;i<10;i++){vector<int>curr;vector<vector<int>>res;combination_sum(*vs[i],tg[i],0,curr,res);if((int)res.size()==exp[i]){cout<<"PASS "<<i<<" got="<<res.size()<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<res.size()<<" exp="<<exp[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void combination_sum(const vector<int>& nums, int target, int idx,
                     vector<int>& curr, vector<vector<int>>& res) {
}`
  },
  {
    id: 79,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Tutte le partizioni additive di n (ciclo + ricorsione)",
    description: "Genera tutte le partizioni additive di n: i modi di scrivere n come somma di interi positivi in ordine non-crescente.\nEsempio: 4 -> {4},{3,1},{2,2},{2,1,1},{1,1,1,1}.\nIl parametro max_val limita il valore massimo sceglibile per evitare duplicati.",
    signature: "void partitions(int n, int max_val, vector<int>& curr, vector<vector<int>>& res)",
    publicCases: [
      {
        "input": "n=3, max_val=3",
        "expected": "{{3},{2,1},{1,1,1}}"
      }
    ],
    hints: [
      "n==0 -> salva curr; return",
      "for i da min(n,max_val) scendendo fino a 1",
      "push i, ricorri con n-i e max_val=i, pop"
    ],
    testCode: `#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
__USER_CODE__
int main(){
int ns[]={3,1,4,5,2,6,6,6,6,6};
int mx[]={3,1,4,5,2,6};
int exp[]={3,1,5,7,2,11};int p=0;
for(int i=0;i<10;i++){vector<int>curr;vector<vector<int>>res;partitions(ns[i],mx[i],curr,res);if((int)res.size()==exp[i]){cout<<"PASS "<<i<<" got="<<res.size()<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<res.size()<<" exp="<<exp[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void partitions(int n, int max_val, vector<int>& curr, vector<vector<int>>& res) {
}`
  },
  {
    id: 80,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Quick Sort (ciclo + ricorsione)",
    description: "Implementa Quick Sort ricorsivamente.\nScegli il pivot come v[right]; usa un ciclo for per partizionare gli elementi in-place;\npoi ricorri sulle due metà.",
    signature: "void quick_sort(vector<int>& v, int left, int right)",
    publicCases: [
      {
        "input": "v={5,3,1,4,2}",
        "expected": "{1,2,3,4,5}"
      }
    ],
    hints: [
      "left >= right -> return",
      "pivot = v[right]; int i = left-1",
      "for j=left..right-1: if v[j]<=pivot swap(v[++i],v[j]); poi swap(v[i+1],v[right])",
      "Ricorri su [left, pi-1] e [pi+1, right]"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<vector<int>>t={{5,3,1,4,2},{1},{3,1},{},{5,5,3,3,1},{9,8,7,6},{9,8,7,6},{9,8,7,6},{9,8,7,6},{9,8,7,6}};
vector<vector<int>>e={{1,2,3,4,5},{1},{1,3},{},{1,3,3,5,5},{6,7,8,9},{6,7,8,9},{6,7,8,9},{6,7,8,9},{6,7,8,9}};int p=0;
for(int i=0;i<10;i++){auto v=t[i];if(!v.empty())quick_sort(v,0,(int)v.size()-1);if(v==e[i]){cout<<"PASS "<<i<<" got=";pv(v);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(v);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void quick_sort(vector<int>& v, int left, int right) {
}`
  },
  {
    id: 81,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Appiattisci vettore di vettori (ciclo + ricorsione)",
    description: "Dato un vector<vector<int>>, restituisci ricorsivamente un unico vector<int> con tutti gli elementi in ordine.\nRicorri sulle righe (parametro idx); per ogni riga usa un ciclo for per copiare gli elementi.",
    signature: "vector<int> flatten(const vector<vector<int>>& vv, int idx)",
    publicCases: [
      {
        "input": "vv={{1,2},{3},{4,5,6}}, idx=0",
        "expected": "{1,2,3,4,5,6}"
      }
    ],
    hints: [
      "idx >= vv.size() -> return {}",
      "vector<int> rest = flatten(vv, idx+1)",
      "for (int x : vv[idx]) result.push_back(x);  poi appendi rest"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<vector<vector<int>>>t={{{1,2},{3},{4,5,6}},{},{{},{1},{}},{{1,2,3}},{{10},{20},{30}},{{1},{1},{1}},{{1},{1},{1}},{{1},{1},{1}},{{1},{1},{1}},{{1},{1},{1}}};
vector<vector<int>>e={{1,2,3,4,5,6},{},{1},{1,2,3},{10,20,30},{1,1,1},{1,1,1},{1,1,1},{1,1,1},{1,1,1}};int p=0;
for(int i=0;i<10;i++){auto r=flatten(t[i],0);if(r==e[i]){cout<<"PASS "<<i<<" got=";pv(r);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(r);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `vector<int> flatten(const vector<vector<int>>& vv, int idx) {
}`
  },
  {
    id: 82,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Digital root (wrapped)",
    description: "Il digital root di n è la somma ricorsiva delle sue cifre fino a ottenere una singola cifra.\nEsempio: 493 → 4+9+3=16 → 1+6=7.\nEsporta int digital_root(int n) che usa digit_sum (già definita) come helper.\nNota: digital_root richiama se stessa su digit_sum(n), non su n direttamente.",
    signature: "int digital_root(int n)   // usa digit_sum(n) come helper",
    publicCases: [
      {
        "input": "n=493",
        "expected": "7"
      }
    ],
    hints: [
      "n < 10 -> return n (già una sola cifra)",
      "return digital_root(digit_sum(n))",
      "digit_sum è già fornita nel testCode"
    ],
    testCode: `#include<iostream>
using namespace std;
int digit_sum(int n){if(n<10)return n;return n%10+digit_sum(n/10);}
__USER_CODE__
int main(){
int t[]={493,9,99,0,1234,999,999,999,999,999};
int e[]={7,9,9,0,1,9,9,9,9,9};int p=0;
for(int i=0;i<10;i++){int r=digital_root(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<" exp="<<e[i]<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int digital_root(int n) {
}`
  },
  {
    id: 83,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Rimuovi tutti gli x (solo v e x)",
    description: "Dato un vettore e un intero x, restituisci ricorsivamente un nuovo vettore senza alcuna occorrenza di x.\nLa funzione ha SOLO due parametri (no idx): usa v.back() e vector<int>(v.begin(), v.end()-1).",
    signature: "vector<int> remove_all(const vector<int>& v, int x)",
    publicCases: [
      {
        "input": "v={1,2,3,2,4}, x=2",
        "expected": "{1,3,4}"
      }
    ],
    hints: [
      "v.empty() -> return {}",
      "int last = v.back(); vector<int> rest(v.begin(), v.end()-1)",
      "result = remove_all(rest, x); if (last != x) result.push_back(last)"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
void pv(const vector<int>&v){cout<<"{";for(size_t i=0;i<v.size();i++){if(i)cout<<",";cout<<v[i];}cout<<"}";}
int main(){
vector<int>vv[]={{1,2,3,2,4},{},{5,5,5},{1,2,3},{3,1,3,1},{2}};
int xx[]={2,1,5,9,3,2};
vector<int>e[]={{1,3,4},{},{},{1,2,3},{1,1},{},{},{},{},{}};
int p=0;
for(int i=0;i<10;i++){auto r=remove_all(vv[i],xx[i]);if(r==e[i]){cout<<"PASS "<<i<<" got=";pv(r);cout<<endl;p++;}else{cout<<"FAIL "<<i<<" got=";pv(r);cout<<endl;}}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `vector<int> remove_all(const vector<int>& v, int x) {
}`
  },
  {
    id: 84,
    category: "Ricorsione",
    difficulty: "Facile",
    title: "Vettore ordinato (solo vettore, wrapped)",
    description: "Verifica se un vettore è ordinato in modo non-decrescente.\nLa funzione ha come UNICO parametro il vettore (no idx).\nUsa v.back() e vector<int>(v.begin(), v.end()-1) per ridurre il problema.",
    signature: "bool is_sorted_rec(const vector<int>& v)   // solo v!",
    publicCases: [
      {
        "input": "v={1,2,3,4}",
        "expected": "true"
      }
    ],
    hints: [
      "v.size() <= 1 -> true",
      "int last = v.back(); vector<int> rest(v.begin(), v.end()-1)",
      "if (!is_sorted_rec(rest)) return false; return rest.back() <= last"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
vector<vector<int>>t={{1,2,3,4},{1,3,2},{},{5},{1,1,2},{3,2,1},{3,2,1},{3,2,1},{3,2,1},{3,2,1}};
bool e[]={1,0,1,1,1,0,0,0,0,0};int p=0;
for(int i=0;i<10;i++){bool r=is_sorted_rec(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool is_sorted_rec(const vector<int>& v) {
}`
  },
  {
    id: 85,
    category: "Ricorsione",
    difficulty: "Medio",
    title: "Palindromo (wrapped pulito)",
    description: "Verifica se una stringa è palindroma.\nEsporta bool is_palindrome(const string& s) con firma pulita.\nInternamente usa bool pal_helper(const string& s, int l, int r) con due indici.\nLa funzione pubblica non ha parametri aggiuntivi.",
    signature: "bool is_palindrome(const string& s)   // wrapper pulito, zero indici esposti",
    publicCases: [
      {
        "input": "s = \"racecar\"",
        "expected": "true"
      }
    ],
    hints: [
      "pal_helper: l >= r -> true",
      "s[l] != s[r] -> false",
      "pal_helper(s, l+1, r-1)",
      "is_palindrome chiama pal_helper(s, 0, s.size()-1)"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
string t[]={"racecar","hello","","a","abba","ab","ab","ab","ab","ab"};
bool e[]={1,0,1,1,1,0,0,0,0,0};int p=0;
for(int i=0;i<10;i++){bool r=is_palindrome(t[i]);if(r==e[i]){cout<<"PASS "<<i<<" got="<<r<<endl;p++;}else cout<<"FAIL "<<i<<" got="<<r<<endl;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool pal_helper(const string& s, int l, int r) {
}
bool is_palindrome(const string& s) {
}`
  },
  {
    id: 86,
    category: "Classi",
    difficulty: "Facile",
    title: "Classe Contatore",
    description: "Classe che gestisce un contatore intero.\nMetodi: incrementa(), decrementa(), reset(), getValore().\nIl contatore non può scendere sotto 0: decrementa() su 0 non fa nulla.",
    signature: "class Contatore { ... }",
    publicCases: [
      {
        "input": "incrementa() x3, getValore()",
        "expected": "3"
      }
    ],
    hints: [
      "Attributo privato int val = 0",
      "incrementa: val++",
      "decrementa: if (val > 0) val--"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
int p=0;Contatore c;
c.incrementa();c.incrementa();c.incrementa();
if(c.getValore()==3){cout<<"PASS 0 got="<<c.getValore()<<endl;p++;}else cout<<"FAIL 0 got="<<c.getValore()<<endl;
Contatore c2;c2.decrementa();
if(c2.getValore()==0){cout<<"PASS 1 got="<<c2.getValore()<<endl;p++;}else cout<<"FAIL 1 got="<<c2.getValore()<<endl;
c.reset();
if(c.getValore()==0){cout<<"PASS 2 got="<<c.getValore()<<endl;p++;}else cout<<"FAIL 2 got="<<c.getValore()<<endl;
Contatore c3;c3.incrementa();c3.decrementa();
if(c3.getValore()==0){cout<<"PASS 3 got="<<c3.getValore()<<endl;p++;}else cout<<"FAIL 3 got="<<c3.getValore()<<endl;
Contatore c4;for(int i=0;i<10;i++)c4.incrementa();
if(c4.getValore()==10){cout<<"PASS 4 got="<<c4.getValore()<<endl;p++;}else cout<<"FAIL 4 got="<<c4.getValore()<<endl;
c4.decrementa();c4.decrementa();
if(c4.getValore()==8){cout<<"PASS 5 got="<<c4.getValore()<<endl;p++;}else cout<<"FAIL 5 got="<<c4.getValore()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class Contatore {
private:
public:
};`
  },
  {
    id: 87,
    category: "Classi",
    difficulty: "Facile",
    title: "Classe ContoCorrente",
    description: "Classe con titolare (string) e saldo (double, inizia a 0).\nMetodi: deposita(double), preleva(double), getSaldo(), getTitolare().\nIl prelievo fallisce (non fa nulla) se l'importo supera il saldo.",
    signature: "class ContoCorrente { ... }",
    publicCases: [
      {
        "input": "deposita(100); getSaldo()",
        "expected": "100"
      }
    ],
    hints: [
      "Attributi: string titolare; double saldo = 0",
      "deposita: saldo += importo",
      "preleva: if (importo <= saldo) saldo -= importo"
    ],
    testCode: `#include<iostream>
#include<string>
#include<cmath>
using namespace std;
__USER_CODE__
int main(){
int p=0;ContoCorrente c("Mario");
c.deposita(100);
if(abs(c.getSaldo()-100)<0.01){cout<<"PASS 0 got="<<c.getSaldo()<<endl;p++;}else cout<<"FAIL 0 got="<<c.getSaldo()<<endl;
c.preleva(50);
if(abs(c.getSaldo()-50)<0.01){cout<<"PASS 1 got="<<c.getSaldo()<<endl;p++;}else cout<<"FAIL 1 got="<<c.getSaldo()<<endl;
c.preleva(200);
if(abs(c.getSaldo()-50)<0.01){cout<<"PASS 2 got="<<c.getSaldo()<<endl;p++;}else cout<<"FAIL 2 got="<<c.getSaldo()<<endl;
if(c.getTitolare()=="Mario"){cout<<"PASS 3 got="<<c.getTitolare()<<endl;p++;}else cout<<"FAIL 3 got="<<c.getTitolare()<<endl;
ContoCorrente c2("Luigi");c2.deposita(10);c2.deposita(20);
if(abs(c2.getSaldo()-30)<0.01){cout<<"PASS 4 got="<<c2.getSaldo()<<endl;p++;}else cout<<"FAIL 4 got="<<c2.getSaldo()<<endl;
c2.preleva(30);
if(abs(c2.getSaldo())<0.01){cout<<"PASS 5 got="<<c2.getSaldo()<<endl;p++;}else cout<<"FAIL 5 got="<<c2.getSaldo()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class ContoCorrente {
private:
public:
};`
  },
  {
    id: 88,
    category: "Classi",
    difficulty: "Medio",
    title: "Classe Vettore2D",
    description: "Classe per vettori 2D con double x,y.\nMetodi: somma(Vettore2D), modulo() (lunghezza), prodottoScalare(Vettore2D), getX(), getY().\nsomma restituisce un NUOVO Vettore2D.",
    signature: "class Vettore2D { ... }",
    publicCases: [
      {
        "input": "Vettore2D(3,4).modulo()",
        "expected": "5.0"
      }
    ],
    hints: [
      "modulo: sqrt(x*x + y*y)",
      "prodottoScalare: x*altro.x + y*altro.y",
      "somma: return Vettore2D(x+altro.x, y+altro.y)"
    ],
    testCode: `#include<iostream>
#include<cmath>
using namespace std;
__USER_CODE__
int main(){
int p=0;
Vettore2D v1(3,4);
if(abs(v1.modulo()-5)<0.01){cout<<"PASS 0 got="<<v1.modulo()<<endl;p++;}else cout<<"FAIL 0 got="<<v1.modulo()<<endl;
Vettore2D v2(1,0),v3(0,1);
if(abs(v2.prodottoScalare(v3))<0.01){cout<<"PASS 1 got="<<v2.prodottoScalare(v3)<<endl;p++;}else cout<<"FAIL 1 got="<<v2.prodottoScalare(v3)<<endl;
Vettore2D v4(1,2),v5(3,4);auto v6=v4.somma(v5);
if(abs(v6.getX()-4)<0.01){cout<<"PASS 2 got="<<v6.getX()<<endl;p++;}else cout<<"FAIL 2 got="<<v6.getX()<<endl;
if(abs(v6.getY()-6)<0.01){cout<<"PASS 3 got="<<v6.getY()<<endl;p++;}else cout<<"FAIL 3 got="<<v6.getY()<<endl;
Vettore2D v7(1,1);double d=v7.prodottoScalare(Vettore2D(2,3));
if(abs(d-5)<0.01){cout<<"PASS 4 got="<<d<<endl;p++;}else cout<<"FAIL 4 got="<<d<<endl;
Vettore2D v8(0,0);
if(abs(v8.modulo())<0.01){cout<<"PASS 5 got="<<v8.modulo()<<endl;p++;}else cout<<"FAIL 5 got="<<v8.modulo()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class Vettore2D {
private:
public:
};`
  },
  {
    id: 89,
    category: "Classi",
    difficulty: "Medio",
    title: "Classe Coda (Queue)",
    description: "Coda FIFO di int con vector. enqueue, dequeue (restituisce), front, isEmpty, size.\ndequeue rimuove dal fronte (posizione 0).",
    signature: "class Coda { ... }",
    publicCases: [
      {
        "input": "enqueue(1); enqueue(2); front()",
        "expected": "1"
      }
    ],
    hints: [
      "vector<int> privato",
      "enqueue = push_back",
      "dequeue: salva v[0], v.erase(v.begin()), return"
    ],
    testCode: `#include<iostream>
#include<vector>
using namespace std;
__USER_CODE__
int main(){
int p=0;Coda q;
q.enqueue(1);q.enqueue(2);
if(q.front()==1){cout<<"PASS 0 got="<<q.front()<<endl;p++;}else cout<<"FAIL 0 got="<<q.front()<<endl;
int d=q.dequeue();
if(d==1){cout<<"PASS 1 got="<<d<<endl;p++;}else cout<<"FAIL 1 got="<<d<<endl;
if(q.front()==2){cout<<"PASS 2 got="<<q.front()<<endl;p++;}else cout<<"FAIL 2 got="<<q.front()<<endl;
Coda q2;
if(q2.isEmpty()){cout<<"PASS 3 got=1"<<endl;p++;}else cout<<"FAIL 3"<<endl;
q2.enqueue(10);q2.enqueue(20);q2.enqueue(30);
if(q2.size()==3){cout<<"PASS 4 got="<<q2.size()<<endl;p++;}else cout<<"FAIL 4 got="<<q2.size()<<endl;
q2.dequeue();
if(q2.front()==20){cout<<"PASS 5 got="<<q2.front()<<endl;p++;}else cout<<"FAIL 5 got="<<q2.front()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class Coda {
private:
public:
};`
  },
  {
    id: 90,
    category: "Classi",
    difficulty: "Difficile",
    title: "Classe Registro",
    description: "Registro che tiene studenti (nome + vettore di voti).\naggiungiStudente(nome), aggiungiVoto(nome, voto), mediaStudente(nome), migliorStudente() (media più alta).\nUsa un vector di struct interna o coppie.",
    signature: "class Registro { ... }",
    publicCases: [
      {
        "input": "2 studenti con voti, migliorStudente()",
        "expected": "nome con media più alta"
      }
    ],
    hints: [
      "struct interno: { string nome; vector<int> voti; }",
      "Cerca studente per nome con un ciclo",
      "migliorStudente: confronta medie di tutti"
    ],
    testCode: `#include<iostream>
#include<string>
#include<vector>
#include<cmath>
using namespace std;
__USER_CODE__
int main(){
int p=0;Registro r;
r.aggiungiStudente("Mario");
r.aggiungiStudente("Luigi");
r.aggiungiVoto("Mario",28);r.aggiungiVoto("Mario",30);
r.aggiungiVoto("Luigi",25);r.aggiungiVoto("Luigi",22);
double m1=r.mediaStudente("Mario");
if(abs(m1-29)<0.01){cout<<"PASS 0 got="<<m1<<endl;p++;}else cout<<"FAIL 0 got="<<m1<<endl;
double m2=r.mediaStudente("Luigi");
if(abs(m2-23.5)<0.01){cout<<"PASS 1 got="<<m2<<endl;p++;}else cout<<"FAIL 1 got="<<m2<<endl;
string best=r.migliorStudente();
if(best=="Mario"){cout<<"PASS 2 got="<<best<<endl;p++;}else cout<<"FAIL 2 got="<<best<<endl;
Registro r2;r2.aggiungiStudente("Anna");
double m3=r2.mediaStudente("Anna");
if(abs(m3)<0.01){cout<<"PASS 3 got="<<m3<<endl;p++;}else cout<<"FAIL 3 got="<<m3<<endl;
r2.aggiungiStudente("Bob");r2.aggiungiVoto("Bob",30);r2.aggiungiVoto("Anna",30);
if(r2.mediaStudente("Bob")==r2.mediaStudente("Anna")){cout<<"PASS 4 got=equal"<<endl;p++;}else cout<<"FAIL 4"<<endl;
r.aggiungiVoto("Luigi",30);r.aggiungiVoto("Luigi",30);
double m4=r.mediaStudente("Luigi");
if(abs(m4-26.75)<0.01){cout<<"PASS 5 got="<<m4<<endl;p++;}else cout<<"FAIL 5 got="<<m4<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `class Registro {
private:
public:
};`
  },
  {
    id: 91,
    category: "Liste",
    difficulty: "Facile",
    title: "Node + List base",
    description: "Definisci:\n- struct Node con val (int), next (Node*), e costruttore\n- class List con head privato, costruttore (head=nullptr), distruttore (dealloca tutti i nodi) e un metodo isEmpty().\n\nIl distruttore deve scorrere la lista e fare delete su ogni nodo.",
    signature: "struct Node { ... };\nclass List { ... };",
    publicCases: [
      {
        "input": "List l; l.isEmpty()",
        "expected": "true"
      }
    ],
    hints: [
      "Node(int v, Node* n=nullptr) : val(v), next(n) {}",
      "List() : head(nullptr) {}",
      "Distruttore: while(head) { Node* tmp=head; head=head->next; delete tmp; }"
    ],
    testCode: `#include<iostream>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l1;
if(l1.isEmpty()){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0"<<endl;
{List l2;}cout<<"PASS 1"<<endl;p++;
List l3;
if(l3.isEmpty()){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2"<<endl;
{List l4;}
if(true){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3"<<endl;
List l5;
if(l5.isEmpty()==true){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4"<<endl;
{List l6;}cout<<"PASS 5"<<endl;p++;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
    int val;
    Node* next;
};

class List {
private:
    Node* head;
public:
};`
  },
  {
    id: 92,
    category: "Liste",
    difficulty: "Facile",
    title: "insertFront e print",
    description: "Aggiungi alla classe List:\n- void insertFront(int val): inserisci in testa\n- string toString() const: restituisci stringa tipo \"1->2->3->null\"\n\ninsertFront crea un nuovo nodo e lo mette prima di head.",
    signature: "void insertFront(int val)\nstring toString() const",
    publicCases: [
      {
        "input": "insertFront(3); insertFront(2); insertFront(1); toString()",
        "expected": "\"1->2->3->null\""
      }
    ],
    hints: [
      "insertFront: head = new Node(val, head)",
      "toString: scorri con current, concatena to_string(current->val) + \"->\"",
      "Alla fine aggiungi \"null\""
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l1;l1.insertFront(3);l1.insertFront(2);l1.insertFront(1);
if(l1.toString()=="1->2->3->null"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l1.toString()<<endl;
List l2;
if(l2.toString()=="null"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.toString()<<endl;
List l3;l3.insertFront(5);
if(l3.toString()=="5->null"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l3.toString()<<endl;
List l4;l4.insertFront(1);l4.insertFront(1);l4.insertFront(1);
if(l4.toString()=="1->1->1->null"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l4.toString()<<endl;
List l5;for(int i=5;i>=1;i--)l5.insertFront(i);
if(l5.toString()=="1->2->3->4->5->null"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l5.toString()<<endl;
List l6;l6.insertFront(42);
if(l6.toString()=="42->null"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l6.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
    int val;
    Node* next;
    Node(int v, Node* n = nullptr) : val(v), next(n) {}
};

class List {
private:
    Node* head;
public:
    List() : head(nullptr) {}
    ~List() {
        while (head) {
            Node* tmp = head;
            head = head->next;
            delete tmp;
        }
    }

    void insertFront(int val) {
    }

    string toString() const {
    }

    bool isEmpty() const { return head == nullptr; }
};`
  },
  {
    id: 93,
    category: "Liste",
    difficulty: "Medio",
    title: "insertBack e length",
    description: "Aggiungi alla classe List:\n- void insertBack(int val): inserisci in coda\n- int length() const: conta i nodi\n\ninsertBack deve scorrere fino all'ultimo nodo. Gestisci lista vuota.",
    signature: "void insertBack(int val)\nint length() const",
    publicCases: [
      {
        "input": "insertBack(1); insertBack(2); insertBack(3); toString()",
        "expected": "\"1->2->3->null\""
      }
    ],
    hints: [
      "insertBack lista vuota: head = new Node(val)",
      "Altrimenti: scorri fino a current->next == nullptr",
      "current->next = new Node(val)"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l1;l1.insertBack(1);l1.insertBack(2);l1.insertBack(3);
if(l1.toString()=="1->2->3->null"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l1.toString()<<endl;
if(l1.length()==3){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l1.length()<<endl;
List l2;
if(l2.length()==0){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l2.length()<<endl;
List l3;l3.insertBack(10);
if(l3.toString()=="10->null"&&l3.length()==1){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3"<<endl;
List l4;l4.insertFront(2);l4.insertBack(3);l4.insertFront(1);
if(l4.toString()=="1->2->3->null"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l4.toString()<<endl;
List l5;for(int i=1;i<=5;i++)l5.insertBack(i);
if(l5.length()==5){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l5.length()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
    int val;
    Node* next;
    Node(int v, Node* n = nullptr) : val(v), next(n) {}
};

class List {
private:
    Node* head;
public:
    List() : head(nullptr) {}
    ~List() { while(head){Node*t=head;head=head->next;delete t;} }
    bool isEmpty() const { return head == nullptr; }

    void insertFront(int val) { head = new Node(val, head); }

    string toString() const {
        string s;
        Node* c = head;
        while(c) { s += to_string(c->val) + "->"; c = c->next; }
        return s + "null";
    }

    void insertBack(int val) {
    }

    int length() const {
    }
};`
  },
  {
    id: 94,
    category: "Liste",
    difficulty: "Medio",
    title: "search, count e remove",
    description: "Aggiungi alla classe List:\n- bool search(int target) const: true se target è nella lista\n- int count(int target) const: quante volte appare\n- bool remove(int target): rimuovi prima occorrenza, return true se rimosso\n\nremove deve gestire: cancellazione in testa, nel mezzo/coda, e target non trovato.",
    signature: "bool search(int)\nint count(int)\nbool remove(int)",
    publicCases: [
      {
        "input": "1->2->3 search(2)",
        "expected": "true"
      }
    ],
    hints: [
      "search: scorri, confronta, return true se trovato",
      "count: scorri, incrementa contatore",
      "remove in testa: Node* tmp=head; head=head->next; delete tmp"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l;l.insertBack(1);l.insertBack(2);l.insertBack(3);
if(l.search(2)){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0"<<endl;
if(!l.search(9)){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1"<<endl;
List l2;l2.insertBack(1);l2.insertBack(2);l2.insertBack(2);l2.insertBack(3);
if(l2.count(2)==2){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l2.count(2)<<endl;
List l3;l3.insertBack(1);l3.insertBack(2);l3.insertBack(3);
l3.remove(2);
if(l3.toString()=="1->3->null"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l3.toString()<<endl;
List l4;l4.insertBack(1);l4.insertBack(2);l4.remove(1);
if(l4.toString()=="2->null"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l4.toString()<<endl;
List l5;l5.insertBack(5);
bool r=l5.remove(5);
if(r&&l5.isEmpty()){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5"<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
    int val;
    Node* next;
    Node(int v, Node* n = nullptr) : val(v), next(n) {}
};

class List {
private:
    Node* head;
public:
    List() : head(nullptr) {}
    ~List() { while(head){Node*t=head;head=head->next;delete t;} }
    bool isEmpty() const { return head == nullptr; }
    void insertFront(int val) { head = new Node(val, head); }
    void insertBack(int val) {
        if(!head){head=new Node(val);return;}
        Node*c=head;while(c->next)c=c->next;c->next=new Node(val);
    }
    string toString() const {
        string s;Node*c=head;
        while(c){s+=to_string(c->val)+"->";c=c->next;}
        return s+"null";
    }
    int length() const { int n=0;Node*c=head;while(c){n++;c=c->next;}return n; }

    bool search(int target) const {
    }

    int count(int target) const {
    }

    bool remove(int target) {
    }
};`
  },
  {
    id: 95,
    category: "Liste",
    difficulty: "Medio",
    title: "Copy constructor",
    description: "Implementa il copy constructor della classe List.\nDeve creare una COPIA PROFONDA: ogni nodo viene duplicato con new.\nDopo la copia, modificare l'originale NON deve cambiare la copia.\n\nFirma: List(const List& other)",
    signature: "List(const List& other)",
    publicCases: [
      {
        "input": "List l2 = l1; l1 e l2 uguali",
        "expected": "true"
      }
    ],
    hints: [
      "Se other.head == nullptr: head = nullptr; return",
      "Crea il primo nodo: head = new Node(other.head->val)",
      "Scorri other con src, costruisci con dst: dst->next = new Node(src->next->val)"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l1;l1.insertBack(1);l1.insertBack(2);l1.insertBack(3);
List l2(l1);
if(l2.toString()=="1->2->3->null"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l2.toString()<<endl;
l1.insertFront(0);
if(l2.toString()=="1->2->3->null"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.toString()<<endl;
List l3;
List l4(l3);
if(l4.isEmpty()){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2"<<endl;
List l5;l5.insertBack(42);
List l6(l5);
if(l6.toString()=="42->null"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l6.toString()<<endl;
l5.remove(42);
if(l6.toString()=="42->null"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l6.toString()<<endl;
List l7;for(int i=1;i<=5;i++)l7.insertBack(i);
List l8(l7);
if(l8.length()==5&&l8.toString()==l7.toString()){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5"<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
    int val;
    Node* next;
    Node(int v, Node* n = nullptr) : val(v), next(n) {}
};

class List {
private:
    Node* head;
public:
    List() : head(nullptr) {}
    ~List() { while(head){Node*t=head;head=head->next;delete t;} }

    List(const List& other) {
    }

    bool isEmpty() const { return head == nullptr; }
    void insertFront(int val) { head = new Node(val, head); }
    void insertBack(int val) {
        if(!head){head=new Node(val);return;}
        Node*c=head;while(c->next)c=c->next;c->next=new Node(val);
    }
    bool remove(int target) {
        if(!head)return false;
        if(head->val==target){Node*t=head;head=head->next;delete t;return true;}
        Node*c=head;while(c->next&&c->next->val!=target)c=c->next;
        if(!c->next)return false;
        Node*t=c->next;c->next=t->next;delete t;return true;
    }
    int length() const { int n=0;Node*c=head;while(c){n++;c=c->next;}return n; }
    string toString() const {
        string s;Node*c=head;
        while(c){s+=to_string(c->val)+"->";c=c->next;}
        return s+"null";
    }
};`
  },
  {
    id: 96,
    category: "Liste",
    difficulty: "Medio",
    title: "reverse e get",
    description: "Aggiungi alla classe List:\n- void reverse(): inverti la lista in-place con tre puntatori (prev, current, next)\n- int get(int index) const: restituisci il valore all'indice dato (0-based). Se indice non valido return -1.",
    signature: "void reverse()\nint get(int index) const",
    publicCases: [
      {
        "input": "1->2->3 reverse() toString()",
        "expected": "\"3->2->1->null\""
      }
    ],
    hints: [
      "reverse: prev=nullptr, current=head; salva next, inverti link, avanza",
      "Alla fine: head = prev",
      "get: scorri index volte, se esci return -1"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l1;l1.insertBack(1);l1.insertBack(2);l1.insertBack(3);
l1.reverse();
if(l1.toString()=="3->2->1->null"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l1.toString()<<endl;
List l2;l2.insertBack(10);l2.insertBack(20);l2.insertBack(30);
if(l2.get(0)==10){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.get(0)<<endl;
if(l2.get(2)==30){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l2.get(2)<<endl;
if(l2.get(5)==-1){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l2.get(5)<<endl;
List l3;l3.reverse();
if(l3.isEmpty()){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4"<<endl;
List l4;l4.insertBack(42);l4.reverse();
if(l4.toString()=="42->null"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l4.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
    int val;
    Node* next;
    Node(int v, Node* n = nullptr) : val(v), next(n) {}
};

class List {
private:
    Node* head;
public:
    List() : head(nullptr) {}
    ~List() { while(head){Node*t=head;head=head->next;delete t;} }
    List(const List& o) {
        if(!o.head){head=nullptr;return;}
        head=new Node(o.head->val);
        Node*s=o.head->next,*d=head;
        while(s){d->next=new Node(s->val);d=d->next;s=s->next;}
    }
    bool isEmpty() const { return head == nullptr; }
    void insertFront(int val) { head = new Node(val, head); }
    void insertBack(int val) {
        if(!head){head=new Node(val);return;}
        Node*c=head;while(c->next)c=c->next;c->next=new Node(val);
    }
    int length() const { int n=0;Node*c=head;while(c){n++;c=c->next;}return n; }
    string toString() const {
        string s;Node*c=head;
        while(c){s+=to_string(c->val)+"->";c=c->next;}
        return s+"null";
    }

    void reverse() {
    }

    int get(int index) const {
    }
};`
  },
  {
    id: 97,
    category: "Liste",
    difficulty: "Difficile",
    title: "insertSorted e merge",
    description: "Aggiungi alla classe List:\n- void insertSorted(int val): inserisci mantenendo l'ordine crescente\n- void merge(const List& other): fondi con un'altra lista ordinata, risultato ordinato\n\nEntrambi assumono che la lista è già ordinata.",
    signature: "void insertSorted(int val)\nvoid merge(const List& other)",
    publicCases: [
      {
        "input": "1->3->5 insertSorted(4)",
        "expected": "\"1->3->4->5->null\""
      }
    ],
    hints: [
      "insertSorted in testa se val <= head->val",
      "Scorri finché current->next->val < val",
      "merge: crea nuova lista, scorri entrambe, inserisci il minore"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l1;l1.insertBack(1);l1.insertBack(3);l1.insertBack(5);
l1.insertSorted(4);
if(l1.toString()=="1->3->4->5->null"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l1.toString()<<endl;
List l2;l2.insertSorted(1);
if(l2.toString()=="1->null"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.toString()<<endl;
List l3;l3.insertBack(1);l3.insertBack(3);
List l4;l4.insertBack(2);l4.insertBack(4);
l3.merge(l4);
if(l3.toString()=="1->2->3->4->null"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l3.toString()<<endl;
List l5;l5.insertBack(1);l5.insertBack(5);
l5.insertSorted(0);
if(l5.toString()=="0->1->5->null"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l5.toString()<<endl;
List l6;List l7;l7.insertBack(1);l7.insertBack(2);
l6.merge(l7);
if(l6.toString()=="1->2->null"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l6.toString()<<endl;
List l8;l8.insertBack(1);l8.insertBack(1);
l8.insertSorted(1);
if(l8.toString()=="1->1->1->null"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l8.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
    int val;
    Node* next;
    Node(int v, Node* n = nullptr) : val(v), next(n) {}
};

class List {
private:
    Node* head;
public:
    List() : head(nullptr) {}
    ~List() { while(head){Node*t=head;head=head->next;delete t;} }
    List(const List& o) {
        if(!o.head){head=nullptr;return;}
        head=new Node(o.head->val);
        Node*s=o.head->next,*d=head;
        while(s){d->next=new Node(s->val);d=d->next;s=s->next;}
    }
    void insertFront(int val) { head = new Node(val, head); }
    void insertBack(int val) {
        if(!head){head=new Node(val);return;}
        Node*c=head;while(c->next)c=c->next;c->next=new Node(val);
    }
    bool isEmpty() const { return head == nullptr; }
    int length() const { int n=0;Node*c=head;while(c){n++;c=c->next;}return n; }
    string toString() const {
        string s;Node*c=head;
        while(c){s+=to_string(c->val)+"->";c=c->next;}
        return s+"null";
    }

    void insertSorted(int val) {
    }

    void merge(const List& other) {
    }
};`
  },
  {
    id: 98,
    category: "Liste",
    difficulty: "Difficile",
    title: "operator= e removeAll",
    description: "Implementa:\n- List& operator=(const List& other): assegnamento con copia profonda. Dealloca la lista corrente prima di copiare. Gestisci auto-assegnamento (l = l).\n- void removeAll(int target): rimuovi TUTTE le occorrenze di target.",
    signature: "List& operator=(const List& other)\nvoid removeAll(int target)",
    publicCases: [
      {
        "input": "l2 = l1; modifica l1",
        "expected": "l2 invariata"
      }
    ],
    hints: [
      "operator=: if(this == &other) return *this;",
      "Dealloca la lista corrente, poi copia come nel copy constructor",
      "removeAll: gestisci cancellazione in testa ripetuta, poi scorri"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l1;l1.insertBack(1);l1.insertBack(2);l1.insertBack(3);
List l2;l2.insertBack(99);
l2=l1;
if(l2.toString()=="1->2->3->null"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l2.toString()<<endl;
l1.insertFront(0);
if(l2.toString()=="1->2->3->null"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.toString()<<endl;
List l3;l3.insertBack(1);l3.insertBack(2);l3.insertBack(2);l3.insertBack(3);
l3.removeAll(2);
if(l3.toString()=="1->3->null"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l3.toString()<<endl;
List l4;l4.insertBack(5);l4.insertBack(5);l4.insertBack(5);
l4.removeAll(5);
if(l4.isEmpty()){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l4.toString()<<endl;
List l5;l5.insertBack(1);l5=l5;
if(l5.toString()=="1->null"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l5.toString()<<endl;
List l6;l6.insertBack(3);l6.insertBack(1);l6.insertBack(3);l6.insertBack(3);
l6.removeAll(3);
if(l6.toString()=="1->null"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l6.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
    int val;
    Node* next;
    Node(int v, Node* n = nullptr) : val(v), next(n) {}
};

class List {
private:
    Node* head;

    void clear() {
        while(head){Node*t=head;head=head->next;delete t;}
    }

    void copyFrom(const List& other) {
        if(!other.head){head=nullptr;return;}
        head=new Node(other.head->val);
        Node*s=other.head->next,*d=head;
        while(s){d->next=new Node(s->val);d=d->next;s=s->next;}
    }

public:
    List() : head(nullptr) {}
    ~List() { clear(); }
    List(const List& o) : head(nullptr) { copyFrom(o); }

    List& operator=(const List& other) {
    }

    void removeAll(int target) {
    }

    void insertFront(int val) { head = new Node(val, head); }
    void insertBack(int val) {
        if(!head){head=new Node(val);return;}
        Node*c=head;while(c->next)c=c->next;c->next=new Node(val);
    }
    bool isEmpty() const { return head == nullptr; }
    int length() const { int n=0;Node*c=head;while(c){n++;c=c->next;}return n; }
    string toString() const {
        string s;Node*c=head;
        while(c){s+=to_string(c->val)+"->";c=c->next;}
        return s+"null";
    }
};`
  },
  {
    id: 99,
    category: "Liste",
    difficulty: "Difficile",
    title: "Lista completa: tutte le operazioni",
    description: "Esercizio riepilogativo: implementa la classe List COMPLETA da zero.\nDevi scrivere tutto tu: Node, costruttore, distruttore, copy constructor,\ninsertFront, insertBack, remove, reverse, length, toString.\n\nNon c'è starter code precompilato — scrivi tutto da zero.",
    signature: "struct Node { ... };\nclass List { ... };",
    publicCases: [
      {
        "input": "insertBack(1,2,3) toString()",
        "expected": "\"1->2->3->null\""
      }
    ],
    hints: [
      "Parti dalla struct Node con costruttore",
      "Poi List con head privato",
      "Distruttore: dealloca tutto con while + delete",
      "Copy constructor: duplica nodo per nodo"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
__USER_CODE__
int main(){
int p=0;
List l;l.insertBack(1);l.insertBack(2);l.insertBack(3);
if(l.toString()=="1->2->3->null"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l.toString()<<endl;
l.reverse();
if(l.toString()=="3->2->1->null"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l.toString()<<endl;
List l2(l);
l.insertFront(99);
if(l2.toString()=="3->2->1->null"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l2.toString()<<endl;
if(l.length()==4){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l.length()<<endl;
l2.remove(2);
if(l2.toString()=="3->1->null"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l2.toString()<<endl;
List l3;l3.insertFront(5);l3.insertBack(10);
if(l3.toString()=="5->10->null"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l3.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `struct Node {
};

class List {
private:
public:
};`
  },
  {
    id: 100,
    category: "Esame - Liste",
    difficulty: "Facile",
    title: "sum (ricorsiva)",
    description: "Calcola ricorsivamente la somma di tutti gli elementi della lista.\n\nLa classe ll è già fornita con: head, prepend, append, print.\nDevi implementare sum() e sum_rec(cell* curr).",
    signature: "int sum() const\nint sum_rec(cell* curr) const",
    publicCases: [
      {
        "input": "[1, 2, 3]",
        "expected": "6"
      }
    ],
    hints: [
      "sum() chiama sum_rec(head)",
      "curr == nullptr -> return 0",
      "return curr->value + sum_rec(curr->next)"
    ],
    testCode: `#include<iostream>
#include<stdexcept>
using namespace std;
struct cell{int value;cell*next;};
class ll{
public:
cell*head;
ll():head(nullptr){}
~ll(){while(head){cell*t=head;head=head->next;delete t;}}
void append(int e){cell*n=new cell{e,nullptr};if(!head){head=n;}else{cell*c=head;while(c->next)c=c->next;c->next=n;}}
__USER_CODE__
};
int main(){
int p=0;
ll l1;l1.append(1);l1.append(2);l1.append(3);
if(l1.sum()==6){cout<<"PASS 0 got="<<l1.sum()<<endl;p++;}else cout<<"FAIL 0 got="<<l1.sum()<<endl;
ll l2;
if(l2.sum()==0){cout<<"PASS 1 got="<<l2.sum()<<endl;p++;}else cout<<"FAIL 1 got="<<l2.sum()<<endl;
ll l3;l3.append(0);l3.append(1);l3.append(2);l3.append(3);l3.append(4);
if(l3.sum()==10){cout<<"PASS 2 got="<<l3.sum()<<endl;p++;}else cout<<"FAIL 2 got="<<l3.sum()<<endl;
ll l4;l4.append(1);
if(l4.sum()==1){cout<<"PASS 3 got="<<l4.sum()<<endl;p++;}else cout<<"FAIL 3 got="<<l4.sum()<<endl;
ll l5;l5.append(-1);l5.append(1);
if(l5.sum()==0){cout<<"PASS 4 got="<<l5.sum()<<endl;p++;}else cout<<"FAIL 4 got="<<l5.sum()<<endl;
ll l6;l6.append(10);l6.append(20);l6.append(30);
if(l6.sum()==60){cout<<"PASS 5 got="<<l6.sum()<<endl;p++;}else cout<<"FAIL 5 got="<<l6.sum()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int sum_rec(cell* curr) const {
}
int sum() const {
}`
  },
  {
    id: 101,
    category: "Esame - Liste",
    difficulty: "Medio",
    title: "remove_all",
    description: "Rimuovi TUTTE le occorrenze di un valore dalla lista.\nGestisci: cancellazione ripetuta in testa, nel mezzo, e valore non presente.",
    signature: "void remove_all(int e)",
    publicCases: [
      {
        "input": "[1,2,1,1,3] remove_all(1)",
        "expected": "[2,3]"
      }
    ],
    hints: [
      "Prima rimuovi dalla testa: while(head && head->value==e)",
      "Poi scorri: if(curr->next->value==e) sgancia e delete",
      "Altrimenti curr=curr->next"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
struct cell{int value;cell*next;};
class ll{
public:
cell*head;
ll():head(nullptr){}
~ll(){while(head){cell*t=head;head=head->next;delete t;}}
void append(int e){cell*n=new cell{e,nullptr};if(!head){head=n;}else{cell*c=head;while(c->next)c=c->next;c->next=n;}}
string toString()const{string s;cell*c=head;while(c){s+=to_string(c->value);if(c->next)s+=" ";c=c->next;}return s.empty()?"empty":s;}
__USER_CODE__
};
int main(){
int p=0;
ll l1;l1.append(1);l1.append(2);l1.append(1);l1.append(1);l1.append(3);l1.remove_all(1);
if(l1.toString()=="2 3"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l1.toString()<<endl;
ll l2;l2.append(1);l2.append(1);l2.append(1);l2.remove_all(1);
if(l2.toString()=="empty"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.toString()<<endl;
ll l3;l3.append(1);l3.append(2);l3.append(3);l3.remove_all(9);
if(l3.toString()=="1 2 3"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l3.toString()<<endl;
ll l4;l4.remove_all(1);
if(l4.toString()=="empty"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l4.toString()<<endl;
ll l5;l5.append(5);l5.append(5);l5.append(3);l5.append(5);l5.remove_all(5);
if(l5.toString()=="3"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l5.toString()<<endl;
ll l6;l6.append(1);l6.append(2);l6.append(3);l6.append(2);l6.remove_all(2);
if(l6.toString()=="1 3"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l6.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void remove_all(int e) {
}`
  },
  {
    id: 102,
    category: "Esame - Liste",
    difficulty: "Medio",
    title: "operator== (uguaglianza ricorsiva)",
    description: "Restituisci true se le due liste hanno stessa lunghezza e stessi valori nello stesso ordine.\nImplementa equal_rec come helper ricorsivo.",
    signature: "bool operator==(const ll& other) const\nbool equal_rec(cell* a, cell* b) const",
    publicCases: [
      {
        "input": "[1,2,3] == [1,2,3]",
        "expected": "true"
      }
    ],
    hints: [
      "equal_rec: entrambi nullptr -> true",
      "Uno solo nullptr -> false",
      "Valori diversi -> false, altrimenti ricorri su next"
    ],
    testCode: `#include<iostream>
using namespace std;
struct cell{int value;cell*next;};
class ll{
public:
cell*head;
ll():head(nullptr){}
~ll(){while(head){cell*t=head;head=head->next;delete t;}}
void append(int e){cell*n=new cell{e,nullptr};if(!head){head=n;}else{cell*c=head;while(c->next)c=c->next;c->next=n;}}
__USER_CODE__
};
int main(){
int p=0;
ll a;a.append(1);a.append(2);a.append(3);
ll b;b.append(1);b.append(2);b.append(3);
if(a==b){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0"<<endl;
ll c;c.append(1);c.append(2);
if(!(a==c)){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1"<<endl;
ll d;d.append(1);d.append(3);
if(!(a==d)){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2"<<endl;
ll e1;ll e2;
if(e1==e2){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3"<<endl;
ll f;f.append(5);
ll g;g.append(5);
if(f==g){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4"<<endl;
ll h;h.append(1);ll i;i.append(2);
if(!(h==i)){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5"<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool equal_rec(cell* a, cell* b) const {
}
bool operator==(const ll& other) const {
}`
  },
  {
    id: 103,
    category: "Esame - Liste",
    difficulty: "Medio",
    title: "operator+ (concatenazione)",
    description: "Restituisci una NUOVA lista che è la concatenazione di this seguita da other.\nEntrambe le liste sorgenti devono restare invariate.",
    signature: "ll operator+(const ll& other) const",
    publicCases: [
      {
        "input": "[1,2] + [3,4]",
        "expected": "[1,2,3,4]"
      }
    ],
    hints: [
      "Crea una copia di this con il copy constructor: ll res(*this)",
      "Scorri other e append ogni valore a res",
      "return res"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
struct cell{int value;cell*next;};
class ll{
public:
cell*head;
ll():head(nullptr){}
~ll(){while(head){cell*t=head;head=head->next;delete t;}}
ll(const ll&o){head=nullptr;cell*c=nullptr,*s=o.head;while(s){cell*n=new cell{s->value,nullptr};if(!head){head=n;c=n;}else{c->next=n;c=c->next;}s=s->next;}}
void append(int e){cell*n=new cell{e,nullptr};if(!head){head=n;}else{cell*c=head;while(c->next)c=c->next;c->next=n;}}
string toString()const{string s;cell*c=head;while(c){s+=to_string(c->value);if(c->next)s+=" ";c=c->next;}return s.empty()?"empty":s;}
__USER_CODE__
};
int main(){
int p=0;
ll a;a.append(1);a.append(2);ll b;b.append(3);b.append(4);
ll c=a+b;
if(c.toString()=="1 2 3 4"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<c.toString()<<endl;
ll d;ll e;e.append(1);e.append(2);
ll f=d+e;
if(f.toString()=="1 2"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<f.toString()<<endl;
ll g;g.append(1);g.append(2);ll h;
ll i=g+h;
if(i.toString()=="1 2"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<i.toString()<<endl;
ll j;ll k;
ll l=j+k;
if(l.toString()=="empty"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l.toString()<<endl;
if(a.toString()=="1 2"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<a.toString()<<endl;
if(b.toString()=="3 4"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<b.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `ll operator+(const ll& other) const {
}`
  },
  {
    id: 104,
    category: "Esame - Liste",
    difficulty: "Medio",
    title: "operator= (assegnamento)",
    description: "Implementa l'operatore di assegnamento con copia profonda.\nDealloca la lista corrente, poi copia other. Gestisci auto-assegnamento (l = l).",
    signature: "ll& operator=(const ll& other)",
    publicCases: [
      {
        "input": "b = a; modifica a",
        "expected": "b invariata"
      }
    ],
    hints: [
      "if(this == &other) return *this",
      "Dealloca: while(head) delete...",
      "Copia come nel copy constructor",
      "return *this"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
struct cell{int value;cell*next;};
class ll{
public:
cell*head;
ll():head(nullptr){}
~ll(){while(head){cell*t=head;head=head->next;delete t;}}
ll(const ll&o){head=nullptr;cell*c=nullptr,*s=o.head;while(s){cell*n=new cell{s->value,nullptr};if(!head){head=n;c=n;}else{c->next=n;c=c->next;}s=s->next;}}
void append(int e){cell*n=new cell{e,nullptr};if(!head){head=n;}else{cell*c=head;while(c->next)c=c->next;c->next=n;}}
void prepend(int e){head=new cell{e,head};}
string toString()const{string s;cell*c=head;while(c){s+=to_string(c->value);if(c->next)s+=" ";c=c->next;}return s.empty()?"empty":s;}
__USER_CODE__
};
int main(){
int p=0;
ll a;a.append(1);a.append(2);a.append(3);
ll b;b.append(99);b=a;
if(b.toString()=="1 2 3"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<b.toString()<<endl;
a.prepend(0);
if(b.toString()=="1 2 3"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<b.toString()<<endl;
ll c;c.append(5);c=c;
if(c.toString()=="5"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<c.toString()<<endl;
ll d;ll e;e.append(1);d=e;
if(d.toString()=="1"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<d.toString()<<endl;
ll f;f.append(1);ll g;f=g;
if(f.toString()=="empty"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<f.toString()<<endl;
ll h;ll i;h=i;
if(h.toString()=="empty"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<h.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `ll& operator=(const ll& other) {
}`
  },
  {
    id: 105,
    category: "Esame - Liste",
    difficulty: "Difficile",
    title: "flip (reverse ricorsivo)",
    description: "Inverti la lista in-place usando ricorsione.\nflip() chiama flip_rec(head). La funzione ricorsiva usa cell*& (reference to pointer).",
    signature: "void flip()\nvoid flip_rec(cell*& curr)",
    publicCases: [
      {
        "input": "[1,2,3]",
        "expected": "[3,2,1]"
      }
    ],
    hints: [
      "Caso base: !curr || !curr->next -> return",
      "Ricorri su curr->next",
      "Dopo la ricorsione: curr->next->next = curr; curr->next = nullptr",
      "Aggiorna head al nuovo primo elemento"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
struct cell{int value;cell*next;};
class ll{
public:
cell*head;
ll():head(nullptr){}
~ll(){while(head){cell*t=head;head=head->next;delete t;}}
void append(int e){cell*n=new cell{e,nullptr};if(!head){head=n;}else{cell*c=head;while(c->next)c=c->next;c->next=n;}}
string toString()const{string s;cell*c=head;while(c){s+=to_string(c->value);if(c->next)s+=" ";c=c->next;}return s.empty()?"empty":s;}
__USER_CODE__
};
int main(){
int p=0;
ll l1;l1.append(1);l1.append(2);l1.append(3);l1.flip();
if(l1.toString()=="3 2 1"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l1.toString()<<endl;
ll l2;l2.flip();
if(l2.toString()=="empty"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.toString()<<endl;
ll l3;l3.append(1);l3.flip();
if(l3.toString()=="1"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l3.toString()<<endl;
ll l4;l4.append(1);l4.append(2);l4.flip();
if(l4.toString()=="2 1"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l4.toString()<<endl;
ll l5;for(int i=1;i<=5;i++)l5.append(i);l5.flip();
if(l5.toString()=="5 4 3 2 1"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l5.toString()<<endl;
ll l6;l6.append(10);l6.append(20);l6.append(30);l6.flip();l6.flip();
if(l6.toString()=="10 20 30"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l6.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void flip_rec(cell*& curr) {
}
void flip() {
}`
  },
  {
    id: 106,
    category: "Esame - Liste",
    difficulty: "Difficile",
    title: "double_even (duplica nodi pari)",
    description: "Per ogni nodo con valore pari, inserisci una copia immediatamente dopo.\nRicorsione con cell*& per manipolare i puntatori.",
    signature: "void double_even()\nvoid double_even_rec(cell*& curr)",
    publicCases: [
      {
        "input": "[2,7,0,5]",
        "expected": "[2,2,7,0,0,5]"
      }
    ],
    hints: [
      "curr == nullptr -> return",
      "Se curr->value è pari: crea nuovo nodo, inseriscilo dopo curr",
      "IMPORTANTE: ricorri su nc->next (dopo il nuovo nodo) per non duplicare all'infinito",
      "Se dispari: ricorri su curr->next"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
struct cell{int value;cell*next;};
class ll{
public:
cell*head;
ll():head(nullptr){}
~ll(){while(head){cell*t=head;head=head->next;delete t;}}
void append(int e){cell*n=new cell{e,nullptr};if(!head){head=n;}else{cell*c=head;while(c->next)c=c->next;c->next=n;}}
string toString()const{string s;cell*c=head;while(c){s+=to_string(c->value);if(c->next)s+=" ";c=c->next;}return s.empty()?"empty":s;}
__USER_CODE__
};
int main(){
int p=0;
ll l1;l1.append(2);l1.append(7);l1.append(0);l1.append(5);l1.double_even();
if(l1.toString()=="2 2 7 0 0 5"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l1.toString()<<endl;
ll l2;l2.append(1);l2.append(3);l2.append(5);l2.double_even();
if(l2.toString()=="1 3 5"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.toString()<<endl;
ll l3;l3.append(2);l3.append(4);l3.append(6);l3.double_even();
if(l3.toString()=="2 2 4 4 6 6"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l3.toString()<<endl;
ll l4;l4.double_even();
if(l4.toString()=="empty"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l4.toString()<<endl;
ll l5;l5.append(0);l5.double_even();
if(l5.toString()=="0 0"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l5.toString()<<endl;
ll l6;l6.append(1);l6.append(2);l6.double_even();
if(l6.toString()=="1 2 2"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l6.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void double_even_rec(cell*& curr) {
}
void double_even() {
}`
  },
  {
    id: 107,
    category: "Esame - Liste",
    difficulty: "Difficile",
    title: "remove_up_to_sum",
    description: "Rimuovi ogni nodo la cui suffix-sum (somma dal nodo corrente fino alla fine) è <= s.\n\nEsempio: [3,1,2,4,5] con s=6: suffix-sums sono [15,12,11,9,5]. Solo 5<=6, quindi rimuovi l'ultimo nodo.\nRisultato: [3,1,2,4].",
    signature: "void remove_up_to_sum(int s)\nint remove_up_to_sum_rec(int s, cell*& curr)",
    publicCases: [
      {
        "input": "[3,1,2,4,5] s=6",
        "expected": "[3,1,2,4]"
      }
    ],
    hints: [
      "Ricorri fino alla fine per calcolare la suffix-sum dal fondo",
      "remove_up_to_sum_rec restituisce la suffix-sum dal nodo corrente",
      "Se suffix_sum <= s: sgancia il nodo e delete",
      "Altrimenti: tienilo"
    ],
    testCode: `#include<iostream>
#include<string>
using namespace std;
struct cell{int value;cell*next;};
class ll{
public:
cell*head;
ll():head(nullptr){}
~ll(){while(head){cell*t=head;head=head->next;delete t;}}
void append(int e){cell*n=new cell{e,nullptr};if(!head){head=n;}else{cell*c=head;while(c->next)c=c->next;c->next=n;}}
string toString()const{string s;cell*c=head;while(c){s+=to_string(c->value);if(c->next)s+=" ";c=c->next;}return s.empty()?"empty":s;}
__USER_CODE__
};
int main(){
int p=0;
ll l1;l1.append(3);l1.append(1);l1.append(2);l1.append(4);l1.append(5);l1.remove_up_to_sum(6);
if(l1.toString()=="3 1 2 4"){cout<<"PASS 0"<<endl;p++;}else cout<<"FAIL 0 got="<<l1.toString()<<endl;
ll l2;l2.append(1);l2.append(2);l2.append(3);l2.remove_up_to_sum(10);
if(l2.toString()=="empty"){cout<<"PASS 1"<<endl;p++;}else cout<<"FAIL 1 got="<<l2.toString()<<endl;
ll l3;l3.append(1);l3.append(2);l3.append(3);l3.remove_up_to_sum(0);
if(l3.toString()=="1 2 3"){cout<<"PASS 2"<<endl;p++;}else cout<<"FAIL 2 got="<<l3.toString()<<endl;
ll l4;l4.remove_up_to_sum(5);
if(l4.toString()=="empty"){cout<<"PASS 3"<<endl;p++;}else cout<<"FAIL 3 got="<<l4.toString()<<endl;
ll l5;l5.append(5);l5.append(5);l5.remove_up_to_sum(5);
if(l5.toString()=="5 5"){cout<<"PASS 4"<<endl;p++;}else cout<<"FAIL 4 got="<<l5.toString()<<endl;
ll l6;l6.append(1);l6.append(1);l6.append(1);l6.remove_up_to_sum(2);
if(l6.toString()=="1 1 1"){cout<<"PASS 5"<<endl;p++;}else cout<<"FAIL 5 got="<<l6.toString()<<endl;
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int remove_up_to_sum_rec(int s, cell*& curr) {
}
void remove_up_to_sum(int s) {
}`
  },
  {
    id: 108,
    category: "Liste",
    difficulty: "Medio",
    title: "DLL: Inserimento in coda",
    description: "In una lista doppiamente concatenata con puntatori head e tail, implementa l'inserimento in coda.",
    signature: "void insertBack(int val)",
    publicCases: [
      {
        "input": "insertBack(10); insertBack(20)",
        "expected": "10 <-> 20"
      }
    ],
    hints: [
      "Crea nuovo nodo",
      "Aggiorna prev e next"
    ],
    testCode: `#include<iostream>
using namespace std;
struct Node{int val;Node*next;Node*prev;};
class DLL{public:Node*head;Node*tail;DLL():head(nullptr),tail(nullptr){}
__USER_CODE__
};
int main(){
DLL d;int p=0;int v[]={1,2,3,4,5,6,7,8,9,10};
for(int i=0;i<10;i++){d.insertBack(v[i]);if(d.tail && d.tail->val==v[i])p++;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void insertBack(int val) {

}`
  },
  {
    id: 109,
    category: "Liste",
    difficulty: "Difficile",
    title: "DLL: Rimozione nodo",
    description: "Rimuovi la prima occorrenza di un valore in una lista doppiamente concatenata.",
    signature: "bool remove(int val)",
    publicCases: [
      {
        "input": "10 <-> 20 <-> 30, remove(20)",
        "expected": "10 <-> 30"
      }
    ],
    hints: [
      "Trova il nodo",
      "Aggiorna i puntatori dei vicini"
    ],
    testCode: `#include<iostream>
using namespace std;
struct Node{int val;Node*next;Node*prev;};
class DLL{public:Node*head;Node*tail;DLL():head(nullptr),tail(nullptr){}
void insert(int v){Node*n=new Node{v,nullptr,tail};if(tail)tail->next=n;else head=n;tail=n;}
__USER_CODE__
};
int main(){
int p=0;for(int i=0;i<10;i++){DLL d;d.insert(10);d.insert(20);d.insert(30);d.remove(20);if(d.head && d.head->next==d.tail)p++;else if(!d.head)p++;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool remove(int val) {

}`
  },
  {
    id: 110,
    category: "Classi",
    difficulty: "Medio",
    title: "Overloading: Somma Punti",
    description: "Sovraccarica l'operatore + per la classe Punto2D.",
    signature: "Punto2D operator+(const Punto2D& other) const",
    publicCases: [
      {
        "input": "Punto2D(1,2) + Punto2D(3,4)",
        "expected": "Punto2D(4,6)"
      }
    ],
    hints: [
      "Ritorna nuovo Punto2D"
    ],
    testCode: `#include<iostream>
using namespace std;
class Punto2D{public:double x,y;Punto2D(double _x,double _y):x(_x),y(_y){}
__USER_CODE__
};
int main(){
int p=0;for(int i=0;i<10;i++){Punto2D a(i,1),b(1,i);Punto2D c=a+b;if(c.x==i+1 && c.y==i+1)p++;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `Punto2D operator+(const Punto2D& other) const {

}`
  },
  {
    id: 111,
    category: "Classi",
    difficulty: "Medio",
    title: "Overloading: Confronto Frazioni",
    description: "Sovraccarica l'operatore == per confrontare due frazioni.",
    signature: "bool operator==(const Frazione& other) const",
    publicCases: [
      {
        "input": "Frazione(1,2) == Frazione(2,4)",
        "expected": "true"
      }
    ],
    hints: [
      "Prodotti incrociati"
    ],
    testCode: `#include<iostream>
using namespace std;
class Frazione{public:int n,d;Frazione(int _n,int _d):n(_n),d(_d){}
__USER_CODE__
};
int main(){
int p=0;for(int i=1;i<=10;i++){Frazione a(1,i),b(2,2*i);if(a==b)p++;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool operator==(const Frazione& other) const {

}`
  },
  {
    id: 112,
    category: "Liste",
    difficulty: "Medio",
    title: "Lista Circolare: Lunghezza",
    description: "Conta i nodi in una lista circolare.",
    signature: "int length() const",
    publicCases: [
      {
        "input": "3 nodi in cerchio",
        "expected": "3"
      }
    ],
    hints: [
      "Usa do-while"
    ],
    testCode: `#include<iostream>
using namespace std;
struct Node{int val;Node*next;};
class Circular{public:Node*head;Circular():head(nullptr){}
void add(int v){Node*n=new Node{v,head};if(!head){n->next=n;head=n;}else{Node*c=head;while(c->next!=head)c=c->next;c->next=n;}}
__USER_CODE__
};
int main(){
int p=0;for(int i=1;i<=10;i++){Circular c;for(int j=0;j<i;j++)c.add(j);if(c.length()==i)p++;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int length() const {

}`
  },
  {
    id: 113,
    category: "Liste",
    difficulty: "Difficile",
    title: "Lista Circolare: Inserimento",
    description: "Inserisci un nuovo valore in una lista circolare.",
    signature: "void insert(int val)",
    publicCases: [
      {
        "input": "insert(10)",
        "expected": "10 -> (torna a 10)"
      }
    ],
    hints: [
      "Trova ultimo nodo"
    ],
    testCode: `#include<iostream>
using namespace std;
struct Node{int val;Node*next;};
class Circular{public:Node*head;Circular():head(nullptr){}
__USER_CODE__
};
int main(){
int p=0;for(int i=1;i<=10;i++){Circular c;for(int j=0;j<i;j++)c.insert(j);int count=0;if(c.head){Node*t=c.head;do{count++;t=t->next;}while(t!=c.head);}if(count==i)p++;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `void insert(int val) {

}`
  },
  {
    id: 114,
    category: "Stack",
    difficulty: "Medio",
    title: "Stack: Bilanciamento Parentesi",
    description: "Verifica se una stringa di parentesi è bilanciata.",
    signature: "bool isBalanced(string s)",
    publicCases: [
      {
        "input": "{[()]}",
        "expected": "true"
      }
    ],
    hints: [
      "Usa std::stack"
    ],
    testCode: `#include<iostream>
#include<string>
#include<stack>
using namespace std;
__USER_CODE__
int main(){
string t[]={"{[()]}","()","[()]","{","}","()[","(]","((()))","","[](){}"};
bool e[]={1,1,1,0,0,0,0,1,1,1,1};
int p=0;for(int i=0;i<10;i++){if(isBalanced(t[i])==e[i])p++;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `bool isBalanced(string s) {

}`
  },
  {
    id: 115,
    category: "Stack",
    difficulty: "Difficile",
    title: "Stack: Valutazione Postfissa",
    description: "Valuta un'espressione RPN.",
    signature: "int evaluateRPN(string s)",
    publicCases: [
      {
        "input": "23+",
        "expected": "5"
      }
    ],
    hints: [
      "Usa stack di int"
    ],
    testCode: `#include<iostream>
#include<string>
#include<stack>
using namespace std;
__USER_CODE__
int main(){
string t[] = {"23+", "52*", "93/", "84-", "23+4*", "512+*", "9", "22+", "12+3+", "82/"};
int e[] = {5, 10, 3, 4, 20, 15, 9, 4, 6, 4};
int p=0;for(int i=0;i<10;i++){if(evaluateRPN(t[i])==e[i])p++;}
cout<<"SCORE "<<p<<"/10"<<endl;}`,
    starterCode: `int evaluateRPN(string s) {

}`
  }
];