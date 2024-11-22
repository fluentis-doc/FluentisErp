---
sidebar_position: 2
title: Reverse Charge Misto
---

E' presente a sistema una particolare gestione per automatizzare maggiormente la gestione delle situazioni cosiddette di Reverse charge misto, ovvero nella stessa fattura di acquisto una parte fatturata in reverse charge e l'altra in regime ordinario.

Questo set di impostazioni **va ad aggiungersi** a quelle già presenti con le quali in precedenza si ovviava (in maniera non completa) alla situazione mista, in particolare al flag *Escludi da causali automatiche* presente nella tabella Aliquote e modalità IVA.
Le presenti configurazioni possono essere utilizzate al posto del flag predetto per una gestione più completa e funzionale.


Le implementazioni specifiche per questa gestione prevedono:

- Un **flag** nella tabella **Aliquote e modalità IVA**
- UN apposito **Tipo importo** nella causale contabile

### Tabella Aliquote e modalità IVA

In corrispondenza del codice iva che verrà designato per la quota parte fatturata in reverse charge si abiliterà il **flag** **Reverse Charge** che contrassegna l'aliquota da utilizzare per il reverse charge. Questo vuol dire che l’iva di questa riga non sarà messa nel totale registrazione né sarà conteggiata per le partite (l’ipotesi è che il fornitore abbia la logica di calcolo partite su *imponibile+ iva*).

:::tip Nota
La logica delle "nuove configurazioni" per la situazione mista è pertanto rovesciata rispetto al passato, anzichè identificare la parte da non girocontare perchè esclusa da reverse charge, si andrà a indicare  la quota parte che è in reverse charge.
L'iva in reverse non sarà dunque aggiunta al totale della registrazione come in precedenza, nè corrisposta al fornitore monetariamente (cosa che già avveniva, ma senza bisogno di impostare il metodo di calcolo della partita aperta su solo imponibile inquanto anche lasciando il settaggio base su imponibile + iva la quota in reverse non viene aggiunta alla partita aperta)
:::

### Causali contabili: Tipo importo

Nella causale contabile che verrà utilizzata per contabilizzare il reverse charge, il tipo importo *Totale doc/registrazione* viene valorizzato con imponibile + iva ordinaria - iva reverse (perché l’iva reverse viene sottratta tramite il flag di cui sopra e in questa logica non deve essere aggiunta al totale inquanto non deriva dalla fattura fornitore, quindi non è da pagare).

E' previsto un nuovo tipo importo *Reverse charge* che valorizza con l’iva in reverse ed è da utilizzare quindi per la riga di iva transitoria e per le due righe iva della reg. automatica.

:::note Nota
Il tipo importo *Reverse charge* non considera l'iva indetraibile, (anche per quadratura con l’importo che ho nel fornitore) La quota indetraibile quindi finisce a costo nella prima registrazione e poi va nell’iva a debito del girococonto, come iva da versare.
:::

Le causali reverse quindi diventano così:

![](/img/it-it/finance-area/other/mixrev1.png)

![](/img/it-it/finance-area/other/mixrev2.png)
