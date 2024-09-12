---
title: Dimensione
sidebar_position: 5
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Dimensione**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---


Il concetto di Dimensione è spiegabile come un criterio di analisi e coerente suddivisione di COSTI e RICAVI all’ interno dell’ azienda.

E' possibile creare e movimentare molteplici dimensioni di analisi contemporaneamente.

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/dimension.png)

**ESEMPIO:** Tipicamente alla contabilità analitica viene associata la dimensione *INDUSTRIALE*, dove l’ azienda viene suddivisa nelle varie entità o funzioni aziendali, ovvero il CENTRO AZIENDALE AMMINISTRATIVO, IL CENTRO DIREZIONALE, IL CENTRO DEL COMMERCIALE e poi i CENTRI PRODUTTIVI. 

Relativamente a questa dimensione tutti i costi e ricavi aziendali vengono assegnati per arrivare ad un' analisi di FULL COSTING. 

Parallelamente abbiamo le *COMMESSE*, ovvero le aziende che lavorano su COMMESSA/PROGETTO; le commesse sono dimensioni parallele e quindi saranno collegati tutti i ricavi DIRETTI di commessa e saranno trasferiti dalla dimensione industriale i movimenti relativi ai centri ausiliari e generici (direzione, amministrazione ecc.). 

Abbiamo poi la possibilità di definire dimensioni **specifiche** dove l’ azienda vuole identificare certi valori, separandoli dalle logiche normali, perché vuole tenere nota di alcuni tipi di costi. 

**ESEMPIO:** l’ azienda vuole tenere traccia delle varie FIERE a cui partecipa, che rappresentano un investimento importante e definisce una dimensione *FIERE* assegnando il centro FIERA MILANO (esempio) e attribuendo non solo il costo della  fiera alla dimensione industriale ma anche alla dimensione FIERA poiché vuole suddividere ed analizzare **parallelamente** un dato di quell’ entità specifica. Non imposta in questo caso il flag di quadratura obbligatoria perché vuole solo un ulteriore elemento di analisi.

La dimensione dunque può essere vista anche come un' ETICHETTA che andiamo ad agganciare ai centri. 

Possiamo, attraverso i cost driver, ribaltare i dati (costi e profitti) da una dimensione all’ altra. 


---

:::note CAMPI DELLA TABELLA


il FLAG **QUADRATURA OBBLIGATORIA** impone che tutti i centri che fanno capo a quella dimensione devono avere quadratura con la contabilità. Non è più la contabilità generale che va quadrata al centro di costo/profitto o commessa ma va quadrata alla singola dimensione d’ analisi. 

Il FLAG **COMMESSA** indica che la riga della contabilità analitica viene associata anche alla COMMESSA RELATIVA AL COSTO E RICAVO MOVIMENTATO. 

IL FLAG **VINCOLO CONTO/CENTRO**  limita la possibilità di scegliere il centro aziendale quando si registra in contabilità. Sarà vincolante l'associazione tra conto contabile e centro o centri aziendali impostata nel piano dei conti.
:::

