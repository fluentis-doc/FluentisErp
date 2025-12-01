---
title: Tipi fatture di vendita
sidebar_position: 20
---

:::tip[FAst Start]
Tablica je obuhvaćena postupkom [**Fast Start**](/docs/guide/fast-start)

U slučaju da se želi konfigurirati ručno, potrebno je slijediti check listu na povezanoj stranici.  
:::

Tablica se otvara putem **Tablice > Prodaja > Tipovi izlaznih računa** i koristi se za određivanje svojstava računa;  

Omogućuje umetanje novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja;  

Forma se sastoji od područja filtra i područja rezultata. Nakon što se postave svi željeni filtri, potrebno je kliknuti na tipku **Pretraži**, nakon čega će se rezultati prikazati u rešetki rezultata;  

Za unos novog zapisa potrebno je kliknuti na prvu praznu liniju u rešetki ili pritisnuti tipku **Novi**; 

**Tip/Opis**: tip računa i opis tipa; uneseni šifra mora biti jedinstvena;  

**Numeracija:** u ovo se polje upisuje šifra odgovarajuće numeracije. Za više informacija pogledati članak o [fluentis numeracijama](/docs/configurations/tables/fluentis-numerations); 

**Priroda računa**: odabire se priroda vezana uz tip računa (račun, storno račun, itd.);  

**Narudžba**: ako je aktivno, račun se može kreirati iz izvršenja narudžbe putem odgovarajuće procedure; inače je tipka Evidentiranje iz narudžbi deaktivirana;  

**Neposredni račun**: ako je aktivno, račun je neposrednog tipa te je potrebno popuniti podatke o transportu; ako nije aktivno, račun je odgođenog tipa i podaci o transportu preuzimaju se iz otpremnice;  

**Priroda Intrastat transakcije**: ovdje se upisuje šifra transakcije za Intrastat prijavu. Za više informacija pogledati [Natura transazioni intrastatPriroda Intrastat transakcija](/docs/configurations/tables/finance/nature-of-intrastat-transaction); 

**U statistici**: ako je aktivno, računi ovog tipa bit će uključeni u statistike i vidljivi u ispisima *Fakturat*;

**Proforma**: ako je aktivno, račun je proforma i ne može se knjižiti;

**Predložak**: ovdje se upisuje računovodstveni predložak korišten za knjiženje računa. Za više informacija vidjeti [predloške glavne knjige](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates);

**Tip dokumenta**: ovdje se upisuje analitički predložak korišten za knjiženje u analitičkom računovodstvu;  

**Napomena**: slobodan tekst za unos napomena o tipu računa;

**Kontrola kupca**: ako je aktivno, ovaj flag omogućuje sustavu da izvrši provjeru vrste kartona računa/podračuna koji je unesen u dokument kako bi se osiguralo da je obavezno kupac; Ako to nije slučaj, sustav će obavijestiti korisnika prikazujući poruku o pogrešci; Bilo bi *obavezno* aktivirati ga za sve vrste prodajnih faktura;

**Zaključaj dokument; otisnut**: ako je aktivno, ovaj flag onemogućuje izmjenu računa koji već ima postavljen flag *Otisnuto* u zaglavlju;

**Intrakomunitarni**: ako je aktivno, sustav provjerava da li je država kupca *država EU*; Ovaj flag treba *postaviti samo za vrste faktura unutar zajednice*; Ako ne postoji veza između kupca i vrste fakture unutar zajednice, sustav će vratiti poruku upozorenja.;

**Evasione fattura proforma**: se settato, e la fattura è proforma, l'evasione evade l'ordine altrimenti l'ordine rimane non evaso;

**Causale trasporto**: Campo di testo libero in cui va indicata una causale di trasporto da poter stampare in fattura;

**Fido**: se attivo, la fattura con questo tipo rientrerà nel controllo del fido;

**Escludi blocco:** si riferisce al blocco per superamento del fido e perciò inserito nella gestione Lock Manager presente nell’area tesoreria tra le procedure dell’Utilizzo Fidi. Se attivo, il sistema per questo tipo fattura non considererà il blocco del documento dovuto al superamento del fido ma lascerà all'utente la possibilità di inserire e stampare il documento; se non attivo, il tipo fattura verrà bloccato qualora si superi il fido e all'utente verrà impedito la stampa del documento; 

**Magazzino/Descrizione magazzino**: in questi campi si andrà ad indicare il [magazzino](/docs/configurations/tables/logistics/warehouses) di impegno degli articoli presenti in quel determinato tipo di fattura; il magazzino qui specificato viene riportato in tutte le righe articolo inserite nella fattura di questa tipologia; 

**Causale /Descrizione causale magazzino**: in questi campi si andrà invece ad indicare la [causale di movimentazione](/docs/configurations/tables/logistics/warehouse-templates) degli articoli impegnati contenuti in quel determinato tipo di ordine; la causale qui specificata viene riportato in tutte le righe articolo inserite nell’ordine di questa tipologia; 

**Raggruppamento partite**: se attivo, nella contabilizzazione fatture vengono raggruppate le partite; Per approfondimenti fare riferimento a [raggruppamento partite](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping); 

**Iva agricola per vendite**: se attivo, in fase di creazione DDT, il sistema andrà a verificare se per l'articolo utilizzato è presente un codice dell'IVA agricola altrimenti verrà utilizzato il codice IVA presente nell'anagrafica dell'articolo;

**Controlla Picking scaricato**: se attivo, quando si crea una fattura da un Picking scaricato, si attiva in automatico il flag scaricato per la DDT; Se non attivo, il flag non viene attivato; 

**Blocca quantità Picking**: se attivo, blocca la quantità e la quantità alternativa nella fattura  creata da lista UDC; Se non attivo non blocca la quantità ma la lascia libera; Si consiglia di attivare sempre questo flag qualora si utilizzi la gestione picking e UDC;

**Calcola provvigioni**: se attivo, le fatture appartenenti a questa tipologia, verranno conteggiate nel il calcolo delle provvigioni agenti;

**Scollega DDT**: se attivo, e in presenza di una fattura di tipo Immediata, consente di effettuare lo scarico sia del DDT che della fattura che lo valorizza. Questa opzione viene generalmente utilizzata quando è necessario movimentare la merce prima dello scarico effettivo del documento. In tali casi, nel DDT si indica una causale di scarico con contropartita di carico (per spostare la merce in un altro magazzino) e successivamente si utilizza la fattura per scaricare definitivamente la merce dal secondo magazzino;   

**Non evade Picking**: se attivo, non farà evadere il picking qualora venga generata una fattura;

**Prezzo Ivato**: la gestione dei prezzi ivati si attiva tramite questo parametro presente in tutti i documenti dell’area vendita a partire dai listini di vendita. Nella ripresa prezzi di un documento con tipologia Prezzo Ivato, si cerca nei listini, con lo stesso flag Prezzo Ivato settato, e si calcolano gli sconti partendo sempre dal prezzo ivato. Dal prezzo ivato utilizzando l’aliquota iva dell’anagrafica cliente o dell’anagrafica articolo  viene calcolato il prezzo non ivato.Nei documenti sono visibili le colonne Prezzo e Prezzo Ivato Attenzione! se non esiste un listino valido con settato il flag Prezzo Ivato e in anagrafica articoli c’è un prezzo di vendita, viene proposto come Prezzo Ivato il prezzo di vendita. Per capire il funzionamento della ripresa Prezzi e dei prezzi ivati e non ivati seguire l’articolo Ripresa Prezzi e Sconti nei documenti di vendita.  

**Competenza economica**: se attivo, il tipo fattura ha competenza economica e quindi sarà necessario impostare le date del periodo di competenza;

**Causale Competenza Economica**: in questo campo va indicata la causale di competenza economica utilizzata in contabilizzazione delle fatture; Questo valore potrà essere scelto da un elenco; Per approfondimenti fare riferimento alle [Causali di contabilità generale](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates);

**Gestione matrici Extra Data**: se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice; Se non attivo, non viene visualizzato questo TAB e la conseguente matrice;

**Stampa**: in questo campo è possibile impostare la stampa di default da utilizzare per questa tipologia di documento; ricordiamo che, in fase di stampa documento, sarà necessario selezionare il report 'Stampe multiple' per utilizzare in automatico la stampa di default;

**Numero di copie**: in questo campo vengono impostate il numero di copie documento da stampare; 

**Gestione Conai**: questo bottone abilita la gestione CONAI (Consorzio Nazionale Imballaggi) per il tipo fattura;

**Gestione cespiti**: questo flag abilita la gestione dei cespiti nel tipo fattura e nel campo successivo va specificato il tipo di operazione dei cespiti;

**Tipo operazione**: in questa combo box è possibile selezionare il tipo di operazione dei cespiti tra diverse opzioni (rivalutazione, distruzione, plusvalenza, ecc.).       

**Tipo sconto/Descrizione**: in questa colonna è possibile associare la tipologia di sconto da proporre quando gli sconti vengono inseriti direttamente nella colonna *Sconti articolo* della griglia articoli dei documenti (per maggiori dettagli vedi l'articolo [Gestione Widget sconti semplificato](/docs/sales/sales-flow/discount-widget)).