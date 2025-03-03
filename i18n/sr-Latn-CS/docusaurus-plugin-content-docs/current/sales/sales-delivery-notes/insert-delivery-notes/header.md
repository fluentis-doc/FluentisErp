---
title: Glavna
sidebar_position: 2
---

Con l'inserimento del cliente vengono proposti, in automatico, tutti i dati specifici del tab 'Testata', secondo i dati impostati in precedenza nell'anagrafica cliente.

I dati proposti, se sono stati specificati nell'anagrafica, sono: 

**Spedizione**: viene proposta l'informazione inserita nell'anagrafica cliente, tab ‘Spedizioni' (tabella di riferimento 'Spedizioni');

**Porto**: viene proposta l'informazione inserita nell'anagrafica cliente in tab ‘Spedizioni' (tabella di riferimento 'Porto');

**Imballo**: viene proposta l'informazione inserita nell'anagrafica cliente in tab ‘Spedizioni' (tabella di riferimento 'Imballi');

**Paese**: viene proposta l'informazione inserita nel tab 'Dati comuni' nell'anagrafica cliente (tabella di riferimento 'Paesi');

**Zona**: viene proposta l'informazione inserita nell'anagrafica cliente in tab ‘Spedizioni' (tabella di riferimento 'Zone');

**Listino**: viene proposta l'informazione inserita nell'anagrafica cliente in tab Listini, ma solo se esiste un'offerta di default (tabella di riferimento 'Listini di vendita');

**Da (data validità)**: il listino selezionato è valido partendo da questa data;

**A (data validità)**: il listino selezionato è valido fino a questa data;

**Lingua**: viene proposta l'informazione inserita nel tab 'Dati comuni' dell'anagrafica cliente.

**Divisa**: viene proposta l'informazione inserita nell'anagrafica cliente in tab ‘Amministrativo' (tabella di riferimento 'divise');

**Cambio valuta**: se la valuta della società è uguale a quella del documento, il valore riportato sarà 1, altrimenti il valore sarà ripreso da Cambi valute oppure da Cambi fissi per l'EURO;

**Data valuta**: data il quale viene calcolato il valore del cambio come rapporto tra la moneta della società e quella del cliente, secondo le impostazioni nella tabella 'Cambi valute';

**Note iniziali**: si possono inserire delle note che sono state inserite in precedenza in 'Note codificate', per questo l'utente deve effettuare doppio click sul campo 'Note iniziale' per aprire 'Help note codificate' e per selezionare i dati, oppure con il tasto destro del mouse può aprire una finestra per poter specificare un lungo testo di nota, se il campo contiene un valore viene cambiato il colore dello sfondo del campo;

**Annotazioni cliente**: viene proposta l'informazione inserita nell'anagrafica cliente in tab ‘Amministrativo',  oppure con il tasto destro del mouse può aprire una finestra per poter specificare un lungo testo di nota, se il campo contiene un valore viene cambiato il colore dello sfondo del campo;

**Destinazione e destinatario**: viene proposta l'informazione inserita nell'anagrafica cliente in tab ‘Spedizioni', solo se esistono destinatari e destinazioni di default. Il combo box propone tutti i destinatari e le destinazioni inseriti nell'anagrafica cliente.

** Utente**: permette di inserire l'utente che crea il documento (tabella di riferimento ‘Cerca personale' nell'Area amministrativa/Personale. Questa opzione deve essere impostata nei Parametri del documento stesso.

**Commessa**: permette di collegare il documento ad una commessa di vendita;

**Stato doc.**: il dato si riferisce alla tabella degli stati documento, il dato deve essere inserito dall'utente e può essere utilizzato dalle procedure di replicazione del gestionale, installate per la gestione di una sede con dei punti vendita. Lo stato della bolla può essere: stampata, scaricata, valorizzata, annullata.

**EDI** è la data di trasmissione del documento dalle procedure di EDI.

RIBBON BAR: rappresenta il menu della Form in oggetto, ossia l'area nella quale è possibile effettuare delle azioni. La lista delle funzionalità possibili è di seguito rappresentata:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Spasi | Pulsante per salvare le DDT/Bolle. |
|  [Evasione da ordine](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn-procedures/execution-from-order)  | Richiama la procedura per creare una bolla da un ordine cliente. |
| Crea bolla da prelievo di magazzino  | Permette di riprendere gli articoli da una picking list. |
| Trasferisci gli articoli dai listini di vendita | Permette di riprendere gli articoli dai listini di vendita. |
| Crea bolla da packing list  | Permette di riprendere gli articoli dal packing list. |
| Help destinatario/destinazione | Permette di visualizzare e inserire i destinatari/le destinazioni dall'anagrafica cliente. |
| Cancella bolla | Esegue la procedura per cancellare una bolla precedentemente inserita. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestione dell'archiviazione documentale associata alla maschera in uso. |






