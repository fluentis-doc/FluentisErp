---
title: Comandă Multiprodus
sidebar_position: 5
---

Form-ul se află pe calea **Planificare > Comenzi de producție** făcând clic în formularul **Comenzi de producție** pe butonul **Inserare comandă**.

## Butoane specifice

> [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): permite deschiderea parametrilor MRP ai articolului;      
> [Listă componente](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite deschiderea listei care compune articolul;  
> [Cicluri de lucru](/docs/erp-home/registers/production/routes/new-route): permite vizualizarea ciclului de lucru și a fazelor de producție corespunzătoare articolului.

## Gestionare comenzi multiprodus

Acest tab se prezintă la fel ca cel din [Inserare comenzi monoprodus ](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

Diferența principală constă în faptul că nu este prezentă o secțiune în care este introdus articolul cu datele sale aferente, așa cum se întâmplă pentru crearea unei comenzi monoprodus. Acest spațiu este înlocuit de un tabel care permite introducerea mai multor articole, pentru o comandă multiprodus.

Câmpurile prezente în tabel sunt aceleași din comanda monoprodus. Singura diferență este câmpul editabil *Progresiv*, în care este propus un progresiv de linie al *Comenzii de Producție Multiprodus* și datele de început/sfârșit prevăzute; data sugerată și data de început/sfârșit previziune sunt specificate pentru fiecare articol prezent în comanda multiprodus (rămâne totuși secțiunea *Dată prevăzută* și *Dată efectivă* referitoare la starea generală a comenzii multiprodus).

### Referințe ordine clienți

Tab-ul conține un tabel care afișează ordinele clienți asociate comenzii de producție de referință atunci când comanda a fost generată din una sau mai multe linii ordine clienți.
**Tip/An/Număr**: afișează *Tipul/Anul/Numărul* ordinului client în care se află linia pentru care este afișat detaliul;
**N./Cantitate/Unitatea de măsură**: afișează cantitatea liniei ordinului client pentru care este afișat detaliul;
**Dată marfă pregătită**: afișează data mărfii pregătite care a fost setată în linia ordinului client pentru care este afișat detaliul;
**Cont**: în această coloană sunt vizualizate contul sintetic și analitic al clientului căruia îi este destinat ordinul client în care se află linia pentru care este afișat detaliul.

### Extra data

Acest tab este constituit dintr-un tabel în care vor fi raportate toate datele suplimentare asociate articolului prezent în comanda de producție.

## Estimare cost

Toate informațiile referitoare la **Estimare cost** pot fi consultate la pagina [Estimare cost](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra data

Acest tab, care însoțește tab-ul *Gestionare comenzi multiprodus*, conține întregul set de [Extra data
](/docs/configurations/utility/extra-data/extradata/search-extradata) asociate comenzii de producție.

Pentru detalii despre funcționarea comună a form-urilor, faceți referire la paginile [Funcționalitate, butoane și câmpuri comune](/docs/guide/common).