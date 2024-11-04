---
title: Articoli
sidebar_position: 3
---

Per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

### Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino. <br />
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino. <br />
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.

:::note Nota
Se si parte direttamente con l'inserimento del codice articolo, la sua classe, la descrizione e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

### Dati non obbligatori

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Prezzo**:  il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab Dati; lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata (vedi [Anagrafica contatti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Attraverso il doppio click nel campo *Listini* (posto sotto la voce *Progetti*) l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito. In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo.   

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalità](/docs/erp-home/registers/items/create-new-items/item-registry/generality) dell'anagrafica articoli. Se questo non è presente, non viene proposto nessun dato e al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'anagrafica contatto.

- **Evase forzatamente**: attivando il flag la riga articolo sarà contrassegnata come *Evasa forzatamente* e non sarà più disponibile per ulteriori evasioni.   


## Totali

- **Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.        

*Pulsante specifico*

> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 

## Dati

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo. 

- **Articolo**: riporta  l'articolo selezionato nella griglia superiore.

- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.   

- **Nota**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.

- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che saranno riportati anche nell'ordin fornitore generato mediante *Evasione progetto*. 


- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.

- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la data inizio/fine validità e con le condizioni particolari (ad es. **Tipo scaglione** di sconto) assegnate all'articolo nel listino.

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.

- **Data prevista consegna**: permette di indicare la data in cui è prevista la consegna dell'articolo.   


- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.

## Sezione valori

La sezione in basso, a destra, presenta il riassunto dei costi che concorrono alla formazione del prezzo finale di ciascun articolo selezionato nella griglia degli articoli. I campi presenti sono:

-    **Prezzo**: il valore del campo Prezzo;
-    **Quantità**: il valore del campo Quantità o Quantità alternativa, a seconda del flag Prezzo unità di misura alternativa;
-    **Importo di riga**: Prezzo articolo * Quantità articolo;
-    **Totale sconti**: la somma degli sconti dell'articolo, inclusi anche gli sconti finali;
-    **Importo**: Importo lordo - Sconti;
-    **IVA**: Imponibile * aliquota IVA dell'articolo;
-    **Totale**: Imponibile + Imposta.
