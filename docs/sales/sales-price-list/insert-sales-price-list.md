---
title: Nuovo Listino
sidebar_position: 3
---

Per creare un Nuovo Listino di vendita è necessario cliccare *Nuovo* dalla maschera di Ricerca listini.
La form si compone di tre parti: Sezione superiore, Articoli e Dettagli. 

## Sezione superiore

I campi di testata obbligatori per l'inserimento di un nuovo listino sono:
- **Listino**: un listino può essere *Generico* (potenzialmente valido per tutti i clienti) oppure *Personalizzato* (valido per un cliente specifico); è necessario selezionare l'opzione appropriata per determinare il listino da creare.     
- **Tipo listino**: questo campo è attivo solo se il listino è generico e contiene il [Tipo listino](/docs/configurations/tables/sales/sales-price-lists).      
- **Cliente**: questo campo è attivo solo se il listino è personalizzato e contiene il cliente per il quale viene creato il listino. In questa modalità si attiva anche il campo Contatto, che permette di scegliere una delle persone di riferimento inserite in anagrafica cliente; sebbene questo campo non influenzi i documenti, è utile per le restrizioni di visualizzazione, permettendo di limitare l’accesso ai soli documenti personali.    

:::important[Importante]
Per rendere un listino valido per un cliente, è necessario inserirlo in anagrafica cliente. Consultare la [documentazione](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicata. 
:::

- **Divisa**: contiene la divisa da utilizzare; viene proposta di default la divisa della società.      
- **Data inizio validità**: contiene la data a partire dalla quale il listino sarà considerato valido; viene proposta la data odierna.    

I campi di testata non obbligatori sono:       
- **Prezzo ivato**: se attivo, questo flag indica che il listino sarà creato con prezzo ivato, quindi nei suoi articoli non sarà presente la colonna Prezzo, ma solo la colonna Prezzo ivato che riporterà direttamente la somma tra Prezzo e Iva; questo flag viene proposto se presente nella tabella [Tipo listino](/docs/configurations/tables/sales/sales-price-lists) ma è modificabile. Per una gestione più flessibile, nei [Parametri Listini di Vendita](/docs/configurations/parameters/sales/price-list-parameters), è possibile forzare la visualizzazione sia del prezzo che del prezzo ivato tramite il flag visualizza prezzo e prezzo ivato, indipendentemente dall’impostazione del tipo listino.      
- **Data fine validità**: se il listino non deve più essere valido dopo una certa data, la data va inserita in questo campo.       
- **Listino minimo**: questo flag informativo indica che il listino è a prezzi minimi di tentata vendita.       
- **Configurazione ricerche**: questa impostazione ha due possibili funzioni: mostrare alcuni Extra Data a livello di listino, oppure pilotare alcune informazioni (per esempio il tipo pagamento) per diverse tipologie di operazioni.      
Infine è presente un **Filtro articoli** che permette di ricercare velocemente gli articoli nel listino; viene usato in caso di listini molto corposi. 

## Articoli

In questa sezione verranno indicati gli articoli ed eventuali sconti associati a questo listino. Le colonne presenti nella griglia sono:    
- **Classe/Articolo/Descrizione**: contiene il codice dell'articolo da includere nel listino; per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.            
- **Codice/Descrizione variante**: nelle colonne dedicate alla variante possiamo associare le varianti dell’articolo e ad ognuna il relativo prezzo di vendita, da proporre nei documenti; solo gestendo i listini è possibile gestire la proposta del prezzo per variante.      
- **Unità di misura**: può essere quella gestionale dell'articolo o una delle sue unità di misura alternative; in sede di creazione dei documenti, in base all’unità di misura specificata, verrà proposto un listino valido per quella unità di misura.      
- **Marca**: se specificata.      
- **Quantità**: proposta uguale a 1, è la quantità di riferimento del prezzo; se diversa da 1, quando deve essere calcolato il prezzo viene diviso per la quantità del listino.
- **Prezzo** riferito alla divisa del listino, questa colonna è visibile se il listino non è a Prezzo ivato.     
- **IVA**: questo campo viene recuperato dall'anagraica cliente; qualora sul cliente non fosse impostato sarà necessario popolare questo campo con il codice IVA.  
- **Prezzo Ivato**: il sistema calcola questo prezzo come somma tra il prezzo e l'aliquota del codice IVA inserito.     
- **Fascia di prezzo**: questa impostazione è utilizzata per selezionare i listini cliente in base alle fasce di prezzo impostabili negli extra data relativi agli articoli; è possibile, a parità di articolo, avere delle discriminanti per le quali il prezzo di listino risulti diverso: basti pensare ai capi d'abbigliamento per i quali al cambiare della taglia varia anche il prezzo di vendita. 

## Dettagli

In questa sezione, per ogni articolo del listino, è possibile inserire diverse tipologie di sconto.
Nel **Tipo scaglione** è possibile inserire la tipologia di sconto di default da applicare al listino. Al tipo scaglione inserito qui ha precedenza quello eventualmente inserito in anagrafica.        
Nelle tab sottostanti è possibile inserire i vari sconti per il listino; infatti, è possibile che uno stesso articolo di listino abbia diversi sconti associati, ma sarà possibile scegliere lo scaglione da utilizzare direttamente nel documento.       

Di seguito vengono spiegati i tipi sconto che si possono inserire.      

### Sconti

Questi sconti sono fissi e vengono riportati sui documenti indipendentemente dalla quantità o da altre variabili esplicitate nell'ordine: il tipico esempio sono gli sconti commerciali.       
I campi presenti in questa griglia sono:
- **Priorità**: questo valore viene preso dalle impostazioni inserite nella tabella [Tipi sconto](/docs/configurations/tables/general-settings/discount-types) e indica la priorità per il reperimento dello sconto.       
- **Tipo sconto/Descrizione**: in questo campo serve selezionare il tipo sconto tra quelli codificati.        
- **Valore**: impostare la percentuale di sconto da applicare.       
- **Cascata/Imponibile**: anche questo dato viene ripreso dalle impostazioni inserite nella tabella [Tipi sconto](/docs/configurations/tables/general-settings/discount-types); se lo sconto è a Cascata, viene calcolato sull'imponibile decurtato degli sconti già calcolati, se invece è a Imponibile viene calcolato sull'imponibile.         

### Sconti a quantità

Questa tipologia di sconto permette di avere diverse percentuali di sconto a seconda della quantità venduta. Le colonne presenti sono:      
- **Tipo**: in questo campo serve selezionare il tipo sconto tra quelli codificati.         
- **Quantità**: impostare la quantità per la quale verrà attivato lo sconto.          
- **Percentuale**: inserire la percentuale di sconto al raggiungimento della quantità indicata.      

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

Nell'esempio riportato se verranno vendute 2 unità,avremo uno sconto del 7%, 3 unità sconto del 10% e così via.

### Sconti a Valore

In questa tipologia lo sconto scatta quando si raggiunge un determinato importo per riga documento. Le colonne presenti sono:     
- **Tipo**: in questo campo serve selezionare il tipo sconto tra quelli codificati.         
- **Valore**: impostare un valore superato il quale scatta lo sconto.
- **Percentuale**: inserire la percentuale di sconto da applicare al raggiungimento del valore.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

Nell'esempio riportato se per riga il valore è inferiore a 100 euro, non avremo sconti. Con un valore compreso tra 100 e 200 avremo il 2% di sconto. Se il valore è compreso tra 200 e 300 verrà applicato il 4%. Se il valore supera i 300 euro verrà applicato uno sconto del 6%.

### Prezzo per quantità

In questa caso, al raggiungimento di una certa quantità, il prezzo unitario cambia. Le colonne presenti sono:      
- **Quantità**: impostare un valore superato il quale scatta il prezzo "personalizzato".      
- **Prezzo unitario**: inserire il prezzo unitario per la quantità ordinata.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

Nell'esempio riportato se per riga la quantità è i inferiore a 100 euro,il prezzo sarà quello del listino. Con una quantità compresa tra 100 e 120 avremo un prezzo unitario di 10. Con una quantità compresa tra 100 e 120 avremo un prezzo unitario di 9 e così via.

### Note

A livello informativo è possibile inserire delle note legate ad un particolare tipo di scontistica.

### Destinazioni

Con questo parametro è possibile decidere se per una destinazione del cliente, il prezzo unitario debba essere diverso. Inoltre è possibile gestire questo particolare tipo di promo per una data specifica. Le colonne presenti sono:    
- **Destinazione**: deve essere un indirizzo dell'anagrafica contatti legato al cliente di fatturazione.   
- **Data DA/A**: inserire un range di date per le quali proporre un prezzo diverso dal listino solo per la destinazione indicata.   
- **Prezzo**: inserire il prezzo per la destinazione.

### Extra data

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### Documenti allegati

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />