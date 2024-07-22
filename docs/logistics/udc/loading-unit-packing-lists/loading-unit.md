---
title: Liste di prelievo/Packing list (versione WPF e WMS)
sidebar_position: 1
---

### Liste di prelievo/Packing list (versione WPF)

Con le **liste di prelievo** è possibile creare un picking di unità di carico, al contrario del picking normale che è composto da articoli singoli.         
Dalla maschera di **Ricerca** è possibile ricercare le liste precedentemente inserite.     
Per creare una nuova Lista cliccare **Nuovo**.   

I dati obbligatori da inserire sono:         
**Tipo picking**: inserire la tipologia di [picking](/docs/logistics/picking/picking-management) da utilizzare;       
**Utente**: inserire il dipendente codificato che crea il documento;      
**Utente per conf.**: inserire il dipendente che ha il diritto di confermare la lista.      

Dopo aver inserito i dati necessari è possibile salvare la Lista di prelievo.       
Con il pulsante della ribbon bar **help UDC** è possibile aprire la maschera in cui selezionare le UDC da prelevare.             
La ricerca può essere fatta sulle unità di carico collegate a ordini cliente (abilitando il flag **Ricerca su ordini clienti**), quindi, per ciascun ordine cliente possiamo visualizzare gli articoli che lo compongono e se questi sono stati precedentemente inseriti all’interno di un’unità di carico, nella tabella sottostante possiamo vedere tutti i dettagli relativi appunto all’UDC che li contiene. Una volta selezionate le UDC di interesse, queste vengono aggiunte alla lista.     
In alternativa, disattivando il flag **Ricerca su ordini clienti**, le unità di carico possono essere anche ricercate tra tutte quelle create, anche se non collegate ad un ordine cliente, e allo stesso modo possono essere selezionate ed aggiunte alla nostra lista di prelievo.         
Nella griglia di *Dettaglio* compariranno solamente le UDC in stato caricato, dopo di che è possibile salvare la *Lista* e chiuderla.       
Tornando nella maschera di *Ricerca Liste di prelievo*, la Lista sarà presente con stato **Sospeso**. E' necessario scaricare le UDC della Lista (vedi *Pulsanti specifici* sotto) per passare allo stato **Controllato**. Solo con quest'ultimo stato si abiliteranno i pulsanti della ribbon bar **Fattura** e **DDT**.    

*Pulsanti specifici:*
> **Fatture**: crea la fattura dalla *Lista* selezionata; nella maschera uscente è richiesto il [Tipo Fattura](/docs/configurations/tables/sales/invoices-type) da creare e l'eventuale raggruppamento da adottare; la fattura viene creata già *Scaricata* (per evitare il rischio del doppio scarico).      
> **DDT**: crea il DDT dalla *Lista* selezionata; nella maschera uscente è richiesto il [Tipo DDT](/docs/configurations/tables/sales/delivery-notes-type) da creare e l'eventuale raggruppamento da adottare; il DDT viene creato già *Scaricato* (per evitare il rischio del doppio scarico).   
> **Gestione UDC**: selezionando una *Lista di prelievo* e cliccando questo pulsante viene aperta la maschera **Gestione UDC** in cui vengono pre filtrate le UDC della lista. In questa maschera le UDC possono essere gestite a magazzino con i vari pulsanti della ribbon bar.       
         
Per tutte le informazioni su come utilizzare questa form da WMS consultare le [Liste di prelievo/Packing list](/docs/logistics/wms/udc/loading-unit-picking-list)

### Liste di prelievo/Packing list (versione WMS)

Questa procedura è utilizzata per la creazione di liste di prelievo con unità di carico.     

Con le **Liste di prelievo UDC / Packing list** è possibile creare un *picking* di unità di carico, al contrario della normale procedura di picking che crea una lista di prelievo formata da singoli articoli.    
Le liste di prelievo UDC vengono utilizzate nel caso in cui si voglia spedire la merce ad un cliente, mentre nel caso di movimentazioni di UDC all’interno dei propri magazzini è opportuno utilizzare le [Liste di Trasferimento UDC](/docs/logistics/wms/udc/loading-unit-transfer-list).    

Nella form di filtro è possibile ricercare le liste di interesse filtrando: per data inserimento, data spedizione e anche per lo stato della lista di prelievo; una volta selezionata, è possibile aprire la lista con il pulsante **Apri**, all’interno della quale, l’utente ha la possibilità di modificare le unità di carico contenute nel tab *Dettaglio UDC*.      
In questo tab è possibile: selezionare un’unità di carico esistente ed eliminarla dalla lista con il pulsante **Cancella UDC**; oppure, aggiungerne una nuova semplicemente leggendo il relativo barcode.      
Una volta ultimate le modifiche è necessario salvare la lista tramite il pulsante **Salva**.       

Dal filtro è possibile anche creare una nuova lista con il pulsante **Nuovo**.       
In automatico vengono proposte: la data odierna ed il magazzino indicato nella tabella Parametri magazzino Carico/Scarico per utente; inoltre, con l’inserimento del tipo picking viene proposto anche il numero della lista.
A questo punto, l’utente può inserire, nel tab *Dettaglio UDC*, le unità di carico da aggiungere alla lista tramite la lettura dei relativi barcode. Ultimato l’inserimento sarà sufficiente salvare la lista con l’apposito pulsante.

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

Per questo parametro la casuale di magazzino può essere lasciata vuota.

:::note Nota
Se nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Conferma trasferimento UDC (versione WMS)

Questa procedura è utilizzata per ricercare e confermare una [Lista di Trasferimento UDC](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) esistente per effettuare il movimento di magazzino.


La form **Conferma trasferimento UDC** viene utilizzata per confermare una [Lista di Trasferimento UDC](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) esistente per effettuare il movimento di magazzino.

Nel filtro è possibile ricercare la lista di interesse per: data, numero e magazzino, inoltre, anche possibile confermarla direttamente con il relativo pulsante **Conferma** senza doverla aprire.       
Altrimenti, è possibile entrare nella lista tramite il pulsante **Apri** e visualizzare le unità di carico non ancora scaricate e quelle già scaricate all’interno dei relativi tab: unità di carico non trasferite e trasferite, per poi poterla confermarla e creare il movimento di magazzino.

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

I parametri sono inseriti due volte poiché la form utilizza: sia una causale di carico con come magazzino quello di destinazione della lista, sia una di scarico con come magazzino quello in cui sono stoccate le unità di carico da trasferire.            
Entrambe le causali utilizzate devono avere il flag *Distinta base* disattivato ed essere senza contropartita.    

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Conferma prelievo UDC (versione WMS)

La form **Conferma prelievo UDC** viene utilizzata per ricercare e confermare una [Lista di prelievo UDC / Packing list](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) esistente per effettuare il movimento di magazzino di scarico.

Nel filtro è possibile ricercare la lista di interesse per: data, numero e magazzino, inoltre, anche possibile confermarla direttamente con il relativo pulsante **Conferma** senza doverla aprire.       
Altrimenti, è possibile entrare nella lista tramite il pulsante **Apri** e visualizzare le unità di carico non ancora scaricate e quelle già scaricate all’interno dei relativi tab: unità di carico non scaricate e scaricate, per poi poterla confermarla e creare il movimento di magazzino.
   
**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

Questo parametro deve essere creato con il magazzino della *lista di prelievo* e con casuale di magazzino con tipo di scarico e senza contropartita.

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).


