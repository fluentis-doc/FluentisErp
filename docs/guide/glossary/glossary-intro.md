---
title: Glossario
sidebar_position: 1
---

In questa sezione verranno raccolte le definizioni dei campi più utilizzati e ricorrenti presenti nelle varie form del gestionale.

Per ricercare la spiegazione dettagliata di un campo, basterà posizionarsi sull'articolo relativo alla lettera iniziale del campo che si vuole ricercare.

### A

#### Anno
Questo campo è un campo generico che si troverà all'interno di moltissime form in cui comparirà l'anno in cui viene creato il documento o in cui viene svolta una determinata operazione; nella maggior parte delle form è un campo che si compila in automatico;

#### Annullata/o  
Il flag attivo permette di annullare il documento.

#### Articolo
Campo generico che si troverà in moltissime form in cui comparirà la classe, il codice e la descrizione dell'articolo (materiale) che si desidera creare, visualizzare, movimentare, acquistare, produrre, vendere.

#### Articolo codificato
E' un tipo riga che identifica gli articoli codificati; per articoli codificati si intendono tutti quegli articoli che sono codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino;

#### Articolo non codificato
E' un tipo riga che identifica gli articoli non codificati; per articoli non codificati si intendono tutti quegli articoli che sono descrittivi e che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati in magazzino;

#### Articolo omaggio
E' un tipo riga che identifica gli articoli omaggio; per articolo omaggio si intende un articolo che viene gestito come un articolo codificato e non codificato ai fini fiscali e di magazzino ma essendo omaggio viene conteggiato separatamente nei riepiloghi del DDT;

#### Articolo note
E' un tipo riga che è una semplice nota, non incide sulla contabilità e sul magazzino; in questo campo di possono scrivere note relative agli articoli che si vuole vengano riportare nei documenti di vendita/acquisto.

#### Articolo spese
E' un tipo riga che identifica gli articoli codificati o non-codificati che vengono però riassunti in modo distinto nei riepiloghi dei documenti; se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se non è codificato oppure non ha interesse fiscale non verrà movimentato in magazzino;

#### Audit trail
Questa sezione la possiamo trovare in diverse form e serve per la tracciabilità delle operazioni; solitamente in questa sezione si può vedere l'utente che ha creato un documento e/o effettuato l'ultima modifica insieme alle date di inserimento/creazione e modifica.

### B




### C

#### Cambio {#currency-exchange}
Se la valuta della società è uguale a quella del documento, il valore riportato sarà 1, altrimenti il valore sarà ripreso dalla tabella *Cambi valute* oppure dalla tabella *Cambi fissi per l'EURO* che si trovano nel percorso *Configurazione > Tabelle > Amministrazione*.

#### Caricata/o
Questo flag, se attivo sta ad indicare che gli articoli del DDT e/o fattura di acquisto sono stati caricati a magazzino tramite la procedura di [Carico DDT di acquisto a magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) e [Carico fatture di acquisto a magazzino](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse). Per le procedure di carico dei documenti si rimanda ai relativi articoli. 

#### Causale di magazzino
Questo campo fa riferimento ai valori precodificati nella relativa tabella che si trova nel percorso Home >  Tabelle >  Logistica; in questo campo si troverà la causale di magazzino relativa all'operazione di magazzino che intende eseguire; nei documenti questo campo, insieme al campo **Descrizione causale di magazzino** vengono riportati in automatico se presenti nei Parametri MRP dell'anagrafica articolo, nel tab **Magazzini**.

#### CIG
Codice identificativo gara; al fine di rintracciare l'effettiva tracciabilità dei pagamenti da parte delle pubbliche amministrazioni, le fatture elettroniche emesse verso le pubbliche amministrazioni devono contenere il codice CIG e il codice CUP; questo è un codice alfanumerico univoco che identifica un dato appalto o un dato lotto e che si trova nelle fatture di vendita e negli ordini di vendita. 

#### Classe articolo {#item-class}
Questo campo comprende informazioni obbligatorie dell'articolo; con classe si intende la classe di appartenenza dell'articolo all'interno del data base (esempi di classe: Materia prima, Semilavorato, Prodotto finito, etc.); le classi in cui si decide di raggruppare gli articoli e tra cui si può scegliere nel momento di creazione/duplica di un articolo vengono precodificate all'interno della relativa tabella **Classi** che si trova nel percorso **Tabelle > Logistica**. In tutti i documenti l'articolo comparirà con la sua classe e descrizione.

#### Codice articolo {#item-code}
Questo campo rappresenta un codice specifico alfanumerico che codifica l'articolo in base alle sue caratteristiche specifiche; il codice insieme alla classe costituiscono il *nome* dell'articolo che deve essere univoco;

#### Combo box
Anche definito campo "a tendina" è un campo che impone di scegliere la voce da un elenco a discesa. Le voci che possono essere selezionate possono essere fisse (l'utente non può aggiungere nuove voci, tipicamente perchè la relativa tabella è riservata alle logiche di base del sistema) oppure possono essere aggiunte e/o modificate (l'utente può accedere alla tabella che alimenta la combo box e che solitamente presenta lo stesso nome; per comodità, anzichè cercare la tabella, può anche eseguire click con tasto destro e *Apri form*)

#### Commessa
Questo campo fa riferimento alla commessa di vendita; lo troviamo nei documenti di vendita e di acquisto e permette di collegare il documento a una commessa di vendita esistente;

#### Commessa di produzione
Questo campo fa riferimento alle commesse di produzione; lo troviamo nell'area di produzione e nei documenti legati alla produzione, e nella fattura di acquisto.

#### Contabilizzata
Flag che si trova nella testata di una fattura di vendita e di acquisto e che, se attivo, sta ad indicare che quella fattura è stata contabilizzata attraverso la procedura di  [Contabilizzazione delle fatture di vendita](/docs/sales/sales-invoices/accounting/sales-invoices-accounting)  e di 'Contabilizzazione delle fatture di acquisto'. Per la spiegazione di questa procedura si rimanda ai relativi articoli;

#### CUP
Codice unico di progetto; al fine di assicurare l'effettiva tracciabilità dei pagamenti da parte delle pubbliche amministrazioni, le fatture elettroniche emesse verso le pubbliche amministrazioni devono contenere il codice CUP e il codice CIG; questo codice è rappresentato da una stringa alfanumerica di 15 caratteri generata tramite il sistema CUP; tale stringa resta immodificabile in quanto identifica e accompagna un progetto pubblico a partire dal momento della sua nascita. Lo troviamo unitamente al codice CIG nelle fatture di vendita e negli ordini di vendita.

**Come si ottiene la quantità alternativa**: per quanto riguarda il calcolo della quantità espressa nell'unità di misura alternativa questa può essere eseguita dividendo oppure moltiplicando la quantità gestionale per il fattore di conversione a seconda dell'opzione scelta. Questo parametro viene definito ed è valido per tutti gli articoli. Il fattore di conversione viene impostato a livello di anagrafica articoli per ogni unità di misura alternativa impostata nell'anagrafica stessa.


### D



#### Da numero....A numero
Questi campi comuni a molte aree di filtro della varie form, vengo utilizzati per poter filtrare i documenti in base al loro numero identificativo; con questi campi di va quindi a stabilire da quale a quale numero numero documento si vogliono visualizzare i risultati.

#### Data arrivo
In questo campo viene indicata la data di arrivo della merce acquistata; troviamo questo campo nei documenti di acquisto quali fatture e DDT di acquisto, o DDT e fatture di reso.

#### Data carico
In questo campo viene indicata la data in cui viene caricata a magazzino la merce ricevuta; troviamo questo campo nei documenti di acquisto quali fatture e DDT di acquisto o DDT e fatture di reso.

#### Da data inserimento...A data inserimento
Questi campi comuni a molte aree di filtro delle varie form, vengono utilizzati per poter filtrare i documenti in base al periodo di inserimento a sistema; con questi campi si va quindi a definire il periodo di ricerca.

#### Data documento
Data del documento (esempio fattura di acquisto); campo presente nei documenti del ciclo attivo e passivo e nelle registrazioni contabili. Potrebbe essere presente (con un significato più generico) anche in documenti di tipo non fiscale.

#### Data merce pronta

#### Data inizio/data fine validità {#validity-date}
In questi due campi troveremo la data di inizio validità del listino (quindi da quanto i prezzi di quel listino entreranno in vigore nei vari documenti) e la data fine validità (ovvero quando i prezzi di quel listino terminano la loro validità e verranno sostituiti da nuovi prezzi in un nuovo listino).

#### Data scadenza
Data di scadenza del pagamento calcolata a partire dalle condizioni di pagamento o imposta manualmente. Questo campo è presente in genere nei documenti del ciclo attivo e passivo (ordini, DDT, fatture ecc.). Il calcolo della data verifica le condizioni di pagamento (inserite nella testata) ed in particolare la soluzione di pagamento (esempio 30 giorni da data fattura) e li somma al valore del campo **(Data) decorrenza** (anche quest'ultimo presente nel documento - aprendo l'expander 'Spedizione'). Vedere anche **Scadenza.**

#### Data valuta {#currency-date}
Data in cui viene calcolato il valore del cambio come rapporto tra la moneta della società e quella del fornitore/cliente, secondo le impostazioni della tabella *Cambi valute* che si trova nel percorso *Configurazione > Tabelle >Amministrazione*.

#### Decorrenza (data)
Campo presente nei documenti del ciclo attivo e passivo (esempio fatture). Al momento della creazione del documento si imposta automaticamente pari alla data documento, ma può essere poi variato manualmente. In base a questo campo viene calcolata la scadenza (o scadenze) di pagamento in base alle condizioni di pagamento (tipo e soluzione) impostate per il documento.

#### Destinatario {#recipient}
Negli ordini clienti/fornitori, nelle DDT di acquisto/vendita e nelle fatture di acquisto/vendita, questo campo viene compilato automaticamente con il destinatario di default che si è precedentemente inserito in *Anagrafiche contatti> tab Dati contabili > tab Consegna*.  
Nel caso il destinatario sia diverso da quello di default si potrà andare a modificare l'informazione direttamente nel campo **Destinatario** dei documenti.

#### Destinazione {#destination}
Negli ordini clienti/fornitori, nelle DDT di acquisto/vendita e nelle fatture di acquisto/vendita, questo campo viene compilato automaticamente con il destinatario di default che si è precedentemente inserito in *Anagrafiche contatti> tab Dati contabili > tab Consegna*.  
Nel caso la destinazione sia diversa da quella di default si potrà andare a modificare l'informazione direttamente nel campo **Destinazione** dei documenti.  
La destinazione della merce può *coincidere* con il Destinatario, ma può anche essere diversa nel caso il destinatario abbia per esempio più sedi o più magazzini.

#### Divisa {#currency}
Le divise vengono codificate nella relativa tabella **Divise** che si trova nel percorso *Configurazione > Tabelle >Impostazioni Generali*.   Nei documenti viene proposta di default l'informazione inserita in *Anagrafiche contatti> tab Dati contabili > tab Amministrazione* per indicare la divisa di default per gli articoli relativi al soggetto. 

#### Documenti allegati
In questa sezione, presente in diverse form, vengono visualizzati i documenti che sono stati allegati e che sono relativi alla form in cui ci trova;


### E


#### EDI
Il sistema EDI (Electronic Data Interchange) consente l'interscambio di documenti tra i sistemi informativi delle diverse aziende attraverso un canale dedicato e in un formato definito in modo da non richiedere l'intervento umano salvo in alcuni casi eccezionali; consente quindi l'invio attraverso questo sistema di documenti quali ordini clienti, fatture, listini etc, che prima venivano inviati via mail, fax o posta.

#### Expander {#expander}
Sono rappresentati da due piccole frecce e permettono di visualizzare (aperto ![](/img/it-it/guide/glossary/e/image01.png)) oppure di nascondere (chiuso ![](/img/it-it/guide/glossary/e/image02.png)) i dati che li contengono.


### F


#### Fatturato acquisti
In questo campo viene proposto il dato inserito nel tab 'Generalità' dell'anagrafica articoli. viene quindi proposto il tipo fatturato acquisti che si collega ai sottoconti contabili per la contabilizzazione delle fatture di acquisto. Se questo non è presente, non viene proposto nessun dato, ma, al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo 'Costo/Ricavo di contropartita predefinito dell'anagrafica fornitore; 

#### Fatturato vendite
In questo campo viene proposto il dato inserito nel tab 'Generalità' dell'anagrafica articoli. viene quindi proposto il tipo fatturato vendite che si collega ai sottoconti contabili per la contabilizzazione delle fatture di vendita. Se questo non è presente, non viene proposto nessun dato, ma, al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo 'Costo/Ricavo di contropartita predefinito dell'anagrafica clienti; 

#### Form
Maschera operativa del programma;


### G

#### Giorni di pagamento merce deperibile
E' collegato all'articolo 62; per la merce deperibile la fattura deve essere creata e pagata entro una scadenza di 30/60 giorni in base al tipo di articolo. In questo caso questo controllo viene fatto sia sull'articolo, sia sul tipo di pagamento che viene inserito in modo che non si possano emettere fatture con data decorrenza maggiore rispetto a quella indicata.


### I

#### Imballo {#packing}
I tipi di imballo vengono codificate nella relativa tabella **Imballi** che si trova nel percorso *Configurazione > Tabelle > Logistica*. Ulteriormente questo dato può essere inserito in *Anagrafiche contatti> tab Dati contabili > tab Consegna* per indicare l'imballo di default per gli articoli relativi al soggetto.  
Se questo dato è *presente* nell'[Anagrafica](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), verrà *proposto* di default in tutti i *documenti* relativi a quel soggetto.

#### Importo riga
Campo che troviamo nei documenti di vendita e acquisto, in cui viene riportato l'importo 'semplice' della riga articolo (quantità x prezzo) che non tiene conto dell'IVA e di eventuali sconti.

#### Imponibile

#### IVA
E' un dato obbligatorio e lo troviamo in tutti i documenti di vendita/acquisto.


### L

#### Lingua {#language}
Le Lingue vengono codificate nella relativa tabella **Lingue** che si trova nel percorso *Configurazione > Tabelle > Impostazioni Generali*.
Questo dato si può inserire in *Anagrafiche contatti > tab Generale* e corrisponde alla lingua di emissione dei documenti.  
Se questo dato è *presente* nell'anagrafica, verrà *proposto* di default in tutti i *documenti* relativi a quel soggetto.

#### Listino fornitore {#purchase-price-list}
Nei documenti di acquisti Viene proposta l'informazione inserita in *Anagrafica fornitore > tab Listini*, ma solo se esiste un listino di default (tabella di riferimento 'Listini fornitori');

#### Listino cliente {#sales-price-list}
Nei documenti di vendita viene proposta l'informazione inserita in *Anagrafica cliente > tab Listini*, ma solo se esiste un listino di default (tabella di riferimento 'Listini di vendita');

#### Lotti
In questo campo viene riportato il codice lotto dell'articolo, se l'articolo viene gestito tramite la Gestione lotti che viene impostata nell'anagrafica articolo nel tab 'Lotti e S/N'.


### M

#### Magazzino
In questo campo, presente in diverse form, verrà riportato il codice magazzino che si è scelto di impostare per quello specifico articolo insieme alla causale di magazzino in base al tipo di movimentazione che si andrà a eseguire;

### N

#### Natura articolo {#item-nature}
Viene utilizzato in alcune procedure. Nella combo troviamo la lista delle varie nature che possiamo attribuire all'articolo:
 - *Attrezzatura/utensile/macchina* > gruppo di articoli per la parte di produzione;
 - *Famiglia articoli* > definisce l'articolo per le previsioni di vendita;
 - *Imballo* > serve per la gestione degli imballi a rendere, per la contabilità (per capire quanti imballi ho in casa e quanti ne ho dati al cliente o al fornitore e quindi capire quanti me ne devono rendere);
 - *Servizi* > per la gestione degli interventi post vendita;
 - *Prestito d'uso/impianti/componente impianto* > servono per la gestione delle manutenzioni.

#### Nazione {#country}
Le Nazioni vengono codificate nella relativa tabella **Nazioni** che si trova nel percorso *Configurazione > Tabelle >Impostazioni Generali*. Questo dato si può inserire in *Anagrafiche contatti > tab Generale* e indica il paese di provenienza del soggetto.  
Se questo dato è *presente* nell'anagrafica, verrà *proposto* di default in tutti i *documenti* relativi a quel soggetto.

#### Nomenclatura
In questo campo viene selezionata attraverso l'help, la nomenclatura (ovvero la voce doganale dell'articolo) utile ai fini l'intrastat per la dichiarazione delle merci all'importazione o all'esportazione nonché ai fini statici per il commercio degli articoli all'interno dell'UE.

#### Nostro/Vostro riferimento

#### Note iniziali {#initial-note}
Permette di selezionare le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo l'utente deve effettuare doppio click sul campo **Note iniziale** per aprire *Help note codificate* e selezionare i dati, oppure con il tasto destro del mouse può aprire una finestra per poter specificare un testo molto lungo di nota. Se il campo contiene un valore, viene cambiato il colore dello sfondo del campo.

**Numero riga**: questo campo si compilerà automaticamente all'inserimento dei dati nella riga, in modo progressivo;

### O

#### Operatore {#user}

import User from './../../import/fields/user.md'

<User />

### P

#### Pagamento
In questo campo viene riportato il termine di pagamento associato al soggetto nell'anagrafica clienti/fornitori/agents nel tab 'Dati contabili' nella sezione Amministrazione

#### Porto {#carriage}
I tipi di porto vengono codificati nella relativa tabella **Porto** che si trova nel percorso *Configurazione > Tabelle > Impostazioni Generali*. Ulteriormente questo dato può essere inserito in *Anagrafiche contatti> tab Dati contabili > tab Consegna* per indicare il porto di default per gli articoli relativi al soggetto.  
Se questo dato è *presente* nell'[Anagrafica](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), verrà *proposto* di default in tutti i *documenti* relativi a quel soggetto.

#### Prezzo Ivato
In questo campo visualizza il prezzo comprensivo dell'aliquota Iva.


### Q


### R

#### Riepiloghi IVA
Griglia nella quale viene proposto il riepilogo IVA del documento, per ogni codice IVA;

#### Rivalsa IVA
Se settata, l'IVA dell'articolo-omaggio viene considerata per il totale documento.


### S


#### Scadenza
Data di scadenza calcolata a partire dalle condizioni di pagamento o imposta manualmente. Questo campo è presente all'interno delle partite. Vedere anche Data scadenza.

#### Scaricata
Questo flag, è presente nei documenti di vendita/acquisto quali fatture e DDT, e rappresenta uno dei tipi di stato documento. Se attivo, questo flag sta ad indicare che il materiale presente nel documento è stato scaricato a magazzino.

#### Serial Number (S/N)
Campo in cui viene riportato il codice di serie specifico di quell'articolo, nel caso in cui nell'anagrafica di quell'articolo nel Lotti e S/N si sia optato per la gestione dell'articolo a serial number.

#### Spedizione {#shipment}
I tipi di spedizione vengono codificati nella relativa tabella **Spedizioni** che si trova nel percorso *Configurazione > Tabelle >Impostazioni Generali*. Ulteriormente questo dato può essere inserito in *Anagrafiche contatti> tab Dati contabili > tab Consegna* per indicare la spedizione di default per gli articoli relativi al soggetto.  
Se questo dato è *presente* nell'[Anagrafica](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), verrà *proposto* di default in tutti i *documenti* relativi a quel soggetto.

#### Stato documento
Il dato si riferisce alla tabella degli stati documento, ed è presente nei documenti di vendita e acquisto. Lo stato del documento è definito da una serie dil flag che vengono settati all'interno del documento da parte dell'utente oppure automaticamente quando vengono lanciate determinate procedure (es. contabilizzazione, evasione da ordine etc.); i tipi di stato possono essere diversi in base al documento in cui ci si trova (alcuni es sono Stampata, autorizzata, archiviata, contabilizzata, confermata etc.). Questo campo può essere utilizzato dalle procedure di replicazione del gestionale installate per la gestione di una sede con dei punti vendita.

#### Stato evasione
Questo campo presente, negli ordini di acquisto/vendita e conto lavoro, mostra lo stato di evasione del documento. L'ordine risulterà evaso quando verranno creati i documenti DDT o fatture, e il suo stato evasione cambia automaticamente da non evaso a parzialmente evaso (se non sono state evase tutte le righe ordine) o evaso. L'utente ha anche la possibilità di forzare l'evasione di un ordine non totalmente evaso cambiando manualmente lo stato dell'ordine in 'Forzatamente evaso'. 

#### Stampata/o
Il flag si attiva quando viene lanciata la stampa del documento.  


### T

#### Testata
Con questo termine si intende in alternativa:
 1. Nelle form di ricerca, la parte alta della form (subito sotto la **Ribbon bar** ) dove è collocata la zona del filtro di ricerca (appositamente delimitata anche graficamente) con i relativi campi utilizzabili per raffinare la ricerca. Più informazioni saranno inserite e più la ricerca sarà mirata poiché i campi interagiscono tra loro.
 2. Nelle form di inserimento (ad esempio di documenti oppure di registrazioni contabili ecc.) la parte alta del documento  (in alto nella form subito sotto la **Ribbon bar**) che accoglie i dati generali e comuni del documento (o della registrazione) quali ad esempio numero, data, sottoconto del cliente o fornitore al quale il documento è intestato ecc. Questa zona è ben definita (anche graficamente) rispetto alla zone centrale del documento (e quindi della form) che accoglie i dati di dettaglio quali ad esempio gli articoli inseriti nel documento oppure re righe di dettaglio di una registrazione ecc. Per alcuni tipi di documento la zona di testata può occupare l'intero spazio della form e dunque viene identificata, rispetto al dettaglio, da una apposita **Tab** 


#### Tracking number
Questo campo lo possiamo trovare nella fattura di vendita, nel tab trasporto e serve per indicare il tracking number relativo alla spedizione per favorire la tracciabilità della merce durante la spedizione.

#### Tipo riga
Il tipo riga identifica la tipologia dell'articolo. Possono essere di vari tipi:

1-*Articolo codificato*: articoli codificati in anagrafica che caricano/scaricano il magazzino e possono essere contabilizzati in contabilità analitica;  
2-*Articolo non codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica, ma NON movimentano il magazzino;  
4-*Articolo note*: sono note descrittive riportate nella stampa del documento; non incide sulla contabilità e sul magazzino;  
5-*Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento.


### U


#### Unità di misura {#unit-of-measurement}
Attraverso questa combo si seleziona l'unità di misura gestionale relativa all'articolo.

#### Utente predefinito
Si trova nella form di connessione all'applicazione.

#### Utente
vedi [Operatore](#user)


### V


#### V.I.E.S.
Il VIES (VAT Information Exchange System) è un sistema di scambio di informazioni tra i Paesi dell'UE per una corretta fiscalità. Nello specifico è un sistema informatizzato che consente alle aziende di ottenere una verifica rapida della Partita Iva dei suoi clienti. Ovviamente si potranno verificare solamente le partite Iva dei clienti che si sono iscritti a questo sistema (sarà probabile che i piccoli artigiani e commercianti che non hanno scambi intracomunitari di merce non abbiamo registrato la loro società all'interno di questo sistema). Dall'anagrafica articoli quindi, inserendo la P.Iva e cliccando sul pulsante Proponi dati si potrà andare ad interrogare questo sistema che verificherà la validità e correttezza della partita iva del soggetto in uso. eventuali ricerche prive di risultato potranno dipendere a volte da un momentaneo disservizio del sistema che si sta interrogando.


### Z

#### Zona {#zone}
Le zone vengono codificate nella relativa tabella **Zone** che si trova nel percorso *Configurazione > Tabelle > Impostazioni Generali*. Ulteriormente questo dato può essere inserito in *Anagrafiche contatti> tab Dati contabili > tab Consegna* per indicare la zona di provenienza del soggetto.  
Se questo dato è *presente* nell'Anagrafica, verrà *proposto* di default in tutti i *documenti* relativi a quel soggetto.

#### Zone consegna {#delivery-zone}
Le zone di consegna vengono codificate nella relativa tabella **Zone consegna** che si trova nel percorso *Configurazione > Tabelle >Impostazioni Generali*. Ulteriormente questo dato può essere inserito in *Anagrafiche contatti> tab Dati contabili > tab Consegna* per indicare indicare la zona di consegna della merce.  
Se questo dato è *presente* nell'Anagrafica, verrà *proposto* di default in tutti i *documenti* relativi a quel soggetto.