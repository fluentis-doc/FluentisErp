---
title: Contabilizzazione fatture di vendita
sidebar_position: 1
---

La procedura si apre tramite il percorso **Vendite > Fatture di vendita > Contabilizzazione > Contabilizzazione fatture di vendita**. 

Una fattura, per essere contabilizzata, deve soddisfare una serie di condizioni: nella sua testata deve aver impostato il flag *Stampata*, non di tipo *pro-forma* e il tipo fattura deve contenere la causale generale per la contabilizzazione.

### Contabilizzazione

La form presenta nella parte superiore i filtri di ricerca per individuare e visualizzare, nella griglia, la lista delle fatture da contabilizzare presenti nel sistema.

Alla base della form sono presenti alcuni parametri di gestione della contabilizzazione:

**Data registrazione uguale alla data documento**: questo flag impone la contabilizzazione di ogni singola fattura allo loro data di emissione.

Se il flag viene disabilitato, si attiva il campo successivo, **Data registrazione**, all'interno del quale è possibile impostare una data fissa di registrazione;

**Usa il cambio della tabella cambi**: con questo flag si impone al sistema di verificare la tabella cambi per utilizzare quello presente alla data registrazione/fattura (o l'ultimo inserito in precedenza).

Se il flag non è impostato sarà invece utilizzato il *cambio presente in testata della fattura*;

**Aggiorna cambio in documento**: il campo è attivo *solo* se il precedente flag è impostato. Il significato è quello di andare ad aggiornare anche il cambio presente in testata della fattura, sovrascrivendo quello presente;

**Comp. IVA = data documento**: il flag impone che la competenza iva dei movimenti sia uguale alla data fattura. Nel caso in cui si voglia sfruttare la possibilità di fatturare fino al 15 del mese successivo alla data spedizione (fatturazione differita), il flag va tolto per far si che la competenza iva sia ripresa dalla data inizio trasposto nel documento d'origine, così come previsto dalla normativa IVA;

**Contabilizzazione industriale**: il campo va settato per gestire contestualmente anche la contabilizzazione industriale. Il campo della **Causale contabile** che si abilita non è obbligatorio, in quanto associato al tipo fattura è codificato anche la causale industriale da utilizzare.

*Pulsanti specifici*: 
> **Ricerca fattura**: per cercare le fatture; vengono proposte tutte le fatture stampate e non contabilizzate.  
> **Contabilizzazione fatture**: esegue la contabilizzazione delle fatture selezionate, secondo le impostazioni definite.  

### PARAMETRI

In questa form si impostano alcuni elementi generali della contabilizzazione fatture.

**Contabilizzazione omaggi**: con questo flag si attiva la gestione della contabilizzazione omaggi, attivando i campi successivi collegati.  

1. Se la fattura che si sta contabilizzando presenta un omaggio e il parametro di gestione non è stato impostato, il sistema chiederà conferma all'utente con un avviso della mancata impostazione. In questa situazione sarà registrata la fattura normalmente senza alcuna gestione della riga omaggio, che andrà quindi gestita manualmente in contabilità.

2. Nel caso si sia attivata la gestione omaggi ma senza inserire alcun sottoconto nei campi successivi, il sistema andrà ad aggiungere in coda ai normali movimenti di contabilizzazione le necessarie righe di storno del ricavo, utilizzando lo stesso sottoconto impostato per l'articolo vendite.

3. Se invece è stato impostato il flag **Sostituisci il conto dell'articolo** si attiverà il campo dove impostare il sottoconto di storno acconti, che sarà utilizzato al posto del sottoconto dell'articolo in queste righe aggiuntive.

**Codice IVA per omaggi in registro iva**: compilando questo campo (generalmente con un codice iva corrispondente alla casistica del "fuori campo iva" o "escluso..." verrà eseguita automaticamente una riga di storno del valore dell'omaggio sul registro iva, laddove non venga esercitata la rivalsa iva nei confronti del cliente)

**Conto storno IVA**: usato nel caso in cui l'articolo omaggio in fattura non abbia il flag **Rivalsa IVA**, con il quale si indica se l'iva applicata all'articolo omaggio è a carico (con flag) o meno (senza flag) del cliente. Questo importo sarà registrato e stornato solo nel caso in cui sia inserito il *Conto di storno iva*, senza del quale l'operazione sarà da gestire manualmente in contabilità (anche in questo campo c'è un messaggio di conferma/avviso utente della mancata impostazione).

**Raggruppa conti delle righe automatiche**: con il flag attivo i conti inseriti automaticamente nella sezione del libro giornale (come ad esempio nella contabilizzazione omaggi dove il cliente compare più volte, una volta per il totale fattura e poi gli vengono stornati gli omaggi) verranno raggruppati per sottoconto formando una registrazione compatta.

**Sottoconto sconto finanziario**: questo campo viene utilizzato per registrare lo sconto finanziario collegato alla scadenza fattura.

*Pulsante specifico*: 

> **Salva parametri**: permette di salvare i parametri impostati per la contabilizzazione omaggi.

Dopo aver selezionato le fatture (dal tab *Contabilizzazione*) e impostato i parametri, le fatture possono essere contabilizzate con l'aiuto del pulsante *Contabilizzazione fatture*.

### Precedenti

a form presenta la lista delle operazioni di contabilizzazione eseguite, al fine di visualizzarle ed eventualmente annullarle attraverso gli appositi pulsanti.

L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale, registro iva non stampato, liquidazione periodica non stampata, chiusura conti non eseguita, partite contabili chiuse in un incasso o in un effetto).

**Contabilizzazione fatture**: griglia con i dettagli delle operazioni eseguite. Viene popolata dopo la procedura di ricerca e possono essere selezionate le operazioni sulle quale applicare le funzioni del ribbon.

I dati nelle griglie in basso, **Fatture** e **Registrazione contabile** corrispondono all'operazione selezionata nella griglia superiore. Un doppio click nella sezione delle fatture/registrazioni consentirà di visualizzare la fattura/la registrazione contabile relativa.

*Pulsanti specifici*:
> **Ricerca contabilizzazione**: ricerca la lista delle contabilizzazioni eseguite.  
> **Anteprima contabilizzazione**: per visualizzare l'anteprima di stampa della contabilizzazione.  
> **Ripristina contabilizzazione**: con questo pulsante sarà cancellata tutta la contabilizzazione effettuata, con tutte le fatture associate.  
> **Ripristina fattura**: il pulsante esegue il ripristino della singola fattura selezionata.  