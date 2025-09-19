---
title: Gestiune ticket
sidebar_position: 1
---

Formul permite vizualizarea și modificarea tichetelor deja inserate iar cu clic pe butonul *Nou* puteți să inserați un ticket nou. 

În plus, butonul **Creare oferte din ticket** permite crearea [Ofertelor](/docs/sales/offers/insert-offer) direct din tichetele selectate, cu datele sale: articol, Proiect, Client, Valorile din linie (verificați în acest caz dacă există oferte de preț valide pentru client: oferta va modifica valorile pe baza ofertei de preț asociate clientului). Această procedură este prezentă în fiecare ticket.

## Antet 

**Tip/An/Număr**: sunt completate automat dacă operatorului i-a fost atribuit un tip de ticket implicit în [Parametri pentru operator CRM](/docs/configurations/parameters/crm/ticket-parameters); numărul este progresiv.  
**Data creare/scadență**: este introdusă automat data curentă;    
**Data închidere/închis**: bifând opțiunea *închis*, se completează automat *Dată închiderii*.  
**Client**: este completat automat dacă operatorului i-a fost atribuit un client implicit în [Parametri pentru operator CRM](/docs/configurations/parameters/crm/ticket-parameters).  
**Contact**: permite inserarea unui [Contact](/docs/crm/home-crm/contacts/new-contact/header) alternativ;    
**Proiect**: permite inserarea unui proiect de referință.  
**Operațiuni ticket**: afișează posibilele [Operațiuni](/docs/configurations/tables/crm/tickets/operations) pentru acest tip de ticket.  
**Contact**: reprezintă *Persoana de contact* a clientului introdus, preluată din registru;    
**Severitate ticket**: reprezintă gravitatea problemei raportate în ticket;  
**Stare**: reprezintă starea tichetului; stările afișate sunt cele introduse în [Tip ticket](/docs/configurations/tables/crm/tickets/ticket-type);  
**Facturat/Facturabil**: indică dacă ticketul a fost deja facturat sau dacă trebuie să fie facturabil.  
**Criterii de facturare**: indică dacă criteriile de facturare sunt orele prevăzute de ofertă sau cele efectiv realizate.  
**Perioadă de facturare**: indică dacă facturarea trebuie să fie pe consum sau pe livrare.  

### Detaliu ticket

Acest tab este alcătuit din două câmpuri: **Limbă** (completat automat) și **Descriere** (obligatoriu).  

### Utilizatori

În acest tab sunt afișați operatorii care desfășoară activitățile din ticket. La crearea unui ticket nou sunt completate automat câmpurile **Operator** și **Prima dată atribuită**.  

### Estimare/Efort  

Acest tab se activează după ce faceți clic pe butonul *Estimare tehnică*.  
În funcție de tipul de ticket pe care îl creați, va fi propus un [template](/docs/configurations/tables/crm/tickets/template-ticket) asociat, cu datele aferente deja introduse în tabelul corespunzător.  

#### Câmpuri specifice

**Data efectivă început**: reprezintă dată pentru începerea efectivă a lucrărilor, care poate fi diferită de **Data prevăzută început**, aflată alături și completată automat cu data creării tichetului.  
**Comercial/Tehnic**: reprezintă operatorii care vor fi propuși și în tabul următor, *Estimare comercială*.  
În tabelul inferior, în coloana **Cantitate prevăzută**, indicați timpul estimat pentru desfășurarea activităților și unitatea de măsură aferentă. Acest lucru va determina completarea automată a câmpurilor **Efort estimat in minute** și **Ore de lucru** și va fi necesară pentru crearea ulterioară a estimării comerciale.  
**Resurse comenzi** permite asocierea unei resurse din aria proiecte, indicând care va fi resursa care va desfășura această fază de *Estimare tehnică*.  
Când resursa va declara activitatea în proiecte, selectând tichetul corespunzător, îi va fi propus automat proiectul de referință introdus în estimarea tehnică aferentă tichetului.

**Proiect** permite inserarea unui proiect, care va fi propus automat atunci când resursa va declara activitățile în zona de proiecte, selectând tichetul corespunzător.

**Data început** și **Data sfârșit**: indică data de început și de sfârșit pentru fiecare etapă a estimării tehnice.

După completarea *Estimării tehnice*, faceți clic pe butonul *Sfârșit estimare tehnică*: acest lucru va bloca din nou posibilitatea de a modifica tabul *Estimare/Efort*. Pentru a putea modifica din nou, faceți clic pe butonul *Anulează estimare tehnică*.  

### Tichete asociate

Permite inserarea eventualelor tichete asociate. Pentru a face acest lucru, puteți să utilizați help-ul de câmp, făcând dublu click pe coloana **Număr**.  

### Notă  

Permite inserarea/ștergerea notelor. Pentru a face acest lucru, utilizați butoanele *Notă nouă* și *Șterge notă*. Coloanele **Operator** și **Dată inserare** sunt completate automat. Opțiunea **informații confidențiale** indică faptul că nota trebuie să fie disponibilă doar pentru operatorul care a introdus-o.  

### Estimare comercială

Acest tab se activează după ce faceți clic pe butonul *Estimare comercială*. În funcție de [Tipul de ticket](/docs/configurations/tables/crm/tickets/ticket-type) pe care îl creați și de [Template](/docs/configurations/tables/crm/tickets/template-ticket), va fi propus un set de câmpuri, de exemplu *Descrieri*.   
Câmpul **Tehnic/Comercial** este preluat din tabul *Estimare tehnică*.  
În tabel este important să verificați/modificați coloana **Cantitate comercială**. Această coloană preia *Cantitatea prevăzută* din estimarea tehnică, dar poate fi majorată/redusă de comercial, care va crea estimarea finală. Această coloană va popula și câmpul de sub tabel: **Cantitate totală comercială**.  
După completarea Estimării tehnice, faceți clic pe butonul *Sfârșit estimare comercială*: acest lucru va bloca din nou posibilitatea de a modifica tabul Estimare/Efort. Pentru a-l modifica iar, faceți clic pe butonul *Anulează estimare comercială*.  
Odată finalizată și estimarea comercială, se va putea crea oferta prin procedura *Creare oferte din ticket*.  

### Oferte

În acest tab sunt afișate eventualele Oferte asociate tichetului și create prin procedura de *Creare oferte din ticket*.