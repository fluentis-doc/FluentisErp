---
title: Parametri podugovaranja
sidebar_position: 2
tags: [Radni Račun]
---

Kroz ovaj prozor postavljaju se svi parametri koji se odnose na upravljanje podugovaranjem i, točnije, način na koji se moraju provoditi kretanja skladišta izazvana procedurama samog modula.

## Općenito

#### Dati proposti negli ordini  


> **Regenerirati materijale na ažuriranju stavke**: Ako je flag aktiviran, svaki put kada se izvrši izmjena na retku artikla prisutnom na tabu *Artikli za proizvesti* narudžbe radnog naloga, procedura regenerira informacije vezane uz materijale koji se trebaju isporučiti i upotrijebiti, koje se unose u posljednjem tabu same narudžbe.  
>   
> **Podaci za predložene materijale**: prikazuje 4 različite mogućnosti koje korisnik ima da bi postupak automatski predložio materijale na kartici Materijali za isporuku narudžbe podugovarača.   
> Mogućnosti su sljedeće:  
> 1. *Od zadnje isporuke obavljene istom kooperantu*: posljednja kooperantska narudžba generirana za istog kooperanta i u kojoj se nalazi ista stavka koja se proizvodi.     
> 2. *Proširenje razine iz strukture sastavnice*:  provjeravate sastavnicu artikla umetnutog u karticu Stavke za proizvodnju;       
> 3. *Isporuka iste stavke koja se proizvodi*: umetnite istu stavku umetnutu u karticu Predmeti za proizvodnju u karticu Materijali za isporuku.     
> 4. *Nema materijala*: aterijal nije predložen na kartici Materijali za isporuku.    
> 5. *Iz proizvodnog naloga*: koristi se za narudžbe vanjske obrade generirane putem puštanja planirane narudžbe vanjske obrade ili iz narudžbe proizvodnje s vanjskom fazom.  
>
> **Verzije**: omogućuju odabir verzije popisa materijala.

 #### Razmotrite raspoloživosti iz     

> Questa sezione permette di decidere se considerare o no le disponibilità provenienti da **Conto Lavoro** / **Produzione** / **Acquisti** / **Magazzino** / **Vendite**; ciascuno di questi flag sta a indicare la volontà da parte dell'utente di fare in modo che la procedura di creazione dell'ordine di conto lavoro consideri la disponibilità dei materiali in base alle informazioni che provengono dalle singole aree applicative di ERP. Quindi per esempio se l'utente sceglie di attivare il flag solo su Acquisti e non su Vendite, significa che saranno considerate le disponibilità provenienti dagli ordini fornitori, dalle DDT e fatture di acquisto e dalle richieste di acquisto e non quelle provenienti da ordini clienti, DDT e fatture di vendita.   

#### Gotovi proizvodi

**Predložena je zadnja cijena rada**: o je aktiviran, omogućuje vam da u nalogu za podugovaranje, u okviru s jediničnom cijenom obrade na kartici *Stavke za proizvodnju*, predložite cijenu zadnje narudžbe za podugovaranje izdane za tu stavku za istog izvođača.
>   
> **Razmotrite količine prema ekonomskom lotu** i **Razmotri višekratnike ekonomskih lotova**: omogućuje odabir, prilikom unosa artikla u tab *Artikli za proizvodnju* narudžbe vanjske obrade, hoće li se uzeti u obzir količine samih artikala na temelju ekonomskog lota, i/ili eventualno uzeti u obzir i višekratnici lota.

**Tip otpremnice**: u ovoj sekciji se postavlja [Tip otpremnice](/docs/configurations/tables/sales/delivery-notes-type) koji se treba predložiti kao zadani prilikom korištenja procedure za kreiranje otpremnice za isporuku materijala kod podizvođača. Ova vrsta otpremnice automatski će koristiti skladište i šifru knjiženja postavljene u odgovarajućim padajućim izbornicima pod stavkom "Isporuke materijala podizvođačima" koja se nalazi u prozoru parametara za podizvođače.

**Unità di misura volume predefinita**: permette di indicare l'unità di misura da utilizzare di default per i volumi.   

**Unità di misura pesi predefinita**: permette di indicare l'unità di misura da utilizzare di default per i pesi.   

**Valor. lavorazione materiali a costo**: permette di definire se la valorizzazione della lavorazione dei materiali debba avvenire a costo ultimo o a costo medio. Quindi si tratta di un metodo per decidere se i materiali utilizzati dai terzisti debbano essere imputati alla lavorazione utilizzando il  costo ultimo oppure il  costo medio tra quelli inseriti nell'anagrafica dell'articolo stesso. Inoltre, è possibile, selezionando i flag **Lotti** e/o **Commessa di produzione**, andare a proporre come costo del materiale il costo ultimo/Medio per il relativo lotto e/o commessa di produzione in base ai flag attivati.    


#### Evasione  

> **Visualizzazione griglia di evasione**: se attivo, nelle procedure di evasione ordine in DDT di consegna o nel rientro sarà visibile la griglia di evasione.   
> 
> **Visualizzazione tree evasione**: se attivo, nelle procedure di evasione ordine in DDT di consegna o nel rientro sarà visibile la struttura gerarchica. Questi due flag possono essere attivati in concomitanza.    

**Codice operatore obbligatorio**: se attivo, permette di decidere se sia necessario inserire il codice operatore nel momento in cui si inserisce la DDT di consegna di conto lavoro.

**Proposta automatica serial number per l'articolo rientrato se presente anche come materiale consumato**: nei rientri di conto lavoro questo flag attivo permette di far proporre in automatico il serial number per l'articolo.

**Controlla disponibilità**: se attivo, permette di decidere se fare in modo che la procedura controlli o meno la disponibilità proveniente dai flag impostati nella sezione *Considera le disponibilità provenienti da*.

**Disponibilità obbligatoria**: se attivo, impedisce l'inserimento di materiali in ordini di conto lavoro nel caso di mancata disponibilità alla data dell'eventuale consegna al terzista.

**Nessun materiale in consegna**: se attivo, fa in modo che nel tab *Materiali da consegnare* non sia inserito alcun articolo per nessun articolo da produrre.

**Carico/Scarico automatico**: se attivo, permette all'utente di fare in modo che le movimentazioni di magazzino in uscita avvengano automaticamente non appena la DDT di consegna venga stampata. Questo consente di saltare lo step dello scarico dei  DDT di consegna di conto lavoro

**Registrazioni di magazzino con data del documento**: 
per la registrazione dei **DDT di consegna**, se questo flag è attivo, viene usata la *Data trasporto* (presente nel tab *Riepiloghi* > *Destinatario*), se valorizzata, altrimenti viene considerata la data di creazione del documento presente in testata. Se il flag non è attivo, lo scarico dall'interno del documento viene sempre effttuato con la data corrente.    
Per la registrazione dei **Rientri di conto lavoro**: se il flag è attivo viene sempre utilizzata la *Data rientro* presente in testata; se non attivo la registrazione dall'interno del documento viene effettuata con la *Data documento def.* presente in testata.

**Blocca inserimento documento in date festive**: se attivo, impedisce l'inserimento di un ordine, di una DDT e di un rientro di conto lavoro in date festive.

**Controllo terzista di riferimento per gli articoli**: se attivo, consente all'utente di fare in modo che la procedura di creazione degli ordini di conto lavoro controlli se l'articolo che si sta inserendo nel tab *Articoli da Produrre* abbia, come fornitore preferenziale, il terzista inserito nella testata dell'ordine stesso.

**Lotti e numeri serali obbligatori**: se attivato, obbliga l'utente ad inserire in tutti i documenti il lotto dell'articolo inserito nel documento stesso, sempre che l'articolo sia gestito a lotti o a serial numbers.

**Ricalcola trasporto**: questo flag fa in modo che nel tab Trasporto del DDT vengano riportati i totali di peso, volume e colli delle righe del documento; senza questo flag, i campi non saranno compilati.

**Verifica articoli in esaurimento**: se attivato, il sistema fa un controllo sulla disponibilità degli articoli in riga ordine ed avvisa qualora l'articolo fosse in esaurimento, ovvero se nell'[anagrafica dell'articolo](/docs/erp-home/registers/items/create-new-item) è stato attivato il flag *In esaurimento*.

**Attiva il controllo qualità**: work in progress.

**Gestione doppia unità misura**: solo se attivato, il sistema può gestire l'unità di misura alternativa nei documenti di conto lavoro.

**Proposta automatica UM alternativa**: se attivato, fa in modo che venga proposta la quantità relativa all'unità di misura alternativa, a patto che sull'anagrafica dell'articolo ne sia stata impostata una di default. È possibile attivare questo flag solo se il flag precedente è stato attivato.

**Considera magazzini in base al tipo DDT rientro**: permette di scegliere se considerare i magazzini in base al tipo di DDT di rientro o al tipo di DDT consegna, invece che utilizzare le impostazioni inserite nelle apposite combo delle voci *Consegne materiali a terzisti* e *Rientro prodotto*.

### Skladišta

**Isporuke materijala za W.I.P. podizvođača**   
U ovom se odjeljku postavlja skladište i povezani razlog koji se mora uzeti u obzir za istovar materijala namijenjenih podizvođačima u slučaju da se koristi upravljanje skladištem W.I.P., što se može aktivirati u [Parametrima proizvodnog naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro). U ovom slučaju, sve podugovaračke narudžbe kreirane putem *Planiranog izdavanja narudžbe* ili izravno iz proizvodnog naloga koristit će ovo skladište i nasumično za istovar materijala unesenih u kartici [Materijali za isporuku](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) podugovaračke narudžbe.    

**Dostave materijala podizvođaču**   
U ovom odjeljku postavlja se skladište i povezani razlog koji se mora uzeti u obzir za istovar materijala namijenjenih podizvođačima. Stoga je skladišni skup skladište iz kojeg će se preuzeti materijali umetnuti u karticu [Materijali za isporuku](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders) podugovaračkog naloga. Oni će se koristiti samo u ručno kreiranim podizvođačkim narudžbama ako je aktivan W.I.P. nije aktivan će se uzeti u obzir u svim slučajevima.     

**Potrošnja  korištenih materijala**  
U ovom odjeljku postavljeno je skladište i povezani razlozi koji se moraju uzeti u obzir za istovar materijala koje su podizvođači upotrijebili. Stoga je skladišni skup skladište iz kojeg će se preuzeti materijali umetnuti u karticu Materijali naloga za povrat podugovaratelja. Molimo poveznicu kada artikl bude kreiran.

**Utovar materijala za podizvođača**  
U ovom odjeljku postavlja se skladište i povezani razlog koji se mora uzeti u obzir za utovar materijala namijenjenih podizvođačima. Stoga je skup skladišta skladište u koje će se utovariti materijali umetnuti u karticu Materijali za isporuku podugovorne narudžbe. Ovi podaci su preuzeti iz drugog razloga umetnutog u tablicu razloga koji odgovara razlogu koji istovaruje materijale namijenjene podizvođačima (tj. razlog postavljen u posebnom kombiniranom okviru odjeljka *Isporuke materijala podizvođačima*).

**Dostave materijala između podizvođača**   
U ovom se odjeljku postavlja skladište i povezani razlog koji se mora uzeti u obzir za premještanje materijala od jednog izvođača do drugog.   

**Povratak W.I.P artikla**  
U ovom se odjeljku postavlja skladište i povezani razlog koji se mora uzeti u obzir za utovar poluproizvoda koje su izradili podizvođači; to će se koristiti u slučaju svih vanjskih faza koje nisu zadnja faza posla ciklus. Stoga je skup skladišta skladište u koje će se utovariti artikli umetnuti u karticu Stavke Naloga za povrat podugovarača.  

**Povrat gotovog artikla**  
U ovom odjeljku postavlja se skladište i povezani razlog koji se mora uzeti u obzir za utovar gotovih proizvoda/poluproizvoda koje su izradili kooperanti. Ovo će se koristiti u slučaju da je vanjska faza zadnja faza proizvodnog ciklusa. Stoga je skup skladišta skladište u koje će se utovariti artikli umetnuti u karticu Stavke Naloga za povrat podugovarača.  

**Materijal vraćen**  
U ovom odjeljku postavlja se skladište i povezani razlog koji se mora uzeti u obzir za povrate utovara. Stoga je skladišni skup skladište u koje će se učitati artikli umetnuti u karticu Materijali zaposlenika povrata podugovarača i s kojim je povezana vraćena količina.

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, tipke i polja](/docs/guide/common).