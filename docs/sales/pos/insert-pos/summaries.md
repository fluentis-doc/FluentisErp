---
title: Riepilogo documento
sidebar_position: 3
---

### Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### Spese/Sconti/Maggiorazioni finali

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

### Riepilogo scadenze

Rappresenta il riepilogo delle scadenze del documento, per ogni *tipo* e *soluzione* di pagamento.  
- **Numero**: valore progressivo della riga.  
- **Pagamento**: rappresenta il codice alfanumerico del *Tipo pagamento* ripreso dalla *Testata del documento > tab Pagamenti*.  
- **Importo**: Importo della scadenza calcolato. Può essere forzato manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*. (Scattano in automatico dei controlli e avvisi sulla quadratura tra i valori delle scadenze e il totale fattura)
- **Data scadenza**: Data della scadenza calcolata. Può essere forzata manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*.
- **Spese di incasso**: Campo in cui riportate le spese di incasso calcolate.
- **IVA**: da applicare alle spese di incasso (può essere impostata anche manualmente)
- **Causale pagamento**: è possibile inserire direttamente in fattura una causale contabile che da luogo ad una scrittura automatica di incasso / pagamento. NB prestare attenzione al template della causale perchè utilizzerà i conti presenti anche senza sottoconto, motivo per il quale è presente il campo seguente.
- **Conto/sottoconto cliente**: conto che usa per incassare/pagare (cassa o banca ad esempio) la scadenza andando a sovrascrivere il conto presente nella causale contabile di pagamento (o incasso)