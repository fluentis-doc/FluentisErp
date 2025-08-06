---
title: Înregistrare rientri
sidebar_position: 1
---

Formul se afă pe calea **Sistem lohn > Reintrări > Proceduri > Înregistrare rientri** și permite să fie înregistrate în gestiune *Reintrări în Sistem lohn* deja controlate și încă neregistrate.

## Filtru

În acest tab, utilizatorul are posibilitatea de a căuta și transfera articolele reintrate în gestiune, conform criteriilor de filtrare disponibile.

#### Butoane specifice

> **Caută**: permite aplicarea filtrelor de căutare asupra întregii baze de date a reintrărilor în sistem lohn introduse, controlate și încă neregistrate;  
> **Descărcare**: permite executarea descărcării reintrărilor selectate din gestiune, conform algoritmilor de descărcare.

#### Câmpuri specifice

**Număr doc. def.**: în această coloană este afișat numărul reintrării în sistem lohn;  
**Data doc. def.**: în această coloană este afișată data reintrării în sistem lohn;  
**Dată înregistrare în gestiune**: se află în zona inferioară a formului și este setată implicit la data curentă, dar poate fi modificată.

Odată ce au fost selectate reintrările în sistem lohn, utilizați butonul *Descărcare* pentru a executa mișcările de gestiune. Concomitent cu această operațiune, aplicația efectuează încărcarea în gestiunea de reintrare a articolelor produse de terț, descărcarea din gestiunea terțului a materialelor utilizate și eventuala încărcare a retururilor în gestiunea specifică pentru retururi.

## Rezumate 

În acest tab este posibil să se execute restaurarea operațiunii de înregistrare a reintrării în sistem lohn, restabilind astfel situația anterioară operațiunii însăși.

Datele din tabelele **Reintrări* și **Înregistrări**, corespund înregistrării descărcării selectate în tabelul superior (după ce datele au fost filtrate).

#### Butoane specifice  
> **Caută**: pentru a căuta reintrările descărcate. Rezultatul acestei proceduri este afișat în tabelul cu rezultate, *Descărcare reintrări*;  
> **Restaurează**: apelează procedura care execută rollback-ul întregii operațiuni de înregistrare a reintrării selectate în tabelul *Descărcare reintrări*. Așadar, dacă în cadrul aceleiași operațiuni de înregistrare au fost înregistrate mai multe reintrări, acestea vor fi readuse la starea *neîncărcat*;  
> **Restaurează reintrări**: apelează procedura care execută rollback-ul înregistrării doar pentru reintrările selectate în tabelul inferioar, din tab *Reintrări*.