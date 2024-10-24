---
title: Formularul principal Fluentis (La form principale di Fluentis)
sidebar_position: 2
---

Formularul principal al **Fluentis** este compus din mai multe zone cu funcționalități diferite:

## Secțiunea superioară 

Bara de unelte conține combo-box-uri pentru a selecta **Societăţi** și/sau **Diviziune** care sunt utilizate pentru introducerea datelor și editorul pentru a facilita căutarea formularelor în cadrul aplicației.

Imediat sub aceasta există mai multe tab-uri:

### Primul tab

Conține informații despre **Versiuni**, permite **Tipărirea (Stampare)**, conține informații detaliate despre **Licenţă**, permite **Închiderea (Chiudere)** programului.

### Tabul Acasă

Tabul conține:

- combo-box-ul pentru a selecta **Limba** dorită,
    
- combo-box-ul pentru a alege **Meniul (Menù)** Fluentis,

:::note Meniu    
În funcție de meniul activat, bara de ribbon a tabului **Home** este completată cu informațiile transversale ale întregii aplicații și se adaugă tab-uri care corespund domeniilor Fluentis.
:::
    
- **Temă** pe care utilizatorul le poate alege pentru a schimba fundalul aplicației în funcție de nevoile sale vizuale,
    
- spațiul disponibil pentru a vizualiza *formularele deschise de utilizator*,
    
- **săgeata (freccia)** pentru a ascunde sau a afișa întreaga bara de ribbon.
    
### Tab-urile Domeniilor

Conțin o serie de ribbon-uri grupate după tip/modul. De exemplu, tabul *Achiziţii* conține toate documentele ciclului activ: cereri, comenzi, DDT, facturi etc.

### Ajutor
    
Pentru informații detaliate despre formularul în uz, utilizatorul poate consulta documentația folosind **F1** sau apăsând butonul **?**.

## Panoul stâng

Conține [Navigarea Formularului (Form Navigator)](/docs/form-navigator/data-grid-settings) cu informații despre formularul activ.

## Panoul drept

Conține:

**[Instrumente (Strumenti)](/docs/applications/applications-intro)** conține diverse aplicații complementare: ARM, Audit Trail, BizLink, Business Intelligence, CRM, Gestionare Documentală, Aplicații nesuportate.

**[Navigatorul de Obiecte (Object Navigator)](/docs/object-navigator/object-navigator-intro)** conține informații despre obiectul activ, util pentru personalizarea formularelor cu adăugarea de date sau informații suplimentare.

**[Panoul Contextual (Context Panel)](/docs/panels/context-panel)** în funcție de setări, Fluentis permite vizualizarea informațiilor contextuale pentru câmpul selectat (de exemplu: dacă se selectează articolul, aplicația arată disponibilitatea acestuia).

**[Configurări (Configurazioni)](/docs/configurations/configuration)** conține informații care vor permite definirea gestionării formularelor.

**Fluentis Chat** permite interacțiunea cu utilizatorii care au acces la acest serviciu de comunicare, atât intern în contextul companiei, cât și extern pentru a accesa suportul Fluentis. Chat-ul este un instrument foarte util pentru a partaja rapid informații cu alt operator, a împărtăși documente digitale sau chiar documente active din sistemul de gestiune. 

## Secțiunea inferioară

În partea de jos a aplicației, bara de stare conține o serie de informații pe care le explicăm mai jos:

**Sarcini**: permite o conectare rapidă cu gestionarea activităților pendente (derivate din procesele de WorkFlow configurate);

**Calendar**: permite gestionarea calendarului, care poate fi conectat cu Exchange sau Outlook.
:::note Sincronizează *calendarul Outlook* cu *calendarul Fluentis*. 

1. Configurează utilizatorul în **ARM** și definește în tab-ul **Alte opţiuni** adresa de mail: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image01.png)


2. Ulterior, apăsând butonul *Cale implicită Outlook*, va fi solicitat să selecteze care calendar să configureze dintre cele găsite, iar câmpul **Cale implicită Outlook** va fi completat automat: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image02.png) ![](/img/it-it/guide/panels/status-bar/calendar-configuration/image03.png)


În acest moment, mutându-te în **Calendar** (bara de stare), după ce *repornești* Fluentis, vei observa că sincronizarea cu Outlook a fost realizată cu succes:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image04.png)


Vezi de asemenea [Planificarea pe calendar a resurselor](/docs/project-management/transverse-procedures).
:::


**Dashboards**: permite o sinteză rapidă a principalelor aspecte ale managementului cu o interfață statistică foarte puternică și ușor de personalizat;

**Caută**: permite vizualizarea tuturor comenzilor aplicației. Utilizat împreună cu câmpul de căutare situat în partea de sus, în meniul principal, putem găsi o comandă specifică sau comenzi grupate;

**...**: permite utilizatorului să acceseze, cu clic dreapta, fereastra **Opțiuni de Navigare (Navigation Options)** pentru a selecta numărul maxim de elemente de vizualizat (săgețile sus/jos pentru a crește/scădea) și pentru a stabili ordinea în care acestea trebuie să fie afișate (săgețile sus/jos pentru a schimba ordinea). Folosește butonul 'OK' pentru a confirma alegerile și butonul 'Reset' pentru a reveni la situația standard;

**Bază de date**: informațiile expuse se referă la conexiunea la baza de date și sunt, în ordinea afișată: *Utilizator*, *Server/Bază de date (Server\Database)*, *Societăţi*, (*Diviziune*).