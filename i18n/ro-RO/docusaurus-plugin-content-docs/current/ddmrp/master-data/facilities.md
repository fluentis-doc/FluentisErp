---
title: Facilități de producție (Supply Chain)
sidebar_position: 1
---

Fluentis DDMRP poate gestiona nu doar o fabrică, ci întregul lanț de aprovizionare compus din fabrică și mai multe hub-uri și centre de distribuție.

În Fluentis, fiecare nod al lanțului de aprovizionare este numit *Facility*, iar acesta este tabelul *Facilities*.

Este consideratè o structură pe nivele, conform descrierii care urmează.

**Centre de distribuție**: sunt unitățile logistice care deservesc direct clienții finali cu stocurile pe care le dețin.

Acestea sunt plasate geografic în poziții optime pentru a reduce timpul de transport către clienții finali.

Fiecare centru de distribuție se aprovizionează de la un hub intermediar sau direct de la fabrică.

**Hub-uri**: sunt unități logistice care aprovizionează centrele de distribuție.

Sunt plasate geografic în poziții optime pentru a reduce timpul de transport către centrele de distribuție.

Hub-urile permit menținerea unui nivel ridicat al serviciilor pentru clienții finali, reducând în același timp nivelul general al stocurilor în rețeaua de distribuție.

Hub-urile se aprovizionează de la fabrică sau, în rețele extinse, de la alte hub-uri.

**Fabrică**: este considerată o singură fabrică în *Facilitățile de producție*.

Aceasta aprovizionează hub-urile și/sau centrele de distribuție.

Astfel, există o relație client-furnizor între unitățile *Facilității de producție* (fiecare unitate logistică trebuie oricum să fie codificată atât ca client, cât și ca furnizor).

Centrele de distribuție sunt clienți și nu furnizori în facilitățile de producție, hub-urile sunt atât clienți (ai fabricii sau ai altor hub-uri), cât și furnizori (pentru centrele de distribuție sau alte hub-uri), iar fabrica are ca clienți centrele de distribuție sau hub-urile și nu are nicio unitate logistică furnizoare.

*Câmpurile care definesc o unitate logistică*:

**Depozit**: reprezintă codul depozitului asociat unității logistice.

Cu excepția fabricii, fiecare unitate logistică este identificată în mod unic de depozitul asociat acesteia (alegerea este făcută pentru a crește gradul de compatibilitate cu aplicațiile externe).

În cazul fabricii, însă, pot fi asociate mai multe depozite și acestea sunt singurele luate în considerare de sistemul de planificare. Deci, alte depozite asociate fabricii care nu sunt în aceastăacest tabel vor fi ignorate de procedura de planificare DDMRP.

În Fluentis DDMRP, unitatea logistică *Fabrică* va fi conectată printr-un cod de depozit gol, deoarece este singura unitate logistică la care pot fi asociate mai multe depozite. Astfel se pierde relația de univocitate dintre depozit și unitatea logistică.

**Client**: identifică unitatea logistică în mod unic, la fel ca și codul depozitului. Prin urmare, fiecare unitate logistică trebuie să aibă un cont client asociat.

Dacă aceasta aprovizionează alte unități logistice, atunci va trebui să aibă și un cont furnizor asociat.

Același cod client nu poate fi asociat, deci, cu mai multe depozite (cu excepția fabricii), la fel cum același cod de depozit nu poate fi asociat la mai multe coduri client.

**Furnizor**: identifică unitatea logistică care va furniza mărfurile celei identificate de codul depozit și/sau codul client al înregistrării.

Pentru înregistrările asociate fabricii (cu opțiunea *Fabrică* activă), acest câmp nu poate fi editat și rămâne gol, deoarece fabrica nu poate fi aprovizionată de către o altă unitate logistică.

Poate fi selectată ca furnizor doar o unitate logistică deja introdusă în acest tabel (nu este posibilă selectarea generică a unui furnizor din lista furnizorilor).

Sistemul verifică codul clientului asociat codului furnizor și caută acest cod client în câmpul client al diferitelor înregistrări ale tabelului *Facilități*, astfel încât o unitate logistică furnizoare să aibă asociate atât un cod client, cât și un cod furnizor.

Acest lucru implică faptul că introducerea în acest tabel trebuie să înceapă de la stratul cel mai de jos, adică de la fabrică, pentru ca apoi să urce la eventualele hub-uri și, în cele din urmă, la centrele de distribuție. Deci introducerea se face pe nivele de prioritate descrescătoare.

Nu este obligatoriu ca toate articolele prezente într-o unitate logistică să fie aprovizionate de unitatea indicată ca furnizor.

Aceasta rămâne furnizorul implicit care va fi utilizat la crearea *Ordinelor interne planificate* generate de sistemul de planificare și pentru calculul lead time decuplat (DLT).

În *Parametri DDMRP* ai articolelor, pot fi definite excepții, inserând o altă unitate logistică sau un furnizor generic extern *Facilităților de producție* și timpul său de transport.

**Depozit furnizor**: reprezintă codul depozitului asociat unității logistice furnizoare a înregistrării selectate.

În cazul în care furnizorul este fabrica, acest câmp este gol, deoarece fabrica este singura unitate logistică la care se pot asocia mai multe depozite.

**Fabrică**: este un parametru care arată că depozitul înregistrării se referă la fabrică (în acest caz, furnizorul este gol).

Pentru fabrică sunt posibile mai multe înregistrări, una pentru fiecare depozit pe care sistemul de planificare trebuie să-l ia în considerare.

După ce a fost introdus primul depozit cu parametrul *Fabrică* activat, pentru succesivele se va verifica ca clientul să aibă codul identic cu cel al înregistrărilor cu parametrul *Fabrică* activat, deoarece evident fabricii îi va fi asociat întotdeauna un singur cod client (și un singur cod furnizor).

**Prioritate de planificare**: este o valoare mai mare sau egală cu 0 și nu mai mare de 100.

Înregistrările asociate fabricii au toate valoarea 100 în Fluentis; celelalte unități logistice au o valoare mai mică.

Acest element indică sistemului de planificare ce ordin să urmeze în procesul de calcul. Astfel, vor fi planificate mai întâi unitățile logistice cu valoare mai mică, urmând apoi să crească această valoare și, deci, planificând la sfârșit fabrica, respectând lanțul de relații client-furnizor între unitățile logistice, la fel cum se întâmplă în cazul unei liste de componente, începând de sus și continuând cu nivelele inferioare.

Acest ordin este necesar pentru că, pentru a cunoaște necesitățile unei unități logistice, trebuie mai întâi planificate necesitățile unităților sale client.

Fiecare înregistrare client trebuie să aibă o prioritate mai mică decât cea a unității sale furnizoare.

**Lead time**: este timpul necesar pentru a transporta marfa de la unitatea logistică furnizoare și este exprimat în zile.

**Șablon ieșiri din facilitate furnizor**: reprezintă șablonul de gestiune care va fi utilizat pentru a executa o comandă internă, adică pentru a ridica marfa din această facilitatate și a o trimite la facilitatatea care a făcut cererea. *Nota*: trebuie să fie deja asociat gestiunii pentru a putea fi selectat în faza de inserare a înregistrării.

**Șablon intrări în facilitata client**: reprezintă șablonul de gestiune care va fi utilizat pentru a încărca marfa în urma unei comenzi interne, adică pentru a primi marfa în această facilitatate și care provine din facilitatatea care a furnizat-o. *Nota*: trebuie să fie deja asociat gestiunii pentru a putea fi selectat în faza de inserare a înregistrării.