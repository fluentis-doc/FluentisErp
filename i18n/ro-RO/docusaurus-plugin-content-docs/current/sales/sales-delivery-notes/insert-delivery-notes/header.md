---
title: Antet
sidebar_position: 2
---

## Antet

După selectarea datelor solicitate în secțiunea de sus, utilizatorul poate continua introducerea următoarelor date [manual](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) sau cu [campul help](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) sau, conform procedurilor pe care le alege, aplicația completează câmpurile *automat*.

:::note Amintiți-vă 
Dacă documentul este *creat automat*, aceste date sunt preluate din *documentul sursă* din care a fost generat.
:::  

Prin introducerea **Clientului**, toate datele specifice filei **Antet** sunt automat propuse, conform datelor setate anterior în [registru clienți](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), în câmpurile corespunzătoare adresei dvs. și în *secțiunile* :


- **Moneda**: [Moneda](/docs/guide/glossary/glossary-intro#currency), [Curs valutar](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).
- **Tara**: [Tara](/docs/guide/glossary/glossary-intro#country), [Limba](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Adresa de livrare**: [Adresa de livrare](/docs/guide/glossary/glossary-intro#shipment), [Transport](/docs/guide/glossary/glossary-intro#carriage), [Ambalare](/docs/guide/glossary/glossary-intro#packing), [Oferte](/docs/guide/glossary/glossary-intro#sales-price-list) si [intervalul de valabilitate](/docs/guide/glossary/glossary-intro#validity-date)
- alte campuri propuse la alegerea clientului, dar editabile: [Destinatie](/docs/guide/glossary/glossary-intro#destination), [Destinatar](/docs/guide/glossary/glossary-intro#recipient).

*Alte campuri optionale*:

**Stare comanda**: la crearea avizului de vanzare, acesta nu prezinta nicio bifa pusa:
> **Listat** se activeaza la lansarea tiparirii comenzii.  
> **Anulat**: daca acesta este bifat va permite sa anulati comanda.

:::note
Indicatoarele pot fi șterse cu procedura de restaurare a operațiunii.
:::

**Note client**: acest câmp este preluat din registru clienți, în timp ce în cazul creării dintr-o comandă se vor folosi aceleași date conținute în câmpul de comandă client cu același nume.

Poate fi introdus și manual. Cu butonul din dreapta al mouse-ului puteți deschide un formular pentru a specifica un text de notă foarte lung; dacă câmpul conține o valoare, culoarea de fundal a câmpului este modificată.

**Referința noastră / referința dvs.**: aceste câmpuri indică de obicei o referință internă și o referință de client pentru comanda în cauză.

**Note initiale** : poti selecta notele care au fost inserate anterior in tabelul cu acelasi nume situat in calea Home> Utilities> Management of coded notes. Pentru aceasta utilizatorul trebuie să facă dublu clic pe câmpul Note inițiale pentru a deschide Note de ajutor codificate și a selecta datele, sau cu butonul dreapta al mouse-ului poate deschide o fereastră pentru a specifica un text de notă foarte lung. Dacă câmpul conține o valoare, culoarea de fundal a câmpului este modificată.

**Proiect**: folosind [campul help](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) puteți lega documentul la un proiect.
Această asociere funcționează numai la nivelul antetului articolului.

**Data intrării în vigoare** este data efectivă pentru calcularea termenelor limită de plată.

*Butoane specifice*

> *Executare comanda*: acest buton apelează procedura de creare a unei comenzi de vânzare dintr-o comandă de muncă. Se activează prin introducerea clientului și a tipului de document.

### Plăți

**Soluțiile de plată** sunt raportate automat din fila *Date client> Plăți* și pot fi modificate/șterse de către utilizator.

În cazul în care un discount financiar este asociat cu **Tipul de plată**, valoarea reducerii este luată în considerare numai în scopuri contabile, adică în termenele documentului și nu în totalul comenzii.


*Buton specific*

**Șterge plăți**: folosit pentru a șterge liniile de plată selectate.


## Discounturi

Sunt propuse doar reducerile predefinite preluate din *Date client> discount* si pot fi modificate/anulate de catre utilizator.
  
Discounturile oferite în antetul documentului sunt afișate în fiecare rând de articol nou introdus în document.

Dacă, după inserarea rândurilor de articol, se introduce o nouă reducere în antet, aceasta nu este replicată în rândurile de articol deja introduse.

*Buton specific*

**Ștergeți discounturi**: Folosit pentru a șterge liniile de discounturi selectate.  

## Agenți

Indică codul agentului și comisionul acestuia pentru fiecare rând de articol. Sunt propuse codul și procentul definit în *Date client> fila Agenți*.

Daca comisionul nu este legat de client in registrul acestuia, totusi agentul trebuie sa fie introdus dar cu comision NULL deoarece daca ar fi cu comision 0 ar insemna ca agentul este conectat la agent dar nu primeste comision.

Aceeași secțiune va fi repetată pentru fiecare rând de articol din tab-ul *Agenți*.

**Buton specific**

**Ștergeți agenți**: vă permite să ștergeți agenții selectați.


## Date suplimentare

Aici se propun informațiile introduse în datele personale ale subiectului>fila ExtraData, doar dacă există date implicite.