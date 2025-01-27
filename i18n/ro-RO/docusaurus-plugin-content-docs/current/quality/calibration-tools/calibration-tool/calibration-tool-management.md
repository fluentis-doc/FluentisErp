---
title: Calibrare instrumente
sidebar_position: 2
---

Form-ul se află pe calea **Calibrare instrumente > Nou calibrare instrument** sau poate fi lansat din **Căutare Calibrare instrumente**.

:::important Utilizare
În Calibrare instrumente este posibilă înregistrarea Calibrărilor interne și a Certificatelor de calibrare.   
Dacă instrumentul este supus calibrării iar calibrarea este internă, este posibil să se introducă, pentru pozițiile prevăzute, valorile înregistrate. Fluentis va atribui automat un rezultat pozitiv sau negativ, pentru fiecare poziție și general.   
Dacă instrumentul este supus calibrării iar calibrarea este externă, este posibil să se atașeze Certificatul de calibrare primit de la terțul care a efectuat calibrarea. Rezultatul, în acest caz, va fi atribuit manual de operator.   
Sunt disponibile rapoartele standard: Registru calibrări instrumente grupate pe: Raport, Instrument și Operator.   

Tot ca standard este disponibil:   
> **Registru calibrări instrumente**: listă a *Calibrărilor instrumente* grupabile pe: *Raport*, *Instrument* și *Efectuat de*.   
:::

## Gestionare date

### Antet

#### Câmpuri specifice   

> **Tip calibrare**: este *Tipul de calibrare*.   
> La introducerea manuală a unei noi *Calibrări* este propus *Tipul de calibrare manuală* indicat în *Parametrii Calibrare instrumente*.   
>
> **An/Număr**: reprezintă *Anul* și *Numărul* *Calibrării instrumentului*.   
> La introducerea unei noi *Calibrări instrument*:   
> - *Dată calibrare efectivă* este propusă egală cu data curentă;   
> - *An* și *Număr* sunt propuse în funcție de *Dată calibrare efectivă* și *Numerotarea* asociată *Tipului de calibrare*.   
>
> **Calibrare efectuată de**: expander în care se poate insera:   
>
>> **Calibrare internă**: indică faptul că *Instrumentul de măsură* este calibrat de un subiect intern companiei.   
>> **Laborator extern**: este denumirea *Furnizorului* care efectuează calibrarea externă.   
>> **Funcție**: este *Funcția companiei* care efectuează calibrarea internă.   
>> **Angajat**: este *Angajatul* care efectuează calibrarea internă.   
>
> **Programată**: indică faptul că această *Calibrare instrument* a fost planificată.   
> **Rezultat calibrare**: este *Rezultatul* general al calibrării.   
> Este calculat automat, pe baza *Rezultatelor* *Valorilor înregistrate*, dacă este o *Calibrare internă*.
> Este atribuit manual dacă este o *Calibrare externă*.   
> **Observații**: adnotări libere pe subiect.   
> **Note**: adnotări libere.   
>
> **Dată calibrare prevăzută**: este data de calibrare prevăzută.   
> Este propusă de *Planifică noi calibrări* și nu se poate modifica.   
> **Data calibrare efectivă**: este data de calibrare efectivă.   
> La introducerea manuală a unei noi calibrări este propusă egală cu data curentă.
> Este propusă de *Planifică noi calibrări* egală cu *Data calibrare prevăzută*. Poate fi modificată ulterior.   
> **Instrument de măsură**: este referința la *Instrumentul de măsură* supus *Calibrării*.   
>
> **Proprietăți instrument**: expander unde este posibil să se vizualizeze:   
>
>> **Proprietăți instrument**: este *Modelul* *Instrumentului de măsură*.   
>> **Activ**: indică faptul că *Instrumentul de măsură* este încă *activ*.   
>> **Clasificare**: de exemplu: Mecanic, Electric, Electronic, etc.   
>> **Unitate de măsură**: reprezintă *Unitatea de măsură* a valorilor înregistrate de *Instrumentul de măsură*.   
>> **Interval de măsură**: reprezintă intervalul măsurabil de *Instrumentul de măsură*.   
>> **Precizie**: reprezintă precizia minimă a măsurătorii.   
>> **Limite**: sunt *Limitele de acceptabilitate* ale *Instrumentului de măsură* pentru a putea fi utilizat; exemple: eventuale limite de precizie, medii unde nu trebuie utilizat, etc.   
>
> **Audit Trail**: expander doar pentru citire unde sunt vizibile următoarele informații:   
>
>> **Data creare/Nume**: reprezintă data și *Utilizatorul ARM* care a introdus *Acțiunea corectivă*.   
>> **Data ultima modificare/Nume**: reprezintă data și *Utilizatorul ARM* care a efectuat ultima modificare la *Acțiunea corectivă*.   

### Valori înregistrate
Tabulatorul este vizibil doar dacă *Instrumentul de măsură* este supus *Calibrării interne*.
În această listă pot fi inserate valorile înregistrate în timpul activităților de *Calibrare internă*.   
Dacă *Instrumentul de măsură* este *Activ*, este *Supus calibrării* iar dacă este de *Calibrare internă* aceste valori sunt moștenite din registrul *Instrumentului de măsură*.   
Toate informațiile sunt dezactivate cu excepția: *Date înregistrate (Dato rilevato)*, *Rezultat (Esito)*, *Observații (Osservazioni)* și *Note (Note)*.
Lista este compusă din următoarele informații:   
> **Secvență**: este secvența de înregistrare.   
> **Poziție**: adnotări libere pe subiect.   
> **Interval citire**: adnotări libere pe subiect.   
> **Date necesare**: este valoarea nominală solicitată.   
> **Incertitudine (-)**: este valoarea incertitudinii negative care va fi aplicată la *Informației relevate*.   
> **Incertitudine (+)**: este valoarea incertitudinii pozitive (exprimată în procente) care va fi aplicată la *Informației relevate*.   
> **Date relevate**: este valoarea înregistrată la citirea instrumentului făcută în *poziția* indicată.   
> **Abatere**: este valoarea rezultatul diferenței dintre *Date relevate* și *Date necesare*.   
Dacă abaterea este mai mare decât *Datele relevate* adăugate la *Incertitudine (±)* (aplicare în procente) *Rezultatul* înregistrării va fi negativ.   
Prima valoare negativă a *Rezultatului* în lista *Valorilor relevate* și *Rezultatul* general al *Calibrării* va fi negativ.   
> **Observații**: adnotări libere pe subiect.   
> **Notă**: adnotări libere.   

### Istoric Rapoarte și Certificate de calibrare
În această listă este afișat istoricul *Calibrărilor* și *Certificatelor de calibrare* planificate și efectuate pentru *Instrumentul de măsură* asociat *Calibrării* afișate.   
Cu dublu click pe rândul dorit se poate deschide *Calibrarea* selectată.   
Lista este compusă din următoarele informații:   
> **Tip calibrare**: este codul *Tipului de calibrare*.   
> **Descriere tip calibrare**: este descrierea *Tipului de calibrare*.   
> **An**: reprezintă *Anul* documentului.   
> **Număr**: reprezintă *Numărul* documentului.   
> **Calibrare internă**: indică dacă a fost emisă o *Calibrare internă*.   
> **Programată**: indică dacă documentul a fost programat (planificat).   
> **Data prevăzută**: reprezintă data de calibrare prevăzută.   
> **Data calibrare**: reprezintă data de calibrare efectivă.   
> **Rezultat**: reprezintă codul *Rezultatului* calibrării.   
> **Descriere rezultat**: reprezintă descrierea *Rezultatului* calibrării.   
> **Categorie**: reprezintă codul *Categoriei instrumentului*.   
> **Descriere categorie**: reprezintă descrierea *Categoriei instrumentului*.   
> **Co**: reprezintă codul *Instrumentului de măsură*.   
> **Matricolă**: reprezintă matricola *Instrumentului de măsură*.   
> **Model**: este modelul *Instrumentului de măsură*.   
> **Laborator extern**: este denumirea socială a *Furnizorului* care efectuează calibrarea externă.   
> **Funcție**: este codul *Funcției companiei* care efectuează calibrarea internă.   
> **Descriere funcție**: este descrierea *Funcției companiei* care efectuează calibrarea internă.   
> **Cod**: este codul *Angajatului* care efectuează calibrarea internă.   
> **Nume**: este numele *Angajatului* care efectuează calibrarea internă.   
> **Prenume**: este prenumele *Angajatului* care efectuează calibrarea internă.   

### Date suplimentare (Extra data)

Permite inserarea [Datelor suplimentare](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) pentru fiecare *Calibrare instrument*.

### Imagine
Este afișată imaginea asociată în gestionarea *Instrumentului de măsură*.

Pentru tot ceea ce nu este detaliat în acest document despre funcționarea comună a form-urilor, faceți referire la următorul link [Funcționalități, butoane și câmpuri comune](/docs/guide/common).