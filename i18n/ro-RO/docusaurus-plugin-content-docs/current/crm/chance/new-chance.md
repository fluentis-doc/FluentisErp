---
title: Oportunitate nouă
sidebar_position: 3
---

Acest form conține informațiile despre oportunitatea pe care doriți să o înregistrați. 

Partea superioară a formului prezintă eventualele fluxuri de lucru asociate. Se poate crea propriul flux de lucru în baza cerințelor CRM ale companiei. Pentru detalii consultați documentul aferent fluxurilor de lucru.  

#### Butoane specifice  
> **Salvează**: permite salvarea oportunității;  
> **Calculează valorile**: permite recalcularea valorilor oportunității pe baza ofertei la care oportunitatea este conectată.

## Antet

**Tip oportunitate**: este folosit pentru a selecta [tipul oportunității](/docs/configurations/tables/crm/opportunities/opportunity-type). Pe tipul de oportunitate se poate indica și un flux pipeline prestabilit;  

**Număr**: este o valoare atribuită automat de Fluentis care permite identificarea unică a oportunității;  

**Titlu**: acest câmp obligatoriu facilitează identificarea și recunoașterea oportunității;  

**Data creare**: indică data introducerii oportunității în Fluentis;  

**Data închidere**: permite indicarea unei date de închidere a oportunității și poate funcționa ca filtru în fereastra de căutare a oportunităților;  

**Contact**: reprezintă contactul la care este alocată oportunitatea. Face referire la [contactele](/docs/crm/home-crm/contacts/new-contact/header) din CRM;  

**Agent principal**: este preluat automat din registrul contactului CRM, titular al oportunității;  

**Monedă**: indică moneda în care vor fi exprimate valorile oportunității;  

**Timp trecut de la ultima activitate**: indică timpul trecut de la introducerea ultimei activități create pentru oportunitatea în cauză;  

**Probabilitate de succes**: se folosește pentru a indica un procent de [probabilitate](/docs/configurations/tables/crm/opportunities/probability-progress) de succes asociată oportunității;  

**Calitate contact**: se folosește pentru a indica [calitatea](/docs/configurations/tables/crm/contacts/contact-quality) contactului titular al oportunității;  

**Câștigată/Pierdută**: se folosește pentru a indica dacă oportunitatea a fost câștigată sau pierdută;  

**Motive**: în acest câmp este posibilă selectarea [motivelor](/docs/configurations/tables/crm/opportunities/closing-reason) pentru care oportunitatea a fost câștigată sau pierdută;  

**Descriere**: se folosește pentru a detalia suplimentar motivele care au condus la câștigarea sau pierderea oportunității;  

**Valoare netă**: în acest câmp este afișat totalul valorii oportunității fără discounturi; acest câmp este completat automat prin completarea tab-ului *Detaliu*;  

**Valoare brută**: în acest câmp este afișat totalul valorii oportunității, incluzând discounturile; acest câmp este completat automat prin completarea tab-ului *Detaliu*;  

**Discounturi**: în acest câmp este afișat totalul discounturilor pentru oportunitate; acest câmp este completat automat prin completarea tab-ului *Detaliu*;  

**Profit brut prevăzut**: în acest câmp, care se completează manual, utilizatorul trebuie să indice marja brută prevăzută pentru oportunitate;  

**Data prevăzută ordin client**: în acest câmp se poate indica o dată prevăzută pentru emiterea primului ordin legat de oportunitatea în cauză;  

**Data prevăzută aviz de expediție**: în acest câmp se poate indica o dată prevăzută pentru emiterea avizului legat de oportunitate;  

**Data prevăzută facturi de vânzare**: în acest câmp se poate indica o dată prevăzută pentru emiterea primei facturi legate de oportunitate.

### Workflow logs

În acest tab sunt afișate activitățile legate de fluxul de lucru asociat oportunității. Acest tab apare dacă există un flux de lucru asociat acestui obiect.

### Detaliu

În acest tab este afișat detaliul economic al ofertei. Pentru fiecare rând de detaliu se pot indica:  
**Familia de produse** și **Descriere**: fac referire la tabelul Familiei de produse;   
**Valoare brută**: permite indicarea valorii oportunității, pentru familia de produse indicată anterior, fără discounturi;  
**Discount**: permite indicarea valorii discountului  aplicat pentru familia de produse selectată;  
**Valoare netă**: se calculează ca diferență între câmpurile **Valoare Brută** și **Discount**;  
**Venituri preconizate**: permite indicarea valorii efective preconizate a rândului de oportunitate;  
**Data prevăzută factură de vânzare**: corespunde datei la care se preconizează facturarea oportunității în cauză;  
**Data prevăzută aviz de expediție**: corespunde datei la care se preconizează emiterea avizului pentru oportunitatea în cauză;  
**Data prevăzută ordin client**: corespunde datei la care se preconizează emiterea ordinului pentru oportunitatea în cauză;  
**Data închidere**: este data la care rândul în cauză a fost închis;  
**Notă**: în acest câmp se pot indica eventuale note pentru rândul în cauză.

### Oferte

În acest tab sunt afișate ofertele conectate la oportunitate. Dând dublu click pe rândul ofertei, se accesează modulul de vizualizare/modificare al ofertei respective.  
**Notă**: în acest câmp se pot indica note suplimentare.

### Documente relative

În acest tab sunt afișate fișierele atașate la oportunitate sau să atașați fișiere noi utilizând procedura de tip drag and drop.