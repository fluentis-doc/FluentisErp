---
title: Vizualizarea stocurilor (Visualizzazione giacenze)
sidebar_position: 2
---

:::important Utilizare
Introducerea în vizualizarea stocurilor din Fluentis constituie un element fundamental pentru o gestionare eficientă a gestiunii. Această funcționalitate permite operatorilor să obțină în mod simplu și practic stocurile de gestiune, permițându-le să monitorizeze și să compare stocul fizic cu cel logic.

Vizualizarea stocurilor oferă posibilitatea de a grupa datele după articol, oferind și un detaliu pe gestiune. Aceasta înseamnă că este posibil să vizualizați mai multe rânduri ale aceluiași articol, în cazul în care acesta este prezent în gestiuni diferite. În plus, operatorul are posibilitatea de a filtra datele după locație, proiect, client/furnizor sau lot, oferind astfel o panoramă completă și detaliată a stocurilor în relație cu diferitele contexte de utilizare.

În tab  *Detaliu*, sunt accesibile informații suplimentare despre mișcările de gestiune sunt accesibile, iar din acest tab este posibil să generați înregistrări de gestiune pentru unul sau mai multe articole, când acestea aparțin aceeași gestiune. Această flexibilitate permite o operativitate eficientă, făcând din Fluentis un instrument puternic pentru gestionarea resurselor logistice.
:::

Form-ul permite operatorului să obțină cu ușurință stocurile din gestiune pentru a verifica depozitul și corespondența între stocul fizic și cel logic.

Prin intermediul filtrelor, este posibil să efectuați o căutare specifică, conform parametrilor și să vizualizați rezultatul interogării în tabelele de rezultate. Aceste rezultate pot fi grupate după diferiți parametri pentru a facilita citirea datelor. Din fereastră este de asemenea posibil să se introducă rapid unele înregistrări de gestiune.

Rezultatele căutării sunt împărțite în diferite tab-uri:

## Articol

Rezultatele sunt grupate după articol și sunt specificate valorile clasei, codului articolului, descrierii, descrierii secundare, variantei (dacă este cazul), descrierii variantei (dacă este cazul), cantității și unității de măsură.

## Gestiune

Rezultatele sunt grupate după gestiune și, pe lângă valorile din tab-ul articolului, sunt specificate de asemenea valorile gestiunii și descrierea gestiunii.

## Locație

Rezultatele sunt grupate după locație și, pe lângă valorile din tab-ul articolului, sunt specificate valorile locației, descrierea locației și starea locației.

## Proiecte

Rezultatele sunt grupate după proiect și, pe lângă valorile din tab-ul articolului, sunt specificate valorile numărului, anului și descrierii articolului proiectului.

## Client/Furnizor

Rezultatele sunt grupate după client/furnizor (prezente în înregistrările de gestiune) și sunt specificate, pe lângă valorile din tab-ul articolului, și valorile clientului/furnizorului.

## Lot

Dacă există articole gestionate pe loturi, rezultatele sunt grupate după lot și sunt specificate, pe lângă valorile din tab-ul articolului, și valorile gestiunii, lotului și cantității disponibile.

## Comandă de producție

Rezultatele sunt grupate după comanda de producție și sunt specificate, pe lângă valorile din tab-ul articolului, și valorile gestiunii, descrierii gestiunii, locației, numărului comenzii de producție și anului comenzii de producție.

## Detaliu

Este detaliul maxim al rezultatelor grupate pe toate tab-urile anterioare. Sunt specificate valorile clasei, codului articolului, descrierii articolului, descrierii secundare a articolului, variantei, descrierii variantei, opțiunii, descrierii opțiunii, gestiunii, locației, numărului comenzii, anului comenzii, descrierii clientului/furnizorului, lotului, cantității disponibile, cantității de stoc, unității de măsură și stării locației.

### Generare înregistrări

În tab **Detaliu** pentru stocului articolului, se poate utiliza butonul **Generare înregistrări** pentru a insera înregistrări de gestiune.

#### Procedură

- selectați un *Articol* din tabelul de rezultate,
- alegeți o *gestiune* din filtre,
- setați vizualizarea stocurilor pe **Vizualizare atoc** *Pozitivă* sau *Negativă* în funcție de dorința de a crea o înregistrare de *descărcare* sau de *încărcare*,
- apăsați butonul *Generare înregistrări*, care va deschide form-ul *Mișcare*, unde trebuie să introduceți valorile pentru *Șablon*, *Cantitate*, *Dată înregistrare* și, eventual, *Locația*. Șabloanele de gestiune prezente în combo sunt de tip: *Încărcare* dacă opțiunea de vizualizare a stocurilor *Negative* este activ și de *Descărcare* dacă opțiunea de vizualizare a stocurilor *Pozitive* este activ.
- odată finalizată introducerea câmpurilor în form *Mișcare*, apăsând butonul *OK* va fi deschisă *Înregistrarea* recent creată pentru a putea efectua modificări, iar fereastra de *Vizualizare stocuri* va fi actualizată conform înregistrării inserate.

Când se introduce în form *Mișcare* un șablon cu contrapartidă, acesta va fi propus în câmpul **Șablon CPT** cu **Locația** sa, dacă este codificată în tabelul cauzelor.    
Dacă *Locația* este ștearsă, va fi inserată în înregistrare cea codificată în [Harta locațiilor pe articol](/docs/logistics/warehouse/location/item-location-map), dacă este prezentă, altfel câmpul va rămâne gol.

### Ștergere stocuri

În tab-ul **Detaliu** este posibil să se șterge în mod masiv stocurile de gestiune. De obicei, această funcție este utilizată în cazul în care există date incoerente de stocuri negative în sistem care se doresc a fi anulate.

#### Procedură
- alegeți o *gestiune* din filtre,
- setați vizualizarea stocurilor pe **Vizualizare stoc** *Pozitivă* sau *Negativă*.
- în tab *Detaliu* stoc articol, selectați toate articolele pe care doriți să le ștergeți,
- apăsați butonul *Generare înregistrări*, care va deschide form-ul *Mișcări* din care să alegeți șablonul și, fără a specifica cantitatea, apăsați butonul *OK*.  
În acest fel, stocurile articolelor dorite vor fi șterse.