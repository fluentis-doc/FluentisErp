---
title: Utilizzo fidi
sidebar_position: 3
---

La maschera **Utilizzo fidi** consente di creare e memorizzare un calcolo di utilizzo del fido cliente per ogni conto cliente e visualizzarne quindi una serie storica. Nella lista dei calcoli visualizzata nella maschera saranno visualizzate in rosso le righe con scostamento.

Per elaborare un nuovo calcolo premere il tasto **Nuovo**.

All'apertura della maschera di dettaglio inserire il conto del cliente da analizzare.

Inserire o modificare la data di inizio calcolo che rappresentala data dalla quale vengono letti i dati utilizzati nel calcolo.

Premere quindi il pulsante **Calcola**.

Il calcolo può essere salvato con il comando **Salva**.

La **data di riferimento** costituisce il gorno in riferimento al quale viene calcolato il fido disponibile.

ATTENZIONE: nel caso, ad esempio did ricevute bancarie emesse e presentate al salvo buon fine, anche laddove queste siano state accreditate con l'apposita procedura contabile, ai fini del fido cliente l'importo si considera ancora impegnato fino alla data di scadenza della partita che ha generato la ricevuta bancaria. Pertanto modificando la data di riferimento del calcolo oltre detta data si potrà notare che il valore del fido viene liberato per l'importo corrispondente.

All'interno dei documenti di vendita, ad esempio l'ordine cliente, invece, il calcolo del fido disponibile (visibile sulla testata) è sempre vincolato alla data odierna, senza poter effettuare modifiche della data di riferimento, pertanto un nuovo ordine, se fuori fido, ,non sarà evadibile (salvo percorso autorizzativo) fino al giorno della scadenza dell'ipotetico effetto che nel ibera un valore sufficiente.


Il Pulsante **Aggiorna fido cliente** va ad aggiornare l'anagrafica del cliente inserito nella testata del calcolo e imposta in anagrafica il valore che legge nel campo **Fido stimato**.

Questo campo, a sua volta viene popolato dal comando Calcola applicando il valore del campo **Moltiplicatore valutazione fido** (ad es. 1) ad un calcolo (ponderato) basato sul fatturato del periodo considerato per quel cliente.

In dettaglio il calcolo è così sviluppato:

Fatturato 12M” / 365 * “Moltiplicatore” * “Giorni dilazione medi”, dove questi ultimi sono a loro volta calcolati sulle scadenze delle fatture degli ultimi 12 mesi, come “(somma(Importo scadenza *GiorniDilazione))/(somma totale scadenze).

**ALTRI CAMPI DELLA FORM:**

**Fatt 12 m**. = fatturato dei dodici mesi precedenti

**Partite** dare avere e relativo saldo

**Dare / avere** = movimenti di incasso da registrazioni provvisorie (dato informativo)

**Saldo dare / avere** = movimento contabile se è stata scelta la modalità contabile

**Fatt. da contabilizzare** = non ancora contabilizzate,  (avere perché ci sono le Note di Credito) Acconti è un di cui per fatture con righe acconti

**DDT da fatturare** (avere se DDT di reso)

**Valore e nr insoluti** (statistico non entra nel calcolo)

**Scaduto** = quanto delle partite aperte sono scadute 


