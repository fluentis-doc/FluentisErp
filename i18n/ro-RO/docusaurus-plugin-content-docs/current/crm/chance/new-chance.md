---
title: Oportunitate nouă
sidebar_position: 2
---

În acest formular vor fi inserate toate informațiile generale legate de **Oportunitatea** pe care doriți să o inserați. Fereastra constă dintr-o primă secțiune în care vor fi introduse informații referitoare la datele pur personale ale companiei, o a doua secțiune centrală, constând din conducta de flux și activitățile legate de aceasta, și o a treia compusă din mai multe file, inclusiv cea a activităților desfășurate cu privire la oportunitate, detaliile acesteia și orice oferte conexe.

## Gestionare oportunități

*Butoane specifice*: 
> **Salvează**: buton pentru a salva oportunitatea și modificările acesteia;  
> **Rulați fluxul de lucru**: buton pentru a efectua acțiunea Flux de lucru;  
> **Back**: buton pentru a trece la etapa anterioară a Flux Pipeline;  
> **Next**: buton pentru a trece la următoarea etapă a Flux Pipeline;  
> **Calculați valorile**: Buton pentru a recalcula valorile oportunității pe baza ofertei la care este legată oportunitatea.  

Informațiile referitoare la prima secțiune a ferestrei, în detaliu, sunt:

**Tip oportunitate**: utilizat pentru a defini [Tip oportunitate](/docs/configurations/tables/crm/opportunities/opportunity-type) pe care îl introduceți. Pe tipul de oportunitate este, de asemenea, posibil să se indice o conductă de flux implicită;

**Pipeline Flux**: *Pipeline flux* trebuie indicat și afișat în oportunitate;

**Număr**: este o valoare atribuită automat de Fluentis care vă permite să identificați în mod unic oportunitatea;

**Titlu**: acest câmp, obligatoriu de completat, vă permite să definiți un titlu pentru oportunitate în așa fel încât să îl recunoașteți mai ușor;

**Data creării**: această dată indică data la care oportunitatea a fost adăugată la Fluentis;

**Data închiderii**: acest câmp vă permite să indicați o dată de închidere a oportunității și poate acționa ca un filtru în masca de căutare a oportunităților;

**Contact**: acest câmp este utilizat pentru a indica persoana de contact căreia îi este numită oportunitatea. Se referă la datele de contact ale CRM;

** Agent principal **: aceste date sunt preluate automat pe baza a ceea ce este indicat pe datele personale ale titularului de contact CRM al oportunității;

**Uniform**: indică moneda în care trebuie exprimate valorile oportunității;

**Timpul scurs de la ultima activitate**: indică timpul scurs de la introducerea ultimei activități introduse pentru oportunitatea în cauză;

**Probabilitatea de succes**: utilizată pentru a indica un % din [probabilitate](/docs/configurations/tables/crm/opportunities/probability-progress) de succes legat de oportunitate;

**Calitatea contactului**: utilizată pentru a indica [calitatea] (/docs/configurations/tables/crm/contacts/contact-quality) persoanei de contact care deține oportunitatea;

**Câștigat/Pierdut**: folosit pentru a indica dacă oportunitatea a fost câștigată sau pierdută;

**Motive**: în acest câmp puteți selecta [motivele] (/docs/configurations/tables/crm/opportunities/closing-reason) pentru câștigarea sau pierderea oportunității;

**Descriere**: servește la detalierea motivelor care au dus la câștigarea sau pierderea oportunității;

**Valoare netă**: acest câmp arată valoarea totală a oportunității fără reduceri;

**Sumă brută**: acest câmp arată valoarea totală a oportunității, inclusiv reducerile;

**Reduceri**: acest câmp arată reducerea totală a oportunității;

**Marja brută așteptată**: în acest câmp, completat manual, utilizatorul trebuie să indice marja brută așteptată pentru oportunitate;

**Data preconizată a comenzii de vânzare**: în acest câmp puteți indica o dată preconizată pentru emiterea primei comenzi legate de oportunitate;

**Data preconizată a notelor de vânzare**: în acest câmp este posibil să se indice o dată preconizată pentru emiterea primei bule legate de oportunitate;

**Data preconizată a facturilor de vânzare**: în acest câmp puteți indica o dată preconizată pentru emiterea primei facturi legate de oportunitate.

În a treia și ultima secțiune a Managementului oportunităților există 4 file:

### Activități de contact

Această filă afișează activitățile legate de oportunitatea afișată. Debifarea  câmpului **Filtrați numai activitățile legate de această oportunitate**  va afișa, de asemenea, activitățile persoanei de contact care deține oportunitatea, precum și cele ale oportunității în sine.
Pentru mai multe informații privind activitățile de contact, consultați secțiunea [Contacte] (/docs/crm/contacts/search-contacts)

### Detaliu

Această filă prezintă detaliile economice ale ofertei. Pentru fiecare linie de detaliu puteți indica:
**Familia de produse**: se referă la tabelul cu familia de produse;  
**Descriere**: este descrierea familiei de produse selectate mai sus;  
**Suma brută**: vă permite să indicați valoarea oportunității, pentru familia de produse indicată mai sus, fără reduceri;  
**Reducere**: vă permite să indicați valoarea reducerii aplicate pentru familia de produse indicată mai sus;  
**Valoarea netă**: se calculează ca diferența dintre  câmpurile **Sumă brută**  și  **Reducere**;  
**Venit așteptat**: vă permite să indicați care va fi valoarea reală prognozată a rândului de oportunități;  
**Data estimată a facturii de vânzare**: corespunde datei la care estimați că veți factura oportunitatea în cauză;  
**Data preconizată a notelor de vânzare**: corespunde datei la care se preconizează facturarea oportunității în cauză;  
**Data preconizată a comenzii de vânzare**: corespunde datei la care se preconizează emiterea comenzii pentru oportunitatea în cauză;  
**Data închiderii**: este data la care linia în cauză a fost închisă;  
**Notă**: În acest câmp puteți indica orice note din această linie.

### Oferte

Această filă afișează ofertele legate de oportunitate. Dacă faceți dublu clic pe linia ofertei, veți ajunge la modul de vizualizare / editare a ofertei în sine.
**Notă**: Note suplimentare pot fi furnizate în acest câmp.

### Documente conexe
În această filă puteți vizualiza fișierele atașate oportunității sau puteți continua să atașați fișiere noi cu procedura drag and drop.