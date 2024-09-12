---
title: Comunicazione liquidazioni periodiche iva
sidebar_position: 4
---

Dalla presente form è possibile gestire l'adempimento fiscale (introdotto dall'art. 21-bis del D.L. 193/2016 a decorrere dall'anno 2017) che prevede l'invio telematico di una comunicazione dei dati riepilogativi delle liquidazioni periodiche iva (mensili o trimestrali).

Tramite il tasto **Ricerca** presente nella ribbon bar è possibile visualizzare la lista delle comunicazioni già elaborate. E' possibile modificarle (tasto **Modifica**) oppure eliminarle (tato **Elimina**) o semplicemente visualizzarle (tasto **Visualizzazione**).

Per inserire una nuova comunicazione premere il tasto **Nuovo**.

**PROCEDURA DI INSERIMENTO**:

- indicare l'**Anno** oggetto di comunicazione ed il numero del **Trimestre** da dichiarare. A questo punto il programma procederà a verificare se esite già una dichiarazione per questo periodo ed in caso negativo (in caso contrario viene visualizzato un avviso) procede a creare automaticamente il nome da assegnare al file telematico ed a visualizzare le tab relative ai tre mesi del trimestre con i relativi righi corrispondenti al modello ministeriale.

- compilare gli altri campi della testata:

  **Codice fiscale**: Nel caso in cui la società sia una società di capitali, sarà obbligatorio indicare il Codice fiscale della persona fisica che firma la comunicazione e il relativo Codice carica;

  **Dichiarante:** in alternativa alla compilazione del campo precedente (Cod. fiscale) è possibile selezionare il dipendente firmatario dalla combo box collegata alla tabella Dipendente, all'interno della quale deve essere già stato inserito il dipendente (Amministratore, Responsabile Amministratico ecc...) in questione completo di codice fiscale e codice carica;

  **Codice carica**: la combo box è collegata ad una tabella fissa con i codici definiti dal modello ministeriale;

  **Codice fiscale intermediario**: se ci si avvale di un intermediario abilitato per l'invio della dichiarazione (Caf, Commercialista ecc...) indicare qui il relativo codice fiscale.

  **Data dell'impegno:** capo per indicare la data dell'impegno alla presentazione telematica da parte dell'intermediario abilitato;

  **Partita IVA controllante:** (liquidazione iva del gruppo) Se la Comunicazione è presentata da parte di un ente o società commerciale che si sia avvalso nel trimestre della procedura di liquidazione dell'IVA di gruppo, indicare la partita IVA dell'ente o società controllante (anche nella Comunicazione presentata da quest'ultimo soggetto per la propria posizione individuale). Il campo va compilato anche nel caso in cui l'ente o la società con liquidazioni periodiche mensili sia fuoriuscito dalla liquidazione IVA di gruppo nel secondo o terzo mese del trimestre.

  **Liquidazione del gruppo**: barrare la casella nel caso in cui la Comunicazione si riferisce alla liquidazione dell'IVA del gruppo (vedere le istruzioni ministeriali).
Attivando questo flag per le società appartenenti al gruppo non verranno calcolati alcuni campi quali ad esempio iva da versare (inquanto versa la capogruppo).

NOTA: la comunicazione eseguita in questa modalità si appoggia sulla preventiva elaborazione della (nuova) funzionalità Liquidazione iva di gruppo, che va a calcolare i saldi iva delle varie società appartenenti al gruppo e li trasferisce alla capogruppo.

  **Ultimo mese**: In caso di sopravvenuta mancanza dei requisiti per avvalersi della procedura di liquidazione dell'IVA di gruppo, indicare l'ultimo mese di controllo (esempio “02” per il mese di febbraio - Vedere istruzioni ministeriali).

  **Firma:** campo **OBBLIGATORIO**, da mettere sempre.

  **Firma dell'incaricato:** da apporre se vengono compilati i campi relativi all'intermediario abilitato;

  **Impegno alla presentazione telematica**: la combo box è collegata ad una tabella fissa e va compilata, in caso di presentazione da parte di un intemediario, selezionando se il modello è stato predisposto dal contribuente o dall'intermediario stesso, in caso contrario lasciando la voce "nessuno".

- premere **Salva** per salvare i dati di testata.

- Premere **Calcola** trimestre per eseguire il calcolo dei dati dei tre mesi del trimeste. A questo punto i campi saranno compilati in automatico, tuttavia è sempre possibile editarli manualmente per eventuali correzioni. Attenzione: se verrà premuto nuovamente Calcola verranno ripristinati i dati calcolati dal sistema.

- Premere il tasto **Esporta** per generare e memorizzare nella gestione docuumentale di Fluentis il file telematico in formato .xml. Sarà quindi possibil selzionarlo premendo il tasto della gestione documentale direttamemte dalla form in commento e procedere a salvare una copia del file sul proprio pc per l'invio telematico o la trasmissione all'intermediario abilitato. E' possibile anche procedere ad una stampa cartacea (o visione in anteprima) dei dati su modello ministeriale.

**ATTENZIONE**:

La corretta elaborazione dei dati proposti dalla procedura di calcolo, in modo che siano conformi al risultato delle varie** [liquidazioni periodiche iva](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement) **,  dipende in particolare dalla corretta attivazione / abilitazione, ai fini del calcolo, dei vari codici iva utilizzati nelle registrazioni contabili.

Per verificare il corretto settaggio aprire la tabella ** [aliquote / modialità iva](/docs/configurations/tables/finance/vat-rates) ** e verificare in particolare la colonna relativa al flag in dichiarazione iva.

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image01.png)

Con il flag attivo il codice iva selezionato sarà incluso nel calcolo e riportato nel modello fiscale, mentre con il flag disattivato i valori non saranno inclusi.

Tipicamente tutti i codici iva ordinari vanno sempre inclusi. I codici iva di esclusione (es. ex. art 15 dpr 633 / 72) invece NON vanno inclusi. Vanno invece inclusi i codici di non imponibilità (es. per operazioni intra-comunitarie o in reverse charge).

**N.B.** secondo le istruzioni ministeriali fanno eccezione i codici di esclusione relativi "alle operazioni (attive) non soggette per carenza del presupposto territoriale di cui agli artt. da 7 a 7-septies per le quali è obbligatoria l’emissione della fattura in base alle disposizioni contenute nell’art. 21, comma 6-bis" i quali VANNO inclusi nel dichiarativo (rigo VP2).

Si consiglia di fare riferimento alla normativa iva ed alle istruzioni ministeriali relative alla dichiarazione iva annuale (o ad uno degli altri modelli di dichiarazione di dati iva che seguono la stessa "logica") per la corretta individuazione del trattamento delle varie casistiche.

A titolo di esempio l'errato settaggio, escludendo ad esempio un codice di non imponibilità, determinerà una corrispondenza tra il modello e le liquidazioni periodiche relativamente all'imposta, ma ci sarà una differenza nei valori relativi agli imponibili (più bassi nella comunicazione rispetto alle liquidazioni).

---

**NOTA:**
Il calcolo del campo VP2 (nel caso in cui si voglia effettuare un confronto e riconciliazione con le liquidazioni iva ed i dati contabili) considera questi tipi movimento:
Iva Vendite regime Normale
Iva Vendite IntraCEE
Iva Vendite ExtraCEE
Vendita con iva in sospensione
Corrispettivi
Vendite Regime Agricolo
Iva vendite con split payment

**Vengono pertanto automaticamente esclusi i dati di imponibile lato vendite (derivanti da giroconto automatico sui registri vendite) riferiti agli acquisti intra-comunitari ed in reverse charge.**
Ciò coerentemente con le istruzioni ministeriali.

---

**NOTA TECNICA:**

per l'esportazione xml è necessario:

- che si attivo il servizio di windows sul server Artinfo Bizlink connector

- che sia creato il connettore ComunicazioneIvaTrim da configurare come nell'immagine seguente

- che esista la cartella fisica di output (sul server) configurata nel connettore (esempio "Outgoing")

- che esista nella Tabella di Fluentis **Tipi Documento** il tipo **Other Documents** configurato come nell'immagine seguente.

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image02.png)

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image03.png)

---

### VIDEO TUTORIALS

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

