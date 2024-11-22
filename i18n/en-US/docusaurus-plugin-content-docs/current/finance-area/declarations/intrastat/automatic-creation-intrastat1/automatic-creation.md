---
title: Creazione automatica
sidebar_position: 1
---

Il pulsante di 'Creazione automatica' apre una procedura guidata di ripresa dati dall'area vendite.

La procedura è composta da tre Tab:

** [Filtro Fatture](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/invoices-filter) **

** [Parametri](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters) **

** [Rollback](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/restore) **

In fase di **creazione** del modello intra saranno utilizzate la **Filtro fatture**, nella quale vengono ricercate le fatture attive da includere nel modello, e la **Parametri** che rappresenta un'anteprima delle righe al fine di integrare eventuali dati mancanti.

Al termine del completamento, dopo aver premuto il pulsante di creazione, la form della creazione automatica dovrà essere chiusa ed i dati saranno presenti nella rispettiva sezione all'interno delle tab del modello pronti per essere raggruppati ed esportati o stampati.

**Nel caso in cui un modello intra creato con la procedura automatica debba essere eliminato, si dovrà procedere all'apertura della procedura di creazione automatica ed al ripristino con i comandi presenti nella tab Rollback, solo successivamente si potrà chiudere il modello e cancellarlo definitivamente dalla form di ricerca dei modelli intra.**

Qualora si utilizzi il comando di cancellazione del modello intra nella situazione sopra descritta, (senza operare prima il ripristino), comparirà comunque un messaggio di avviso e, nel caso in cui l'avviso venga ignorato, la procedura di cancellazione provvederà in ogni caso al ripristino al fine di poter eventualmente procedere ad una nuova creazione automatica con filtro delle fatture attive. In questo senso ciò che viene ripristinato è un parametro interno nella base dati che indica al sistema che le fatture in questione non sono già state utilizzate in un modello intra.

 
:::tip Ripartizione automatica spese accessorie in fattura
E' possibile gestire una ripartizione automatica sulle righe della fattura di una spesa accessoria finale (piede del documento) come ad esempio le spese trasporto ecc.

E' necessario utilizzare un tipo spesa (tabella tipi spese) avete il flag ***Val stat. Intra*** da inserire in fattura o nell'anagrafica cliente / fornitore per automatizzare la proposta in fattura.

In fase di creazione automatica si noterà che il valore di ogni riga è maggiorato di una quota della spesa finale ripartita.
:::





