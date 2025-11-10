---
title: "Vizualizare stocuri"
sidebar_position: 2
description: "Ghid pentru vizualizarea stocurilor de gestiune în Fluentis ERP pentru o gestionare eficientă a resurselor logistice."
schema: "TechArticle"
tags: ["gestiune", "stocuri", "Fluentis"]
keywords: ["Fluentis ERP", "stocuri", "gestiune", "resurse logistice"]
---

# Vizualizare stocuri

:::important
La ce servește  
Introducerea în vizualizarea stocurilor în Fluentis reprezintă un element esențial pentru gestionarea eficientă a **gestiunii**. Această funcționalitate permite operatorilor să extragă în mod simplu și practic stocurile de gestiune, permițând monitorizarea și compararea stocului fizic cu cel scriptic.

Vizualizarea stocurilor oferă posibilitatea de a grupa datele pe articol, furnizând și un detaliu pentru fiecare **gestiune**. Aceasta înseamnă că este posibilă vizualizarea mai multor rânduri ale aceluiași articol, în cazul în care acesta se află în gestiuni diferite. În plus, operatorul are posibilitatea de a filtra datele în funcție de locație, proiect, client/furnizor sau lot, oferind astfel o imagine completă și detaliată a stocurilor în raport cu diferitele contexte de utilizare.

În tab *Detaliu*, sunt accesibile informații suplimentare despre *mișcările de gestiune*, iar din aceeași filă se pot genera *înregistrări de gestiune* pentru unul sau mai multe articole, atunci când acestea aparțin aceleași gestiuni. Această flexibilitate permite o operativitate eficientă, făcând din Fluentis ERP un instrument puternic pentru gestionarea resurselor logistice.
:::

Form-ul permite operatorului să extragă cu ușurință *stocurile de gestiune* pentru a controla gestiunea și corespondența dintre stocul fizic și cel scriptic.

Prin intermediul filtrelor, este posibilă efectuarea unei căutări specifice, conform parametrilor și vizualizarea rezultatului interogării în tabelele de rezultate. Aceste rezultate pot fi grupate după diferiți parametri pentru a facilita citirea datelor. Din fereastră este de asemenea posibilă inserarea rapidă a unor *înregistrări de gestiune*.

Rezultatele căutării sunt împărțite în mai multe file:

## Articol

- Rezultatele sunt grupate după articol și sunt specificate datele: clasă, cod articol, descriere, a doua descriere, variantă (dacă există), descriere variantă (dacă există), cantitate și unitate de măsură.

## Gestiune

- Rezultatele sunt grupate după gestiune și sunt specificate, pe lângă datele din fila articol, și gestiunea și descrierea sa.

## Locație

- Rezultatele sunt grupate după locație și sunt specificate, pe lângă valorile din fila articol, și locația, descrierea și starea ei.

## Proiecte

- Rezultatele sunt grupate după proiect și sunt specificate, pe lângă valorile din fila articol, și numărul, anul și descrierea articolului proiectului.

## Client/Furnizor

- Rezultatele sunt grupate după client/furnizor (prezenți în *înregistrările de gestiune*) și sunt specificate, pe lângă valorile din fila articol, și datele clientului/furnizorului.

## Lot

- Dacă există articole gestionate pe loturi, rezultatele sunt grupate după lot și sunt specificate, pe lângă valorile din fila articol, și valorile gestiunii, lotului și cantitatea disponibilă.

## Comandă de producție

- Rezultatele sunt grupate după *comandă de producție* și sunt specificate, pe lângă valorile din fila articol, și valorile gestiunii, locației, numărul și anul comenzii de producție.

## Detaliu

- Este detaliul maxim al rezultatelor, grupat după toate filele anterioare. Sunt specificate datele: clasă, cod articol, descriere articol, a doua descriere articol, variantă, descriere variantă, opțiune, descriere opțiune, gestiune, locație, număr comandă, an comandă, descriere client/furnizor, lot, cantitate disponibilă, cantitate stoc, unitate de măsură și starea locației.

### Generare înregistrări

În tab **Detaliu** stocului articol este posibilă utilizarea butonului **Generare înregistrări** pentru a introduce *înregistrări de gestiune*.

**Procedură**:
1. Selectați un *Articol* din tabelul de rezultate.
2. Alegeți o *gestiune* din filtre.
3. Setați vizualizarea stocurilor cu bifă pe **Vizualizare stoc** *Pozitiv* sau *Negativ* în funcție de dorința de a crea o înregistrare de *descărcare* sau *încărcare*.
4. Apăsați butonul *Generare înregistrări*, care va deschide formularul *Mișcare*, unde este necesar să introduceți valorile pentru *Șablon*, *Cantitate*, *Data înregistrării* și, eventual, *Locația*. **Șabloanele de gestiune** prezente în listă sunt de tip *Încărcare* dacă este activă vizualizarea stocurilor *Negative* și de tip *Descărcare* dacă este activă vizualizarea stocurilor *Pozitive*.
5. După completarea câmpurilor în formularul *Mișcare*, apăsând butonul *OK* se va deschide **Înregistrarea** tocmai creată pentru eventuale modificări, iar fereastra de *Vizualizare stocuri* va fi deja actualizată conform înregistrării inserate.

Când se introduce în formularul *Mișcare* un **Șablon** cu contrapartidă, acesta va fi propus în câmpul **Șablon CPT** împreună cu **Locația** sa, dacă este codificată în tabelul șabloanelor.  
Dacă *Locația* este ștearsă, în înregistrare va fi inserată cea codificată în [Harta locațiilor pe articol](/docs/logistics/warehouse/location/item-location-map), dacă există, altfel câmpul va rămâne gol.

### Resetarea stocurilor

În fila **Detaliu** este posibilă resetarea în masă a stocurilor de gestiune. De obicei, această funcție este utilizată atunci când în sistem există date incoerente despre stocuri negative care trebuie resetate.

**Procedură**:
1. Alegeți o *gestiune* din filtre.
2. Setați vizualizarea stocurilor cu bifă pe **Vizualizare stoc** *Pozitiv* sau *Negativ*.
3. În fila *Detaliu* a stocului articolului, selectați toate articolele care trebuie resetate.
4. Apăsați butonul *Generare înregistrări*, care va deschide formularul *Mișcări*, din care alegeți **șablonul** și, fără a specifica cantitatea, apăsați *OK*. În acest mod, se va observa resetarea stocurilor articolelor dorite.

## Rezumat și detalii suplimentare

În acest document am explorat funcționalitatea de vizualizare a stocurilor în Fluentis ERP, evidențiind importanța gestionării eficiente a resurselor de gestiune. Au fost descrise diferitele moduri de grupare a datelor și procedurile pentru generarea **înregistrărilor de gestiune** și resetarea stocurilor.

Pentru informații suplimentare, consultați secțiunile referitoare la [Harta locațiilor pe articol](/docs/logistics/warehouse/location/item-location-map) și la gestionarea **înregistrărilor de gestiune**.
