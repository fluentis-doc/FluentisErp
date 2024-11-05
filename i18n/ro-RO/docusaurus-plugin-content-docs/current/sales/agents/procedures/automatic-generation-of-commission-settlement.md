---
title: Creazione automatica liquidazione provvigioni
sidebar_position: 1
---

La form si apre tramite il percorso *Vendite > Agenti > Procedure > Creazione automatica liquidazione provvigioni*.

La procedura di creazione automatica liquidazione provvigioni esegue il calcolo definitivo delle liquidazioni agente, secondo i parametri impostati. 


## Calcolo liquidazioni

Una volta eseguita la ricerca, nella sezione **Lista agenti** saranno visualizzati tutti gli agenti definiti nel sistema: in questa sezione è necessario selezionare (anche utilizzando i comandi *Ctrl* o *Shift* della tastiera per richiamare più righe) la lista dei soggetti per i quali eseguire il calcolo. 

E' visibile il **tipo di maturazione** della provvigione agente, in modo da poter **impostare i filtri di destra in modo idoneo alle impostazioni dell'agente**.

Sulla destra si presentano i seguenti filtri:

- un filtro per divisa del documento, in modo da creare una liquidazione agente differenziata per divisa;

- tre sezioni di filtro a seconda del documento di riferimento (ordine/bolla/fatture, per agenti con ordine confermato, consegna effettuata, fattura emessa);

- una sezione di filtro sulle **partite**, per gli agenti con scadenza maturata o **pagamento avvenuto**: sulla base della data impostata saranno quindi maturate le partite con scadenza antecedente nel primo caso, nel secondo caso la quota parte in relazione agli **incassi registrati** in contabilità **con data antecedente**. 

Nel caso di **effetti**, questi non saranno considerati maturati fino alla **data di maturazione** (cioè data scadenza **più i giorni di rischio cliente** impostati nei parametri dell'omonimo modulo).

:::note[Nota]
Con il metodo del *pagamento avvenuto* la selezione delle provvigioni da liquidare sarà sempre "tutto" *fino alla data*, non è possibile selezionare quello che è maturato in uno specifico range di date e non è previsto un collegamento con il campo della periodicità dell liquidazione presente in [anagrafica agente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement).


Ciò è necessario perchè mentre per i documenti non c'è modo di aggiungerne di nuovi / modificare in periodi già liquidati, il discorso è diverso per i pagamenti: niente vieta di creare un pagamento con data registrazione in un periodo già chiuso in un calcolo liquidazione agenti (magari perché non non sono state riconciliate le banche o si è commesso un errore in una vecchia registrazione), dunque il dato verrebbe "perso" nei calcoli successivi.
:::

Il flag **Conversione provvigioni usando il cambio alla data documento** prevede che l'importo delle provvigioni sia effettuato secondo il cambio della data del documento, altrimenti  sarà utilizzato di default il cambio della data della liquidazione agente così come impostato nei campi alla base della maschera.

:::note **Più in dettaglio:**
- se non si imposta il flag, Fluentis totalizzerà le provvigioni maturate per divisa del documento e poi convertirà questi totali in divisa nella divisa dell’agente al cambio della data liquidazione (in un caso complesso, ad esempio fattura in GPB e agente in USD quindi, cercherà se trova in tabella cambi un cambio esplicito gbp-usd o usd-gbp e lo applicherà, se non lo trova userà i cambi rispetto all’euro con tutti i decimali che trova).
- se si imposta il flag, invece, Fluentis applicherà ad ogni documento il cambio memorizzato nel documento stesso per ottenere le provvigioni in divisa società (arrotondandole ai decimali divisa società per ogni documento), prende poi questo totale in divisa società e lo converte nella divisa agente.

Se ad esempio ci fossero solo 2 documenti da considerare e i cambi fossero uguali perché tutto è nella stessa data, allora si potrebbero avere differenze di centesimi sul totale che si ottiene, dovute all’arrotondamento intermedio sulla divisa società che si fa impostando il flag.
La situazione è chiaramente improbabile e "teorica" per far meglio capire l'esatta logica di calcolo a seconda del flag.

:::

Nella **sezione inferiore**, *Estremi per la creazione della liquidazione delle provvigioni*, va indicata la data della liquidazione, una sua descrizione e il mese/anno di riferimento per il calcolo dell'Enasarco.

:::important[Importante]
I campi del mese / anno per l'Enasaco devono essere compilati con attenzione perchè da essi dipende il calcolo del minimale e massimale enasarco. Dunque al calcolo che si sta per eseguire viene attribuita una "competenza" ai fini del calcolo di eventuale minimale, se per il trimestre in questione non si raggiunge il minimo, o massimale, adeguando i contributi a carico agente e/o ditta mandante.

Gli scaglioni per i contributi enasarco sono definiti nella tabella [Categorie agenti](/docs/configurations/tables/sales/agent-category)
:::

:::tip PROVVIGIONI SULL'INCASSATO E SCRITTURE CONTABILI PROVVISORIE
Per il calcolo delle provvigioni maturate vengono considerate SOLO le registrazioni nello stato **definitivo**, quindi eventuali incassi (anche anticipati) registrati in modalità provvisoria verranno ignorati
:::

:::tip PROVVIGIONI SULL'INCASSATO E RICEVUTE BANCARIE
La maturazione delle provvigioni tiene conto in ogni caso della data scadenza effetto, anche se la partita cliente viene chiusa per effetto della contabilizzazione dell'emissione Ri.Ba. e l'effetto è presentato al salvo buon fine o accreditato.
:::

:::danger ATTENZIONE
Prestare particolare attenzione nel caso di Ricevute bancarie anche alla gestione dei **PARAMETRI RISCHIO CLIENTE**

dove sono presenti due campi **N. giorni oltre la scadenza per effetti presentati al salvo buon fine** / **N. giorni oltre la scadenza per effetti presentati al dopo incasso** i quali, se valorizzati aggiungono un ritardo anche nella maturazione delle provvigioni.

Inoltre porre attenzione in fase di inizializzazione di un nuovo ambiente che sia stato salvato almeno una volta all'interno della form Parametro rischio cliente in modo che siano presenti i parametri di default (in particolare riferiti ai campi di cui sopra) altrimenti la data scadenza effetto non sarà letta e la provvigione sarà sempre maturata alla chiusura della partita per emissione Ri.Ba.
:::


*Pulsanti*:
> **Ricerca**: esegue la ricerca degli agenti presenti nella società attiva.  
> **Calcolo liquidazioni**: esegue il calcolo delle liquidazioni per gli agenti selezionati, secondo le impostazioni di filtro impostate.  

## Ripristina

La scheda di ripristino consente di individuare in quale liquidazione agente sono state valorizzate le provvigioni dei documenti filtrati, oppure di individuare una o più liquidazioni secondo i filtri presenti nella maschera. Attraverso l'apposito pulsante di ripristino è possibile annullare la creazione della liquidazione agente. Non è consentito il ripristino di liquidazioni già passate al modulo percipienti.

*Pulsanti*:
> **Ricerca**: esegue la ricerca delle liquidazioni automatiche già calcolate.  
> **Ripristino**: annulla la creazione delle liquidazioni selezionate.