---
title: Ricevimento merci
sidebar_position: 1
---

Questa procedura è utilizzata in fase di ricevimento della merce, per l’identificazione articoli, la creazione e il carico del DDT di acquisto.

La form si apre sul filtro degli ordini fornitori, dove è possibile visualizzare tutti gli ordini in stato *Non evaso* e *Parzialmente evaso*. 
I risultati possono essere filtrati per *Numero*, *Tipo ordine*, *Anno*, *Articolo* e *Fornitore*.
Dopo aver selezionato uno o più ordini fornitore, è possibile visualizzare gli articoli non evasi e parzialmente evasi utilizzando il pulsante *Visualizza*, mentre tramite il pulsante *Creazione DDT acquisto* è possibile iniziare ad inserire gli articoli che saranno presenti nel DDT.

La form principale si compone dei seguenti tab:

- **Creazione DDT acquisto**
Dopo aver selezionato l'ordine fornitore, tramite il pulsante *Creazione DDT acquisto* è possibile aprire la form sul tab *Creazione DDT acquisto*, dove il focus sarà posizionato direttamente sul campo "DDT" in modo da inserire per prima cosa il numero del documento.
Inoltre, verranno visualizzate le informazioni relative al primo articolo presente sull'ordine, oltre alle informazioni di testata dell'ordine stesso.

> **Magazzino**: indica il magazzino in cui verranno effettuate le movimentazioni;          
> **Causale magazzino**: indica la causale di magazzino con cui verranno effettuate le movimentazioni;     
> **Tipo DDT**: indica il tipo di DDT con cui verrà creata il documento di trasporto;                
> **Data**: indica la data del DDT che si sta creando; di default viene proposta quella odierna;     
> **Ordine**: indica il numero di ordine fornitore;           
> **Articolo**: indica classe, codice e descrizione dell'articolo che si sta per confermare;           
> **N. Riga**: indica il numero di riga dell'articolo nell'ordine fornitore;          
> **Barcode**: permette di leggere i barcode tramite apposito lettore per effettuare diverse operazioni;      
> **Lotto Fornitore**: permette di inserire il numero di lotto del fornitore;     
> **LT**: permette di generare il numero di lotto interno;           
> **Data scadenza**: indica la data scadenza del lotto;          
> **Quantità ordinata**: indica la quantità ordinata;    
> **Quantità residua**: indica la quantità residua;       
> **Quantità**: indica la quantità che si vuole caricare a magazzino;    
> **Ubicazione proposta**: indica l'ubicazione proposta;              
> **Ubicazione**: permette di inserire un'ubicazione variando quella proposta.

Tramite il campo **Input code** (quindi utilizzando un lettore barcode) è possibile inserire i dati relativi al lotto, all'ubicazione, alla quantità rilevata e all’articolo nel caso in cui si volesse caricarne un altro rispetto a quello proposto, ma comunque presente negli ordini precedentemente selezionati.       
Dopo aver inserito i dati relativi all'articolo corrente, è possibile confermarli tramite il pulsante **Conferma**.     
Una volta confermate tutte le righe dell’ordine si viene posizionati automaticamente sul tab **Dettaglio DDT**, dove utilizzando il pulsante **Chiudi** è possibile salvare il DDT ed effettuare il relativo movimento di magazzino.

**Pulsanti specifici**
> **Conferma**: permette di confermare i dati inseriti per l'articolo selezionato;           
> **Conf+Stp**: permette di confermare i dati inseriti per l'articolo ed inoltre, apre un pop up che da la possibilità di stampare le etichette;       
> **Stampa**: permette di stampare le etichette;       
> **Chiudi**: permette di salvare il DDT creato e creare i relativi movimenti di magazzino;        
> **Prossimo oggetto**: permette di passare al prossimo articolo presente nell'ordine fornitore;       
> **Precedente oggetto**: permette di passare all'articolo precedente presente nell'ordine fornitore.

- **Dettagli DDT**       
In questa form vengono riportate tutte le informazioni relative alle righe create.

**Pulsanti specifici**
> **Cancella articoli**: permttete di cancellare la riga selezionata dal DDT.   

- **Dettagli dell'ordine**: 
In questa form vengono riportate tutte le informazioni relative all'ordine fornitore considerato.

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scs | Fluentis.FluentisErp.Mvvm.Scs.ReadWrite.Views | ReceivingGoodsScsEditDocument |

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
