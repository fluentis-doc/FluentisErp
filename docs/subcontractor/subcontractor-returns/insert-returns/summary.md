---
title: Riepiloghi
sidebar_position: 6
---

Nei Riepiloghi sono presentate le informazioni principali dell'intero documento.

## Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Spese

Sono proposte le spese inserite nell'anagrafica contatto, nel tab *Spese/Sconti*. In questa griglia eventuali spese devono essere inserite in positivo, eventuali sconti in negativo.      

Questi elementi vengono applicati alla totalità del documento e non sono distribuiti tra le righe degli articoli. Possono includere costi aggiuntivi, sconti globali, o maggiorazioni applicate all'intero documento. Se impostati nell'anagrafica articolo, vengono automaticamente proposti al momento della creazione del documento.

- **Tipo/Descrizione**: permette di scegliere le tipologie di spesa (predefiniti nella tabella [Tipi spese](/docs/configurations/tables/general-settings/expenses-types)), attribuendo alla tipologia la percentuale di spesa da applicare.  
- **Importo spesa**: indica il valore della spesa espresso nella divisa del documento.    
- **IVA**: indica l'aliquota IVA da applicare alle spese inserite.   
- **Percentuale/Valore**: indica se calcolare le spese con una percentuale oppure con un valore monetario predefinito. Selezionando *valore* l'importo della spesa va inserito sotto la voce omonima.      
- **Percentuale**: valore numerico della percentuale di spesa.  

:::note Nota
Se il *Tipo spesa* inserito ha il flag [ripartito](/docs/configurations/tables/general-settings/expenses-types#link-to-logic) attivo, durante il carico del rientro a magazzino la spesa sarà ripartita su tutti gli articoli in base agli importi totali di ogni riga articolo. Il risultato della ripartizione della spesa è visibile nella [registrazione di magazzino](/docs/logistics/warehouse/stock-records/record).    
1. Se gli articoli hanno un prezzo: la spesa totale sarà ripartita proporzionalmente sugli importi netti di ciascun articolo; il risultato verrà aggiunto al prezzo iniziale dell'articolo nel campo *Totale importo* della registrazione. Se per alcune righe l'importo è 0, esso sarà considerato come 1 per consentire una ripartizione della spesa su tutti gli articoli.   
2. Se tutti gli articoli hanno prezzo pari a 0: la spesa verrà distribuita equamente tra tutte le righe articolo e, a partire da questa distribuzione, sarà calcolato l'*importo movimento/importo gestionale* nella registrazione, tenendo conto delle quantità di ciascun articolo.   
:::

## Totali documento

**Importo lordo articoli**: rappresenta la somma dei valori di tutti gli articoli;  
**Acconto**: rappresenta il valore dell' eventuale acconto ricevuto per il documento;  
**Importo omaggio**: rappresenta l'importo degli articoli di tipo omaggio inseriti nel tab *Articoli*;  
**Totale sconti applicati**: rappresenta il valore totale dei sconti applicati sugli articoli, ma senza i sconti finali;  
**Importo netto articoli**: *Importo lordo articoli* – *Totale sconti applicati*;  
**Totale sconti finali**: rappresenta il valore degli sconti finali espressi in percentuale sull'importo lordo degli articoli;  
**Importo netto sconti finali**: *Importo netto articoli* - *Totale sconti finali*;  
**Spese di incasso**: rappresenta la somma delle spese di incasso inserite nella griglia delle *Spese*;  
**Spese bollo**: rappresenta la somma delle spese di bollo inserite nella griglia delle *Spese*;   
**Imponibile**: *Importo netto articoli* – *Sconti finali* + *Totale spese non documentati* + *Totale spese documentati*;  
**Imposta**: rappresenta la somma dei valori contenuti nei riepiloghi IVA;  
**Totale**: *Imponibile* + *IVA*.