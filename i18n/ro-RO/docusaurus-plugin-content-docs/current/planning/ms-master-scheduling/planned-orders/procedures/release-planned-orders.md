---
title: Lansare Ordine Planificate
sidebar_position: 1
---

:::important Utilizare
Procedura **Lansare Ordine Planificate** din Fluentis facilitează trecerea ordinelor planificate la stările lor operaționale. După generarea acestora, utilizatorul poate efectua lansarea folosind butoane specifice, disponibile în ribbon bar. Procesul de lansare este personalizat în funcție de tipul de ordin: producție, achiziție sau sistem lohn.

Când se lansează un ordin planificat de producție, acesta devine un ordin de producție operativ. Ordinele planificate de achiziție generează cereri de achiziție (CdA), în timp ce ordinele în sistem lohn planificate sunt transformate în ordine în sistem lohn operative.
:::

Form-ul permite crearea:

- *cererilor de achiziție*, eventual deja autorizate cu ajutorul parametrului relativ, în cazul ordinelor planificate de achiziție;
- *ordinelor în sistem lohn* în cazul ordinelor planificate în sistem lohn, sau în cazul în care în lista de faze a unui ordin planificat de producție este prezentă o fază externă;
- *ordinelor de producție* *lansate* sau *executive* în funcție de activarea parametrului relativ, în cazul ordinelor planificate de producție.

Lansarea ordinelor face ca acestea să nu mai fie vizibile în [Ordine planificate](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) și, în consecință, nu se poate genera o nouă [Programare](/docs/planning/ms-master-scheduling/general-schedule) a ordinului de producție din care ordinele planificate au fost eventual generate utilizând programarea generală. Ordinele planificate din tabel, generate manual sau prin elaborare MRP, nu prezintă nicio legătură cu ordinele de producție.

## Filtru

În acest tab este posibilă vizualizarea listei ordinelor planificate care trebuie să fie lansate și care se pot filtra utilizând diverse criterii de selecție.

După setarea filtrelor dorite, apăsați butonul **Caută** din *ribbon bar* pentru a vizualiza rezultatele în tabel.

*Butoane specifice*:

> **Lansare ordine planificate de producție**: este activ dacă în filtre, în câmpul *Lansare ordine planificate în*, este setat tipul de ordin de producție și dacă în tabelul rezultatelor a fost selectată cel puțin o linie de ordin de producție pentru lansare. Apăsând butonul, aplicația va genera ordine de producție lansate sau executive, în baza opțiunilor selectate în [Parametrii Necesar materiale](/docs/configurations/parameters/production/resource-requirements-parameters);
> **Lansare ordine planificate de achiziție**: este activ dacă în filtre, în câmpul *Lansare ordine planificate în*, este setat tipul de ordin de achiziție și dacă în tabelul rezultatelor a fost selectată cel puțin o linie de ordin de achiziție pentru lansare. Apăsând butonul, aplicația va genera cereri de achiziție autorizate sau neautorizate, conform parametrilor setați în [Parametrii Necesar materiale](/docs/configurations/parameters/production/resource-requirements-parameters);
> **Lansare ordine planificate în sistem Lohn**: este activ dacă în filtre, în câmpul *Lansare ordine planificate în*, este setat tipul de ordin în sistem lohn și dacă în tabelul rezultatelor a fost selectată cel puțin o linie de ordin în sistem lohn pentru lansare. Apăsând butonul, aplicația va genera ordine în sistem lohn;
> **Deschide Căutare ordine de producţie**: permite deschiderea Căutării ordinelor de producție filtrate după aceleași criterii utilizate în secțiunea de filtrare a acestei ferestre.De exemplu, dacă se filtrează ordinele planificate în această fereastră în funcție de numărul ordinului 3 din anul 2018, fereastra de căutare a ordinelor de producție se va deschide deja filtrată pentru ordinul 3 din anul 2018.

*Campuri specifice*:

**An**: indică anul ordinului planificat;
**Ordin**: indică numărul ordinului planificat;
**Nivel**: indică nivelul articolului ordinului în lista componentelor;
**An/Număr/Cod/Descriere comandă de producție**: câmpurile NU sunt completate dacă ordinul planificat a fost generat manual sau utilizând procedura MRP;
**Data început prevăzută**: dacă este ordin planificat de achiziție sau în sistem lohn, această dată reprezintă data la care trebuie trimis ordinul de achiziție către furnizor, generat ulterior prin lansarea ordinului;
**Data sfârșit prevăzută**: dacă este ordin planificat de achiziție sau în sistem lohn, această dată reprezintă data la care trebuie să fie primite bunurile și, prin urmare, va corespunde datei de primire estimate a liniei ordimnului furnizor care va fi generat ulterior, simultan cu lansarea ordinului. Dacă este un ordin planificat de producție, această dată reprezintă data prevăzută pentru finalizarea ultimei faze de procesare a ciclului articolului;  
**Cantitate confirmată**: va fi diferită de zero doar dacă procesarea s-a realizat cu ajutorul procedurii MRP;  
**Client cont, analitic și descriere**: indică clientul asociat în cazul ordinelor de producție;  
**Furnizor cont, analitic și descriere**: indică furnizorul asociat în cazul ordinelor de achiziție și în sistem lohn;  
**An/Număr/Tip ordin client**: reprezintă ordinul clientului din care a fost generată comanda pe baza căreia a fost programat ordinul planificat în cauză.


Dupa ce au fost identificate ordinele de lansat, se poate efectua **Lansarea** utilizând unul dintre butoanele din *ribbon bar* corespunzătoare tipului de ordin: **Lansare ordine planificate de producție**, **Lansare ordine planificate de achiziție** sau **Lansare ordine planificate în sistem Lohn**.
Este de asemenea posibil să **Vizualizți detaliile ordinelor planificate** prezente în tabel, făcând dublu clic pe linia ordinului planificat pe care doriți să îl vizualizați înainte de operația de lansare. 

## Parametri

Permite setarea și salvarea parametrilor pentru lansarea ordinelor planificate.

### Ordine de producție

În această secțiune, activând opțiunea **Generare ordine în sistem lohn pentru operațiuni externe**, puteți să decideți dacă, în lista etapelor ordinelor planificate de producție pe care o lansați este prezentă o etapă externă, să fie generat un ordin în sistem lohn pentru etapa externă. De obicei, această opțiune este activă.

### Cereri de achiziție

În această secțiune permite să:

- alegeți, prin intermediul combo box-ului aferent, **Tipul cererii de achiziție** care trebuie generat de lansarea ordinelor planificate de achiziție. În acest combo box este propus automat tipul cererii de achiziție deja configurat în [Parametrii Necesar materiale](/docs/configurations/parameters/production/resource-requirements-parameters) în secțiunea *Parametrii* pentru lansarea ordinelor planificate;      
- activați opțiunea **Proprietate aprovizionare** din **Parametrii MRP** articol, pentru ca procedura să creeze *cereri de achiziție* introducând prioritatea indicată în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ai fiecărui articol. Dacă nu este activă, *cererile de achiziție* vor fi create cu prioritatea specificată în ordinul asociat;      
- activați opțiunea **Rotunjire cerere de achiziție**, pentru ca procedura de lansare a ordinului planificat de achiziție să rotunjească la cel mai apropiat întreg cantitatea care este introdusă în linia cererii de achiziție generate de lansarea ordinelor planificate de achiziție, în cazul în care există cantități cu zecimale;  
- activați opțiunea **Grupează mai devreme**, pentru ca procedura de lansare să grupeze ordinele planificate de achiziție generate pentru același articol; în câmpul **Pentru numărul de zile** se stabilește numărul de zile al intervalului de timp în care poate fi efectuată gruparea, luând în considerare datele de primire preconizată a articolelor, deci datele de finalizare ale ordinului planificat de achiziție;  
- decideți, în cazul în care nu este prezent furnizorul în ordinul planificat de achiziție, dacă **Acceptați ordinele fără furnizor**, **Omite ordinele fără furnizor** sau **Acceptă ca furnizor următorul cont** specificat în căsuțele aferente.

### Ordine în sistem lohn

În această secțiune puteți să:

- alegeți, cu ajutorul combo-boxului **Tip ordin** și câmpului **An**, dacă ordinul în sistem lohn care trebuie generat să fie de tip *Închis* sau *Deschis* și în ce an;  
- decideți metoda de grupare: activând opțiunea **Grupează ordinele aceluiași terț**, procedura de lansare efectuează o grupare a ordinelor planificate în sistem lohn, inserând în același ordin în sistem lohn articolele care trebuie lucrate de același terț;   
- decideți, în cazul în care terțul nu este prezent în ordinul planificat în sistem lohn, dacă **Acceptă ordine fără furnizor**, **Omite ordinele fără terț** sau **Acceptă ca terț următorul cont** specificat în câmpurile corespunzătoare.

### Restaurare

În acest tab puteți să executați procedura de restaurare a ordinului planificat care permite anularea lansării efectuate anterior.

Sunt afișate ordinele planificate de același tip specificat în câmpul **Lansare ordine planificate către** din tab **Filtru**.

După alegerea filtrelor, efectuați clic pe butonul **Căutare** din *ribbon bar* pentru a vizualiza rezultatele.

Pentru liniile prezente în tabelul de rezultate, este afișat în unul dintre cele trei tab-uri inferioare, **Ordine de producție**, **Cereri de achiziție** sau **Ordine în sistem lohn**, documentul generat din lansarea ordinului planificat.

Pentru a lansa restaurarea, selectați unul sau mai multe ordine și faceți clic pe butonul **Restaurare ordine**. 

*Condiții pentru procedura de restaurare*:

Pentru  **ordinul planificat de producție**: doar dacă ordinul de producție generat se află în starea *Lansat*; în cazul în care ordinul de producție este *Executiv*, este necesar să se execute restaurarea lansării ordinului de producție, în timp ce în cazul în care a fost deja *Executat*, nu mai este posibil să se execute restaurarea ordinului planificat, cu excepția cazului în care se pornește de la restaurarea înregistrării semnalării de producției;  
Pentru **ordinul planificat de achiziție**: doar dacă linia cererii de achiziție generate se află în starea de *Neexecutată*; în cazul în care linia cererii de achiziție a fost deja finalizată cu crearea unui ordin furnizor, va fi necesar să mergeți înapoi, până la documentul de achiziție;  
Pentru **ordinul planificat în sistem lohn**: doar dacă linia ordinului în sistem lohn generat nu a fost încă executată sau nu a fost generat un aviz de livrare pentru materialul relativ linii ordinului în sistem lohn.

Executând această procedură, ordinele restaurate vor fi din nou vizibile în tab-ul **Filtru** unde va fi posibil să se execute din nou lansarea.

Pentru detalii despre funcționarea comună a form-urilor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).