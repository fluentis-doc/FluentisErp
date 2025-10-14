---
title: Tipovi utovarnih jedinica
sidebar_position: 37
---

:::important Čemu služi
Tablica Tip utovarne jedinice u Fluentisu omogućuje kodiranje i definiranje različitih kategorija utovarnih jedinica, pružajući strukturirani okvir koji olakšava rukovanje materijalima i njihovo praćenje. Korisnici mogu kreirati nove zapise, mijenjati postojeće ili ih brisati putem intuitivnog sučelja.

Postupak pretraživanja je jednostavan i omogućuje brzo filtriranje željenih tipova utovarnih jedinica, prikazujući rezultate u lako čitljivoj mreži. Svaki zapis može sadržavati ključne podatke, poput jedinstvenog alfanumeričkog koda i opisa, koji jasno identificiraju tip utovarne jedinice. Učinkovito upravljanje utovarnim jedinicama ključno je za osiguravanje nesmetane i organizirane logistike, čime se doprinosi većoj operativnoj učinkovitosti unutar poduzeća.
:::

Tablica omogućuje upravljanje kodiranjem različitih vrsta *Tipova utovarnih jedinica*.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Pretraživanje tipova utovarnih jedinica**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon što postavite željene filtere, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u mreži rezultata. 

**Unos tipova utovarnih jedinica**

Za unos novih kodova potrebno je kliknuti na prvi prazan redak u mreži ili pritisnuti tipku **Novo**.

#### Specifična polja

> **Tip**: označava šifru tipa utovarne jedinice;   
> **Opis**: opis tipa utovarne jedinice;    
> **Tip grupe**: označava tip grupe odabrane u tablici [Tip grupe](/docs/configurations/tables/logistics/loading-unit-group-type/), koji definira kako se sastavlja dio šifre utovarne jedinice;        
> **Opis tipa grupe**: opis odabranog tipa grupe;          
> **Jedinica mjere za dimenzije**: označava jedinicu mjere u kojoj su definirane dimenzije visine, širine i dubine prazne utovarne jedinice; prilikom unosa predložena je jedinica mjere sa aktivnim flagom *Jedinica mjere za dimenzije* iz tablice [Jedinice mjere](/docs/configurations/tables/general-settings/measurement-units/);     
> **Visina / Širina / Dubina**: označavaju vrijednosti visine, širine i dubine prazne utovarne jedinice, izražene u jedinici mjere definiranoj u polju **Jedinica mjere za dimenzije**;           
> **Jedinica mjere težine**: označava jedinicu mjere u kojoj je definirana težina prazne utovarne jedinice; prilikom unosa predložena je jedinica mjere s aktivnim flagom *Jedinica mjere težine* iz tablice [Jedinice mjere](/docs/configurations/tables/general-settings/measurement-units/);   
> **Težina**: označava težinu prazne utovarne jedinice u definiranoj jedinici mjere iz polja **Jedinica mjere za težinu**;         
**Jedinica mjere za volumen**: označava jedinicu mjere u kojoj je definiran volumen prazne utovarne jedinice; prilikom unosa predložena je jedinica mjere s aktivnim flagom *Jedinica mjere za volumen* iz tablice [Jedinice mjere](/docs/configurations/tables/general-settings/measurement-units/);       
> **Volumen**: označava volumen prazne utovarne jedinice u definiranoj jedinici mjere; automatski se izračunava na temelju vrijednosti unesenih u polja **Unità di misura peso**; questo verrà calcolato in automatico sulla base dei valori inseriti nei campi **Visina / Širina / Dubina**, ali ga je moguće i ručno prilagoditi;               
> **Promjenjiv volumen**: po zadanim postavkama je aktivan i označava da je volumen utovarne jedinice promjenjiv – dakle, ukupan volumen će varirati ovisno o tome što i kako se utovara (npr. paleta); ako nije aktivan, znači da se volumen ne mijenja, kao kod npr. metalnih sanduka;       
> **Tip ambalaže**: omogućuje označavanje vrste ambalaže korištene među onima definiranima u tablici [Tipovi ambalaže](/docs/configurations/tables/logistics/packing-type/);     
> **Opis tipa ambalaže**: opis korištene vrste ambalaže;      
> **Numeracija**: označava numeraciju tipa utovarne jedinice.      

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom funkcioniranju formi, pogledajte sljedeći link  [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).