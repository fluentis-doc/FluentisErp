---
title: Elaborazione periodi 
sidebar_position: 3
--- 

La procedura di ***Elaborazione periodi*** è quella principale nelle elaborazioni del controlling. Anche questa maschera si divide in 4 procedure differenti: l’elaborazione dei movimenti fisici, il calcolo degli ammortamenti, la vera e propria elaborazione periodi e infine l’elaborazione del consuntivo di progetto.

## ELABORAZIONE MOVIMENTI FISICI
La prima procedura non fa altro che leggere le ***Registrazioni movimenti fisici*** per creare la base dati dello ***Storico movimenti fisici***, andando a leggere le quantità delle unità di misura di stato (come ad esempio i metri quadri degli uffici) per replicarle nei vari periodi piuttosto che prendendo quelle di flusso per suddividerle secondo i criteri dei periodi di distribuzione collegati. Dovremo impostare solo
- l'***Area***
- l'***Anno***

## STORICO AMMORTAMENTI
Da questa sezione si effettua l’elaborazione degli ammortamenti del controlling. Andremo a impostare 
- l’***Area*** alla quale assegnare i valori
- l’***Anno*** da elaborare-
- il campo ***Fino a periodo***, cioè il periodo finale dell’anno da elaborare, che tipicamente corrisponderà con il periodo finale del nostro consuntivo elaborato nella chiusura infrannuale
- infine abbiamo l’***Anno iniziale per ricalcolo storico***. Questo campo serve nel caso in cui si siano modificate delle impostazioni del controlling nei cespiti già elaborati

:::tip Esempio
Ipotizziamo di avere un cespite acquistato nel 2015, da ammortizzare nel controlling alla percentuale del 15% e quindi in poco più di 6 anni e mezzo, se il nostro primo calcolo del controlling è il 2022 ***FluentisERP***, nella prima elaborazione, dovrà calcolarsi gli ammortamenti dal 2015 in poi in modo da capire se nel 2022 c’è un residuo da elaborare, probabilmente no dato che il 2022 è 7 anni dopo (dico probabilmente perché il calcolo del controlling viene gestito mese per mese, se il cespite fosse acquistato a dicembre 2015 allora probabilmente avremo la chiusura dell’ammortamento nei primi mesi del 2022). Se per qualche motivo, dopo una prima elaborazione, volessi portare l’ammortamento al 10%, invece, cosa deve fare ***FluentisERP*** quando calcola il 2022, tenere per buono il dato di partenza al 15% già elaborato e quindi continuare a non calcolare nulla, o deve resettare i valori storici per rielaborarli con le impostazioni attuali? Se impostiamo l’anno di partenza da riconsiderare, significa che su tutti i cespiti che hanno il flag di aggiornamento dei valori storici ***FluentisERP*** andrà a ricalcolare i dati storici a partire da quello settato.
:::

Una volta completata l’elaborazione, ***FluentisERP*** avrà valorizzato i dati di due maschere: la prima è quella dello ***Storico ammortamenti***, dove avremo visibilità del dettaglio per area, cespite, anno e mese dei dati elaborati sul singolo cespite. Come per le altre maschere di storico, i dati di questa tabella non sono modificabili da parte dell’utente. La seconda maschera che è stata valorizzata sarà quella delle ***Registrazioni extracontabili di area***, nella quale fluentis avrà eliminato e ricreato una registrazione per anno che contiene il dettaglio mensile degli ammortamenti applicati, totalizzando i valori per sottoconto e centro


## ELABORAZIONE DATI CONTABILI
E' l’elaborazione che legge il consuntivo della ***Chiusura infrannuale*** che abbiamo preparato per andare a mensilizzare i dati e poi applicare i vari driver nell’ordine di ciclo. I parametri da inserire sono i soliti
- l’***Area*** di riferimento
- la ***Chiusura infrannuale*** da utilizzare
- gli eventuali ***Tempi di bilanciamento*** se si vogliono creare i conguagli sui conti da non utilizzare nel controlling
- la ***Data*** 
- l’***Anno*** dei dati da elaborare
- la ***Causale*** da utilizzare

La scelta della ***Chiusura infrannuale***, in realtà, non è obbligatoria: immaginiamo di aver importato da un foglio elettronico che ci siamo preparati esternamente i dati dell’area budget, dove quindi abbiamo le stime dei saldi per sottoconto e centro dell’anno prossimo. Potremo comunque calcolare su queste registrazioni extracontabili di budget i nostri driver, che saranno magari specifici per l’area budget, in modo da mensilizzarli opportunamente e farne poi un comparato rispetto ai consuntivi che ci arrivano dalla contabilità: in questo caso, quindi, non imposteremo la chiusura infrannuale perché saranno le registrazioni di budget l’origine dati da considerare.

Se invece stiamo elaborando i nostri consuntivi di una chiusura, si attiverà la possibilità di far valorizzare a ***FluentisERP*** le registrazioni automatiche di conguaglio, impostando se gestire quelle dei conti ***Infrannuali*** oppure sia di questi che di quelli ***Annuali***.

Si tratta di ricondurre, con registrazioni apposite, i dati dei sottoconti impostati come da non utilizzare nel controlling, visibili nella griglia in basso, rispetto a quelli rilevati anticipatamente con registrazioni extracontabili di area. 

:::tip Nota
Come già detto in altro punto della documentazione, le logiche di conguaglio potrebbero essere solo a livello di valori mantenendo le proporzioni dei centri già rilevati, oppure proprio di elisione del dato del controlling con registrazioni di storno per riportare la valorizzazione contabile sia di valore che di centro. Dalla griglia in basso sarà possibile, eventualmente, forzare il tempo e il tipo di bilanciamento da eseguire, sovrascrivendo la logica memorizzata al momento della creazione della chiusura infrannuale.
:::

Nel corso di queste elaborazioni, ***FluentisERP*** andrà anche a preparare una tabella mensilizzata con i soli dati per progetto/commessa, che sarà la base di partenza dell’elaborazione del consuntivo. Se l’elaborazione dei dati contabili gestirà tutti i driver dei tipi distribuzione da 01 a 12, infatti, l’elaborazione del consuntivo di progetto andrà ad applicare i driver specifici di progetto/commessa.

## ELABORAZIONE CONSUNTIVO DI PROGETTO
Questa procedura leggerà lo storico delle registrazioni elaborate nella procedura precedente che sono collegate a progetti, leggerà i dati da produzione (cioè lavorazioni interne ed esterne), in sostanza tutti i costi e ricavi diretti di progetto, per poi elaborare i driver dei tipi distribuzione da 13 a 18. Si vedano le spiegazioni disponibili nei ***Cost driver***. I campi da impostare sono:

- l'***Area*** da elaborare
- il range ***Da data*** e ***A data***
- un ***Codice*** e una ***Descrizione*** di questa elaborazione
- una ***Data*** da assegnare alle registrazioni create
- l'***Anno*** di riferimento del calcolo
- la ***Causale*** da utilizzare per la registrazione



