---
title: Interfața principală Fluentis (La form principale di Fluentis)
sidebar_position: 2
---

Interfața principală a **Fluentis** este compusă din mai multe zone cu funcționalități diferite:

## Secțiunea superioară 

Toolbar-ul conține combo-box-uri pentru a selecta **Societăţi** și/sau **Diviziune** care sunt folosite pentru introducerea datelor și editorul pentru a facilita căutarea formularelor în cadrul aplicației.

Imediat sub aceasta sunt diferite tab-uri:

### Primul tab

Conține informații despre **Versiuni**, permite **Tipărirea (Stampare)**, conține informații detaliate despre **Licenţă**, permite **Închiderea (Chiudere)** programului.

### Tabul Acasă (Home)

Tab-ul conține:

- combo-box pentru a selecta **Limba** dorită,

- combo-box pentru a alege **Meniul (Menù)** Fluentis,

:::note Meniu    
În funcție de meniul activat, ribbon bar-ul tab-ului **Home** este completat cu informațiile transversale la întreaga aplicație și se adaugă tab-urile care corespund domeniilor din Fluentis.
:::

- **Temă** pe care utilizatorul le poate alege pentru a schimba fundalul aplicației în funcție de nevoile sale vizuale,

- spațiul disponibil pentru a vizualiza *formele deschise de utilizator*,

- **săgeata (freccia)** pentru a ascunde sau a vizualiza întreaga ribbon bar.
    
### Tab-urile Domeniilor

Conțin o serie de ribbon-uri grupate după tip/modul. De exemplu, tab-ul *Achiziţii* conține toate documentele ciclului activ: solicitări, comenzi, DDT, facturi etc.

### Ajutor (Help)
    
Pentru informații detaliate despre formularul în utilizare, utilizatorul poate consulta documentația folosind **F1** sau apăsând butonul **?**.

## Panoul stâng

Conține [Navigatorul Formularelor (Form Navigator)](/docs/form-navigator/data-grid-settings) cu informații despre formularul activ.

## Panoul drept

Conține:

**[Instrumente (Strumenti)](/docs/applications/applications-intro)** conține diverse aplicații complementare: ARM, Audit Trail, BizLink, Business Intelligence, CRM, Gestionare Documentală, Aplicații nesuportate.

**[Navigatorul de Obiecte (Object Navigator)](/docs/object-navigator/object-navigator-intro)** conține informații despre obiectul activ, util pentru personalizarea formularelor cu adăugarea de date sau informații suplimentare.

**[Panoul de Context (Context Panel)](/docs/panels/context-panel)** în funcție de setări, Fluentis permite vizualizarea informațiilor contextuale pentru câmpul selectat (exemplu: dacă este selectat articolul, aplicația va arăta disponibilitatea acestuia).

**[Configurări (Configurazioni)](/docs/configurations/configuration)** conține informații care vor permite definirea gestionării formularelor.

**Fluentis Chat** permite interacțiunea cu utilizatorii autorizați pentru acest serviciu de comunicare, atât intern în contextul corporativ, cât și extern pentru a accesa suportul Fluentis. Chatul este un instrument foarte util pentru a împărtăși rapid informații cu alt operator, a partaja documente digitale sau chiar documente active ale gestionării. 

## Secțiunea inferioară

În partea inferioară a aplicației, bara de stare conține o serie de informații pe care le vom explica mai jos:

**Sarcini**: permite un link rapid cu gestionarea activităților pendente (derivate din procedurile de WorkFlow configurate);

**Calendar**: permite gestionarea calendarului, care poate fi conectat cu Exchange sau Outlook.
:::note Sincronizați *calendarul Outlook* cu *calendarul Fluentis*. 

1. Configurați utilizatorul în **ARM** și definiți în tab-ul **Alte opţiuni** email-ul: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image01.png)


2. Ulterior, apăsând butonul *Cale implicită Outlook*, va fi solicitat care calendar să fie configurat dintre cele găsite, iar câmpul **Calea implicită pentru Outlook** va fi completat automat: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image02.png) ![](/img/it-it/guide/panels/status-bar/calendar-configuration/image03.png)


În acest punct, mutându-vă în **Calendar** (bara de stare), după ce ați *repornit* Fluentis, veți observa că sincronizarea cu Outlook a avut loc cu succes:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image04.png)


Vezi de asemenea [Planificarea pe calendar a resurselor](/docs/project-management/transverse-procedures).
:::


**Dashboards**: permite o sinteză rapidă a principalelor fapte din gestionare cu o interfață statistică foarte puternică și ușor personalizabilă;

**Caută**: permite vizualizarea tuturor comenzilor aplicației. Folosit împreună cu câmpul de căutare care se află în partea de sus, în meniul principal, putem găsi un comandă specifică sau comenzi grupate;

**...**: permite utilizatorului să acceseze, cu clic dreapta, fereastra **Opțiuni de Navigare (Navigation Options)** pentru a selecta numărul maxim de elemente de vizualizat (săgețile sus/jos pentru a crește/scădea) și pentru a stabili ordinea în care acestea trebuie să fie afișate (săgețile sus/jos pentru a schimba ordinea). Folosiți butonul 'OK' pentru a confirma alegerile și butonul 'Reset' pentru a reveni la situația standard;

**Bază de date**: informațiile afișate fac referire la conexiunea la baza de date și sunt, în ordinea vizualizată: *Utilizator*, *Server/Bază de date (Server\Database)*, *Societăţi*, (*Diviziune*).