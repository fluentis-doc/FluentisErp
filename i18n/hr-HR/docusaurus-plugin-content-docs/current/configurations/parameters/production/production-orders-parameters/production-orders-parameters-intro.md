---
title: Parametri proizvodnog naloga 
sidebar_position: 1
---

Obrazac se otvara preko putanje **Parametri > Proizvodnja > Parametri proizvodnog naloga**. Kroz ovaj prozor se postavljaju svi parametri koji se tiču ​​kretanja artikala kroz procedure vezane za proizvodni prostor, kao i neki parametri koji vam omogućuju da odlučite kako upravljati nekim dijelovima proizvodnog prostora.  

## 1. Općenito 

**Automatsko upravljanje lotovima i serijskim brojevima**: ako je aktivno, automatski predlaže lotove i/ili serijske brojeve materijala koji se koriste tijekom proizvodnje, izravno unutar odgovarajućih rešetki postavljenih u odnosu na rešetku materijala korištenih u proizvodnji izvješća o proizvodnji . U suprotnom, korisnik će morati ručno postaviti i serije i serijske brojeve korištenih artikala koji imaju ovu vrstu upravljanja; Podsjećamo vas da se upravljanje serijama ili SB postavlja unutar *Šifarnik artikla* na kartici [Lotovi i SB](/docs/erp-home/registers/items/create-new-item) odabirom željene vrste upravljanja.

**Upravljanje duplom mjernom jedinicom**: ako je aktivno, omogućuje korisniku upravljanje dvostrukom mjernom jedinicom unutar izvješća o proizvodnji, dakle i za proizvedene artikle i za korištene materijale;  

**Podijeli nalog ako lot materijala nije dostatan**: ako je aktivna, omogućuje korisniku da odluči da je serija utovarena u skladište otpada identična proizvedenoj seriji (u slučaju otpada gotovog proizvoda, dakle u slučaju prva od 2 zastavice) ili na šaržu koja je korištena (u slučaju materijalnog otpada, dakle u slučaju druge od 2 zastavice); 

**Podijeli nalog ako lot materijala nije dostatan**: ako je aktivna, omogućuje korisniku da osigura da postupak *Puštanja proizvodnog naloga* provjerava jesu li količine materijala za istovar automatski (dakle, samo u slučaju automatskog ili ručnog komisioniranja, ali s WIP upravljanjem ) su dovoljne u skladištu iz kojeg se moraju preuzeti; ako nisu, postupak dijeli proizvodni nalog na 2 različite narudžbe koje će imati isti broj/godinu, ali različitu seriju (prva će imati seriju 0, druga seriju 1; prva će biti ona za koju su prisutni materijali ima dovoljno na zalihama);

**Promijeni podnalog kod promjene datuma proizvodnog naloga**: ako je aktivan, omogućuje korisniku da osigura da se, kada se promijeni datum završetka narudžbe za proizvodnju, automatski promijeni i datum završetka narudžbe, pod uvjetom da je artikl obuhvaćen proizvodnjom nalog je isti objekt kao proizvodni nalog; stoga proizvodni nalog mora biti razine 0; 

**Ispis radnih listova za pokrenute narudžbe**: omogućuje da se flag *Pokrenuto* postavi kao aktivan prema zadanim postavkama u odgovarajućem obrascu za pokretanje ispisa [Radni list](/docs/production/pp-production-in-progress/reports/worksheet).

**Automatsko određivanje vremena u izvješćima**: ako je aktivno, automatski izračunava vrijeme stroja i vrijeme radnika na temelju vremena izvješća. U suprotnom, korisnik će morati ručno postaviti ta vremena na proizvodnoj liniji za izvješćivanje; 

**Automatski prijedlog alternativne J.M.**: ako je aktivna, automatski predlaže alternativnu mjernu jedinicu postavljenu za stavku u izvješću o proizvodnji. Obično, ako je aktivirana zastavica **Upravljanje duplom mjernim jedinicama**, ova je zastavica radi praktičnosti također aktivirana i može se uređivati ​​samo ako je aktivirana zastavica **Upravljanje duplom mjernim jedinicama**; 

**Isti lot za materijalni otpad**: ako je omogućeno, odbijeni materijali zadržavaju istu seriju kao i potrošeni materijali; 

**Automatsko snimanje izvješća**: ako je aktivna, ova zastavica označava da se automatski bilježi čim uđem u izvješće; 

**Poveži partiju s otpremnom listom**: ako je aktivna, ova zastavica označava da kada je otpremna lista stvorena korištenjem odgovarajućeg postupka, za materijale kojima se upravlja u serijama, sustav odabire materijale koji će se odkupiti za proizvodne naloge koje sam odabrao; ako nije aktiviran to znači da će korisnik morati ručno deklarirati koje su serije prikupljene; 

**Ažuriranje materijala korištenih u proizvodnom nalogu**: ako je aktivno, kada se količina navedena u proizvodnoj deklaraciji promijeni, prikazat će se poruka s pitanjem treba li ili ne ponovno izračunati količine korištenih materijala; ako nije aktivan, ponovni izračun materijala događa se automatski;

**Omogući kontrolu u MES-u**: **Abilita controllo presenze nel MES**: se attivo, abilita il controllo presenze all'interno di [Fluentis MES](/docs/production/mes/mes-intro), Il controllo si basa sulla tabella *Fluentis.HR_BadgeRecords*.       
In questa i campi obbligatori per il controllo sono: *HRBR_Resource_HRR_Id*, *HRBR_RecordDateTime*, *HRBR_BadgeRecordType_HRBRTY_Id*, che può assumere i valori E = Ingresso o U = Uscita.
Per ogni riga ci può essere solo l’orario di entrata o quello di uscita, quindi in giorno ci saranno 4 righe per ogni utente, ad esempio:     
- 2024-01-02 08:30:00.000 - tipo E 
- 2024-01-02 12:30:00.000 - Tipo U 
- 2024-01-02 14:00:00.000 - Tipo E 
- 2024-01-02 18:00:00.000 - Tipo U      
I dati devono essere importati all'interno di questa tabella partendo dai dati del timbratore utilizzato.      
Questi verranno poi incrociati con i valori di inizio e fine lavoro di ciascun operatore inserito all’interno del tab *Squadra* presente in [Fluentis MES](/docs/production/mes/mes-intro).

**Mostra la versione per componente dentro distinta base**: se attivo, abilita il campo della versione presente nel tab componente della distinta base.

**Abilita il salvataggio automatico sulle dichiarazioni di produzione**: se attivo, abilita il salvataggio automatico all'interno delle dichiarazioni di produzione.

Konačno, postoje još četiri odjeljka: **Lista posla upravljana za, Period analize, Vrednovanje materijala po cijeni, Sekvenca faze prijedloga**. 

**Lista posla upravljana za**: odjeljak omogućuje, aktiviranjem jednog od radio gumba, odabir vrste grupiranja za ispis radnog lista (koji sadrži parametre koji pokazuju kako taj materijal mora biti proizveden). Međutim, to je prijedlog, koji se zatim može modificirati unutar ispisne maske samog radnog lista; 

**Period analize**: odjeljak omogućuje, aktiviranjem jednog od radio gumba, odabir razdoblja filtriranja proizvodnih naloga koji moraju biti prikazani u prozoru za ispis radnog lista (tjedno, dnevno ili svakih X dana); 

**Valorizzazione materiali a costo**: la sezione consente di definire dei parametri che saranno utilizzati per il calcolo dei costi relativi alle dichiarazioni di produzione registrate. (Questi parametri non sono presi in considerazione dalla [Costificazione](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization), in quando questa prende i valori direttamente dalle registrazioni delle dichiarazioni di produzione).   

> **Ultimo**: permette di valorizzare i materiali a costo *Ultimo*;      
> **Medio**: permette di valorizzare i materiali a costo *Medio*;                
> **Standard**: permette di valorizzare i materiali a costo *Standard*;          
> **Da area gestionale**: permette di valorizzare i materiali in base al costo legato all'*Area gestionale* selezionata nella relativa combo box;     
> **Costo del lotto**: attivando questo flag, la procedura valorizzerà il costo del materiale in base al tipo costo selezionato considerando i valori solo di quello specifico lotto;     
> **Costo della commessa**: attivando questo flag, la procedura valorizzerà il costo del materiale in base al tipo costo selezionato considerando i valori solo di quella specifica commessa.     

:::note Nota
Se **Costo del lotto** e **Costo della commessa** sono attivati entrambi, la procedura valorizzerà il costo del materiale in base al tipo costo selezionato considerando i valori solo di quella specifica commessa e per quello specifico lotto, ovviamente tra i movimenti effettuati con causali di carico con il flag aggiorna costo ultimo o medio (a seconda del valore indicato nel campo **Tipo di costo**) e il flag di interesse fiscale attivi; se non trova nessun movimento con queste caratteristiche va a cercare tra i movimenti che hanno caricato quel lotto, se non trova nemmeno questi va a cercare tra tutti i movimenti di quell'articolo. Se non ho nessun movimento di carico per quell'articolo va a vedere nei rispettivi campi costo ultimo, medio e standard dell'anagrafica dell'articolo.

**Sekvenca faze prijedloga**: odjeljak vam omogućuje da odaberete, tijekom stvaranja radnog ciklusa, redni broj predložene faze, koji se može uzeti iz rednog broja standardne faze ili kao progresivni broj naloga za umetanje , označavajući i vrijednost koraka.

## 2. Skladišta 

Obrazac je posvećen umetanju skladišta i povezanih razloga koji reguliraju kretanje artikala kroz proizvodne postupke; isti ekran ponovno se prikazuje u *MRP parametrima* artikla u kartici [Skladišta](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), s razlikom da se skladišta postavljena u *Parametrima proizvodnje* smatraju općim podacima koji prema zadanim postavkama vrijede za artikle; ako su različita skladišta postavljena za određenu stavku u *MRP parametrima* stavke, sustav će dati <u>prioritet parametrima</u> koje nađe postavljenima u ovom zadnjem prozoru za utovar i istovar materijala povezanih s proizvodnjom ove stavke.  
Inoltre, è possibile settare gli stessi parametri anche per uno specifico Sito di produzione.     

Quindi la priorità per il **carico** sarà presa nel seguente ordine:
- Magazzino e casuale se sono indicati nella testata dell'ordine di produzione
- [Parametri del sito produttivi](/docs/configurations/parameters/production/production-orders-parameters/production-site) indicato nella commessa collegata all'ordine di produzione
- [Parametri MRP dell'articolo](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- Dal sito di produzione collegato alla macchina che è inserita nella dichiarazione di produzione; se la macchina non è stata indicata nella dichiarazione, i parametri sono presi dal sito di produzione collegato alla macchina indicata nella fase dell'ordine di produzione
- [Parametri degli ordini di produzione](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro)

La priorità per lo **scarico** sarà data nell'ordine da:

- [Parametri del sito produttivi](/docs/configurations/parameters/production/production-orders-parameters/production-site) indicato nella commessa collegata all'ordine di produzione
- [Parametri MRP dell'articolo](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- Dal sito di produzione collegato alla macchina che è inserita nella dichiarazione di produzione; se la macchina non è stata indicata nella dichiarazione, i parametri sono presi dal sito di produzione collegato alla macchina indicata nella fase dell'ordine di produzione
- [Parametri degli ordini di produzione](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro)

Stoga u ovoj kartici možete postaviti skladišta koja se odnose na *Sirovine*,*Poluproizvode*, *Gotove proizvode* i bilo koji *Otpad* s pripadajućim razlozima za utovar i istovar.

Per poter impostare uno di questi magazzini sarà sufficiente selezionare tramite le relative combo box il magazzino e le causali (precodificati nelle rispettive tabelle [Magazzini](/docs/configurations/tables/logistics/warehouses) e [Causali](/docs/configurations/tables/logistics/warehouse-templates)) che si vogliono impostare.

Pored ovih glavnih skladišta postoje i skladišta W.I.P. (upravljanje nije široko korišteno) koje se aktiviraju odabirom stavke W.I.P. i nastavak odabira unutar kombiniranog okvira skladišta i razloga kao što je učinjeno za druga skladišta. 

Per magazzini *W.I.P.* (Work in Progress) si intendono dei magazzini di transizione, in cui la merce transita nel momento in cui l'ordine di produzione del prodotto finito o del semilavorato viene rilasciato. Quando vengono settati questi magazzini il tipo di prelievo del materiale deve essere *Manuale*, altrimenti se fosse un tipo di prelievo *Automatico* lo scarico dei materiali avverrebbe in automatico nel momento del rilascio dell'ordine di produzione. Nel caso dei magazzini W.I.P. il materiale al momento del rilascio viene quindi spostato in questi magazzini (tramite la [Lista di prelievo materiali](/docs/production/pp-production-in-progress/picking-materials-list)) e viene scaricato durante la dichiarazione di produzione dell'ultima fase di lavorazione (produttiva e movimentabile) dell'articolo dell'ordine di produzione oppure durante la fase di lavorazione a cui il materiale è associato.

Diversamente, se il tipo di prelievo del materiale è *Con Lista*, allora mentre lo spostamento del materiale al magazzino W.I.P. avviene nello stesso modo rispetto al tipo di prelievo manuale, lo scarico dal W.I.P. avviene tramite la procedura della [Lista di prelievo materiali](/docs/production/pp-production-in-progress/picking-materials-list).     

### Funzionamento Magazzini e Causali

Per quanto riguarda il **carico** di prodotti finiti e semilavorati:

- Se si considera l'**ultima fase produttiva e movimentabile** del ciclo, vengono usati magazzini e causali della sezione **Prodotti finiti**, se l'ordine di produzione è di **livello 1** (quindi relativo al prodotto finito), invece vengono usate quelle della sezione **Semilavorati**, se l'ordine di produzione **non è di livello 1** (quindi è un semilavorato). Se la sezione **Semilavorati** non è valorizzata vengono usate quelle della sezione **Prodotti finiti**.
- Nel caso in cui **non sia l'ultima fase produttiva e movimentabile** del ciclo e la **gestione WIP** **non è stata attivata**, vengono usati magazzini e causali della sezione **Semilavorati WIP**. Invece, se **è attiva** la **gestione WIP** vengono usate quelle della **sezione WIP** e quelle della sezione **Semilavorati WIP** non vengono più considerate.

Per lo **scarico** dei materiali invece:

- Se la **gestione WIP** **non è stata attivata**, vengono usati magazzini e causali presenti nella sezione **Materie prime** se l'articolo ha **tipo approvvigionamento Acquisto** nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), mentre se ha **tipo approvvigionamento Produzione o Conto lavoro**, vengono usati per lo scarico magazzini e causali presenti nella sezione **Semilavorati**.       
- Invece, se **è attiva la gestione WIP**, vengono usati magazzini e causali presenti nella **sezione WIP** (nel caso in cui questi non fossero valorizzate vengono utilizzate quelle della sezione Materie prime). Quindi, se l'articolo ha **tipo approvvigionamento Acquisto**, viene usata la causale **Consumo materiali**. Invece, se ha **tipo approvvigionamento Produzione o Conto lavoro**, viene usata la causale consumo **semilavorati**.

:::note Nota
Quando viene attivato il flag *W.I.P.* nei *Parametri ordini produzione*, automaticamente nella creazione degli ordini di conto lavoro (dal *Rilascio ordini pianificati* o direttamente dall'ordine di produzione), vengono considerate per i materiali da inviare al terzista il magazzino e la causale presenti nei  [Parametri conto lavoro](/docs/configurations/parameters/production/subcontractor-parameters) alla sezione *Consegne materiali a terzisti W.I.P.*; quindi in questo caso i materiali da inviare ai terzisti saranno prelevati direttamente dal magazzino *W.I.P.*    
:::    

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

