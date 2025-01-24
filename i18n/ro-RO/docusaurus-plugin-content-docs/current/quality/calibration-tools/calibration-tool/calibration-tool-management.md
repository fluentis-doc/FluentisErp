---
title: Calibrare instrumente
sidebar_position: 2
---

Form-ul se află pe calea **Calibrare instrumente > Nou calibrare instrument** sau poate fi executată din **Căutare Calibrare instrumente**.

:::important Utilizare
În Calibrare instrumente este posibilă înregistrarea Calibrărilor interne și a Certificatelor de calibrare.   
Dacă instrumentul este supus calibrării iar calibrarea este internă, este posibil să se introducă, pentru pozițiile prevăzute, valorile înregistrate. Fluentis va atribui automat un rezultat pozitiv sau negativ, pentru fiecare poziție și general.   
Dacă instrumentul este supus calibrării iar calibrarea este externă, este posibil să se atașeze Certificatul de calibrare primit de la terțul care a efectuat calibrarea. Rezultatul, în acest caz, va fi atribuit manual de operator.   
Sunt disponibile rapoartele standard: Registru calibrări instrumente grupate pe: Raport, Instrument și Operator.   

Tot ca standard este disponibil:   
> **Registru calibrări instrumente**: listă a *Calibrărilor instrumente* grupabile pe: *Raport*, *Instrument* și *Efectuat de*.   
:::

## Butoane de comandă

### ![](/img/neutral/common/save.png) Salvează (Salva)

Apăsând acest buton se memorează toate informațiile modificate ale *Calibrării instrument (Taratura strumento)* afișate.

## Gestionare date

### Date de antet

Informațiile gestionate sunt:   
> **Tip calibrare (Tipo taratura)**: este *Tipul de calibrare (Tipo taratura)* (dat obligatoriu).   
> La introducerea manuală a unei noi *Calibrări (Taratura)* se propune *Tipul de calibrare manuală (Tipo taratura manuale)* indicat în *Parametrii Calibrare instrumente (Parametri Taratura strumenti)*.   
>
> **An/Număr (Anno/Numero)**: sunt *Anul (Anno)* și *Numărul (Numero)* *Calibrării instrument (Taratura strumento)* (date ambele obligatorii).   
> La introducerea unei noi *Calibrări instrument (Taratura strumento)*:   
> - *Data calibrare efectivă (Data taratura effettiva)* este propusă egală cu data curentă;   
> - *Anul (Anno)* și *Numărul (Numero)* sunt propuse în funcție de *Data calibrare efectivă (Data taratura effettiva)* și *Numerotarea (Numerazione)* asociată *Tipului de calibrare (Tipo taratura)*.   
>
> **Calibrare efectuată de (Taratura effettuata da)**: expander unde este posibil să se introducă:   
>
>> **Calibrare internă (Taratura interna)**: indică faptul că *Instrumentul de măsură (Strumento di misura)* este calibrat de un subiect intern al companiei.   
>> **Laborator extern (Laboratorio esterno)**: este denumirea socială a *Furnizorului (Fornitore)* care efectuează calibrarea externă.   
>> **Funcție (Funzione)**: este *Funcția companiei (Funziona aziendale)* care efectuează calibrarea internă.   
>> **Angajat (Dipendente)**: este *Angajatul (Dipendente)* care efectuează calibrarea internă.   
>
> **Programată (Schedulata)**: indică faptul că *Calibrarea instrument (Taratura strumento)* a fost planificată.   
> **Rezultat calibrare (Esito taratura)**: este *Rezultatul (Esito)* general al calibrării.   
> Este calculat automat, pe baza *Rezultatelor (Esiti)* *Valorilor înregistrate (Valori rilevati)*, dacă este o *Calibrare internă (Taratura interna)*.
> Este atribuit manual dacă este o *Calibrare externă (Taratura esterna)*.   
> **Observații (Osservazioni)**: adnotări libere pe subiect.   
> **Note (Note)**: adnotări libere.   
>
> **Data calibrare prevăzută (Data taratura prevista)**: este data de calibrare prevăzută.   
> Este propusă de *Planifică noi calibrări (Pianifica nuove tarature)* și nu este modificabilă.   
> **Data calibrare efectivă (Data taratura effettiva)**: este data de calibrare efectivă.   
> La introducerea manuală a unei noi calibrări este propusă egală cu data curentă.
> Este propusă de *Planifică noi calibrări (Pianifica nuove tarature)* egală cu *Data calibrare prevăzută (Data taratura prevista)* și este ulterior modificabilă.   
> **Instrument de măsură (Strumento di misura)**: este referința la *Instrumentul de măsură (Strumento di misura)* supus *Calibrării (Taratura)*.   
>
> **Proprietăți ale instrumentului (Proprietà dello strumento)**: expander unde este posibil să se vizualizeze:   
>
>> **Proprietăți ale instrumentului (Proprietà dello strumento)**: este *Modelul (Modello)* *Instrumentului de măsură (Strumento di misura)*.   
>> **Activ (Attivo)**: indică faptul că *Instrumentul de măsură (Strumento di misura)* este încă *activ (attivo)*.   
>> **Clasificare (Classificazione)**: este *Clasificarea (Classificazione)*; exemple: Mecanic, Electric, Electronic, etc.   
>> **Unitate de măsură (Unità di misura)**: este *Unitatea de măsură (Unità di misura)* a valorilor înregistrate de *Instrumentul de măsură (Strumento di misura)*.   
>> **Interval de măsură (Intervallo di misura)**: este intervalul măsurabil de *Instrumentul de măsură (Strumento di misura)*.   
>> **Precizie (Precisione)**: este *Precizia de măsură (Precisione di misura)* minimă.   
>> **Limite (Limiti)**: sunt *Limitele de acceptabilitate (Limiti di accettabilitò)* ale *Instrumentului de măsură (Strumento di misura)* pentru a putea fi utilizat; exemple: eventuale limite de precizie, medii unde nu trebuie utilizat, etc.   
>
> **Audit Trail**: expander doar pentru citire unde sunt vizibile următoarele informații:   
>
>> **Data creare/Nume (Data creazione/Nome)**: este data și *Utilizatorul A.R.M. (Utente A.R.M.)* care a introdus *Acțiunea corectivă (Azione correttiva)*.   
>> **Data ultima modificare/Nume (Data ultima modifica/Nome)**: este data și *Utilizatorul A.R.M. (Utente A.R.M.)* care a efectuat ultima modificare la *Acțiunea corectivă (Azione correttiva)*.   

### Valori înregistrate (Valori rilevati)
Tabulatorul este vizibil doar dacă *Instrumentul de măsură (Strumento di misura)* este supus *Calibrării interne (Taratura interna)*.
În această listă este posibil să se indice valorile înregistrate în timpul activităților de *Calibrare internă (Taratura interna)*.   
Dacă *Instrumentul de măsură (Strumento di misura)* este *Activ (Attivo)*, este *Supus calibrării (Soggetto a taratura)* și dacă este de *Calibrare internă (Taratura interna)* aceste valori sunt moștenite din registrul *Instrumentului de măsură (Strumento di misura)*.   
Toate informațiile sunt dezactivate cu excepția: *Date înregistrate (Dato rilevato)*, *Rezultat (Esito)*, *Observații (Osservazioni)* și *Note (Note)*.
Lista este compusă din următoarele informații:   
> **Secvență (Sequenza)**: este secvența de înregistrare.   
> **Poziție (Posizione)**: adnotări libere pe subiect.   
> **Interval citire (Intervallo lettura)**: adnotări libere pe subiect.   
> **Date solicitate (Dato richiesto)**: este valoarea nominală solicitată.   
> **Incertitudine (-) (Incertezza (-))**: este valoarea incertitudinii negative (exprimată în procente) care va fi aplicată la *Datele înregistrate (Dato rilevato)*.   
> **Incertitudine (+) (Incertezza (+))**: este valoarea incertitudinii pozitive (exprimată în procente) care va fi aplicată la *Datele înregistrate (Dato rilevato)*.   
> **Date înregistrate (Dato rilevato)**: este valoarea înregistrată din citirea instrumentului făcută în *poziția (posizione)* indicată.   
> **Abatere (Scostamento)**: este valoarea calculată din diferența dintre *Datele înregistrate (Dato rilevato)* și *Datele solicitate (Dato richiesto)*.   
Dacă abaterea este mai mare decât *Datele solicitate (Dato richiesto)* adăugate la *Incertitudine (±) (Incertezza (±))* (aplicare în procente) *Rezultatul (Esito)* înregistrării va fi negativ.   
La prima valoare negativă a *Rezultatului (Esito)* în lista *Valorilor înregistrate (Valori rilevati)* și *Rezultatul (Esito)* general al *Calibrării (Taratura)* va fi negativ.   
> **Observații (Osservazioni)**: adnotări libere pe subiect.   
> **Notă (Nota)**: adnotări libere.   

### Istoric Rapoarte și Certificate de calibrare (Storico Rapporti e Certificati di taratura)
În această listă este posibil să se vizualizeze istoricul *Calibrărilor (Tarature)* și *Certificatelor de calibrare (Certificati di taratura)* planificate și efectuate pentru *Instrumentul de măsură (Strumento di misura)* asociat *Calibrării (Taratura)* afișate.   
Prin dublu click al mouse-ului pe rândul dorit este posibil să se execute gestionarea *Calibrării (Taratura)* selectate.   
Lista este compusă din următoarele informații:   
> **Tip calibrare (Tipo taratura)**: este codul *Tipului de calibrare (Tipo taratura)*.   
> **Descriere tip calibrare (Descrizione tipo taratura)**: este descrierea *Tipului de calibrare (Tipo taratura)*.   
> **An (Anno)**: este *Anul (Anno)* documentului.   
> **Număr (Numero)**: este *Numărul (Numero)* documentului.   
> **Calibrare internă (Taratura interna)**: indică dacă a fost emisă o *Calibrare internă (Taratura interna)*.   
> **Programată (Schedulata)**: indică dacă documentul a fost programat (planificat).   
> **Data prevăzută (Data prevista)**: este data de calibrare prevăzută.   
> **Data calibrare (Data taratura)**: este data de calibrare efectivă.   
> **Rezultat (Esito)**: este codul *Rezultatului (Esito)* calibrării.   
> **Descriere rezultat (Descrizione esito)**: este descrierea *Rezultatului (Esito)* calibrării.   
> **Categorie (Categoria)**: este codul *Categoriei instrumentului (Categoria strumento)*.   
> **Descriere categorie (Descrizione categoria)**: este descrierea *Categoriei instrumentului (Categoria strumento)*.   
> **Cod (Codice)**: este codul *Instrumentului de măsură (Strumento di misura)*.   
> **Matricolă (Matricola)**: este matricola *Instrumentului de măsură (Strumento di misura)*.   
> **Model (Modello)**: este modelul *Instrumentului de măsură (Strumento di misura)*.   
> **Laborator extern (Laboratorio esterno)**: este denumirea socială a *Furnizorului (Fornitore)* care efectuează calibrarea externă.   
> **Funcție (Funzione)**: este codul *Funcției companiei (Funziona aziendale)* care efectuează calibrarea internă.   
> **Descriere funcție (Descrizione funzione)**: este descrierea *Funcției companiei (Funziona aziendale)* care efectuează calibrarea internă.   
> **Cod (Codice)**: este codul *Angajatului (Dipendente)* care efectuează calibrarea internă.   
> **Nume (Cognome)**: este numele *Angajatului (Dipendente)* care efectuează calibrarea internă.   
> **Prenume (Nome)**: este prenumele *Angajatului (Dipendente)* care efectuează calibrarea internă.   

### Date suplimentare (Extra data)
Este posibil să se introducă [Date Suplimentare (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) pentru fiecare *Calibrare instrument (Taratura strumento)*.

### Imagine (Immagine)
Este afișată imaginea asociată în gestionarea *Instrumentului de măsură (Strumento di misura)*.

Pentru tot ceea ce nu este detaliat în acest document despre funcționarea comună a form-urilor, faceți referire la următorul link [Funcționalități, butoane și câmpuri comune (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).