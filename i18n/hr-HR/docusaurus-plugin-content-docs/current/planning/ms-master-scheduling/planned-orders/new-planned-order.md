---
title: Planirani nalozi
sidebar_position: 3
---

Obično se planirane narudžbe automatski generiraju iz postupka *Općeg raspoređivanja* ili iz *MRP-a*, ali korisnik ima mogućnost ručnog generiranja planirane narudžbe, bilo da se radi o narudžbi za kupnju, proizvodnju ili radni nalog.  

Obrazac se otvara putem:   
 -  putem **Planiranje > MS Master scheduling > Planirani nalozi > Novi Planirani nalozi** 

ili putem   

 - gumba **Umetni nalog** koji se nalazi u obrascu [Pretraga planiranih narudžbi](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Zaglavlje planirane narudžbe  

*Posebni gumbi*:  

> **Kompletiranje podataka narudžbe**: poziva postupak koji omogućuje unos i/ili ažuriranje svih podataka vezanih za materijale, faze, opremu, alate, atribute i različite bilješke za artikl u planiranoj narudžbi, uzimajući ih iz popisa materijala i radnog ciklusa artikla.   
> **Ponovno izračunaj izvorni datum**: poziva postupak koji omogućuje ažuriranje datuma početka planirane narudžbe i eventualno faza njenog rada nakon izmjene radnih vremena i/ili količine za proizvodnju navedenog članka u planiranom nalogu;    
> **[Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)**: otvara prozor s parametrima MRP za artikl;    
> **Generiraj sastavnicu materijala**: omogućuje generiranje popisa materijala na temelju podataka unesenih u proizvodni nalog ili ažuriranje postojećih podataka s onima unesenima u nalog;    
> **Generiraj proizvodni ciklus**: omogućuje stvaranje proizvodnog ciklusa za artikl na temelju podataka unesenih u nalog, ili ažuriranje postojećih podataka s onima unesenima u nalog;    
> **[Sastavnica materijala](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)**: omogućuje otvaranje zaslona s popisom materijala za artikl;  
> **[Proizvodni ciklusi](/docs/erp-home/registers/production/routes/new-route)**: omogućuje prikaz proizvodnog ciklusa i povezanih proizvodnih faza za artikl.  

*Specifična polja*: 

**Vrsta planirane narudžbe**: prikazuje se pretpostavljeni tip kao zadani tip;    
**Obvezni nalog**: ako je aktivno, ova zastava označava da planirana narudžba ima prioritet i korisnik ne može pomaknuti narudžbu postavljanjem datuma kasnije od predviđenog završetka prema općem raspoređivanju;    
**Prioritet naloga**: omogućuje postavljanje prioriteta za ovu narudžbu;  
**Generato da domanda**: ovaj se polje prikazuje kao *Ručno* (ako je planirana narudžba stvorena ručno), *Ovisno* (ako je planirana narudžba stvorena raspoređivanjem i ovisi o drugim planiranim narudžbama više razine) ili *Neovisno* (ako je planirana narudžba stvorena raspoređivanjem i ne ovisi o drugim planiranim narudžbama više razine, već je već narudžba razine 1);       
**Nalog proizvodnje**: u ova 3 polja postavljaju se godina, broj i opis proizvodnog naloga iz kojeg je generirana planirana narudžba. Naravno, ako je narudžba generirana ručno, neće ju biti moguće povezati s već postojećim proizvodnim nalogom i ta će polja ostati prazna;       
**Tip radnog naloga**: u ovom polju prikazuje se tip proizvodnog zadatka iz kojeg je generirana planirana narudžba. Naravno, ako je generirana ručno, neće biti moguće povezati je s postojećim proizvodnim zadatkom, pa će ovo polje ostati prazno;       
**Projekt**: dvoklikom se otvara pomoćni alat koji omogućuje povezivanje projekta s planiranom narudžbom koja se unosi;       
**Klijent**: označava klijenta narudžbe;      
**Dobavljač / podizvođač**: ova polja su aktivna ako je planirana narudžba kupovna ili radni nalog;      
**Artikl**: označava klasu, kod i opis artikla narudžbe;         
**Varijanta**: u ovom okviru može se specificirati varijanta artikla;    
**Količina za proizvesti**: označava količinu koja se treba proizvesti;         
**JM za upravljanje**: označava upravljačku jedinicu mjere za artikl;    
**Količina za koristiti**: u ovom se polju postavlja količina za proizvodnju u slučaju alternativne jedinice mjere;        
**Koristiti jedinicu mjere**: označava alternativnu jedinicu mjere za artikl;  
**Datum početka i završetka**: postavljaju se predviđeni datumi početka i završetka odgovarajućeg rada. Ako korisnik izvrši promjenu jednog od ovih datuma nakon što je završio unos podataka o radnom ciklusu, drugi se automatski izračunava prema tome;    
**Audit**: ovaj odjeljak automatski bilježi datum stvaranja narudžbe i datum posljednje izmjene, prikazujući za oba korisnika koji je izvršio operaciju;  
**Napomene**: to je slobodno polje u koje se mogu unijeti napomene.    

Nakon što su obavezna polja spremljena, pritisnite gumb **Kompletiranje podataka narudžbe** kako biste ažurirali sve kartice (Materijali, Faze, itd.) koje preuzimaju podatke iz popisa materijala i radnog ciklusa predmeta planirane narudžbe (samo za proizvodnju).  


## Materijali   

Ovaj se obrazac sastoji  od mreže, unutar koje korisnik može ručno unijeti materijale koje želi koristiti za proizvodnju predmetnog planiranog naloga (samo ako se radi o proizvodnji). Nakon ručnog unosa, potrebno je kliknuti na gumb **Kompletiranje podataka narudžbe** koji se nalazi u ribbon traci kako bi se uvezli podaci iz osnovne strukture.  

Mreža već može biti popunjena ako planirani nalog dolazi iz *Općeg rasporeda* ili iz *MRP obrade*, ali korisnik može mijenjati podatke i/ili dodavati dodatne materijale na popis komponenti planiranog naloga.   

:::note NAPOMENA 
Ako je planirana narudžba za kupnju, kartica *Materijali* nije aktivna.
:::

*Posebni gumbi*:
> **Umetni materijal**: omogućuje dodavanje novog materijala u mrežu;  
> **Otkaži materijal**: omogućuje brisanje materijala koji su uneseni u mrežu.

*Posebni gumbi*:

**Prioritet**: ovdje je prikazan prioritet komponente, ako je naveden, unesen u popisu materijala. Može se izmijeniti, kao i svi ostali podaci u ovoj mreži;  
**Podizvođač**: ovaj se flag preuzima iz *MRP parametara* artikla i naziva se *Uključi u Podizvođač*, što označava treba li se artikl uključiti kao materijal u radne naloge;          
**Koristi jedinicu mjere**: ovdje se unosi eventualna alternativna jedinica mjere za artikl;  
**Datum korištenja**: podudara se s predviđenim datumom početka planirane narudžbe (ako se prvi promijeni, automatski se mijenja i ovaj);    
**Korištena količina**: predstavlja jediničnu količinu potrebnu za ovaj artikl (predviđeno u popisu materijala), ali može se mijenjati;  
**Ukupna količina**: predstavlja količinu koja se dobiva množenjem *Količine uporabe* s *Količinom za proizvodnju*;  
**% otpada**: ovdje se unosi ili preuzima iz popisa materijala eventualni postotak otpada za ovaj artikl;    
**Faza/Podfaza**: moguće je ručno unijeti odgovarajuću fazu i podfazu te dodijeliti odabrani materijal određenoj radnoj fazi artikla; ove se automatski nude iz radnog ciklusa;              
**Dostupna količina**: u ovom polju prikazuje se raspoloživa količina artikla na datum uporabe. 

## Faze   

Ovaj je obrazac sastavljena od mreže u koju korisnik može ručno unijeti faze koje želi koristiti za proizvodnju predmeta planirane narudžbe (samo ako je u pitanju proizvodnja). Nakon ručnog unosa, za uvoz podataka iz radnog ciklusa artikla potrebno je kliknuti na gumb **Kompletiranje podataka narudžbe** u traci izbornika s karticama.

Mreža je već popunjena ako je planirana narudžba generirana iz *Opće planirane* ili *MRP obrade*. 

*Posebni gumbi*:
> **Umetni fazu**: omogućuje dodavanje nove faze u mrežu;  
> **Cancella fase**: omogućuje brisanje unesenih faza iz mreže.  

*Specifična polja*:

**Šifra faze/Faza/Podfaza**: dvoklikom se otvara pomoć za faze rada, iz kojeg se može odabrati odgovarajuća faza i podfaza;    
**Kontrola kvalitete**: questo flag indica se il materiale debba essere sottoposto a controllo qualità prima del suo utilizzo;  
**Proizvodna faza**: ako je zastava označena, označava da je u pitanju proizvodna faza i da će se prijaviti;   
**Pokretno**:  ako je zastava označena, označava da je u pitanju prijenosna faza i generirat će se skladišni pokret nakon registracije proizvodne izjave;           
**Radni centar**: iz ovog izbornika odabire se radni centar. Automatski se predlaže prema prethodno odabranoj fazi i unesenoj u mrežu;    
**Datum početka/završetka planirani**: o su datumi početka i završetka odgovarajuće faze; mijenjanjem planiranih datuma početka i završetka automatski se mijenjaju i ovi datumi. Oni se izračunavaju na temelju vremena unesenog u radnim fazama, posebno na osnovi maksimalnog vremena stroja i ukupnog vremena rada za odabranu fazu;    
**Vrijeme stroja**: to je vrijeme koje stroj troši za provedbu faze, odnosi se na količinu komada po fazi;    
**Broj stroja**: to je broj strojeva uključenih u ovu fazu;    
**Količina komada po fazi**: indica il numero di pezzi per fase;  
**Tempo operaio**: è il tempo impiegato dall'operaio per realizzare questa fase, riferito alla quantità di pezzi per fase;  
**Numero operai**: è il numero di operai coinvolti in questa fase;  
**Conto terzista/descrizione terzista**: con doppio click sulla casella si apre il help per poter selezionare il conto e sottoconto del relativo terzista. Questa casella è attiva solo nel caso in cui la fase sia designata come fase *Esterna*. Da notare che il *terzista* viene anch'esso ripreso dalla fase di lavorazione inserita nel ciclo di lavorazione dell'articolo.  
**Decrizione centro di lavoro**: indica la descrizione del centro di lavoro.       

### Fasi - Proprietà

Contiene le proprietà relative alla fase selezionata.

**Descrizione fase/sottofase**: in questo campo appare la descrizione della fase selezionata;  
**Tipo**: in questa combo è possibile impostare il tipo di lavorazione (interna o esterna);  
**Sovrapposizione**: tramite questa combo inserisco la tipologia di un'eventuale sovrapposizione tra fasi. Possiamo avere sovrapposizione *Totale* (in questo caso la fase in oggetto è sovrapposta totalmente alla fase indicata successiva), *A pezzi* (in questo caso è necessario indicare dopo quanti pezzi prodotti da questa fase avrà inizio la fase successiva), *A tempo* (in questo caso è necessario indicare dopo quanti minuti da quando è iniziata la fase in oggetto avrà inizio la fase successiva);  
**UM Tempi**: in questa combo box compare l'*Unità Misura Tempi* della Fase; si può decidere di gestire i tempi della fase in secondi, minuti, ore e giorni. Di solito si gestiscono a minuti i tempi delle fasi interne e a giorni quelli delle fasi esterne, ma ovviamente dipende molto dalla tipologia di azienda per cui si sta impostando il lavoro;  
**Macchina**: in questa combo può essere selezionato il codice (e descrizione) della relativa macchina. Essa viene proposta in automatico, ripresa dal centro di lavoro che è stato precedentemente inserito nella griglia;  
**Gruppo manodopera**: in questa combo può essere selezionato il codice (e descrizione) del relativo gruppo manodopera. Essa viene proposto in automatico, ripreso dal centro di lavoro che è stato precedentemente inserito nella griglia;  
**Sovrapposiz. riferita alla fase/sottofase**: qui viene indicato il codice della fase e Sottofase che presentano una sovrapposizione con la fase in oggetto. Di solito si indica la fase successiva, ma anche qui si tratta solo di una consuetudine; 
**Valore**: qui si indica il valore dell'eventuale sovrapposizione, utilizzando i criteri specificati sopra;  
**Utilizzo**: se il flag è attivato, significa che si vuole che il tempo di attesa/coda aumenti il tempo di impegno del Centro di Lavoro su quella fase;  
**Tempo di attesa o coda**: indica l'eventuale tempo di attesa/coda prevista per questa macchina.  

### Fasi - Extra Data

Contiene gli eventuali extra data relativi alla fase selezionata.

## Attrezzaggio

In questo tab è possibile definire i tempi relativi all'attrezzaggio della fase selezionata nel tab precedente. 

*Campi specifici*:

**Fase/Sottofase**: in questi campi vengono visualizzate le informazioni relative alla fase che è selezionata nel tab *Fasi*;  
**Tipo**: indica la tipologia della fase (interna o esterna);  
**Tipo sovrapposizione**: indica l'eventuale tipologia della sovrapposizione;  
**UM Tempi**: indica l'unità di misura temporale della fase;  
**Centro di Lavoro**: in questi campi viene inserito il codice (e relativa descrizione) del Centro di Lavoro impostato per l'attrezzaggio;  
**Macchina**: in questi campi viene inserito il codice (e relativa descrizione) della macchina per l'attrezzaggio;  
**Gruppo MDO**: in questi campi viene inserito il codice (e relativa descrizione) del Gruppo manodopera per l'attrezzaggio;  
**Valore**: indica il valore dell'eventuale sovrapponibilità;  
**CdL**: in questi campi viene visualizzato il codice e la descrizione del relativo Centro di Lavoro della fase selezionata;  
**Data inizio**: viene visualizzata la data d'inizio della fase selezionata nel tab *Fasi*;  
**Data fine**: viene visualizzata la data di fine della fase selezionata nel tab *Fasi*;  
**Tempo attrezzaggio**: viene inserito il tempo dell'attrezzaggio. Si tratta di un tempo fisso, che non varia al variare delle quantità da produrre nella fase selezionata;  
**Tempo riattrezzaggio**: viene inserito il tempo del riattrezzaggio, che viene sommato al tempo attrezzaggio;  
**Num. macchine**: si indica il numero di macchine impiegate per l'attrezzaggio;  
**Num. operai**: si indica il numero di operai impiegati per l'attrezzaggio.

## Attrezzature

In questo tab, costituito principalmente da una griglia, è possibile definire quali e quante attrezzature dovranno essere utilizzate nella produzione della fase selezionata nel tab *Fasi*. 

*Campi specifici*:

**Sequenza**: in questo campo è possibile indicare la sequenza con cui devono essere utilizzate le attrezzature;      
**Attrezzature**: con questa combo box è possibile richiamare il codice dell'attrezzatura, ripreso dall'apposita tabella [Attrezzature](/docs/configurations/tables/production/equipments);  
**Classe/Codice articolo**: in questi campi è possibile indicare la classe e il codice dell'articolo (l'help filtra automaticamente solo gli articoli che sono identificati come *Attrezzature* nel campo *Natura Articolo* dell'anagrafica di magazzino);  
**Variante**: rappresenta la variante dell'articolo;  
**Quantità**: rappresenta la quantità dell'articolo.

## Controllo qualità

In questo tab, costituito principalmente da una griglia, è possibile visualizzare i dettagli delle prove pianificate di controllo per la fase/sottofasse.

## Nota fase

In questo tab viene visualizzata la nota legata alla fase di lavorazione selezionata nel tab *Fasi*. Essa è modificabile dall'utente contestualmente all'ordine pianificato in oggetto.

## Istruzioni operative

In questo tab vengono visualizzate le note / documenti legate alla fase di lavorazione selezionata nel tab *Fasi*. Esse sono modificabili dall'utente contestualmente all'ordine pianificato in oggetto. Questi documenti sono visibili all'interno del MES nel tab *Documenti e Istruzioni opertive.

## Extra Data

Per una descrizione approfondita sugli extra data si rimanda all'articolo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple).

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).