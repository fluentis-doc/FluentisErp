---
title: Generare comenzi de producție
sidebar_position: 2
---

Procedura permite generarea comenzilor de producție din ordine clienți, din previzional și/sau din substoc.

### Ordine clienți {#sales-orders}

În acest tab se pot filtra liniile de ordin client care care vor fi analizate de procedura **Generare comenzi de producție**.

Pentru a putea fi vizualizate în acest tab, liniile de ordin trebuie să îndeplinească următoarele **cerințe**:

- articolul liniei de ordin client trebuie să aibă flag-ul *Generare comenzi de producție* activat în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ;
- linia nu trebuie să fi fost executată ca *Dispoziție de livrare*, *Aviz de vânzare*, sau *Factură de vânzare*;
- linia nu trebuie să fi fost marcată ca fiind *Executată forțat* și trebuie să fie *Neexecutată* sau *Parțial executată*;
- din linie nu trebuie să fi fost generate *Comenzi de producție*;
- linia trebuie să aibă *Data marfă pregătită* inserată în *Ordin client* în tab  *Articole* din care provine;
- ordinul client din care provine linia trebuie să fie *Listat* și *Confirmat*.

:::note Nota
Dacă una dintre aceste condiții lipsește, vizualizarea liniei de ordin client în tabel nu va fi posibilă.
:::

În zona de filtru se pot filtra doar liniile de ordin care vor fi vizualizate. Cu clic pe butonul **Caută** în tabelul de rezultate vor fi afișate toate liniile de ordin corespunzătoare filtrelor inserate.

#### Câmpuri specifice

**Tip**: reprezintă tipul de ordin client;
**Număr**: reprezintă numărul ordinului client;
**An**: reprezintă anul ordinului client;     
**Data ordin client**: reprezintă data ordinului client;     
**Număr rând**: reprezintă numărul rândului ordinului client;     
**Clasă** și **Cod articol**: reprezintă clasa și codul articolului;             
**Variantă**: reprezintă varianta articolului;          
**Data OC**: reprezintă data inserării ordinului;     
**Cantitate**: reprezintă cantitatea încă de executat a rândului ordinului;   
**Disponibilitate**: reprezintă cantitatea disponibilă a articolului în data marfii pregătite a rândului ordinului;           
**UM**: reprezintă unitatea de măsură;        
**Livrare**: reprezintă data marfii pregătite a rândului ordinului;  
**Tip comandă** și **Descriere comandă**: reprezintă codul și descrierea tipului comandă;    
**Descriere articol**: reprezintă descrierea articolului;          
**Descriere client**: reprezintă denumirea clientului.  

:::note Notă
Coloana **Disponibilitate** este egală cu zero pentru toate liniile în cazul în care parametrul *Consideră disponibilitatea articolului* prezent în tab **Parametri** este dezactivat. 
:::

#### Butoane specifice

> **Consideră pentru comenzi**: permite să mutați liniile de comandă selectate în tab-ul **Rezumat** unde vor putea fi examinate de procedura de generare a comenzii de producție.  

> **Generare flux**: butonul este activat doar în cazul în care în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) a fost activat flag-ul *Generare automată flux de producție*. Cu acest buton este posibil să lansați direct execuția fluxului de producție complet și, prin urmare, *crearea* *Comenzilor de producție* care vor fi programate direct și, în funcție de opțiunile ulterioare setate tot în [Parametri MPS](/docs/configurations/parameters/production/mps-parameters), ar putea fi generate de asemenea *Ordine planificate* și *Ordine de producție*.

#### Previzional {#forecast}

În acest tab se pot filtra liniile *Previziunii de vânzare* sau ale *Planului principal de producție* pe care doriți să le analizați cu procedura **Generare comenzi de producție**, utilizând filtrele pe articol și variantă.

Liniile *Previziunii de vânzare* care pot fi vizualizate în acest tab trebuie să răspundă următoarelor **cerințe**:

- previziunea de vânzare anuală trebuie să fie *Consolidată*;  
- previziunea de vânzare anuală trebuie să fi fost generată cu o *Versiune* validă;  
- din linia previziunii nu trebuie să fi fost generate *Comenzi de producție*;  
- din liniile *Planului principal de producție* care pot fi vizualizate în acest tab, nu trebuie să fi fost generate *Comenzi de producție*.

În zona de filtrare se pot filtra doar liniile de comandă pe care doriți să le vizualizați în funcție de *filtrele* introduse.  
**Vezi variantă**: flag-ul activ permite vizualizarea variantei;  
**Lună sfârșit planificare**: permite afișarea doar a previziunilor de vânzare care ajung până la data indicată;  
**Tip comandă**: reprezintă tipul de comandă de producție de generat;    
**Tipuri ordin**: permite setarea *Tipurilor ordine client* care trebuie considerate simultan cu cantitățile prezente în previziunile de vânzare, astfel încât procedura de creare a comenzii să genereze comanda de producție cu o cantitate egală cu cea mai mare, cea mai mică sau suma cantităților prezente pentru același articol în linia ordinului clientului și/sau în previziunea de producție sau planul principal.

Odată setate filtrele necesare, făcând clic pe butonul **Căutare** vor fi vizualizate în tabelul de rezultate toate liniile previziunii corespunzătoare filtrelor indicate.

#### Câmpuri specifice

**Clasă**, **Cod** și **Descriere articol**;  
**Variantă**: este afișat dacă a fost selectată opțiunea omonimă în filtre;  
**An**: reprezintă anul previziunii de vânzări;  
**Lună/Săptămână**: reprezintă numărul lunii sau al săptămânii previziunii de vânzări;  
**Data gen. comandă**: reprezintă data generării comenzii de producție;  
**Date început/sfârșit previziune**: de exemplu, dacă previziunea a fost setată pentru luna mai, data de început va fi 01/05 și data de sfârșit va fi 31/05;  
**Cantitate**: reprezintă cantitatea aferentă fiecârui rând de previziune;  
**Cont sintetic/analitic/Descriere cont**: reprezintă contul clientului aferent rândului previziunii de vânzăre (dacă este prezent).  

#### Buton specific  

> **Consideră pentru comenzi**: permite mutarea rândurilor selectate în tabul **Rezumat** unde pot fi luate în considerare de procedura de generare a comenzii de producție.

### Substoc {#safety-stock}

În acest tab se pot filtra rândurile de articole gestionate pe **Stoc** care vor fi analizate de procedura *Generare comenzi de producție*.  
Singura **cerință** ca articolul să fie vizibil în acest tabel este ca, în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), *Tipul de gestiune* să fie setat pe **Stoc**.

În zona de filtrare se pot filtra doar rândurile de ordin care vor fi afișate.
**Vezi variantă**: opțiunea activă permite vizualizarea variantei;  
**Tip comandă de producție**: permite alegerea tipului de comandă de producție de generat;  
**Sub moment de reaprovizionare la**: reprezintă data până la care nu se dorește ca articolele din tabel să ajungă substoc.

#### Câmpuri specifice  
**Clasă**, **Cod** și **Descriere articol**;  
**Variantă**: este vizualizată dacă opțiunea omonimă a fost selectată în zona de filtrare;  
**Moment de reaprovizionare**, **Stoc minim** și **Zile de reaprovizionare**: sunt preluate din *Registru articol* > tab *Aprovizionare*;   
**Consum mediu zilnic**: este calculat scăzând stocul minim din *momentul de reaprovizionare* și împărțind rezultatul obținut la *zilele de reaprovizionare*;   
**Lot economic de producție** și **Multiplii** săi: sunt preluate din [parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului;  
**Stoc**: raportează stocul articolului la data curentă;  
**Disponibilitate inițială**: reprezintă disponibilitatea articolului în ziua în care se lansează elaborarea;  
**Disponibilitate finală**: reprezintă disponibilitatea articolului la data indicată în câmpul **Sub moment de reaprovizionare la data** prezentă în zona de filtrare;   
**Disponibilitate minimă**: reprezintă disponibilitatea minimă pe care articolul o prezintă în intervalul de timp dintre *data disponibilitate inițială* și *data disponibilitate finală*.

:::note Nota
Pentru documentele fără *Data livrare* se consideră parametrul *Dacă nu este specificată data livrării* prezent în tabul Parametri.
:::

Tabelul inferioar afișează detaliul disponibilității articolului selectat în tabelul principal.

:::note Nota
În primul rând al tabelului, disponibilitatea este dată de suma stocului și a tuturor documentelor expirate (cu data anterioară zilei de azi).
:::

#### Buton specific

> **Considera pentru comenzi**: permite mutarea rândurilor selectate în tabul **Rezumat** unde pot fi examinate de procedura de generare a comenzii de producție.

Doar rândurile pentru care procedura consideră că poate crea o comandă de producție vor fi transferate în tabul *Rezumat*.  
Procedura propune pentru fiecare articol o comandă de producție și încearcă să se asigure că în ziua în care articolul riscă să ajungă sub nivelulul stocului minim, acesta va fi reîntregit printr-o comandă de producție cu data identică datei substocului. Cantitatea acestei comenzi trebuie să fie suficientă până la data **Sub moment de reaprovizionare** indicată în zona de filtrare. Evident, dacă articolul prezintă loturi economice de producție sau de achiziție și multipli, acestea sunt respectate.

### Rezumat

Acest tab prezintă rândurile care au fost mutate din taburile anterioare și care trebuie transformate în comenzi de producție.

Tabul conține:  
- secțiunea **Comandă de producție propusă** în care utilizatorul poate seta **Tipul**, **Anul** și **Numărul** comenzii de producție la care trebuie adăugate rândurile selectate în același tab **Rezumat**.  
- tabelul de rezultate unde vor fi afișate rândurile de articole care au fost mutate din celelalte taburi.

#### Câmpuri specifice  

**Date din**: reprezintă tabul de proveniență al rândului;     
**Clasă**, **Cod articol** și **Descriere**: reprezintă clasa, codul și descrierea articolului;             
**Variantă**: reprezintă varianta articolului;     
**Cantitate**: reprezintă cantitatea comenzii care este propusă de procedură;
**Disponibilitate**: reprezintă cantitatea disponibilă a articolului la *Data livrare*;            
**Dată livrare**: reprezintă data de finalizare a comenzii de producție propuse (care este modificabilă manual de către utilizator);                
**Data început previziune**: reprezintă data de început previziune;      
**Cod tip**: reprezintă codul ordinului clientului;        
**Număr comandă client**: reprezintă numărul ordinului clientului;  
**Cont sintetic/analitic/Descriere cont**: reprezintă contul clientului relativ la rândul previziunii de vânzare (acolo unde este prezent);      
**Tip comandă** și **Descriere comandă**: reprezintă codul și descrierea tipului de comandă.

După ce au fost selectate rândurile dorite, utilizatorul are posibilitatea de a crea comenzile de producție în funcție de criteriile setate în tabul **Parametri**, utilizând butonul **Formare automată comenzi**. Procedura prezintă, la finalul procesării, o fereastră în care sunt specificate numerele comenzilor generate, fereastră pe care utilizatorul trebuie doar să facă clic pe *OK* și să o închidă.

#### Buton specific  

> **Formare automată comenzi**: apelează procedura care generează comenzile de producție din rândurile selectate.

### Parametri

În acest tab sunt setați toți parametrii care privesc gestionarea creării comenzilor de producție și modul în care trebuie gestionate fazele ulterioare generării comenzilor. Unele setări prezente în acest tab sunt preluate din fereastra [Parametri MPS](/docs/configurations/parameters/production/mps-parameters).

#### Metodă generare comandă

- **Tip comandă** (Monoprodus / Multiprodus): este propusă informația care a fost setată în tabul [Parametri MPS.](/docs/configurations/parameters/production/mps-parameters). În momentul generării comenzii cu procedura *Generare comenzi de producție* se poate modifica această setare în această ferestră, la fel ca și cea referitoare la combo-ul următor;  
- **Grupare produse după**: combo care permite utilizatorului să specifice modul în care trebuie grupate articolele în aceeași comandă *Monoprodus* sau *Multiprodus*.

> Dacă tipul comenzii este *Monoprodus*, singura grupare permisă este cea pe *Articol*. Acest tip de gestiune permite utilizatorului să genereze automat din sistem o serie de comenzi *Monoprodus*, selectând o listă de rânduri de *Ordine clienți*, rânduri provenite din *Previziuni de vânzare* sau din *Planul principal de producție* sau provenite din *Substoc* asigurându-se că fiecare comandă care va fi generată prezintă suma cantităților cerute pentru același articol. Data de finalizare a unei comenzi grupate este întotdeauna egală cu cea a necesarului cel mai apropiat de data la care se lansează procesarea.  
> Dacă tipul comenzii este *Multiprodus* grupările pot fi efectuate pe client sau proiect și permit utilizatorului să introducă în aceeași comandă *Multiprodus* mai multe articole provenite din rândurile ordinului client asociate aceluiași client, aceleași comenzi de vânzare sau aceleași comenzi de vânzare ale aceluiași client.

**Prioritate aprovizionare**: combo-ul raportează prioritatea de aprovizionare care a fost setată în [Parametri MPS](/docs/configurations/parameters/production/mps-parameters) selectând o prioritate dintre cele codificate în tabelul *Prioritate aprovizionare* care se află în tabelele din *Setări Generale*.

**Actualizare comenzi deja existente**: comenzile selectate în tabul *Rezumat* sunt adăugate la o comandă deja existentă (indicată în câmpul *Comandă de producție propusă* din tabul **Rezumat**), dacă și numai dacă este activată opțiunea **Actualizare comenzi deja existente** în tabul *Parametri*. În mod automat va fi propusă o comandă deja salvată unde să fie adăugate rândurile, dacă există deja una cu acel tip și dată.

În continuare, prin intermediul unor setări speciale, se poate indica dacă trebuie să fie generată comanda din **Ordine clienți** sau dintr-un **Previzional** (și în acest ultim caz, dacă din **Previziuni de vânzare** sau din **Planul principal de producție**), sau, în ultimă instanță, din **Substoc**. În acest ultim caz este utilizat un algoritm special explicat în paragraful dedicat tabului [Substoc](#safety-stock).

**Previzional**: dacă flagul este activ, se poate decide modalitate temporală cu care trebuie să fie generate comenzile de producție. Opțiunile sunt următoarele:  
> **Lunar**: în acest caz comanda de producție va fi generată în luna datei de finalizare a Previziunii de Vânzare sau în luna în care a fost introdusă cantitatea în Planul Principal de Producție. Utilizatorul poate de asemenea seta ziua lunii în care trebuie să fie setată de procedura automată de creare comandă data de finalizare prevăzută a comenzii;  
> **Săptămânal**: în acest caz va fi generată o comandă de producție pentru fiecare săptămână a lunii datei de finalizare a Previziunii de Vânzare sau a lunii în care a fost introdusă cantitatea în Planul Principal de Producție. Utilizatorul poate de asemenea seta ziua săptămânii în care trebuie să fie setată de procedura automată de creare comandă data de finalizare prevăzută a comenzii;  
> **Reale**: în acest caz va fi generată o comandă de producție pentru fiecare săptămână a lunii datei de finalizare a *Previziunii de Vânzare* sau a lunii în care a fost introdusă cantitatea în *Planul Principal de Producție*, dar considerând exact data de finalizare a fiecărui rând al *Previziunii de Vânzare*;  
> **Săptămânal considerând zilele de producție ale zonei de livrare**: în acest caz va fi generată o comandă de producție ținând cont de zilele de producție ale zonei de livrare asociate clientului pentru care a fost creată *Previziunea de Vânzare*;  
> **Grupare previziuni pe clienți**: dacă este activ, comenzile de producție vor fi generate grupând rândurile de previziune ale acelorași clienți.

**Dacă nu este specificată data de livrare** secțiunea privește exclusiv tabul *Ordine Clienți* și tabul *Sub stoc* al *Generării comenzilor de producție*. Aici utilizatorul poate decide dacă, în cazul în care lipsește *Data marfă pregătită* în rândul ordinului client care trebuie analizat de procedură, trebuie să fie ignorat rândul lipsit de dată sau trebuie să fie acceptată o anumită dată de finalizare prevăzută a comenzii care va fi generată, sau trebuie să fie acceptată o anumită dată de început prevăzut al comenzii care va fi generată (în aceste ultime două cazuri datele trebuie selectate în cele două combo-uri dedicate).

**Consideră disponibilitate articol**: dacă este activat, în toate taburile *Generării comenzilor de producție* este afișată disponibilitatea articolului la *Data de finalizare prevăzută* a comenzii de producție care trebuie să fie creată. Același lucru se întâmplă și în tabul *Rezumat*. Disponibilitatea este luată în considerare pe baza opțiunilor activate în *Parametri MPS* (Sistem lohn, Achiziții, Vânzări, Producție, Gestiune). În acest caz, când se va crea comanda, procedura va ține cont de disponibilitate creând comanda pentru diferența dintre cerere și disponibilitatea acelui articol.

**Gestiuni pentru planificare comenzi**: în tabel sunt afișate gestiunile care au fost introduse în [Calcul disponibilitate](/docs/erp-home/registers/items/calculate-availability). În acest tab *Parametri* pot fi doar vizualizate nu și modificate.

**Locaţie producţie**: această informație, dacă este indicată, este utilizată pentru a ca procedura de generare comandă din ordin client să considere doar rândurile de ordin client confirmate, unde gestiunea de ieșire prevăzută este asociată acelei locaţii productive.

**Calcul cantitate în funcție de lotul economic**: dacă este activat, procedura va genera comanda de producție considerând lotul economic de achiziție introdus în tab [Furnizori preferențiali](/docs/erp-home/registers/items/create-new-item/item-registry/preferential-vendors) pe furnizorul desemnat ca implicit dacă articolul analizat în *Generare comenzi de producție* are ca *Tip aprovizionare*: *Achiziție* sau *Sistem lohn* și lotul economic de producție introdus în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dacă articolul obiect al comenzii are ca *Tip Aprovizionare* 'Producție'.

**Calcul cantitate în funcție de multiplii articolului**: dacă este activată, procedura va genera comanda de producție considerând și multiplii lotului economic de achiziție introdus în tab *Furnizori preferențiali* pe furnizorul desemnat ca implicit pentru articole dacă articolul obiect al comenzii are ca *Tip Aprovizionare* *Achiziție* sau *Sistem lohn*, și multiplii lotului economic de producție introduși în [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dacă articolul analizat în *Generarea comenzilor de producție* are ca *Tip Aprovizionare*: *Producție*. Evident, această opțiune poate fi activată doar dacă este activă opțiunea menționată în paragraful precedent.

**Completare stoc minim articol**: dacă este activat, pentru articolul analizat în *Generarea comenzilor de producție* va putea fi completat stocul minim introdus în *Registru articol > tab Aprovizionare*.

**Completare moment de reaprovizionare al articolului**: dacă este activat, pentru articolul analizat în *Generarea comenzilor de producție* va putea fi completat momentul de reaprovizionare introdus în *Registru articol > tab Aprovizionare*.

**Exclude ordine întârziate**: dacă este activat, procedura de generare a comenzii de producție va exclude din calculul disponibilității articolului analizat cantitățile provenite din rândurile de ordin client a căror *Data marfă pregătite* este anterioară datei curente.

Odată ce parametrii sunt setați, se poate trece la crearea comenzilor, în taburile [Ordin clienți](#sales-orders), [Previzional](#forecast) și [Substoc](#safety-stock).

#### Buton specific  
> **Formare automată comenzi**: apelează procedura care generează comenzile de producție din rândurile selectate.

Pentru detalii despre funcționarea comună a form-urilor, consultați [Funcționalități, butoane și câmpuri comune](/docs/guide/common).
