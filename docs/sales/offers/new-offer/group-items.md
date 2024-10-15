---
title: Articoli Offerta Gerarchica
sidebar_position: 4
---

Nel caso in cui l'Offerta sia di tipo gerarchico, la tab degli Articoli sarà diversa.      

Nella griglia principale vengono inseriti gli articoli servendosi dei pulsanti della barra degli strumenti, che permettono di creare una struttura ad albero. Le caratteristiche degli articoli devono essere specificate nella tab *Attività*.    
Elenchiamo ora le tab particolari di un'offerta gerarchica.        

### Attività 

In questa tab è necessario inserire le caratteristiche degli articoli della griglia articoli. I campi presenti sono:     
- **Numero riga/Livello**: contiene i numeri della riga e della WBS e viene impostato automaticamente, anche se è liberamente modificabile.          
- **Tipo Nodo**: indica se la riga è un **Root Node**(nodo principale), un **Activity Node**(relativo alle attività) o un **Work Package Node**(nodo finale di progetto, l’unico che può contenere dei codici articolo codificati).       
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

### Risorse

In questa tab è possibile indicare i Ricavi ottenuti dalle varie Risorse. I campi presenti sono: 
- **Risorsa**: richiede l'inserimento di una [Risorsa](/docs/project-management/registers/employee/new-employee) precodificata che ha svolto l'attività.     
- **Unità di misura**: contiene l'unità di misura da utilizzare per la Risorsa; viene proposta quella di default inserita in anagrafica risorsa, ma si può cambiare.      
- **Quantità/Costo unitario/Costo totale**: per ottenere il Costo totale viene moltiplicata automaticamente la Quantità inserita con il Prezzo unitario.      
- **Percentuale/Valore**: in questi campi è possibile inserire un eventuale ricarico da applicare al Costo totale, in percentuale o valore.     
- **Ricavo**: in questa colonna verrà calcolato automaticamente il Costo totale ricaricato.        
- **Nota**: in questo campo è possibile inserire delle note libere.       
- **Equivalente a tempo pieno**: in questo campo è possibile inserire a quanto corrispondono le giornate/ore della risorsa rispetto all'orario aziendale (ad esempio se una risorsa fa un orario part-time di 4 ore, 1 giornata di questa risorsa deve corrispondere a 0.5 giornate aziendali).     

### Materiali

In questa tab è possibile indicare i Ricavi ottenuti dall'impiego di Materiali.      
Nelle prime colonne della griglia è possibile inserire un Articolo codificato, Non codificato oppure Note, la sua eventuale Variante e l'iva. Le colonne successive sono:     
- **Quantità/Costo unitario/Costo totale**: per ottenere il Costo totale viene moltiplicata automaticamente la Quantità inserita con il Costo unitario.      
- **Tipo origine costo**: è possibile selezionare l'origine dalla quale popolare la colonna *Costo unitario* tra: Costo ultimo, Costo medio, Costo standard, Listino fornitore netto, Ordine fornitore o Fattura di acquisto; questo campo è parametrizzabile di default nei [Parametri offerta](/docs/configurations/parameters/sales/offer-parameters).    
- **Percentuale/Valore**: in questi campi è possibile inserire un eventuale ricarico da applicare al Costo totale, in percentuale o valore.     
- **Ricavo**: in questa colonna verrà calcolato automaticamente il Costo totale ricaricato.        
- **Descrizione fornitore**: viene proposto il Fornitore preferenziale inserito in anagrafica articolo, ma è possibile modificarlo; se nella colonna *Tipo origine costo* è stato selezionato il listino fornitore, il listino considerato sarà quello valido per questo fornitore; inoltre, questo fornitore sarà l'intestatario della [Richiesta di offerta](/docs/purchase/offer-request/insert-offert-request/insert-offer-request) generata dalla riga materiale.           
- **Numero/Data richiesta**: contiene l'eventuale [Richiesta di offerta](/docs/purchase/offer-request/insert-offert-request-insert-offer-request) creata per il Materiale; infatti, quando si è posizionati nel tab *Materiali*, nella barra degli strumenti compare il pulsante *Creazione Richiesta di offerta* che genererà la RDO per il materiale selezionato.    
- **Nota**: in questo campo è possibile inserire delle note libere.   

Le altre tab presenti sono analoghe a quelle dell'offerta non gerarchica.     

Nella barra degli strumenti sono presenti i seguenti pulsanti:     
> **Crea nuovo prototipo**: questo bottone crea un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) per la riga articolo selezionata; il riferimento al preventivo generato viene riportato nel tab Dati articolo, campo Preventivo. Sarà possibile modificare il prototipo generato dal relativo modulo.      
> **Associa prototipo**: con questo bottone è possibile associare l'offerta a un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) già esistente; viene aperto un help nel quale poter scegliere tra i prototipi disponibili per quell'articolo.       
> **Apri prototipo**: questo bottone è abilitato se la riga articolo selezionata ha un Prototipo associato, e permette di aprirlo.       
> **Import da progetto**: questa funzione apre l'help Articolo progetto, nel quale è possibile selezionare gli articoli provenienti da un progetto che vogliamo inserire nell'offerta di vendita. Il pop up si apre direttamente con il filtro sul cliente intestatario dell'offerta, per permettere di visualizzarne i relativi progetti.     
> **Nuovo figlio**: permette di inserire una riga progetto figlia della riga selezionata.        
> **Nuovo fratello**: permette di inserire una riga progetto nello stesso livello della riga selezionata.       
> **Sostituisci il numero WBS**: permette di incorporare al Numero WBS delle righe anche il Numero del progetto.       
> **Implodi**: consente di nascondere le righe dell'albero.       
> **Esplodi**: consente di visualizzare le righe dell'albero.

