---
title: Compensazione veloce
sidebar_position: 3
---

:::note Percorso
**Amministrazione>Partite>Procedure>Compensazione veloce**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---

La presente form permette, in maniera leggermente semplificata rispetto all'analoga *Compensazione partite*, di gestire la compensazione tra partite aperte di segno inverso (Dare / Avere) ed intestate al medesimo sottoconto (ad es. un cliente o un fornitore).

Viene pertanto utilizzata in alternativa alla manovra di compensazione da eseguire direttamente in fase di registrazione contabile (ad esempio nel caso di registrazione di una fattura emessa o ricevuta dove in precedenza sia già avvenuto un incasso o un pagamento anticipato) e dunque anche in un secondo momento.

**Le partite attive vengono rappresentate nella griglia superiore, mentre quelle passive nella griglia inferiore.**
I pulsanti per avviare la ricerca delle partite sono posti come di consueto nella ribbon bar e vanno premuti entrambi per ottenere entrambe le tipologie di partita.

Per gestire la ricerca tramite i consueti campi di filtro (ad esempio per ricercare solo le partite attive e le passive intestate ad un singolo fornitore) è necessario visualizzare i campi di filtro (a scomparsa) dagli **appositi tab posti sulla destra** (divengono visibili passando sopra con il mouse e possono essere eventualmente bloccati su visibile).

Le partite che devono essere compensate tra di loro devono essere selezionate sia nella griglia superiore, sia in quella inferiore


![](/img/it-it/finance-area/maturity-values/fast-compensation.png)

Premendo il tasto ***Compensazione partite***, nella ribbon bar le partite selezionate vengono compensate tra di loro.

Nel caso di importi non coincidenti la partite di minore importo viene chiusa mentre quella maggiore rimane aperta per il valore residuo.

E' possibile anche specificare un valore parziale secondo il quale eseguire la compensazione. In questo caso espandere la sezione Contabilizzazione ed utilizzare il campo **Valore** (si veda ultima immagine in basso).


![](/img/it-it/finance-area/maturity-values/fast-compensation2.png)

---

La compensazione può dar luogo, automaticamente, anche ad una scrittura contabile (ad esempio quando si compensano partite di uno stesso soggetto ma avente sottoconti distinti inquanto è sia cliente che fornitore e dunque devono essere compensati anche i saldi contabili).

Per attivare la contabilizzazione mettere il flag sul campo contabilizzazione in alto in corrispondenza delle tab della maschera ed espandere la sezione per impostare i parametri necessari (in particolare la causale di contabilità)

![](/img/it-it/finance-area/maturity-values/fast-compensation3.png)