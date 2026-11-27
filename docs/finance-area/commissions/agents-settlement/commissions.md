---
sidebar_position: 1
title: Commissioni
---

:::tip[Info]
A partire dalla versione 805 la presente form è stata spostata in questa posizione specifica per la Gestione Commissioni Agenti (area Amministrazione)

In precedenza era già presente nel modulo *Percipienti*
:::

## Introduzione

Questa form permette di visualizzare le commissioni (provvigioni agenti) maturate e liquidate.

Si riferisce alla gestione delle provvigioni agenti effettuata dal modulo amministrativo.

## Filtri di testata

Nella sezione di testata sono presenti i filtri per Agente e per alcuni elementi contabili, dal momento che le righe relative alle provvigioni vengono inserite già nel momento in cui la fattura di vendita che le determina viene contabilizzata.

:::note Nota
**Si ricorda che, a partire dalla versione 805, all'interno della causale contabile con la quale viene contabilizzata la fattura l'attivazione dl flag di gestione delle provvigioni ha il solo scopo di rendere visibili i dati nell'apposito tab dedicato alle provvigioni presenta all'interno della registrazione contabile.**

**In ogni caso la creazione dei dati elle commissioni nella presente form avverrà automaticamente , indipendentemente dal flag di cui sopra.**
:::


Ulteriori elementi di filtro sono i quattro flag che permettono di ricercare provvigioni da liquidare, o provvigioni liquidate o entrambe, e provvigioni non maturate o maturate.

**N.B.** più precisamente la condizione *APERTA* e *CHIUSA* fa riferimento al fatto che ci sia ancora un residuo da incassare o sia tutto incassato (e quindi la provvigione *chiusa* non avrà altri movimenti).

## Griglia di dettaglio

Nella griglia di dettaglio le righe corrispondono alle provvigioni calcolate in fattura inserite al momento della contabilizzazione della fattura stessa.

Dalla version 805 abbiamo anche i riferimenti del cliente con l’anno e il numero fattura che hanno creato il record.

A seconda del criterio di maturazione definito nell'anagrafica agente, (ad esempio a pagamento avvenuto) verranno create delle righe di "storno" (ad esempio in caso di pagamento parziale o di una delle varie partite aperte, si creerà un riga corrispondente al valore dle pagamento). Per vederle occorre espandere il dettaglio della riga principale con l'apposito pulsante + a sinistra della riga.

Nel dettaglio (riportato poi sula riga principale) è presente anche il flag che si valorizza quando la provvigione viene liquidata all'agente.

![](/img/it-it/finance-area/commissions/newcommissions1.png)

## Pulsanti della ribbon bar

Dalla versione 805 sono stati aggiunti due nuovi pulsanti per tenere allineate le commissioni alle fatture dell’area vendite nel caso in cui si operi sulle provvigioni all'interno dei documenti di vendita **dopo** che questi sono stati già portati in contabilità (i dati agenti, infatti, restano editabili anche dopo aver creato la fattura elettronica e contabilizzato il documento):

**Creazione provvigioni da fatture di vendita**: si apre una maschera di ricerca fatture dalla quale selezionare i documenti da rileggere per creare le commissioni eventualmente mancanti; nel caso in cui la fattura sia contabilizzata Fluentis creerà le commissioni e i dettagli mancanti, purchè le partite legate alla fattura non abbiano ancora nessun movimento di pagamento.

:::note[Nota]
Nel caso in cui la fattura NON sia contabilizzata, Fluentis creerà la commissione con i relativi dettagli, ma questi non saranno gestibili automaticamente se collegati a logiche di maturazione ***A Pagamento Avvenuto*** oppure ***A Pagamento Totale***, in quanto mancano dei legami alle partite clienti.
:::



**Verifica provvigioni**: permette di verificare se gli importi delle provvigioni corrispondono ancora ai valori dei documenti di origine. In caso di differenze Fluentis mostrerà una griglia denominata **Esiti** che mostra per ogni agente due colonne con i valori totali delle commissioni risultanti, rispetto alla colonna adiacente con i totali rilevati dai documenti.

E' presente nella ribbon bar, a questo punto, il pulsante **Allinea Provvigioni** per aggiornare i dati delle commissioni. 

Questa operazione non sarà consentita se sono presenti pagamenti partite oppure le commissioni sono state già gestite in una liquidazione agenti.


:::tip LINK
Per la procedura di liquidazione provvigioni specifica della gestione dal modulo amministrativo vedere [**qui**](/docs/finance-area/commissions/procedures/calculate-commissions)
:::