---
title: Riepiloghi
sidebar_position: 5
---

Nei Riepiloghi sono presentate le informazioni principali dell'intero documento.

## Sconti finali

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Spese/Sconti/Maggiorazioni finali

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

## Altri campi

**Volume**: viene proposto il volume cumulativo, risultato dalla somma dei volumi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del volume degli articoli corrisponde a quella inserita nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;  
**Peso netto**: viene proposto il peso netto cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del peso degli articoli corrisponde a quello inserito nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;  
**Peso lordo**: viene proposto il peso lordo cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del peso degli articoli corrisponde a quella inserita nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;  
**Colli**: viene proposto il numero dei colli, sulla base dei dati inseriti nell'*Anagrafica articolo > tab Pesi/Dimensioni*, nei campi *Articoli presenti in un collo* oppure *Colli per formare l'articolo*. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.  

## Trasporto

Viene proposto automaticamente il *Trasporto a cura del* presente in *Anagrafica del contatto > tab [Consegna](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (radio button: Mittente/Destinatario/Vettore), ma i dati possono essere modificati.

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