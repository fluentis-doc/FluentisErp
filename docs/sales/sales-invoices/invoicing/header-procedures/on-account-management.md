---
title: Gestione Acconti
sidebar_position: 4
---

Fluentis permette di gestire le fatture di acconto e il relativo storno.

**Creazione fattura di acconto**
Le fatture di acconto possono avere un [Tipo documento](/docs/configurations/tables/sales/invoices-type) dedicato o meno, in quanto la gestione degli acconti non avviene a livello di tabella, ma di articoli.
La gestione degli acconti prevede quindi la creazione di una normale fattura di vendita, per la quale sono richiesti un **Tipo**, un **Cliente**, ecc.
Dopo la compilazione dei dati di Testata, è possibile passare alla tab Articoli.
Nella griglia articoli, inserire un *Tipo riga 6 Fattura d'acconto*, una Descrizione libera,  il Prezzo, l'IVA, un Fatturato (che dovrebbe avere come conto Anticipi clienti), ed eventuali altri dati. E' quindi la riga di questa tipologia a determinare l'ammontare dell'acconto.
Una volta completata la fattura, è possibile stamparla. 
A questo punto la fattura d'acconto risulta confermata.
Al momento della creazione di altri documenti per questo cliente, Fluentis mi avviserà dell'esistenza di una fattura di acconto.

**Storno fattura di acconto**
Per stornare una fattura di acconto è necessario creare una nuova fattura di vendita intestata allo stesso cliente.
Nel tab Articoli, se il cliente ha almeno una fattura di acconto, sarà attivo il bottone della ribbon bar **Gestione acconti**. Cliccandolo verrà aperta l'omonima procedura.    
Nel tab **Storno acconti** è possibile selezionare gli acconti da stornare; dopo la selezione, con il bottone **Crea storno** verrà creato lo storno, il quale sarà riportato nella griglia in basso. 
Alla chiusura della maschera verrà chiesto se inserire il nuovo valore di storno in fattura. In caso di conferma, sarà possibile consultare la riga storno nel tab Articoli della fattura, che riporterà i dati della fattura di acconto precedentemente creata.