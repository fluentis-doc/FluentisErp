---
title: Plan de încărcare nou
sidebar_position: 2
---

**Planul de încărcare** este un document creat între ordinul client și dispoziția de livrare.

## Căutare ordine client

Primul pas pentru crearea unui plan de încărcare este căutarea și selectarea ordinelor clienților care trebuie incluse în plan. 
În secțiunea de filtrare, este posibilă efectuarea unei căutări avansate a ordinelor care se doresc a fi expediate dintre cele *Neexpediate* sau *Parțial expediate*.  
În mod implicit, datele de început și sfârșit pentru livrare sunt datele săptămânii curente, dar acestea pot fi setate diferit.  
În [Parametri Planuri de Încărcare](/docs/configurations/parameters/logistics/load-plan-parameters) puteți să schimbați datele de livrare propuse pentru căutare, să alegeți dacă să vizualizați și rândurile articolelor prezente în planurile de încărcare deschise și să setați culori diferite pentru rând, în funcție de disponibilitatea necesară pentru a expedia ordinul sau nu.

- **Vizualizează ordine cu data livrării în ziua exclusă**: permite vizualizarea în tabel și a ordinelor care au o dată blocată (de ex. sărbătoare) în calendar.  
- **Vizualizează ordine cu dată de livrare corectă**: permite vizualizarea ordinelor cu data validă.  
Ordinele pot fi deschise cu un dublu clic.

#### Câmpuri specifice  
**Tip**: conține [tipul](/docs/configurations/tables/sales/sales-order-types) ordinului client, urmat de datele ordinului precum **Număr**, **Dată**, **Articol** etc.;  
**Note**: pot fi consultate notele liniilor ordinului și notele planului de încărcare;  
**Cantitate**: afișează cantitatea totală a liniei articolului din ordin;  
**Cantitate rămasă**: indică restul ordinului neexpediat;  
**Ordin prezent în alt plan de încărcare**: dacă este activ, indică faptul că ordinul este deja prezent într-un alt plan;  
**Ordin prezent în alt plan de încărcare deschis**: dacă este activ, indică faptul că ordinul este deja inclus într-un alt plan deschis.
Aceste două opțiuni sunt utile dacă utilizatorul nu setează diferite culori pentru linii în [parametri](/docs/configurations/parameters/logistics/load-plan-parameters).    
**Articol**: în această coloană puteți să introduceți cantitatea articolului pe care doriți să o expediați; această cantitate poate fi diferită de cantitatea rămasă.  

După selecția liniilor ordinului care trebuie procesate în planul de încărcare, se pot efectua diverse operațiuni cu butoanele din ribbon bar. Rețineți că, dacă în parametri nu este cerută *disponibilitatea obligatorie*, atunci vor putea fi expediate linii fără disponibilitate.

#### Butoane specifice  
> **Inserează ordin**: transferă liniile selectate în tab **Pregătire plan de încărcare**;  
> **Note expediere**: permite vizualizarea *Notelor de expediere* prezente în tab *Livrare* din *Registrul clientului*;  
> **Proprietăți ordin**: deschide **Starea executării** ordinului selectat;  
> **Modifică note plan de încărcare**: permite modificarea **Notelor planului de încărcare** introduse în tab *Articole* din  ordinul client.

## Pregătire plan de încărcare

În acest tab sunt propuse datele pentru pregătirea planului de încărcare. Datele vizualizate în mod implicit sunt cele setate în tabelul [Tipuri plan de încărcare](/docs/configurations/tables/logistics/load-plan-type), celelalte pot fi introduse manual.

#### Butoane specifice  
> **Salvează**: permite salvarea planului de încărcare;  
> **Setează transportator**: permite deschiderea ferestrei de căutare **Transportatori** și selectarea unuia pentru a-l asocia planului de încărcare; acesta va fi afișat în tabel, în coloana *Transportator*;  
> **Modifică note transportator**: permite modificarea notelor transportatorului și le va afișa în coloana din tabelul *Note transportator*;  
> **Modifică număr transportator**: dacă același transportator lucrează, de exemplu, cu mai multe furgonete, se va putea diviza expediția;  
> **Lansează Plan**: face planul disponibil pentru crearea altor documente (de exemplu, dispoziţie de livrare);  
> **Mută în alt plan de încărcare**: mută linia într-un plan de încărcare existent, ales din fereastra de căutare;  
> **Creare dispoziţe livrare**: permite crearea *dispoziţie de livrare* din planul de încărcare; în fereastra este necesar să introduceți **Tip dispoziţie livrare**, **Operator** și puteți să alegeți dacă să creați o dispoziţie livrare diferită pentru fiecare ordin sau nu. Dispoziţie de livrare creată va fi disponibilă în *Căutarea dispoziţie livrare*.

## Legendă

În acest tab sunt vizibile pozițiile și spațiile pentru rândurile planului de încărcare; acestea sunt configurate în registrul *Vehicul*.

## Rapoarte planuri de încărcare

În acest tab este afișat rezumatul datelor referitoare la *Planul de încărcare*.