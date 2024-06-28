---
title: Struttura logistica
sidebar_position: 1
---

Questa tabella rappresenta la struttura logistica oggetto del sistema di pianificazione.

Si considera una struttura a tre livelli come descritta di seguito (a parte la fabbrica gli altri possono non esistere).

**Centri di distribuzione**

Sono le unità logistiche che servono direttamente i clienti finali tramite le scorte in essi presenti.
Queste vengono posizionate geograficamente in posizioni opportune in modo da ridurre il tempo di trasporto ai clienti finali.
Ciascun centro di distribuzione si rifornisce da un Hub intermedio o dalla fabbrica.

**Hub**

Sono unità logistiche che riforniscono i centri di distribuzione.
Vengono posizionate geograficamente in posizioni opportune in modo da ridurre il tempo di trasporto ai centri distribuzione.
Gli Hub consentono di mantenere elevato il servizio ai clienti finali riducendo il livello complessivo delle scorte nella rete di distribuzione.
Gli Hub si riforniscono da altri Hub o direttament dalla fabbrica.

**Fabbrica**

Si considera una sola fabbrica nella struttura logistica.
Questa rifornisce gli Hub o i centri di distribuzione.

Esiste pertanto una relazione cliente-fornitore tra le unità della struttura logistica (ogni unità logistica va comunque codificata sia come cliente che come fornitore).

I centri di distribuzione sono clienti e non fornitori nella struttura logistica, gli Hubs sono sia clienti (della fabbrica) che fornitori (dei centri di distribuzione), la fabbrica ha come clienti i centri di distribuzione o gli Hubs e non ha alcun fornitore (inteso come unità logistica).

I campi che definiscono una unità logistica sono i seguenti:

**Magazzino**

E' il codice magazzino associato all'unità logistica.
Ad eccezione della fabbrica, ogni unità logistica è identificata univocamente dal magazzino ad essa associato.
Alla fabbrica possono essere associati più magazzini e questi sono i soli che verranno presi in considerazone dal sistema di pianificazione, quindi altri magazzini associati alla fabbrica che non sono presenti in questa tabella verranno ignorati dalla procedura di pianificazione.

**Cliente**

Identifica l'unità logistica in modo univoco così come il codice magazzino.


**Fornitore**

E' l'unità logistica che fornirà la merce a questa unità logistica (cliente).
Si può solo selezionare come fornitore una unità logistica già codificata in questa tabella (non è possibile selezionare genericamente un fornitore dall'elenco fornitori).

Ciò implica che l'inserimento in questa tabella deve partire dallo strato più basso, cioè dalla fabbrica, per poi salire agli eventuali Hub ed infine ai centri di distribuzione.

Non è obbligatorio che tutti gli articoli presenti in una unità logistica vengano riforniti dalla unità indicata come fornitrice.
Questa rimane il fornitore preferenziale che verrà utilizzato nella creazione degli **ordini pianificati di trasferimento interni** generati dal sistema di pianificazione.

Nella tabella dei parametri DDMRP è possibile indicare un altra unità logistica fornitrice per quegli articoli che non vanno approvvigionati dalla unità fornitrice qui indicata.

**Fabbrica**

E' un flag che indica che il record si riferisce alla fabbrica (in questo caso il fornitore è vuoto).

Per la fabbrica sono possibili più record, uno per ogni magazzino che deve considerare il sistema di pianificazione.

**Priorità di pianificazione**

E' un valore maggiore o uguale a 0 e non superiore a 100.

I record associati alla fabbrica hano tutti valore 100 per convenzione Fluentis, le altre unità logistiche un valore inferiore.

Questo elemento serve ad indicare al sistema di pianificazione che ordine seguire nel processo di calcolo, infatti verranno pianificate prima le unità logistiche con valore più basso procedendo poi al crescere di tale valore e quindi pianificando per ultima la fabbrica, rispettando la catena di rapporti cliente-fornitore tra le unità logistiche, così come si fa nel caso di una distinta base partendo dall'alto e procedendo successivamente ai livelli inferiori.

Questo ordine è necessario perchè per conoscere i fabbisogni di un' unità logistica bisogna prima aver pianificato quelli delle sue unità clienti.

Ogni record cliente deve avere un livello priorità inferiore a quella della sua unità fornitrice.

**Lead time**

E' il tempo necessario per trasportare la merce dalla unità logistica fornitrice e viene espresso in giorni.

