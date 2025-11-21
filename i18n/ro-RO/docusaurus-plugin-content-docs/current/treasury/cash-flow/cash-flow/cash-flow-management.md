---
title: Gestionare cash flow
description: Încărcarea, modificarea și gestionarea fluxurilor de numerar în Fluentis ERP cu instrumente de simulare și preluare date.
keywords:
  - cash flow
  - gestionare fluxuri financiare
  - simulare cash flow
  - contabilitate
sidebar_position: 2
schema: TechArticle
tags:
  - finanțe
  - contabilitate
  - cash flow
last_update:
  author: Fluentis Documentation Team
---

# Gestionare cash flow

## Introducere

Din această fereastră este posibilă încărcarea și modificarea datelor de cash flow.  
Elementele de meniu permit crearea sau actualizarea calculelor de simulare a cash flow-ului. Prin gestionarea manuală, utilizatorul poate introduce linii direct sau poate prelua datele prin butonul **Achiziție**, selectând tipul de flux de interes, care va deschide fereastra de căutare și selecție aferentă.

Este posibilă și vizualizarea documentului de origine pentru a evalua datele acestuia.

#### Butoane specifice

- **Salvează**: Salvează cash flow-ul.  
- **Caută toate**: Efectuează căutarea fluxurilor pentru conturile financiare.  
- **Caută mișcări cash flow**: Efectuează căutarea mișcărilor pentru tipurile de flux previzional.  
- **Achiziție**: cu acest buton, utilizatorul poate selecta tipul de flux din care să preia datele previzionale de introdus în cash flow-ul în uz. Fiecare detaliu al acestui buton va deschide un help contextual specific pentru tipul de flux/.  
- **Nouă mișcare cont**: activează cursorul pentru introducerea unei noi linii de detaliu în mișcările conturilor financiare.  
- **Nouă mișcare flow**: activează cursorul pentru introducerea unei noi linii de detaliu în mișcările previzionale.  
- **Restaurează tot**: șterge toate mișcările introduse.  
- **Restabilire contabilitate<!-- Ripristino contabilità -->**: Șterge mișcările conturilor financiare.  
- **Restabilire cash flow<!-- Ripristino cash flow -->**: Șterge mișcările previzionale.  
- **Vizualizează doc. orig.<!-- Visualizza doc. orig. -->**: Vizualizează documentul de origine al fluxului previzional selectat.

#### Buton (listă) *Preluare*<!-- Pulsante (lista) *Acquisizione* -->

Tipurile de preluare disponibile:

1. **Partide<!-- Partite -->**: preia partidele contabile din contabilitate.  
2. **Contabilitate<!-- Contabilità -->**: preia soldurile tipurilor de conturi financiare.  
3. **Extra contabil<!-- Extra contabile -->**: importă scadențele extracontabile ale cash flow-ului.  
4. **Facturi (achiziție/vânzare)<!-- Fatture (acquisto/vendita) -->**: selectează datele scadențelor facturilor de achiziție/vânzare.  
5. **Comenzi (clienți/furnizori)<!-- Ordini (clienti/fornitori) -->**: selectează simulările datelor rămase ale comenzilor confirmate.  
Din aceste ferestre se selectează simulările datelor rămase ale comenzilor clienților/furnizorilor (tipărite și confirmate). În cazul în care se dorește compararea căutării, de exemplu, cu formularul general de căutare a comenzilor (clienți sau furnizori), trebuie avut în vedere că: 
     - în cash flow sunt selectate (implicit) doar comenzile neexecutate (cu posibilitatea de a activa flag-ul corespunzător pentru căutarea celor parțial executate, doar, sau în plus față de cele neexecutate, pentru care este vizibil în grilă flag-ul de identificare) 
     - sunt excluse comenzile fără detaliu de linii cu valoare diferită de zero (altfel nu generează scadențe) 
     - sunt excluse cele executate forțat
     - moneda trebuie să nu fie goală
     - contul principal trebuie să fie completat
     - numărul comenzii trebuie să fie mai mare decât zero
     - tipul comenzii trebuie să aibă flag-ul cashflow (ca pentru crearea automată a cashflow-ului)
     - data confirmării comenzii trebuie să fie completată
     - comanda nu trebuie să fi fost deja inclusă într-un alt cashflow calculat.  

Help-ul permite două moduri:

- **Vizualizează comenzi<!-- Visualizza ordini -->**: afișează datele principale ale comenzilor.  
- **Vizualizează articole<!-- Visualizza articoli -->**: afișează datele liniilor de comandă (deci, în cazul mai multor linii, va fi afișat de mai multe ori numărul comenzii și datele principale).

Flag-ul **Exclude articolele facturate<!-- Escludi articoli in fattura -->** verifică dacă liniile comenzii au fost deja executate în factură sau aviz de expediție (DDT).

*Exemplu*: comandă cu 3 articole (primul neexecutat, al doilea parțial executat și al treilea total executat).  
- Cu flag-ul activ:
  - în modul *Vizualizează comenzi<!-- Visualizza ordini -->* va fi extrasă acea comandă deoarece linia 1 și 2 nu sunt total executate, iar valoarea pentru cash flow va fi suma liniei 1 și restul liniei 2.  
  - în modul *Vizualizează articole<!-- Visualizza articoli -->* va fi extrasă doar linia 1 deoarece nu este executată.

6. **Beneficiari necontabilizați<!-- Percipienti non contabilizzati -->**: permite introducerea în cash flow a datelor privind remunerațiile beneficiarilor necontabilizați.  
7. **Avize de expediție (vânzare/achiziție)<!-- DDT (vendita/acquisto) -->**: permit preluarea datelor din avizele de expediție (DDT) nevalorificate în factură.  
8. **Cont la terți (comenzi/retururi)<!-- Conto lavoro (ordini/rientri) -->**: permit preluarea datelor din comenzile de conto lavoro<!-- conto lavoro --> și din retururile aferente nefacturate (lăsați setările implicite ale ambelor ferestre).