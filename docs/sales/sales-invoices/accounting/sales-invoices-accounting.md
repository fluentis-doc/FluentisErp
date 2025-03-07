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

**Utilizzare la filiale aziendale per assegnare la divisione**: flag connesso al campo *Filiale aziendale di riferimento* presente nelle anagrafiche clienti e fornitori, dove è possibile associare il cliente/fornitore ad una filiale e, tramite questa, ad una *divisione* aziendale differente da quella in uso. Il presente flag fa scattare la verifica se nel cliente c’è una filiale di riferimento e, da questo link, verifica se c’è una divisione associata alla filiale in questione. In caso positivo registra la fattura attribuendola a quella divisione (anche se la fattura è attribuita alla divisione X la registrazione contabile sarà nella Y). Questa opzione agevola la redazione di bilanci per divisione in situazione dove la fatturazione avviene separatamente ma i risultati dal punto di vista di bilancio si vogliono aggregare presso una divisione principale.

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

### Messaggi di errore

Questi errori possono derivare, in alcuni casi da una errata gestione dei dati da parte dell’utente, ovvero mancano delle informazioni essenziali, in altri casi possono derivare da configurazioni o settaggi errati a livello di parametri o dati di base.

Gli errori di configurazione o mancanze nei dati di base si riferiscono perlopiù ad ambienti nei quali non è stata lanciata la procedura di Fast Start.

:::note[Messaggio]
La fattura con numero ... tipo ... anno ... di AAA S.p.a. non può essere contabilizzata perche **non esiste il conto di contropartita**.
:::

La contropartita contabile, nel contesto di una fattura di vendita o di acquisto, deve intendersi come l’indicazione del conto destinato ad accogliere il ricavo o il costo. 
Quindi, più in generale, la registrazione contabile di una fattura poggia normalmente su tre elementi essenziali che possiamo ricontrollare aprendo la [**causale contabile**](/docs/configurations/tables/finance/ledger-records-templates/ledger-records-templates) con la quale stiamo tentando di contabilizzare questa fattura.
Per verificare prima di tutto quale sia questa causale, passiamo dalla tabella dei [**tipi fattura**](/docs/configurations/tables/sales/invoices-type) dove è definito il collegamento.
Ecco dunque i tre elementi, il cliente o fornitore, l’iva ed il costo o ricavo, se manca uno di questi elementi la registrazione non sta in piedi.

Dentro la causale contabile, creata o modificata manualmente rispetto allo standard generato dal Fast Start potrebbe trarci in inganno se in apparenza sembra che il conto di ricavo sia stato definito come un conto fisso essendoci il codice di conto e sottoconto e pertanto dovrebbe usarlo e limitarsi a sostituire il conto generico del cliente con il sottoconto di dettaglio che prende dalla testata della fattura.

In realtà essendo impostato il criterio di lettura dell’imponibile sottoconto, il programma cerca in ogni caso il dato per la sostituzione, e lo cerca in primo luogo nella fattura, in secondo luogo nell’anagrafica cliente.

**Dunque per risolvere occorre definire nella fattura il dato del fatturato vendite, dato che potrebbe essere associato direttamente all’anagrafica articolo codificato.
In alternativa possiamo inserire in anagrafica cliente il conto di default. In questo modo la contabilizzazione automatica può funzionare.**

Nota: anche il criterio di lettura *Totale imponibile* nella causale contabile non può funzionare perché tenterebbe di leggere comunque la griglia iva della registrazione dove manca un dato obbligatorio che è sempre il conto di contropartita. Dunque non è prevista una modalità di contabilizzazione con sottoconto fisso, occorre gestire sempre il fatturato vendite e acquisto o le anagrafiche cliente fornitore.

:::note[Messaggio]
La fattura con numero ... tipo ... anno ... di AAA S.p.a. non può essere contabilizzata perche **la registrazione è bilanciata**.
:::

Al di la del significato più ovvio del messaggio, ovvero quello che impedisce, in relazione ai settaggi dei parametri della causale contabile, di salvare una registrazione dove il totale dare non quadra con il totale avere, un possibile motivo di questa situazione potrebbe essere legato ancora ad un errato settaggio della causale stessa, ad esempio la mancanza nello schema contabile della riga relativa all'iva e dunque in presenza di una fattura che contiene iva e dello scorporo eseguito dalla prima parte della procedura, non riuscirebbe comunque a generare una scrittura contabile (nella parte relativa al libro giornale) che possa bilanciare, generando l'errore.

Nota: il blocco è sottoposto a parametro ma si sconsiglia vivamente di disattivarlo per accettare scritture sbilanciate, se non in casi del tutto eccezionali, oppure temporaneamente per verificare volutamente il risultato (sbagliato) della contabilizzazione.

:::note[Messaggio]
La fattura con numero ... tipo ... anno ... di AAA S.p.a. non può essere contabilizzata perche **nel libro giornale ci sono 1 righe con un conto senza un sottoconto**.
:::

Questo messaggio (meno immediato nell'interpretazione) fa riferimento al fatto che il software non può salvare registrazioni dve non sia definito il sottoconto di dettaglio.

Tra i vari motivi per i quali questo potrebbe accedere, ovviamente legati al fatto che lo schema della causale contabile definisce i mastri (senza sottoconto di dettaglio) anche per quanto riguarda i clienti e fornitori, potrebbe trattarsi del fatto che all'interno dei [**parametri di contabilità**](/docs/configurations/parameters/finance/accounting-parameters) manca l'abbinamento tra il tipo conto (magari una nuova tipologia aggiunta) ed il mastro di riferimento. Tale parametro mancante impedisce l'esecuzione dell'automatismo che completa la scrittura contabile.

:::note[Messaggio]
La fattura con numero ... tipo ... anno ... di AAA S.p.a. non può essere contabilizzata perche **il valore delle partite non corrisponde al movimento contabile**.
:::

Questo messaggio solitamente corrisponde alla mancanza dell'indicazione delle condizioni di pagamento in fattura, pertanto la partita non può aprirsi e chiaramente si cre la differenza e si viene bloccati dal software.

La scelta di essere bloccati nella contabilizzazione è settabile in un parametro della causale contabile.

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/NgroQvVOgD8" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>