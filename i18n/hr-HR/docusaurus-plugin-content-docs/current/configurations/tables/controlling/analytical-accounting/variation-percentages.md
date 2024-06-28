---
title: Percentuali di variazione
sidebar_position: 7
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Percentuali di variazione**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---
In questa tabella è possibile codificare delle categorie di variazioni percentuali da utilizzare in diverse procedure del controlling, come ad esempio l'elaborazione del budget previsionale a partire dal consuntivo dell'anno precedente, applicando degli incrementi o decrementi.

![](/img/it-it/configurations/tables/controlling/analytical-accounting/variation-percentages/variation-percentages.png)

ESEMPIO: per i costi fissi di anno in anno stabilisco incrementi del 5% , per i semi-variabili l’ incremento sarà del 3% per la quota variabile e del 3% per la quota fissa ed infine per i costi variabili l ’incremento sarà del 10%. 

:::note NOTA: Le modalità di codifica potrebbero essere differenti rispetto a quanto si vede nell'immagine. Ad esempio potrebbe essere definita una percentuale (rispettivamente per la quota fissa e la quota variabile) per i servizi, una per le materie prime.... una per i ricavi caratteristici ecc...
:::




Nel ** [piano dei conti ](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) **si attribuirà, per ogni sottoconto, la relativa voce per la variazione automatica.
e quando verrà utilizzata la procedura che copia da un area di analisi all’ altra (es. da *Consuntivo* a *Budget*). Si potrà dire al sistema “applica o meno queste percentuali”. 

:::note Campi tabella

**Codice / Descrizione**: liberamente assegnabili e necessari per per distinguere e richiamare le varie logiche

**Variabili**: percentuale di incremento (o decremento se con segno negativo) da assegnare alla quota variabile del costo o ricavo;

**Fisso**: percentuale di incremento (o decremento se con segno negativo) da assegnare alla quota fissa del costo o ricavo.

:::

---

:::tip Approfondimento

La ripartizione tra costi variabili e fissi nel controllo di gestione deriva dalla metodologia di "splittare" tutti i costi e tutti i ricavi registrati in contabilità generale in quota fissa e quota variabile. Viene poi portato nella contabilità *gestionale* "mensilizzato" e suddiviso in quota fissa ed in quota variabile.
:::





