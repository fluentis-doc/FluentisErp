---
title: Declarație nouă
sidebar_position: 2
---

În mod normal, *Declarațiile de producție* sunt generate automat cu Fluentis [MES](/docs/production/mes/mes-intro), însă utilizatorul are posibilitatea să le genereze manual folosind acest form.

Pentru a crea o declarație nouă este necesară inserarea ordinului de producție cu indicarea anului, numărului și lotului, fie manual, fie prin intermediul help-ului, precum și faza și subfaza de declarat, tot manual sau prin intermediul help-ului.  
Astfel se încarcă automat datele fazei selectate în partea superioară a formului, unde putem vedea informațiile referitoare la tipul ordinului de producție, comanda cu anul, numărul și tipul, proiectul asociat, centrul de lucru și mașina pe care se execută faza, data de finalizare estimată a lucrării, precum și informațiile articolului cu varianta sa, dacă există.  
Se inserează cantitatea totală de produs, cantitatea produsă care este egală cu suma cantităților declarate de ultima fază productivă și care se poate înregistra a ciclului (corespunzătoare, deci, produsului finit), și cantitatea fazei produse, care rezultă din suma cantităților prezente în declarația fazei respective.

Câmpul **barcode** din antet este utilizat pentru introducerea ordinului de producție sau a fazei care urmează să fie declarată.  
Barcode-ul trebuie să fie compus dintr-un identificator fix pentru recunoașterea ordinului de producție (707) sau a fazei unui ordin de producție(718), caracterul de separare "-" și identificatorul ordinului de producție ori al fazei pe care dorim să o declarăm.

Exemplu: 707-1234 sau 718-98765

În tabelul central se introduc liniile declarației de producție.  
Primul lucru de introdus este *Starea declarației*, care poate avea următoarele valori:

- *Deschidere*: permite crearea unei declarații de producție de deschidere;  
- *Întrerupere*: permite crearea unei declarații de producție de înrerupere;  
- *Reluare*: permite crearea unei declarații de producție de reluare; se introduce doar după o *Întrerupere*;  
- *Avansare*: permite crearea unei declarații de producție de progres;  
- *Închidere*: permite crearea unei declarații de producție de închidere;

Fiecare declarație de producție trebuie să aibă ca prim rând o declarație de deschidere, care determină momentul în care începe prelucrarea.  
Aceasta poate fi urmată de avansare sau direct de o fază de închidere, în funcție de caz. Diferența esențială este că închiderea nu permite introducerea altor rânduri de declarație, în timp ce *Avansare* da.  
De asemenea, este posibilă introducerea declarațiilor de înrerupere, urmate de o declarație de reluare, în cazul în care este necesară oprirea producției dintr-un anumit motiv.

#### Butoane specifice

> **Salvează**: permite salvarea modificărilor efectuate;  
> **Declarație de producție nouă**: permite inserarea unui nou rând în declarație;  
> **Recalculează timp mașină**: permite recalcularea timpului de funcționare a mașinii pentru toate rândurile declarației;  
> **Recalculează timp operator**: permite recalcularea timpului de manoperă pentru toate rândurile declarației;  
> **Inserează declarații**: permite introducerea unui nou rând de declarație, ulterior celor deja introduse;  
> **Nouă întrerupere/reluare**: permite inserarea simultană a unui rând de înrerupere și a unui rând de reluare, indicând în pop-up data și ora pentru fiecare; butonul este activ numai dacă ultima stare a declarației este *Deschidere (Apertura)* sau *Avansare*;  
> **Șterge declarații (Cancella dichiarazioni)**: permite ștergerea rândului de declarație selectat;  
> **Deschide UDC (Apri UDC)**: permite deschiderea gestiunii unității de încărcare (Gestione unità di carico) cu filtrul corespunzător unității de încărcare aferente rândului declarației selectate;  
> **Creează UDC (Crea UDC)**: permite crearea unei unități de încărcare aferente rândului declarației selectate. Pentru a o crea, este necesar să fie introduse manual *Tipul unității de încărcare (Tipo unità di carico)* și *Angajatul (Dipendente)*;  
> **Înregistrare declarații (Registrazione dichiarazioni)**: permite crearea înregistrării (registrazione) mișcării (movimento) de gestiune (magazzino) pentru rândul de declarație selectat;  
> **Restabilire declarații (Ripristino dichiarazioni)**: permite anularea înregistrării (registrazione) mișcării (movimento) de gestiune (magazzino) pentru rândul de declarație selectat.

*Câmpuri specifice*:  

**Înregistrat (Registrato)**: indică faptul că rândul declarației a fost înregistrat și a fost creată mișcarea (movimento) corespunzătoare de gestiune (magazzino);  
**Data**: indică data de început aferentă rândului declarației;  
**Ora**: indică ora de început aferentă rândului declarației;  
**Număr (Numero)**: este un număr progresiv atribuit fiecărui rând al declarației (pornește întotdeauna de la 1);  
**Stare declarație (Stato dichiarazione)**: definește starea rândului declarației. Poate fi: *Deschidere (Apertura)*, *Întrerupere*, *Reluare*, *Avansare* sau *Închidere*;  
**Cauză de înrerupere (Causale di sospensione)**: permite indicarea cauzei de înrerupere utilizate pentru rândul de declarație în cauză. Se activează numai dacă *Starea declarației* este de tip *Întrerupere*;  
**Lot (Lotto)**: permite introducerea manuală a numărului de lot (lotto) aferent cantității produse;  
**Cantitate produsă (Quantità prodotta)**: indică cantitatea produsă aferentă rândului declarației;  
**Unitate de măsură alternativă (Unità di misura alternativa)**: indică unitatea de măsură alternativă utilizată;  
**Cantitate alternativă (Quantità alternativa)**: indică cantitatea produsă în unitatea de măsură alternativă;  
**Gestiune de vărsare (Magazzino versamento)**: indică gestiunea (magazzino) în care se varsă cantitatea produsă;  
**Cauză de vărsare (Causale versamento)**: indică cauza (causale) de vărsare utilizată pentru cantitatea produsă;  
**Locație de vărsare (Versamento ubicazione)**: indică locația (ubicazione) în care se varsă cantitatea produsă;  
**Cantitate respinsă (Quantità scartata)**: indică cantitatea respinsă (scartata) aferentă rândului declarației;  
**Gestiune de scarto (Magazzino di scarto)**: indică gestiunea (magazzino) pentru cantitatea de scarto (scarto);  
**Cauză de scarto (Causale di scarto)**: indică cauza (causale) de scarto (scarto) utilizată pentru cantitatea respinsă;  
**Locație de scarto (Ubicazione di scarto)**: indică locația (ubicazione) de scarto (scarto) pentru cantitatea respinsă;  
**Defect (Difetto)**: permite introducerea defectului aferent cantității respinse. Se activează numai după ce s-a introdus o valoare mai mare de zero în câmpul **Cantitate respinsă (Quantità scartata)**;  
**Gestiune de consum (Magazzino di consumo)**: permite specificarea gestiunii (magazzino) de consum a articolului (în antetul declarației de producție) utilizat în faza anterioară;  
**Cauză de consum (Causale di consumo)**: permite specificarea cauzei (causale) de consum a articolului (în antetul declarației de producție) utilizat în faza anterioară;  
**Locație de consum (Ubicazione di consumo)**: permite specificarea locației (ubicazione) de consum a articolului (în antetul declarației de producție) utilizat în faza anterioară;  
**Mașini (Macchine)**: indică descrierea cauzei (causale) de vărsare a cantității produse;  
**Număr mașini (Numero macchine)**: indică numărul de mașini folosit pentru rândul declarației;  
**Grupuri de manoperă (Gruppi manodopera)**: indică codul grupului de manoperă folosit pentru rândul declarației;  
**Număr de operatori (Numero operai)**: indică numărul de operatori folosiți pentru rândul declarației;  
**Situl productiv (Sito produttivo)**: indică codul sitului productiv aferent rândului declarației;  
**Timp mașină (Tempo macchina)**: indică timpul mașinilor aferent rândului declarației. Se calculează ca diferență între *data/ora* declarației actuale și cele ale declarației anterioare. (Eticheta câmpului se modifică în funcție de unitatea de măsură a timpului fazei declarate);  
**Timp manoperă (Tempo manodopera)**: indică timpul de manoperă aferent rândului declarației. Se calculează ca diferență între *data/ora* declarației actuale și cele ale declarației anterioare. (Eticheta câmpului se modifică în funcție de unitatea de măsură a timpului fazei declarate);  
**Timp de pregătire (Tempo attrezzaggio)**: indică timpul de pregătire aferent rândului declarației; acesta se indică manual. (Eticheta câmpului se modifică în funcție de unitatea de măsură a timpului fazei declarate);  
**Angajat (Dipendente)**: indică codul utilizatorului care efectuează declarația;  
**Nume de familie (Cognome)**: indică numele de familie al utilizatorului care efectuează declarația;  
**Prenume (Nome)**: indică prenumele utilizatorului care efectuează declarația;  
**Unitate de încărcare (Unità di carico)**: indică numărul unității de încărcare, format din an, număr comandă de producție (ordine di produzione) și un progresiv. Pentru ca unitatea de încărcare să poată fi folosită în declarațiile de producție, este necesar ca **Grupul (Gruppo)**, configurat în [Tip grup UDC (Tipo gruppo UDC)](/docs/configurations/tables/logistics/loading-unit-group-type/) al unității de încărcare, să fie de tip *Lucrare de producție (Commessa di produzione)* sau *Comandă de producție (Ordine di produzione)*;  
**Tip unitate de încărcare (Tipo unità di carico)**: indică tipul unității de încărcare;  
**Descriere tip unitate de încărcare (Descrizione tipo unità di carico)**: indică descrierea tipului unității de încărcare;  
**Număr unitate de încărcare (Numero unità di carico)**: indică numărul unității de încărcare;  
**Unitate de încărcare de scarico (Unità di carico di scarico)**: **Work in progress**;  
**Înălțime (Altezza)**: indică înălțimea unității de încărcare;  
**Lățime (Larghezza)**: indică lățimea unității de încărcare;  
**Adâncime (Profondità)**: indică adâncimea unității de încărcare;  
**Descriere cauză de înrerupere (Descrizione causale di sospensione)**: indică descrierea cauzei de înrerupere (causale di sospensione) folosite în rândul declarației;  
**Descriere gestiune de vărsare (Descrizione magazzino di versamento)**: indică descrierea gestiunii (magazzino) de vărsare pentru cantitatea produsă;  
**Descriere cauză de vărsare (Descrizione causale di versamento)**: indică descrierea cauzei (causale) de vărsare pentru cantitatea produsă;  
**Descriere gestiune de scarto (Descrizione magazzino di scarto)**: indică descrierea gestiunii (magazzino) aferente cantității de scarto (scarto);  
**Descriere cauză de scarto (Descrizione causale di scarto)**: indică descrierea cauzei (causale) de scarto (scarto);  
**Descriere mașină (Descrizione macchina)**: indică descrierea mașinii utilizate;  
**Descriere grup manoperă (Descrizione gruppo manodopera)**: indică descrierea grupului de manoperă utilizat;  
**Descriere site producție (Descrizione sito produzione)**: indică descrierea sitului productiv utilizat.

Partea inferioară a formului se compune dintr-o serie de taburi aferente rândului declarației selectate.

## Materiale (Materiali)

În acest tab sunt afișate automat materialele utilizate în faza pentru realizarea articolului de produs, dar utilizatorul poate modifica datele și/sau adăuga materiale suplimentare, în funcție de necesități.  
Desigur, pentru ca materialele să fie afișate automat, faza trebuie să fie ultima de tip *Productiv (Produttivo)* și *Transportabilă (Movimentabile)* din ciclu; dacă nu este ultima, tot trebuie să fie de tip *Productiv (Produttivo)* și *Transportabilă (Movimentabile)* și să-i fie asociate direct materiale.

*Câmpuri specifice*:  

**Înregistrat (Registrato)**: indică faptul că materialul aferent rândului declarației selectate a fost înregistrat și a fost creată mișcarea (movimento) de gestiune (magazzino) corespunzătoare;  
**Unitate de încărcare material (Unità di carico materiale)**: permite indicarea unității de încărcare din care preluăm materialul;  
**Clasă (Classe)**: indică clasa articolului;  
**Cod articol (Codice articolo)**: indică codul articolului;  
**Variantă (Variante)**: indică codul variantei articolului;  
**Unitate de măsură (Unità di misura)**: indică unitatea de măsură principală pentru material;  
**Cantitate prelevată (Quantità prelevata)**: indică cantitatea ridicată prin procedura [Lista de ridicare materiale (Lista prelievo materiali)](/docs/production/pp-production-in-progress/picking-materials-list);  
**Cantitate consumată (Quantità consumata)**: indică cantitatea utilizată de material;  
**Unitate de măsură alternativă (Unità di misura alternativa)**: indică unitatea de măsură alternativă a materialului;  
**Cantitate alternativă (Quantità alternativa)**: indică cantitatea de material utilizată în unitatea de măsură alternativă;  
**Gestiune de consum (Magazzino consumo)**: indică codul gestiunii (magazzino) de consum al materialului;  
**Cauză de consum (Causale consumo)**: indică codul cauzei (causale) de consum al materialului;  
**Locație de consum (Ubicazione consumo)**: indică codul locației (ubicazione) gestiunii de consum al materialului;  
**Cantitate respinsă (Quantità scartata)**: indică cantitatea respinsă a materialului;  
**Gestiune de scarto (Magazzino di scarto)**: indică codul gestiunii (magazzino) de scarto (scarto) pentru material;  
**Locație de scarto (Ubicazione di scarto)**: indică codul locației (ubicazione) de scarto (scarto) pentru material;  
**Cauză de scarto (Causale di scarico)**: indică codul cauzei (causale) de scarto (scarto) pentru material;  
**Descriere articol (Descrizione articolo)**: indică descrierea articolului;  
**Descriere variantă (Descrizione variante)**: indică descrierea variantei articolului;  
**Descriere gestiune de consum (Descrizione magazzino consumo)**: indică descrierea gestiunii (magazzino) de consum al materialului;  
**Descriere cauză de consum (Descrizione causale consumo)**: indică descrierea cauzei (causale) de consum al materialului;  
**Descriere gestiune de scarto (Descrizione magazzino di scarto)**: indică descrierea gestiunii (magazzino) de scarto (scarto) a materialului;  
**Descriere cauză de scarto (Descrizione causale di scarto)**: indică descrierea cauzei (causale) de scarto (scarto) a materialului;  
**Prioritate (Priorità)**: indică prioritatea cu care sunt afișate materialele.

În plus, în partea de jos se pot introduce loturile și numerele seriale (serial number) în grilele corespunzătoare.

Grila *Loturi (Lotti)* conține următoarele coloane:

**Lot (Lotto)**: indică numărul de lot (lotto) al materialului selectat;  
**Cod lot furnizor (Codice lotto fornitore)**: indică numărul de lot al furnizorului pentru materialul selectat;  
**Cantitate (Quantità)**: indică cantitatea de material selectat aferentă acelui lot;  
**Locație (Ubicazione)**: indică locația (ubicazione) lotului materialului selectat;  
**Data începerii (Data inizio)**: indică data de început pentru lotul materialului selectat;  
**Data expirării (Data scadenza)**: indică data de expirare pentru lotul materialului selectat;  
**Cont/Subitcont/Descriere cont (Conto/Sottoconto/Descrizione conto)**: indică respectiv contul, sub-contul și descrierea clientului/furnizorului pentru materialul selectat.

Grila *Numere Seriale (Serial number)* conține următoarele coloane:

**Barcode (Barcode)**: codul barcode include numărul serial și alte informații aferente. Pentru toate informațiile despre cum se codifică barcode-ul care urmează a fi citit în acest câmp, consultați pagina [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer);  
**Tip Număr Serial (Tipo Serial number)**: indică tipul de număr serial pentru materialul selectat;  
**Număr Serial (Serial number)**: indică numărul serial al materialului selectat;  
**Data începerii (Data inizio)**: indică data de început a numărului serial al materialului selectat;  
**Anulat (Annullato)**: indică faptul că nr. serial este în stare anulată;  
**Lot (Lotto)**: indică codul lotului pentru numărul serial al materialului selectat.

## Echipa (Squadra)

Acest tab permite gestionarea membrilor echipei care lucrează asupra rândului declarației selectate, indicând pentru fiecare data de început și data de final a lucrării.

*Câmpuri specifice*:  

**Cod (Codice)**: indică codul operatorului care lucrează la declarație;  
**Nume de familie (Cognome)**: indică numele de familie al operatorului;  
**Prenume (Nome)**: indică prenumele operatorului;  
**Șef echipă (Capo squadra)**: indică faptul că acel operator este șeful de echipă;  
**Activitate (Attività)**: indică activitatea desfășurată de operator;  
**Descriere (Descrizione)**: indică descrierea activității desfășurate de operator;  
**Pregătire (Attrezzaggio)**: indică faptul că timpul lucrat de operator va fi considerat ca timp de pregătire în analizele ulterioare;  
**Data începerii (Data inizio)**: indică data de început a lucrării operatorului;  
**Ora începerii (Ora inizio)**: indică ora de început a lucrării operatorului;  
**Data finalizării (Data fine)**: indică data de final a lucrării operatorului;  
**Ora finalizării (Ora fine)**: indică ora de final a lucrării operatorului;  
**Data creării (Data creazione)**: indică data creării înregistrării;  
**Data ultimei modificări (Data ultima modifica)**: indică data ultimei modificări a înregistrării;  
**Operator (Operatore)**: indică utilizatorul care a creat înregistrarea.

## Articole alternative (Articoli alternativi)

Acest tab permite adăugarea și gestionarea articolelor (spin-off) care sunt realizate ca urmare a producției unui articol principal.  
Astfel, pot fi introduse în tabelul dedicată, cu posibilitatea de a gestiona și loturile și numerele seriale aferente.  
Desigur, loturile și numerele seriale se referă la rândul articolului alternativ selectat.  
Mișcările de încărcare pentru articolele alternative se vor face în gestiunea (magazzino), cu cauza (causale) și locația (ubicazione) indicate pe rând.

Grila *Loturi (Lotti)* conține următoarele coloane:

**Lot (Lotto)**: indică numărul de lot (lotto) al articolului;  
**Tip cod lot (Tipo codice lotto)**: indică tipul codului de lot (lotto) al articolului;  
**Tip lot (Tipo lotto)**: indică tipul lotului (lotto) al articolului;  
**Cod lot furnizor (Codice lotto fornitore)**: indică numărul de lot al furnizorului articolului;  
**Notă (Note)**: permite introducerea unei note aferente lotului;  
**Cantitate (Quantità)**: indică cantitatea articolului pentru acel lot;  
**Locație (Ubicazione)**: indică locația (ubicazione) lotului articolului;  
**Data începerii (Data inizio)**: indică data de început a lotului articolului;  
**Data expirării (Data scadenza)**: indică data de expirare a lotului articolului;  
**Cont/Subitcont/Descriere cont (Conto/Sottoconto/Descrizione conto)**: indică respectiv contul, sub-contul și descrierea clientului/furnizorului aferent articolului.

Grila *Numere Seriale (Serial number)* conține următoarele coloane:

**Cod Număr Serial (Codice Serial number)**: indică numărul serial al articolului;  
**Tip Număr Serial (Tipo Serial numnber)**: indică tipul de număr serial al articolului;  
**Număr Serial client (Serial number cliente)**: indică numărul serial al clientului pentru articolul respectiv;  
**Număr Serial furnizor (Serial number fornitore)**: indică numărul serial al furnizorului pentru articolul respectiv;  
**Data începerii (Data inizio)**: indică data de început a numărului serial al articolului;  
**Anulat (Annullato)**: indică faptul că numărul serial este în stare anulată;  
**Lot (Lotto)**: indică codul lotului (lotto) pentru numărul serial al articolului.

## Suspendări (Sospensioni)

Acest tab permite specificarea mai multor cauze (causali) de înrerupere, cu minutele corespunzătoare, și se activează doar pentru un rând cu *Stare declarație (Stato dichiarazione)* de tip *Întrerupere*.

## Deșeuri (Scarto)

Acest tab permite specificarea mai multor gestiuni (magazzino) și cauze (causali) de scarto (scarto), cu cantitățile aferente, și se activează numai dacă se declară o cantitate respinsă.

## Date extra (Extra Data)

Permite gestionarea și vizualizarea Extra Data asociate declarației.

Pentru o descriere detaliată despre extra data, consultați articolul [Extra data (Extra data)](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Loturi și Numere Seriale (Lotti e Serial Number)

În tabul **Loturi și Numere Seriale (Lotti e Serial numbers)**, în timpul înregistrării (registrazione) declarației de producție, loturile și numerele seriale ale articolelor produse sunt aduse automat, pe baza logicii indicate în tabul [Loturi și Numere Seriale (Lotti e Serial numbers)](/docs/erp-home/registers/items/create-new-item) al datelor articolului (anagrafica articolo).  
Dacă este indicat un lot (lotto) în câmpul lotului (lotto) al rândului declarației, articolele produse vor fi înregistrate cu acest număr de lot, care are prioritate față de regulile introduse în anagrafica articolului.

Grila *Loturi (Lotti)* conține următoarele coloane:

**Lot (Lotto)**: indică numărul de lot (lotto) al articolului;  
**Tip cod lot (Tipo codice lotto)**: indică tipul codului de lot (lotto) al articolului;  
**Tip lot (Tipo lotto)**: indică tipul lotului (lotto) al articolului;  
**Cod lot furnizor (Codice lotto fornitore)**: indică numărul de lot al furnizorului articolului;  
**Notă (Note)**: permite introducerea unei note aferente lotului;  
**Cantitate (Quantità)**: indică cantitatea articolului pentru acel lot;  
**Locație (Ubicazione)**: indică locația (ubicazione) lotului articolului;  
**Data începerii (Data inizio)**: indică data de început a lotului articolului;  
**Data expirării (Data scadenza)**: indică data de expirare a lotului articolului;  
**Cont/Subitcont/Descriere cont (Conto/Sottoconto/Descrizione conto)**: indică respectiv contul, sub-contul și descrierea clientului/furnizorului aferent articolului.

Grila *Numere Seriale (Serial number)* conține următoarele coloane:

**Cod Număr Serial (Codice Serial number)**: indică numărul serial al articolului;  
**Tip Număr Serial (Tipo Serial number)**: indică tipul de număr serial al articolului;  
**Număr Serial client (Serial number cliente)**: indică numărul serial al clientului pentru articolul respectiv;  
**Număr Serial furnizor (Serial number fornitore)**: indică numărul serial al furnizorului pentru articolul respectiv;  
**Data începerii (Data inizio)**: indică data de început a numărului serial al articolului;  
**Anulat (Annullato)**: indică faptul că numărul serial este în stare anulată;  
**Lot (Lotto)**: indică codul lotului (lotto) pentru numărul serial al articolului.