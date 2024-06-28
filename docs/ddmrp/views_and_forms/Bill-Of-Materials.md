---
title: Distinta base Ddmrp
sidebar_position: 8
---

Questa form visualizza la distinta base di un prodotto e differisce dalla form gestione distinte Fluentis poichè riporta delle informazioni che hanno senso solo in un ambiente Ddmrp (tramite questa form non è possibile modificare una distinta base).

Gli articoli che sono gestiti a scorta Ddmrp sono evidenziati tramite il simbolo del cestino a tre colori e per essi sono visualizzate informazioni specifiche quali ADU, DLT, Zona rossa, Zona gialla, Zona verde, Capitale circolante.

Questi valori sono quelli validi oggi come riscontrabili nel form dei **Parametri Ddmrp**, mentre per il capitale circolante qui si vuole solo evidenziare che il valore si riferisce all'articolo e non alla scorta necessaria per realizzare il prodotto di cui si sta visualizzando la distinta base, pertanto il valore è determinato dal fabbisogno di tutti gli articoli che necessitano del prodotto a scorta. Il valore del capitale circolante mostrato è relativo all'ultimo calcolo eseguito, pertanto se si vuole essere sicuri che sia aggiornato basta lanciare la relativa procedura di calcolo.

Da questa form è possibile lanciare la procedura [**Calcolo DLT (lead time disaccoppiato)**](/docs/ddmrp/procedures/DLT-calculation), la procedura [**Calcolo delle zone**](/docs/ddmrp/procedures/zones-calculation), la procedura [**Aggiornamento consumo medio giornaliero (ADU)**](/docs/ddmrp/procedures/ADU-update), la procedura [**Calcolo valori scorte**](/docs/ddmrp/procedures/inventory-value). 

La visualizzazione DDMRP della distinta è utile quando si fanno delle simulazioni per verificare le variazioni di DLT e di capitale circolante (utilizzare la stampa capitale circolante per una analisi più significativa).

Notare che per alcuni articoli che non sono delle scorte Ddmrp risulta comunque visualizzato il relativo DLT, questo accade per quegli articoli che sono evidenziati in rosso cioè quelli che si trovano sul percorso critico di qualche prodotto finito.

La ragione è che alcuni di essi sono stoccati nei centri di distribuzione, quindi per calcolare il DLT nei centri distribuzione bisogna sommare al tempo di trasporto dalla fabbrica il tempo necessario alla realizzazione dei prodotti.

Per alcuni articoli che non sono podotti finiti ciò è dovuto al fatto che per calcolare il DLT di un buffer Ddmrp la procedura deve necessariamente calcolare tale valore anche per gli articoli che si trovano sul "percorso critico" del buffer.

La procedura di calcolo DLT individua tutti gli articoli che si trovano sui perorsi critici di tutte le distinte base presenti nel sistema (quindi non solo quelle di articoli a buffer Ddmrp).

Nella visualizzazione distinte base Ddmrp, gli articoli presenti su qualunque percorso critico vengono evidenziati in rosso, pertanto nella visualizzazione di una distinta base ci possono essere più rami di distinta evidenziati in rosso, sia perchè il prodotto di cui si visualizza la distinta può avere più percorsi critici (i cui valori DLT sono quindi uguali), sia perchè alcuni rami sono pezzi di percorsi critici di altri prodotti.

La diminuzione del tempo di consegna disaccoppiato (DLT) del prodotto di cui si sta visualizzando la distinta base può essere ottenuta solo creando una scorta Ddmrp per uno degli articoli evidenziati in rosso che si trova sul percorso critico dello stesso (questa precisazione è necessaria poichè in alcuni casi ci possono essere più rami di distinta rossi, alcuni dei quali evidenziano percorsi critici di altri prodotti), pertanto questo tipo di visualizzazione rende semplice capire quali articoli messi a scorta possono portare ad una diminuizione del tempo di consegna del prodotto finito.

La visualizzazione del capitale circolante consente poi di capire quali scelte di posizionamento di scorte consente contemporanemente di ridurre il tempo di consegna e di minimizzare il capitale circolante impegnato per ottenere tale risultato (vedere stampa del capitale circolante).

Il costo unitario visualizzato per tutti gli articoli è quello utilizzato nell'ultimo calcolo del Capitale circolante mediamente investito nelle scorte Ddmrp (medio,ultimo,standard) e tiene conto solo dei costi dei materiali e delle lavorazioni esterne per il conto lavoro, cioè costi attribuibili solo a fornitori esterni (vedere la sezione relativa a tale calcolo).

Notare che per gli articoli di conto lavoro il costo unitario della lavorazione viene dedotto sottraendo al costo dell'articolo quello dei suoi figli di distinta base.

Moltiplicando questo per la giacenza media (zona rossa + zona verde/2) si ottiene il valore del capitale circolante mediamente investito nella scorta.

Si prega di notare che il valore del capitale circolante visualizzato nella distinta potrebbe non essere corretto poichè si riferisce agli ultimi valori trovati. 

Se infatti dopo tale calcolo sono variati i valori delle zone dei buffers, o è cambiato il valore del costo unitario, quanto visualizzato non è aggiornato.

Per essere sicuri di visualizzare il valore corretto ed aggiornato lanciare la procedura di calcolo costo capitale circolante (calcolo valori scorte).




