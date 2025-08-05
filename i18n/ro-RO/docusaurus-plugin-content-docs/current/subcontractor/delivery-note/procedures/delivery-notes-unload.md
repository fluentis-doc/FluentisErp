---
title: Descărcare avize de livrare
sidebar_position: 1
---

Procedura se află pe calea **Sistem lohn > Avize de livrare > Proceduri > Descărcare avize** și permite descărcarea din gestiune a avizelor de livrare în sistem lohn deja listate și încă nedescărcate.

## Filtru

Permite filtrarea avizelor de livrare în funcție de terțul căruia îi sunt adresate, în baza datei avizului (De la…până la…), în funcție de numărul avizelor etc.

#### Butoane specifice

> **Caută**: buton pentru aplicarea filtrelor de căutare la întregul set de avize de livrare introduse, verificate și încă neînregistrate.  
> **Descărcare**: apelează procedura care execută înregistrarea pentru avizul de livrare și, prin urmare, creează mișcările de gestiune aferente.

#### Câmpuri specifice

**Data înregistrare gestiune**: setat implicit la data curentă. Utilizatorul, modificând această dată, poate decide ca înregistrarea de gestiune să fie efectuată la o dată diferită de cea curentă.

**Descărcare**: după selectate avizelor de livrare, acest buton permite executarea înregistrărilor de gestiune. Simultan, aplicația efectuează descărcarea din gestiune de prelevare a materialelor ce urmează a fi livrate la terț și încărcarea acestora în gestiunea terțului.

## Rezumat  

Permite executarea rollback-uli operațiunii de înregistrare a avizelor de livrare, restabilind astfel situația anterioară acestei operațiuni. În antetul acestui tab există câteva filtre de căutare, care permit utilizatorului să selecteze operațiunile filtrând după număr descărcare, dată descărcare avize, număr aviz.

Rezultatele sunt vizibile în tabelul aflat în partea superioară a ferestrei, denumită **Descărcare avize**.  
Selectând un rând din acest tabel, în partea inferioară a formului se pot vizualiza avizelor de livrare descărcate (în tabul *avize* corespunzător), precum și înregistrările de gestiune aferente, generate automat de descărcarea aviz-ului selectat din tabul *avize* (în tabul dedicat *înregistrare*).

#### Butoane specifice

> **Caută**: buton pentru căutarea avizelor de livrare deja introduse, tipărite și descărcate.  
> **Șterge**: apelează procedura care execută rollback-ul întregii operațiuni de descărcare a avizului selectat în tabelul *Descărcare avize*; astfel, dacă prin aceeași operațiune de înregistrare au fost descărcate mai multe avize, toate aceste avize vor fi readuse la starea de *nedescărcate*.  
> **Restaurare avize**: apelează procedura care execută rollback-ul înregistrării avizelor selectate în tabelul inferioar, din tabul *avize*.  
> **Restaurare**: apelează procedura care execută ștergerea înregistrărilor de gestiune selectate în tabul *înregistrare*, fără a readuce avizul aferent în starea *nedescărcat*. Se recomandă să se folosească acest buton doar dacă este strict necesar.