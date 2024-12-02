---
title: Struttura logistica (Supply Chain)
sidebar_position: 1
---

Fluentis DDMRP è in grado di gestire non solo una fabbrica ma una intera supply chain composta da fabbrica e vari hub e centri di distribuzione.

Questa tabella rappresenta la struttura logistica, cioè la supply chain, su cui deve agire Fluentis DDMRP.

In Fluentis denominiamo ciascun nodo della supply chain una "Facility" e questa è la tabella delle Facilities.

Si considera una struttura a livelli come descritta di seguito.

**Centri di distribuzione**

Sono le unità logistiche che servono direttamente i clienti finali tramite le scorte in essi presenti.

Queste vengono posizionate geograficamente in posizioni opportune in modo da ridurre il tempo di trasporto ai clienti finali.

Ciascun centro di distribuzione si rifornisce da un Hub intermedio o direttamente dalla fabbrica.

**Hub**

Sono unità logistiche che riforniscono i centri di distribuzione.

Vengono posizionate geograficamente in posizioni opportune in modo da ridurre il tempo di trasporto ai centri distribuzione.

Gli Hub consentono di mantenere elevato il livello di servizio ai clienti finali riducendo il livello complessivo delle scorte nella rete di distribuzione.

Gli Hub si riforniscono dalla fabbrica o, in reti molto estese, da altri Hub.

**Fabbrica**

Si considera una sola fabbrica nella struttura logistica.

Questa rifornisce gli Hub e/o i centri di distribuzione.

Esiste pertanto una relazione cliente-fornitore tra le unità della struttura logistica (ogni unità logistica va comunque codificata sia come cliente che come fornitore).

I centri di distribuzione sono clienti e non fornitori nella struttura logistica, gli Hubs sono sia clienti (della fabbrica o di altri hub) che fornitori (dei centri di distribuzione o di altri hub), la fabbrica ha come clienti i centri di distribuzione o gli Hub e non ha alcuna unità logistica fornitrice.

I campi che definiscono una unità logistica sono i seguenti:

**Magazzino**

E' il codice magazzino associato all'unità logistica.

Ad eccezione della fabbrica, ogni unità logistica è identificata univocamente dal magazzino ad essa associato (scelta effettuata per aumentare il grado di compatibilià con applicazioni esterne).

Alla fabbrica invece possono essere associati più magazzini e questi sono i soli che verranno presi in considerazone da parte del sistema Ddmrp per gli articoli buffer di fabbrica, quindi altri magazzini usati in fabbrica che non sono presenti in questa tabella non devono contenere buffers Ddmrp poichè verrebbero ignorati dal calcolo NFP.

I magazzini di questa tabella che non sono contrassegnati di fabbrica, verranno ignorati dalla procedura MRP, in quanto sono dei magazzini di distribuzione merce e non di produzione, ed andranno pianificati singolarmente tramite il calcolo della posizione di flusso netta (NFP), sempre dal menù di esecuzione dell'MRP.
 
In Fluentis Ddmrp ci si riferirà all'unità logistica Fabbrica tramite un codice magazzino vuoto, proprio perchè è l'unica unità logistica alla quale sono associabili più magazzini e quindi si perde la relazione di biunivocità tra magazzino ed unità logistica.

**Cliente**

Identifica l'unità logistica in modo univoco così come il codice magazzino, pertanto ogni unità logistica deve avere un conto cliente ad essa associato. 

Se la stessa risulta fornitrice di qualche altra unità logistica allora dovrà avere anche un conto fornitore associato.

Lo stesso codice cliente non può quindi essere associato a più magazzini (a eccezione della fabbrica), così come lo stesso codice magazzino non può essere associato a più codici cliente.

**Fornitore**

Il suo valore individua l'unità logistica che fornirà la merce a quella individuata dal codice magazzino e/o codice cliente del record.

Solo per i record associati alla fabbrica (flag Fabbrica selezionato), questo campo non è editabile e rimane vuoto, poichè la fabbrica non può essere rifornita da un'altra unità logistica.

Si può selezionare come fornitore solo una unità logistica già inserita in questa tabella (non è possibile selezionare genericamente un fornitore dall'elenco fornitori).

Il sistema verifica il codice cliente associato al codice fornitore e quindi ricerca tale codice cliente nel campo cliente dei vari records della tabella Facilities, quindi una unità logistica fornitrice deve avere associati sia un codice cliente che un codice fornitore.

Ciò implica che l'inserimento in questa tabella deve partire dallo strato più basso, cioè dalla fabbrica, per poi salire agli eventuali Hub ed infine ai centri di distribuzione, pertanto l'inserimento avviene per livelli di priorità decrescenti.

Non è obbligatorio che tutti gli articoli presenti in una unità logistica vengano riforniti dalla unità indicata come fornitrice.

Questa rimane il fornitore di default che verrà utilizzato nella creazione degli **ordini interni pianificati** generati dal sistema di pianificazione e per il calcolo del lead time disaccoppiato (DLT).

Nella tabella dei parametri DDMRP degli articoli si possono definire delle eccezioni, indicando un' altra unità logistica oppure un generico fornitore esterno alla struttura logistica e relativo tempo di trasporto.

**Magazzino fornitore**

E' il codice magazzino associato alla unità logistica fornitrice del record selezionato; questo valore consente una ricerca rapida in questa tabella tramite il campo Magazzino.

Nel caso il fornitore sia la fabbrica, questo campo risulta vuoto poichè la fabbrica è l'unica unità logistica alla quale è possibile associare più di un magazzino.

**Fabbrica**

E' un flag che indica che il magazzino del record si riferisce alla fabbrica (in questo caso il fornitore è vuoto).

Per la fabbrica sono possibili più record, uno per ogni magazzino che deve considerare il sistema di pianificazione.

Dopo aver inserito il primo magazzino con flag Fabbrica attivo, per i successivi verrà controllato che il codice cliente sia lo stesso dei record con flag fabbrica attivo perchè ovviamente alla fabbrica sarà sempre associato un solo codice cliente (ed un solo codice fornitore).

**Priorità di pianificazione**

E' un valore maggiore o uguale a 0 e non superiore a 100.

I record associati alla fabbrica hano tutti valore 100 per convenzione Fluentis, le altre unità logistiche un valore inferiore.

Questo elemento serve ad indicare al sistema di pianificazione che ordine seguire nel processo di calcolo, infatti verranno pianificate prima le unità logistiche con valore più basso procedendo poi al crescere di tale valore e quindi pianificando per ultima la fabbrica, rispettando la catena di rapporti cliente-fornitore tra le unità logistiche, così come si fa nel caso di una distinta base partendo dall'alto e procedendo successivamente ai livelli inferiori.

Questo ordine è necessario perchè per conoscere i fabbisogni di un'unità logistica bisogna prima aver pianificato quelli delle sue unità clienti.

Ogni record cliente deve avere un livello priorità inferiore a quella della sua unità fornitrice.

**Lead time**

E' il tempo necessario per trasportare la merce dalla unità logistica fornitrice e viene espresso in giorni.

**Causale di prelievo da facility fornitore** 

E' la causale di magazzino che verrà utilizzata per evadere un ordine interno, ovvero per prelevare la merce da questa facility e spedirla alla facility che ne ha fatto richiesta e deve essere stata associata al magazzino per poter essere selezionata nella fase inserimento record.

**Causale di versamento nella facility cliente**


E' la causale di magazzino che verrà utilizzata per caricare merce a seguito di un ordine interno, ovvero per versare la merce in questa facility proveniente dalla facility che l'ha fornita e deve essere stata associata al magazzino per poter essere selezionata nella fase inserimento record.



