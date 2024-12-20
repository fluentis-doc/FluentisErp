---
title: Comandă multiprodus (Comandă multiprodus)
sidebar_position: 5
---

Form-ul de află pe calea **Planificare > Comenzi de producție** și se deschide făcând clic în form-ul **Comenzi de producție** pe butonul **Inserează comandă multiprodus**.

#### Butoane specifice

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters):  permite vizualizarea parametrilor MRP ai articolului;  
> [Listă de materiale](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite vizualizarea listei de materiale a articolului;  
> [Cicluri de lucru](/docs/erp-home/registers/production/routes/new-route): permite vizualizarea ciclului de lucru și a fazelor de producție corespunzătoare articolului.

## Gestionare comenzi multiprodus

Acest tab este identic cu cel prezent în form-ul [Inserare comenzi monoprodus](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

Diferența esențială constă în faptul că nu există o secțiune în care se introduce articolul cu datele sale, așa cum se întâmplă la crearea unei comenzi monoprodus, ci acest spațiu este înlocuit de un tabel care permite introducerea mai multor articole, generând astfel o comandă multiprodus.

Câmpurile prezente în tabel sunt aceleași cu cele ale [comenzii monoprodus](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order); singura diferență este câmpul **Progresiv** care este un câmp editabil și în care se propune un progresiv de linie a *Comenzii de Producție Multiprodus* iar datele de început/sfârșit estimate, data sugerată și datele de început și sfârșit ale previziunilor sunt specificate pentru fiecare articol prezent în comanda multiprodus (rămâne totuși secțiunea Data prevăzută și Data efectivă referitoare la starea generală a comenzii multiprodus).

### Referințe comenzi clienți

Tab-ul conține un tabel de citire, în care apar comenzile clienților legate de comanda de producție de referință atunci când comanda a fost generată din una sau mai multe rânduri de comenzi clienți.  
**Tip/An/Număr**: în aceste coloane sunt afișate *Tipul/Anul/Numărul* comenzii clientului;  
**N./Cantitate/*UM**: în această coloană este afișată cantitatea liniei comenzii clientului;  
**Data bunurilor gata**: în această coloană este afișată data bunurilor gata care a fost setată în linia comenzii clientului;  
**Cont**: în această coloană sunt afișate contul și subcontul clientului căruia îi este adresată comanda clientului.

### Date suplimentare

Acest tab este de asemenea constituit dintr-un tabel în care vor fi raportate toate datele suplimentare legate de articolul prezent în comanda de producție.

## Estimare cost

Toate informațiile referitoare la **Estimare cost** pot fi consultate în pagina [Estimare cost](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra data

Acest tab, care completează tab-ul *Gestionare comenzi multiprodus*, conține întreaga suită de [date suplimentare](/docs/configurations/utility/extra-data/extradata/search-extradata) legate de comanda de producție.

Pentru detalii despre funcționarea comună a formularelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).