---
title: Distribuzione periodi
sidebar_position: 1
---

:::note Percorso
**Tabelle > Controlling > Contabilità gestionale > Distribuzione periodi**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---

In questa tabella è possibile codificare, per ogni anno e per ogni *area* riferita ai centri aziendali, diverse logiche di distribuzione dei movimenti contabili tra i periodi oggetto delle chiusure infrannuali.

:::tip Esempio
Generalmente in un sistema di controllo di gestione si ragiona in termini mensili, generando dunque, solitamente, chiusure contabili mensili da elaborare successivamente con ribaltamenti tramite cost driver ecc... In questa tabella possiamo definire come vengono mensilizzati i dati
:::

Esempio: "Giorni lavorativi" , per una determinata area di analisi si vogliono definire, per l'anno in corso, i giorni lavorativi effettivi di ogni mese. In fase di ripartizione la lettura della logica definita in questa tabella sommerà il totale dei giorni di ogni mese e dividerà il movimento per tale totale giorni e moltiplicherà per il dato del campo **Valore**. In questo modo si ottiene un peso sul totale riferito al singolo mese per il quale si sta ripartendo.

![](/img/it-it/configurations/tables/controlling/managerial-accounting/periods-distribution/image01.png)

Ulteriore esempio: la regola degli "Undicesimi" che considera solo undici mesi come operativi ed assegna un peso ad ogni mese, ad es. gennaio 0,75 , febbraio, marzo ecc... 1 , agosto 0,5 ecc....






