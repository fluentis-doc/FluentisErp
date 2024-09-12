---
title: Commissioni
sidebar_position: 7
---

Questa form permette di visualizzare le commissioni (provvigioni agenti) maturate e liquidate.

Si riferisce alla gestione delle provvigioni agenti effettuata dal modulo amministrativo.

Nella sezione di testata sono presenti i filtri per Agente e per alcuni elementi contabili, dal momento che le righe relative alle provvigioni vengono inserite già nel momento in cui la fattura di vendita che le determina viene contabilizzata.

:::note Nota
**Si ricorda che all'interno della causale contabile con la quale viene contabilizzata la fattura deve essere attivo il flag di gestione delle provvigioni, il quale farà in modo che siano valorizzati i dati nell'apposito tab dedicato alle provvigioni presenta all'interno della registrazione contabile.**
:::


Ulteriori elementi di filtro sono i quattro flag che permettono di ricercare provvigioni da liquidare, o provvigioni liquidate o entrambe, e provvigioni non maturate o maturate.

**N.B.** più precisamente la condizione *APERTA* e *CHIUSA* fa riferimento al fatto che ci sia ancora un residuo da incassare o sia tutto incassato (e quindi la provvigione *chiusa* non avrà altri movimenti).

Nella griglia di dettaglio le righe corrispondono alle provvigioni calcolate in fattura inserite al momento della contabilizzazione della fattura stessa.

A seconda del criterio di maturazione definito nell'anagrafica agente, (ad esempio a pagamento avvenuto) verranno create delle righe di "storno" (ad esempio in caso di pagamento parziale o di una delle varie partite aperte, si creerà un riga corrispondente al valore dle pagamento). Per vederle occorre espandere il dettaglio della riga principale con l'apposito pulsante + a sinistra della riga.

Nel dettaglio (riportato poi sula riga principale) è presente anche il flag che si valorizza quando la provvigione viene liquidata all'agente.

![](/img/it-it/finance-area/maturity-values/commissions.png)

:::tip LINK
Per la procedura di liquidazione provvigioni specifica della gestione dal modulo amministrativo vedere [**qui**](/docs/finance-area/professional-men/procedures/calculate-commissions)
:::


