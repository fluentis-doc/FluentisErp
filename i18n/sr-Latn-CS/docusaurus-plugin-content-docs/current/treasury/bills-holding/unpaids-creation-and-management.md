---
title: Kreiranje i upravljanje potraživanjima
sidebar_position: 6
---

Forma se nalazi na putanji **Riznica > Potraživanja > Kreiraj** potraživanje i omogućuje kreiranje *novog* potraživanja.

## Kako kreirati potraživanje

1. Nakon otvaranja forme, iako je moguće ručno popuniti polja, **Korišteno** naredbu ***Preuzimanje podataka*** (na traci izbornika) za dohvat potraživanja koji će postati efekt, putem odgovarajućeg dijaloškog prozora i pretrage koja se otvara.

2. Iz dijaloškog prozora koji se pojavi, odaberi efekt, eventualno koristeći dostupne filtre, i pritisni **Označi**. Svi detalji potraživanja će se automatski ispuniti, kao što su iznos, dužnik, broj, tip efekta itd., čitajući ih iz samog efekta.

3. **Dodaj** ručno **Troškove** banke i druge vrijednosti u kartici **Obavijest o terećenju** kako bi se kasnije moglo pristupiti knjiženju i naknadnom terećenju dužnika za ove iznose. Neka polja mogu biti automatizirana, poput zakonskih kamata i bankovnih troškova, pravilnim podešavanjem bankovne evidencije i [**općih parametara modula**](/docs/configurations/parameters/treasury/unpaids-parameters) potraživanja (polje Tip kamate).

4. **Spremi** kreirano potraživanje

Obrazac **Upravljanje neplaćenim** potraživanjima prikazuje fiksni zaglavni dio s osnovnim podacima o potraživanju, a donji dio je podijeljen u 4 detaljna taba i peti za dodavanje dokumenata:

## 1. Fiksno zaglavlje

Sadrži opće podatke potraživanja, posebno: 

- polje za **bankarske troškove** koje se može dodatno ručno mijenjati
- **broj** potraživanja koji je jednak broju izvornog efekta 
- razne **statusne zastavice** ovisno o operacijama izvršenim nad potraživanjem, kao što su knjiženje, ispis, konačno naplaćivanje duga i slično

### 1.1 Obavijest o terećenju

Upravlja se za:
- izračun kamata s pripadajućom **Stopa** i **zakonskim zateznim kamatama** (temeljem vrste kamatne stope unesene u parametre modula i razlike u *danima* između datuma dospijeća i datuma kreiranja potraživanja).
- **Naknada za administrativne troškove** (ručno se unose) koji će biti terećeni ponovo izdavanjem zadužnice
- **Povrat ovjere** (ručno se unose) koji će također biti terećeni ponovo izdavanjem zadužnice

### 1.2 Prezentacija
Prikazuje podatke o listi prezentacije povezanoj s izvornim efektom.

### 1.3 Referenca potraživanja

Ovaj tab prikazuje stavke stvorene knjiženjem potraživanja, zajedno s povezanim uplatama.

### 1.4 Referenca izvornog dokumenta

Prikazuje reference na dokumente (stavke/fakture) koji su osnova za nastanak efekata.