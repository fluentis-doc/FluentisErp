---
title: Nuova offerta cliente
sidebar_position: 3
---

La form **Nuova Offerta** si apre tramite il percorso **Vendite > Nuova Offerta** oppure tramite il pulsante **Nuovo** che si trova nella form di [Ricerca Offerte](/docs/sales/offers/search-offers).

## *Come creare un'offerta cliente*

<details>
 
<summary>Clicca per i passaggi fondamentali-DA CONTROLLARE</summary>
 
1. **Inserisci i dati obbligatori**: *Tipo Ordine* e *Cliente*. *Anno*, *Numero* e *Data Inserimento* saranno proposti in automatico.  
 
2. **Inserisci o modifica i dati facoltativi** della testata: come date di consegna, eventuali *sconti*, la *destinazione*, ecc.  
 
3. **Inserisci gli Articoli**: mediante doppio click nel campo *Codice articolo* si apre l’help articoli che permette di cercare e selezionare un articolo esistente. Tutti gli altri dati della riga, come *unità di misura*, *quantità*, *prezzo*, saranno proposti in automatico, ma possono essere modificati.
In alternativa è possibile selezionare come *Tipo riga* un *Articolo non codificato* e inserire manualmente i dati successivi.
 
4. **Inserisci eventuali sconti o altre informazioni aggiuntive** nei tab *Sconti/listini* e *Dati articolo*
 
5. **Controlla la sezione dei Riepiloghi** ed inserisci eventuali spese o sconti finali.  
 
6. Una volta controllato e confermato l’ordine, **inserisci una *Data conferma* e attiva il flag *Stampato* in testata** in modo da rendere l’ordine disponibile per le procedure di evasione.
 
</details>

## **1. Dati obbligatori**     

- **Tipo offerta di vendita**: contiene la tipologia di offerta, tra quelle inserite nei [Tipi Offerte](/docs/configurations/tables/sales/sales-offer-type).

- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione Offerte](/docs/configurations/tables/fluentis-numerations) e al tipo di documento che contiene la numerazione.     

- **Cliente**: l'inserimento del cliente è possibile usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure inserendo [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) i caratteri.

- **Contatto CRM**: se l'Offerta è per una lead non ancora cliente, sarà possibile inserire un Contatto CRM invece di un cliente.    

- **Anno**: viene proposto l'anno corrente.  

- **Data**: viene proposta la data odierna.     

- **Versione**: in questo campo viene riportato il numero di Versione dell'offerta; se nuova, la Versione proposta sarà la prima.    

#### Dati non obbligatori:

- **Opportunità contatto**: se il Tipo offerta creato ha una Tipo Opportunità associato nella tabella dei [Tipi Offerta](/docs/configurations/tables/sales/sales-offer-type), al salvataggio dell'Offerta verrà automaticamente creata una Opportunità per il cliente/contatto, che sarà riportata in questo campo e diventerà modificabile dall'utente. Se in questo campo viene inserita manualmente un'Opportunità preesistente, essa viene aggiornata.           

## **2. Testata**

Dopo aver inserito i dati nella sezione superiore, è possibile procedere con i dati di testata:      

- **Divisa**: viene proposta la Divisa del cliente.

- **Spedizione**: viene proposta la modalità di [Spedizione](/docs/configurations/tables/general-settings/shipments) dall'anagrafica cliente.      

- **Listino di vendita**: viene proposto il listino di default presente in anagrafica cliente, con il relativo Tipo scaglione previsto per il cliente.     

- **Annotazioni clienti**: in questa sezione è possibile inserire i Riferimenti del cliente, eventuali Note iniziali/finali; il campo *Annotazioni cliente* riporta le Note inserite nei [Dati anagrafici del cliente](/docs/erp-home/registers/contacts/create-new-contact/general).     

- **Data conferma offerta**: indica la data nella quale l'offerta è stata confermata e quindi potrà essere convertita in ordine.     

- **Data prevista consegna**: è la data nella quale è previsto che la merce verrà consegnata; questo dato viene riportato nell'ordine creato da offerta.     

- **Data chiusura**: indica la data in cui l'offerta è stata chiusa.

- **Data annullamento**: la data nella quale l'Offerta verrà considerata nulla se non è diventata Ordine.

- **Validità Offerta**: data limite di validità dell'offerta; è un campo informativo.

#### Pulsanti specifici    

> **Nuova versione**: genera una nuova versione dell'offerta, incrementando il campo *Versione*. Le versioni successive di un’Offerta ereditano i Documenti allegati.       

> **Sostituisci data prevista consegna nelle righe**: sostituisce in tutte le righe articolo la Data prevista consegna inserita in testata.       

> **Conversione**:  permette di trasformare un'offerta di vendita in un ordine di vendita effettivo. Affinché il processo avvenga correttamente, è essenziale configurare il Tipo di ordine desiderato nella tabella dei [Tipi offerta](/docs/configurations/tables/sales/sales-offer-type). Inoltre, affinché l'offerta possa essere convertita con successo, è necessario che abbia una Data conferma in testata, altrimenti il sistema avviserà l'utente tramite un messaggio pop-up della necessità di confermare l'offerta prima di procedere. Una volta che tutti i dati richiesti sono stati inseriti, avviando la procedura uscirà un pop-up con i seguenti campi:     
> - se almeno alcune righe dell'offerta sono già state convertite in ordine, verrà chiesto all'utente se vuole creare un nuovo ordine utilizzando tutte le righe offerta oppure solo le righe non ancora referenziate.             
> - **Crea/Aggiorna progetto**: con questo flag indichiamo al sistema che oltre alla creazione dell'ordine deve procedere anche con la creazione o l'aggiornamento del progetto. Se il progetto deve essere creato, è necessario flaggare il comando *Crea Nuovo progetto vuoto*, *Crea Nuovo progetto da Offerta* oppure **Crea Nuovo progetto da Offerta e Template progetto**; in tutti i casi sarà necessario inserire il **[Tipo progetto](/docs/configurations/tables/project-management/project-type)** da creare nell'apposito campo, nell'ultimo caso verrà richiesto l'inserimento anche del  progetto **Template**. Se il progetto esiste già e deve essere aggiornato con i dati inseriti nell'offerta, invece, sarà necessario compilare il campo **Progetto**  con il progetto da aggiornare.     
> - **Riporta Materiali/Risorse da righe Offerta come righe Ordine**: con questi flag vengono inserite nell'ordine delle righe articolo con le risorse e i materiali dell'offerta, se gerarchica.              
Una volta confermato il pop-up, il sistema genererà quindi un nuovo Ordine cliente utilizzando i dati dell'offerta. Questo ordine può essere visualizzato e modificato nella sezione [Ricerca ordini clienti](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders). Inoltre, l'utente verrà informato tramite un messaggio pop-up riguardante il successo della conversione, il numero dell'offerta convertita e la versione, insieme a un messaggio contenente il numero dell'ordine cliente generato dalla conversione.        
Se nell'Offerta vengono modificati i dati proposti dall'anagrafica, essi vengono riportati nell'Ordine generato dalla conversione: Annotazioni cliente, Spedizione, Pagamenti, Sconti, Agenti, Destinazioni, Vettori.      

Le tab sottostanti vengono popolate con i campi presi dall'anagrafica cliente/contatto, modificabili:  
- **Pagamenti**
- **Sconti**
- **Destinatari**
- **Vettori**
- **Agenti**
- **Extra Data**
- **Informazioni email**

## **3.a Articoli offerta**

Nella griglia principale vengono inseriti gli articoli.    

Sono poi presenti le seguenti tab:       
- **Sconti**: questa tab riporta il Listino, se presente, da cui prendere il prezzo per l'articolo selezionato; riporta inoltre gli sconti, da listino o da anagrafica, e permette l'inserimento di nuovi sconti; infine, è presente il flag *Prezzo manuale*, che indica di mantenere i prezzi inseriti manualmente (questo flag viene riportato nella conversione dell'offerta in ordine).     
- **Agenti**: in questa tab vengono riportati gli Agenti del cliente con le relative provvigioni.      
- **Dati articolo**: sono presenti diversi dati riguardanti l'articolo, come eventuali Varianti, Magazzino, Unità di misura alternativa.    
- **Extra Data**
- **Documenti allegati**        

#### Pulsanti specifici

- **Crea nuovo prototipo**: questo bottone crea un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) per la riga articolo selezionata; il riferimento al preventivo generato viene riportato nel tab Dati articolo, campo Preventivo. Sarà possibile modificare il prototipo generato dal relativo modulo.
- **Associa prototipo**: con questo bottone è possibile associare l'offerta a un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) già esistente; viene aperto un help nel quale poter scegliere tra i prototipi disponibili per quell'articolo.
- **Apri prototipo**: questo bottone è abilitato se la riga articolo selezionata ha un Prototipo associato, e permette di aprirlo.     
- **Import da progetto**: questa funzione apre l'help *Articolo progetto*, nel quale è possibile selezionare gli articoli provenienti da un progetto che vogliamo inserire nell'offerta di vendita. Il pop up si apre direttamente con il filtro sul cliente intestatario dell'offerta, per permettere di visualizzarne i relativi progetti.    

## **3.b Articoli offerta gerarchica**

Nel caso in cui l'Offerta sia di *tipo gerarchico*, la tab degli Articoli sarà diversa.      

Nella griglia principale vengono inseriti gli articoli servendosi dei pulsanti della barra degli strumenti, che permettono di creare una struttura ad albero. Le caratteristiche degli articoli devono essere specificate nella tab *Attività*.    

Elenchiamo ora le tab particolari di un'offerta gerarchica.        

### 3.b.1 Attività 

In questa tab è necessario inserire le caratteristiche degli articoli della griglia articoli. I campi presenti sono:     
- **Numero riga/Livello**: contiene i numeri della riga e della WBS e viene impostato automaticamente, anche se è liberamente modificabile.          
- **Tipo Nodo**: indica se la riga è un **Root Node** (nodo principale), un **Activity Node** (relativo alle attività) o un **Work Package Node** (nodo finale di progetto, l’unico che può contenere dei codici articolo codificati).       
- **Tipo riga**: indica la tipologia di articolo tra Codificato, Non codificato, Spese o Note (quest’ultimo di default).            
- **Codice Articolo**: questa sezione riporta Classe, Codice e Descrizione dell’articolo codificato eventualmente selezionato.             
- **Codice Variante**: riporta un'eventuale [Variante](/docs/erp-home/registers/items/create-new-items/item-registry/variants) dell'articolo.       
- **Descrizione articolo**: questa sezione riporta la Descrizione dell'articolo, se di tipo Nota o Non codificato.    
- **Prototipo**: contiene l'eventuale [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) collegato.          
- **Quantità/UM/Prezzo**: contiene quantità, unità di misura e prezzo dell’articolo selezionato.        
- **Quantità alternativa**: contiene l'eventuale quantità alternativa, con accanto l'Unità di misura alternativa.     
- **UM Prezzo**: se inserito, questo flag indica di moltiplicare il prezzo unitario per la quantità alternativa, per ottenere l'importo.   
- **Listino**: è possibile associare un listino dal quale ottenere il prezzo dell'articolo, con accanto il **Tipo scaglione** da applicare per lo sconto.     
- **Prezzo manuale**: questo flag indica che è stato inserito un prezzo a mano, e che quindi il prezzo di listino non deve essere considerato.          
- **Aggiorna il prezzo dalle risorse**: questo flag, se settato, fa cambiare il campo *Prezzo* inserendo lo stesso importo della colonna *Ricavo* del tab *Risorse*; può essere usato per esempio quando l'importo di riga dipende interamente dal tempo impiegato dalle Risorse.        
- **Aggiorna il prezzo dai materiali**: questo flag, se settato, fa cambiare il campo *Prezzo* inserendo lo stesso importo della colonna *Ricavo* del tab *Materiali*; può essere usato per esempio quando l'importo di riga dipende interamente dai Materiali impiegati.       
- **Aggiorna il prezzo dal prototipo**: questo flag, se settato, fa cambiare il campo *Prezzo* inserendo lo stesso importo della colonna *Prezzo di vendita* del prototipo associato.     
- **Escludi risorse in ordine cliente**: questo flag fa in modo che le Risorse della riga articolo selezionata non vengano riportate nell'Ordine cliente creato con la Conversione dell'offerta.     
- **Escludi materiali in ordine cliente**: questo flag fa in modo che i Materiali della riga articolo selezionata non vengano riportate nell'Ordine cliente creato con la Conversione dell'offerta.     
- **Sconti**: in questa griglia vengono riportati gli sconti previsti per il cliente ed è possibile aggiungerne altri.     
- **Ricavi materiali/Ricavi risorse**: in questi campi vengono riportate le colonne *Ricavo** delle tab Risorse e Materiali; in questo modo è possibile capire direttamente da questa tab l'incidenza degli importi sul Prezzo totale.     
- **IVA**: indica l’IVA da applicare.             
- **Fatturato vendite**: indica il [Fatturato vendite](/docs/configurations/tables/sales/sales-turnover) dell’articolo.                
- **Data prevista consegna/Periodo di prevista consegna**: in questi campi è possibile inserire data/periodo previsti per la consegna dell'articolo selezionato.    

### 3.b.2 Risorse

In questa tab è possibile indicare i Ricavi ottenuti dalle varie Risorse. I campi presenti sono: 
- **Risorsa**: richiede l'inserimento di una [Risorsa](/docs/project-management/registers/employee/new-employee) precodificata che ha svolto l'attività.     
- **Unità di misura**: contiene l'unità di misura da utilizzare per la Risorsa; viene proposta quella di default inserita in anagrafica risorsa, ma si può cambiare.      
- **Quantità/Costo unitario/Costo totale**: per ottenere il Costo totale viene moltiplicata automaticamente la Quantità inserita con il Prezzo unitario.      
- **Percentuale/Valore**: in questi campi è possibile inserire un eventuale ricarico da applicare al Costo totale, in percentuale o valore.     
- **Ricavo**: in questa colonna verrà calcolato automaticamente il Costo totale ricaricato.        
- **Nota**: in questo campo è possibile inserire delle note libere.       
- **Equivalente a tempo pieno**: in questo campo è possibile inserire a quanto corrispondono le giornate/ore della risorsa rispetto all'orario aziendale (ad esempio se una risorsa fa un orario part-time di 4 ore, 1 giornata di questa risorsa deve corrispondere a 0.5 giornate aziendali).     

### 3.b.3 Materiali

In questa tab è possibile indicare i Ricavi ottenuti dall'impiego di Materiali.      
Nelle prime colonne della griglia è possibile inserire un Articolo codificato, Non codificato oppure Note, la sua eventuale Variante e l'iva. Le colonne successive sono:     
- **Quantità/Costo unitario/Costo totale**: per ottenere il Costo totale viene moltiplicata automaticamente la Quantità inserita con il Costo unitario.      
- **Tipo origine costo**: è possibile selezionare l'origine dalla quale popolare la colonna *Costo unitario* tra: Costo ultimo, Costo medio, Costo standard, Listino fornitore netto, Ordine fornitore o Fattura di acquisto; questo campo è parametrizzabile di default nei [Parametri offerta](/docs/configurations/parameters/sales/offer-parameters).    
- **Percentuale/Valore**: in questi campi è possibile inserire un eventuale ricarico da applicare al Costo totale, in percentuale o valore.     
- **Ricavo**: in questa colonna verrà calcolato automaticamente il Costo totale ricaricato.        
- **Descrizione fornitore**: viene proposto il Fornitore preferenziale inserito in anagrafica articolo, ma è possibile modificarlo; se nella colonna *Tipo origine costo* è stato selezionato il listino fornitore, il listino considerato sarà quello valido per questo fornitore; inoltre, questo fornitore sarà l'intestatario della **Richiesta di offerta** generata dalla riga materiale.           
- **Numero/Data richiesta**: contiene l'eventuale **Richiesta di offerta** creata per il Materiale; infatti, quando si è posizionati nel tab *Materiali*, nella barra degli strumenti compare il pulsante *Creazione Richiesta di offerta* che genererà la RDO per il materiale selezionato.    
- **Nota**: in questo campo è possibile inserire delle note libere.   

Le altre tab presenti sono analoghe a quelle dell'offerta non gerarchica.     

#### Pulsanti specifici

> **Crea nuovo prototipo**: questo bottone crea un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) per la riga articolo selezionata; il riferimento al preventivo generato viene riportato nel tab Dati articolo, campo Preventivo. Sarà possibile modificare il prototipo generato dal relativo modulo.      
> **Associa prototipo**: con questo bottone è possibile associare l'offerta a un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) già esistente; viene aperto un help nel quale poter scegliere tra i prototipi disponibili per quell'articolo.       
> **Apri prototipo**: questo bottone è abilitato se la riga articolo selezionata ha un Prototipo associato, e permette di aprirlo.       
> **Import da progetto**: questa funzione apre l'help Articolo progetto, nel quale è possibile selezionare gli articoli provenienti da un progetto che vogliamo inserire nell'offerta di vendita. Il pop up si apre direttamente con il filtro sul cliente intestatario dell'offerta, per permettere di visualizzarne i relativi progetti.     
> **Nuovo figlio**: permette di inserire una riga progetto figlia della riga selezionata.        
> **Nuovo fratello**: permette di inserire una riga progetto nello stesso livello della riga selezionata.       
> **Sostituisci il numero WBS**: permette di incorporare al Numero WBS delle righe anche il Numero del progetto.       
> **Implodi**: consente di nascondere le righe dell'albero.       
> **Esplodi**: consente di visualizzare le righe dell'albero.

## **4. Riepiloghi Offerta**

In questa tab possono essere inseriti e sono validi per la totalità del documento:

### 4.1 Sconti finali articoli

import SummariesFinalDiscount from './../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount /> 

### 4.2 Spese/Sconti/maggiorazioni finali 

import SummariesExpenses from './../../import/sections/summaries-expenses.md'

<SummariesExpenses />