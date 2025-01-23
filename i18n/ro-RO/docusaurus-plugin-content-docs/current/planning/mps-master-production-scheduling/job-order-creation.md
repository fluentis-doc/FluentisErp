---
title: Generare comenzi de producție
sidebar_position: 2
---

Procedura **Generare comenzi de producție** permite generarea comenzilor de producție din ordine clienți, din previziuni și/sau din Substoc.

### Ordine clienți {#sales-orders}

În acest tab se pot filtra liniile de ordine client care vor fi analizate de procedura **Generare comenzi de producție**.

Pentru a putea fi vizualizate în acest tab, liniile de ordine trebuie să îndeplinească următoarele **cerințe**:

- articolul obiect al liniei de ordin client trebuie să aibă opțiunea *Generare comenzi de producție* activată în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters);
- linia nu fie deja executată prin *Dispoziția de livrare*, sau *Aviz de vânzare*, sau *Factură de vânzare*;
- linia nu fie deja *Executată forțat*, deci trebuie să fie cu statusul *Neexecutată* sau *Parțial executată*;
- din linie nu trebuie să fie deja generate *Comenzi de producție*;
- linia trebuie să aibă *Data marfă pregătită* inserată în *Ordinul client* în tabul *Articole* din care provine;
- ordinul client din care provine linia trebuie să fie *Listat* și *Confirmat*.

:::note Nota
Lipsa UNEI SINGURE dintre aceste condiții provoacă imposibilitatea de a vizualiza linia de ordine client în tabel.
:::

În zona de filtru se pot filtra doar liniile de ordine care vor fi afișate. Pe baza filtrelor prezente și cu ajutorul butonului **Căutare** vor fi afișate în tabelul de rezultate toate liniile de ordine corespunzătoare filtrelor indicate.

#### Câmpuri specifice

**Tip**: reprezintă tipul de ordin client;       
**Număr**: reprezintă numărul ordinului client;     
**An**: reprezintă anul ordinului client;     
**Dată ordin client**: reprezintă data ordinului client;     
**Număr linie**: reprezintă numărul de linie al ordinului client;     
**Clasă** și **Cod articol**: reprezintă clasa și codul articolului;             
**Variantă**: reprezintă varianta articolului;          
**Data OC**: reprezintă data inserării ordinului;     
**Cantitate**: reprezintă cantitatea încă de executat din linia ordinului;   
**Disponibilitate**: reprezintă cantitatea disponibilă a articolului la data marfă pregătită din linia ordinului;           
**UM**: reprezintă unitatea de măsură;        
**Livrare**: reprezintă data marfă pregătită din linia ordinului;  
**Tip comandă** și **Descriere comandă**: reprezintă codul și descrierea tipului de comandă;    
**Descriere articol**: reprezintă descrierea articolului;          
**Descriere cont**: reprezintă numele societății clientului.  

:::note Nota
Coloana **Disponibilitate** este egală cu zero pentru toate liniile în cazul în care opțiunea *Consideră disponibilitatea articolului* prezentă în tabul **Parametri** este dezactivată.
:::

#### Butoane specifice  

- > **Consideră pentru comenzi**: permite mutarea liniilor de ordine selectate în tabul **Rezumat** unde pot fi luate în considerare de procedura de generare a comenzii de producție.

- > **Generare flux**: butonul este activat doar dacă în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) a fost activată opțiunea *Generare automată flux de producție*. Cu acest buton este posibilă lansarea directă a execuției fluxului de producție complet și astfel *crearea* comenzilor de producție care vor fi direct programate și, în funcție de opțiunile ulterioare setate tot în [Parametrii MPS](/docs/configurations/parameters/production/mps-parameters); ar fi eventual generate și *Ordine planificate* și *Ordine de producție*.


### Prognoze {#forecast}

În acest tab se pot filtra liniile cu *Previziuni de vânzare* sau *Plan principal de producție* care vor fi analizate de procedura **Generare comenzi de producție**, utilizând filtrele pentru articol și pentru variantă.

Liniile de *Previziuni de vânzare* care pot fi vizualizate în acest tab trebuie să îndeplinească următoarele **cerințe**:

- previziunea de vânzare anuală trebuie să fie cu statusul *Consolidată*;  
- previziunea de vânzare anuală trebuie să fi fost generată cu o *Versiune* validă;  
- din linia de previziune nu trebuie să fi fost deja generate *Comenzi de producție*;  
- din liniile *Planului principal de producție* care pot fi vizualizate în acest tab nu trebuie să fi fost deja generate *Comenzi de producție*.

În zona de filtre se pot filtra doar liniile de ordine care vor fi afișate pe baza *filtrelor* inserate.  
**Vizualizează variantă**: opțiunea activă permite vizualizarea variantei;  
**Luna sfârșit programare**: servește pentru a vizualiza în tabel doar previziunile de vânzare care ajung până la data indicată;  
**Tip comandă**: reprezintă tipul de comandă de producție de generat;    
**Tipuri ordine**: tabelul permite setarea *Tipurilor de ordine client* care trebuie să fie considerate simultan cu cantitățile prezente în previziunile de vânzare, astfel încât procedura de creare comandă să genereze comanda de producție cu o cantitate egală cu cea mai mare, cea mai mică sau suma cantităților prezente, pentru același articol, în linia ordinului client și/sau în previziunea de producție sau în planul principal.

Cu butonul **Căutare** vor fi afișate în tabelul rezultatelor toate liniile de previziune corespunzătoare filtrelor indicate.

#### Câmpuri specifice

**Clasă**, **Cod** și **Descriere articol**;  
**Variantă**: este vizualizată dacă opțiunea omonimă a fost selectată; 
**An**: reprezintă anul previziunii de vânzare;  
**Lună/Săptămână**: reprezintă numărul lunii sau al săptămânii previziunii de vânzare;  
**Data gen. comandă**: reprezintă data generării comenzii de producție;  
**Date început/sfârșit previziune**: de exemplu, dacă previziunea a fost setată pentru luna mai, data de început va fi 01/05 și data de sfârșit va fi 31/05;   
**Cantitate**: reprezintă cantitatea relativă fiecărei linii de previziune;  
**Cont sintetic/analitic/Descriere cont**: reprezintă contul clientului relativ la linia previziunii de vânzare (unde este prezent).  

#### Buton specific   

- > **Consideră pentru comenzi**: permite mutarea liniilor selectate în tabul **Rezumat** unde pot fi luate în considerare de procedura de generare a comenzii de producție.


### Substoc {#safety-stock}

În acest tab se pot filtra liniile de articole *gestionate pe stoc* care vor fi analizate de procedura *Generare comenzi de producție*.  
Singura **cerință** care permite articolului să fie afișat în acest tabel este ca în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), *Tipul de gestionare* să fie *Pe stoc*.
În zona de filtre se pot filtra doar liniile de ordin care vor fi afișate pe baza *filtrelor* inserate.  
**Vizualizează variantă**: opțiunea activă permite vizualizarea variantei;   
**Tip comandă de producție**: permite deciderea tipului de comandă de producție de generat;  
**Sub moment de reaprovizionare în data**: reprezintă data până la care articolele din tabel nu trebuie să ajungă sub stoc.

Cu butonul **Căutare** vor fi afișate în tabelul rezultatelor toate liniile articol corespunzătoare filtrelor indicate.

#### Câmpuri tabel

**Clasă**, **Cod** și **Descriere articol**;  
**Variantă**: este vizualizată dacă opțiunea omonimă a fost selectată (dacă s-a decis în zona de filtre să fie vizualizată);  
**Moment reaprovizionare**, **Stoc minim** și **Zile reordonare**: sunt preluate din *Registrul articolului* - > tab *Aprovizionare*;   
**Consum mediu zilnic**: este calculat scăzând *Stocul minim* din *Moment reaprovizionare* și împărțind rezultatul obținut la *Zile reordonare*;   
**Lot economic de producție** și **Multiplii** săi: sunt preluați din [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului;  
**Stoc**: raportează stocul articolului la data curentă; 
**Disponibilitate inițială**: reprezintă disponibilitatea articolului în ziua în care se lansează elaborarea;  
**Disponibilitate finală**: reprezintă disponibilitatea articolului în ziua indicată în câmpul **Sub moment de reaprovizionare în data** prezent în zona de filtre;   
**Disponibilitate minimă**: reprezintă disponibilitatea minimă pe care articolul o prezintă în intervalul de timp care intervine între data de disponibilitate început și data de disponibilitate finală.

:::note Nota
Pentru documentele fără *Data livrare* este considerat parametrul *Dacă nu este specificată data livrării* în tab Parametri.
:::

*Tabelul inferioar* vizualizează detaliul disponibilității articolului selectat în tabelul principal.

:::note Nota
În prima linie a tabelului, disponibilitatea este dată de suma stocului și a tuturor documentelor expirate (cu data anterioară zilei de azi).
:::

#### Buton specific  

- > **Consideră pentru comenzi**: permite mutarea liniilor selectate în tabul **Rezumat** unde pot fi luate în considerare de procedura de generare a comenzii de producție.

Doar liniile pentru care procedura consideră că poate crea o comandă de producție vor fi transferate în tabul *Rezumat*. Procedura propune pentru fiecare articol o comandă de producție și încearcă să facă în așa fel încât în ziua în care articolul prezintă riscul să meargă sub nivelul de stoc minim, să fie reîntregit printr-o comandă de producție având data identică cu *data sub stoc*. Cantitatea acestei comenzi trebuie să fie disponibilă până la data inserată în **Sub moment reaprovizionare** indicată în zona de filtre. Evident, dacă articolul prezintă loturi economice de producție sau de achiziție și multiplii acestora, acestea sunt respectate.

### Rezumat

Acest tab prezintă liniile care au fost mutate din taburile anterioare și care trebuie să fie transformate în comenzi de producție.

#### Comandă de producție propusă

Secțiune în care utilizatorul poate seta **Tipul**, **Anul** și **Numărul** comenzii de producție la care trebuie să fie adăugate liniile selectate în tab **Rezumat**.  În tabelul de rezultate vor fi vizualizate liniile articolului care au fost mutate din celelalte taburi.

#### Câmpuri specifice  

**Date din**: reprezintă tabul de proveniență al liniei;     
**Clasă**, **Cod articol** și **Descriere**: reprezintă clasa, codul și descrierea articolului;             
**Variantă**: reprezintă varianta articolului;     
**Cantitate**: reprezintă cantitatea comenzii care este propusă de procedură;
**Disponibilitate**: reprezintă cantitatea disponibilă a articolului la *Dată livrare*;            
**Dată livrare**: reprezintă data de sfârșit a comenzii de producție propuse (care este modificabilă manual de către utilizator);                
**Dată început previziune**: reprezintă data de început previziune;      
**Cod tip**: reprezintă codul ordinului client;        
**Număr ordin client**: reprezintă numărul ordinului client;  
**Cont sintetic/analitic/Descriere cont**: reprezintă contul clientului relativ la linia previziunii de vânzare (unde este prezent);      
**Tip comandă** și **Descriere comandă**: reprezintă codul și descrierea tipului comandă.       

După ce au fost selectate liniile dorite, utilizatorul are posibilitatea de a crea comenzile de producție în baza opțiunilor setate în tabul **Parametri**, utilizând butonul **Formare automată comenzi**. La finalul elaborării, procedura afișează o fereastră în care sunt specificate numerele comenzilor generate(clic pe OK pentru a o închide).

#### Buton specific   
- > **Formare automată comenzi**: apelează procedura care generează comenzile de producție din liniile selectate.

### Parametri

În acest tab sunt configurați toți parametrii care se referă la gestionarea creării comenzilor de producție și modul în care trebuie să fie gestionate fazele ulterioare generării comenzilor în sine. Unele setări prezente în acest tab sunt preluate din fereastra [Parametri MPS](/docs/configurations/parameters/production/mps-parameters).

#### Metodă generare comandă    
- **Tip comandă** (Monoprodus / Multiprodus): este propusă data care a fost setată în tabul [Parametri MPS](/docs/configurations/parameters/production/mps-parameters). În momentul generării comenzii din *Generare comenzi de producție* este totuși posibil să se modifice această setare în acest form, precum și cea referitoare la combo-ul următor;  
- **Grupare produse pentru**: permite selectarea grupării articolelor în aceeași comendă *Monoprodus* sau *Multiprodus*.

- > Dacă tipul comandă este *Monoprodus*, singura grupare admisă este cea pe *Articol*; acest tip de gestionare permite utilizatorului să ceară să fie generate automat de sistem o serie de comenzi *Monoprodus*, selectând o listă de linii de *Ordine clienți*, linii provenite din *Previziuni de vânzare* sau din *Planul principal de producție* sau provenite din *Substoc* făcând astfel încât fiecare comandă care va fi generată să prezinte suma cantităților cerute pentru același articol. Data de sfârșit a unei comenzi grupate este întotdeauna egală cu cea a necesarului cel mai apropiat de data la care se lansează elaborarea.  
- > Dacă tipul comandă este *Multiprodus* grupările pot fi efectuate pe client sau proiect și permit utilizatorului să introducă în aceeași comandă *Multiprodus* mai multe articole provenite din linii ordine client asociate aceluiași client, de aceeași comandă de vânzare sau de aceeași comandă de vânzare a aceluiași client.

**Prioritate aprovizionare**: combo-ul raportează prioritatea de aprovizionare care a fost setată în [Parametri MPS](/docs/configurations/parameters/production/mps-parameters) selectând o prioritate dintre cele codificate în tabelul *Prioritate aprovizionare* care se află în tabelele din *Setări generale*.

**Actualizare comenzi deja existente**: comenzile selectate în tabul *Rezumat* sunt adăugate la o comandă deja existentă (indicată în box *Comandă de producție propusă* din tabul **Rezumat**), dacă și numai dacă este activată opțiunea **Actualizare comenzi deja existente** în tabul *Parametri*. În mod automat va fi propusă o comandă deja salvată unde să fie adăugate liniile, dacă există deja una cu acel tip și dată.

În continuare, prin intermediul unor opțiuni specifice, comanda poate fi generată din **Ordine clienți** sau din **Previziuni** (mai precis, dacă din **Previziuni de vânzare** sau din **Planul principal de producție**), sau, în ultimă instanță, din **Substoc**. În acest ultim caz este utilizat un algoritm particular explicat în paragraful dedicat tabului [Substoc](#safety-stock).

**Previziuni**: dacă opțiunea este activă, se poate apoi alege modalitatea temporală cu care să fie generate comenzile de producție:  
- > **Lunar**: în acest caz comanda de producție va fi generată în luna datei de sfârșit a Previziunii de Vânzare sau în luna în care a fost introdusă cantitatea în Planul Principal de Producție. Utilizatorul poate de asemenea să insereze ziua lunii în care trebuie să fie setată de procedura automată de creare comandă data de sfârșit prevăzută a comenzii;  
- > **Săptămânal**: în acest caz va fi generată o comandă de producție pentru fiecare săptămână a lunii datei de sfârșit a Previziunii de Vânzare sau a lunii în care a fost introdusă cantitatea în Planul Principal de Producție. Utilizatorul poate de asemenea să insereze ziua săptămânii în care trebuie să fie setată de procedura automată de creare comandă data de sfârșit prevăzută a comenzii;  
- > **Reale**: în acest caz va fi generată o comandă de producție pentru fiecare săptămână a lunii datei de sfârșit a *Previziunii de Vânzare* sau a lunii în care a fost introdusă cantitatea în *Planul Principal de Producție*, dar luând în considerare exact data de sfârșit a fiecărei linii a *Previziunii de Vânzare*;  
- > **Săptămânal considerând zilele de producție ale zonei de livrare**: în acest caz va fi generată o comandă de producție ținând cont de zilele de producție ale zonei de livrare asociate clientului pentru care a fost creată *Previziunea de Vânzare*;  
- > **Grupare previziuni pentru clienți**: opțiunea permite generarea comenzilor de producție grupând liniile de previziune ale acelorași clienți.

**Dacă nu este specificată data de livrare** secțiunea se referă exclusiv la tabul *Ordine clienți* și la tabul *Substoc* al *Generării comenzilor de producție*. Aici utilizatorul poate decide dacă, în cazul în care nu este completat câmpul *Data marfă pregătită* în linia ordinului client care trebuie să fie analizată de procedură, trebuie să fie ignorată linia fără dată, sau trebuie să fie acceptată o anumită dată ca sfârșit prevăzut al comenzii care va fi generată, sau trebuie să fie acceptată o anumită dată ca început prevăzut al comenzii care va fi generată (în aceste ultime două cazuri datele trebuie selectate în cele două combo-uri dedicate).

**Consideră disponibilitatea articolului**: dacă este activată, opțiunea permite, în toate taburile *Generării comenzilor de producție*, să fie expusă disponibilitatea articolului la *Data sfârșit prevăzută* a comenzii de producție care trebuie să fie creată. Același lucru se întâmplă și în tabul *Rezumat*. Disponibilitatea este luată în considerare pe baza opțiunilor activate în *Parametrii MPS* (Sistem lohn, Achiziții, Vânzări, Producție, Gestiune). În acest caz, când se va crea comanda, procedura va ține cont de disponibilitate creând comanda pentru diferența dintre cerere și disponibilitatea acelui articol.

**Gestiuni pentru planificare comenzi**: în tabel apar depozitele care au fost introduse în [Calcul disponibilitate](/docs/erp-home/registers/items/calculate-availability). În acest tab *Parametri* pot fi doar vizualizate și nu modificate.

**Locație producție**: dacă este indicată, procedura de generare comandă din ordin client va considera doar liniile de ordin client confirmate, acolo unde gestiunea de ieșire prevăzută este asociată acestei locații.

**Calcul cantitate în funcție de lotul economic**: dacă este activat, procedura va genera comanda de producție considerând lotul economic de achiziție introdus în tabul [Furnizori preferențiali](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors) pe furnizorul desemnat ca implicit dacă articolul analizat în *Generare comenzi de producție* are ca *Tip aprovizionare*: *Achiziție* sau *Sistem lohn*, și lotul economic de producție introdus în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dacă articolul obiect al comenzii are ca *Tip Aprovizionare* 'Producție'.

**Calcul cantitate în funcție de multiplii articolului**: dacă este activat, procedura va genera comanda de producție considerând și multiplii lotului economic de achiziție introdus în tabul furnizori preferențiali pe furnizorul desemnat ca implicit al articolelor dacă articolul obiect al comenzii are ca *Tip Aprovizionare* *Achiziție* sau *Cont Lohn*, și multiplii lotului economic de producție introduși în [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dacă articolul analizat în *Generare comenzi de producție* are ca *Tip Aprovizionare*: *Producție*. Evident, această opțiune poate fi activată doar dacă este activată opțiunea din paragraful precedent.

**Completare stoc minim articol**: dacă este activat, permite ca pentru articolul analizat în *Generare comenzi de producție* să fie reîntregit stocul minim introdus în *Registrul articolului - > tab Aprovizionare*.

**Completare moment reaprovizionare articol**: dacă este activat, permite ca pentru articolul analizat în *Generare comenzi de producție* să fie completat momentul de reaprovizionare introdus în *Registrul articolului - > tab Aprovizionare*.

**Exclude ordine in întârziere**: dacă este activat, permite ca procedura de generare a comenzii de producție să excludă din calculul disponibilității articolului analizat cantitățile provenite din liniile ordin client a căror *Data marfă pregătită* este anterioară datei curente.

După ce parametrii au fost setați, se va putea continua cu crearea comenzilor, în taburile [Ordinelor clienți](#sales-orders), [Previziunilor](#forecast) și [Substocului](#safety-stock).

#### Buton specific  
- > **Formare automată comenzi**: apelează procedura care generează comenzile de producție din liniile selectate.

Pentru detalii despre funcționarea comună a form-urilor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).