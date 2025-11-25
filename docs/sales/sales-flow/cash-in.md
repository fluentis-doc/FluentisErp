---
title: Generazione incasso anticipato da ordine cliente
sidebar_position: 7
---

Per fare un incasso anticipato su della merce ordinata dal nostro cliente non occorre creare una fattura proforma ma bisogna partire dal modulo vendita dalla maschera Ordine cliente.

**Fase 1**
Creare un nuovo ordine (deve essere inserito un articolo codificato)
Nel tab testata compilare i campi:
> - tipo ordine
> - cliente
> - inserire data consegna e data merce pronta
> - confermato e data conferma
> - Attivare il flag “stampato”

Nella sezione inferiore TAB Pagamenti inserire tipo pagamento ANT (anticipo) al posto del tipo pagamento proposto dall’anagrafica. Mi sposto nel tab Articoli e devo obbligatoriamente inserire un articolo codificato altrimenti la procedura non funziona. Inoltre nella riga articolo, il campo “Fatturato vendite” dovrà essere compilato.
Salvo l’ordine.

Vado nella sezione riepiloghi, in basso apro la sezione “riepilogo scadenze”
Seleziono la riga nella griglia. Nella ribbon bar uso il tasto creo partita d’anticipo.

Si apre la finestra di “creazione partite d’anticipo” indico il tipo documento (GEN per rimanere generici) e inserisco una descrizione ad esempio “ordine … incasso anticipato”.

**Fase 2 Registro l’incasso anticipato**

Entro nel modulo amministrazione e creo una Nuova registrazione contabile. Nella causale inserisco: incasso o incasso bonifico, in base a quello disponibile.
> - Nella ribbon bar utilizzo il tasto “Ricerca partite”, con doppio click seleziono la partita creata dall’ordine.
> - Mi sposto nel Tab Registrazione e a libro giornale nella descrizione “depositi bancari” inserisco la mia banca.
> - Salvo.
> - Dopo aver salvato esce una finestra di richiesta creazione della fattura d’anticipo. Fare si.

**Fase 3 Gestione partite di anticipo**

Entro nella tab “Gestione anticipi”, Tasto Ricerca e seleziono la riga dell’ordine di interesse. Nella ribbon bar premo il pulsante “Fatturazione anticipi”
Si aprirà la finestra “creazione partita d’anticipo”. Inserisco nei vari campi il Tipo di fattura (fatt. vend. Anticipo…), l’iva e il tipo fatturato vendite (“anticipi da clienti” o simile). Invio.

**Fase 4**
Dopo aver inviato, in automatico si apre la fattura d’anticipo appena creata. Si ricorda che senza il flag Stampata non si contabilizza la fattura
Nel TAB pagamenti eliminare il pagamento proposto dall’anagrafica (esempio bonifico, riba, etc.), lasciare SOLO la riga con tipo pagamento ANT (anticipo). Salvo.

**Fase 5 Contabilizzare la fattura**
Nel modulo Vendite nella maschera Fatture di vendita andare nella procedure e contabilizzare la fattura appena creata !!! Potrebbe apparire errore. Bisogna controllare se nel “tipo fattura” che si sta utilizzando nei parametri della causale è disabilitato il flag:
Fase 6 Creare una nuova fattura di vendita
Nuova fattura di vendita Selezionare tipo fattura una qualsiasi fattura di acconto
Inserire il cliente Nei pagamenti inserire sempre il tipo ANT(anticipato) al posto di quello proposto dall’anagrafica.

Nella ribbon bar usare la procedura “Evasione da ordini clienti
Selezionare l’ordine e Fare Trasferimento col tasto nella ribbon bar
Salvo.
Mi sposto nel tab Articoli devo controllare che nella griglia l’articolo abbia inserito nel campo “Fatturato acquisti” l’apposito conto altrimenti mi darà errore alla fine. In alto nella ribbon bar appare il pulsante gestione acconti. Nel caso non apparisse chiudere la scheda della fattura e rientrare.
Nella maschera gestione acconti spostarsi nel TAB storno acconti.
Seleziono la riga di interesse premo pulsante nella ribbon bar “Crea storno”
Nella ribbon bar si abiliterà il pulsante “Crea chiusura lavori”
Chiudo la fattura e contabilizzo la fattura con la solita procedura di contabilizzazione.
