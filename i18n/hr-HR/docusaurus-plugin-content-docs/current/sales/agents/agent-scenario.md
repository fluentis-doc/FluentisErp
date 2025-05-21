---
title: Scenario gestione agente - esempi
sidebar_position: 5
---

In questa pagina illustriamo alcuni esempi per comporre un possibile scenario di gestione agente.

Questo tipo di percorso è utile per capire i collegamenti tra le varie funzionalità e fare alcuni esempi di criteri di calcolo.

Seguiremo questa sequenza:

- Definizione delle fasce provvigionali
- Creazione anagrafica agente e relativa configurazione
- Abbinamento con i clienti
- Creazione dei documenti di vendita
- Incasso delle fatture
- Controllo maturazione delle provvigioni
- Liquidazione agenti
- Gestione dei compensi agenti
- Versamenti Enasarco e ritenute d'acconto (cenni)
- Elaborazione della certificazione delle ritenute d'acconto (cenni)

## Definizione delle fasce provvigionali

Uno dei criteri di calcolo delle provvigioni più utilizzati, e dal punto di vista didattico più interessante dei classici come una percentuale fissa o una percentuale a seconda del cliente, è rappresentato dalle *Fasce di sconto*.

Si vuole in pratica definire delle provvigioni decrescenti al crescere dello sconto che l'agente concede al cliente.

La particolarità nella configurazione di questo criterio, rispetto a quelli più semplici, risiede nella necessità di definire preventivamente delle fasce di sconto connesse con le relative percentuali provvigionali.

Per prima cosa dunque gestiamo la tabella **Definizione fasce provvigionali** (mettere link).

:::important[Importante]
**Prestare attenzione alla testata della maschera**: si consiglia di impostarla sempre visibile con il bottoncino pin in alto a destra. La testata infatti contiene un filtro fondamentale perla gestione della tabella: [***range sconto***](/docs/configurations/tables/sales/discount-range).

La tabella collegata di per se consente semplicemente la definizione delle tipologie abilitate, definendo il codice e descrizione e riconducendo ad un criterio predefinito tra quelli presenti, ma **nella testata della maschera in commento è necessario selezionare un range di sconto** per poter vedere o gestire il dettaglio relativo al range prescelto.
:::

Relativamente al range di sconto scelto, che può essere di tipo *Unico* (semplice), oppure in base alle *classi* articolo, alla *tipologia* dell'articolo o ad una sua *caratteristica* (tutti campi presenti nella base dati e legati all'articolo e quindi valorizzabili), oppure ancora ad una categoria merceologica a cui l'articolo appartiene, oppure ad un listino di vendita in cui l'articolo è inserito, possiamo definire i dettagli.

Se non selezioneremo alcun range di sconto la ricerca produrrà dei dati in sola lettura (non modificabili, in grigio).

In base al range di sconto comparirà un ulteriore filtro (a tendina) specifico, sempre nella testata.

A questo punto se ad esempio avessimo impostato un range di sconto sulla categoria merceologica ed ovviamente avessimo a sistema le nostre categorie (es. viteria, utensili ecc... ) per ognuna di queste categorie visualizzate sulla griglia di sinistra della nostra maschera, potremmo definire, sul pannello di destra, le fasce provvigionali.

Si procede inserendo un codice e descrizione, ad esempio la fascia da nessuno sconto al 10% possiamo codificarla 010 e nella descrizione, liberamente definirla "da 0 a 10%", a questo punto nei due campi seguenti definire le due percentuali del range, nel primo 0 e nel secondo 10.


:::important[Importante]
Prestare particolare attenzione a come si definiscono gli scaglioni, senza lasciare scoperture, tenendo presente , come si vede dalle label, che il range va da un valore **maggiore o uguale** a ... ad un valore **minore** di...
:::

Nel successivo campo **Valore** definiamo la **provvigione** dell'agente relativa alla fascia / range impostato e nell'ultima colonna selezioneremo la voce **Percentuale**, inquanto intendiamo percentuali provvigionali, ma potremmo anche commutare sulla voce *Valore* ed utilizzare il campo del Valore della provvigione in senso assoluto.

Se avessimo scelto un criterio di sconto Unico, non avremmo sulla sinistra alcun dettaglio ed andremmo direttamente a definire le fasce con i range percentuali validi sempre.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

Nell'immagine il 35% di sconto corrisponde ad una provvigione del 3%

## Creazione anagrafica agente e relativa configurazione

Nella creazione dell'anagrafica dell'agente, di cui riprendiamo solo i campi più importanti ai fini dell'esempio, rinviando alle [**pagine relative** per le fasi di base della creazione anagrafica, dopo aver impostato il [**criterio di maturazione delle provvigioni**, come ad esempio ad ordine confermato, oppure a fattura emessa, oppure ancora a pagamento avvenuto (decisamente il più utilizzato che riconosce la provvigione in proporzione all'incassato) e gli ltri campi di interesse fiscale e previdenziale quali la **categoria agente e la ritenuta d'acconto** (o regime di esenzione) ci occupiamo del calcolo della provvigione (il valore della provvigione) ed abbiniamo dunque al criterio di cui abbiamo detto.

Nel tab [**Provvigioni dirette**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions) oltre ai campi per un fisso retribuito ed una percentuale generale di provvigione per l'agente in questione, abbiamo la griglia di destra, dove andremo a selezionare il criterio delle **Fasce di sconto**.

**Prestare attenzione al campo della Priorità** anche per il fatto che di default l'anagrafica viene inizializzata con il criterio Anagrafica agente e priorità 1. Dobbiamo cancellare questo criterio, o meglio ancora porlo con una priorità più bassa, ad esempio 2, e con priorità 1 il nostro *Fasce di sconto*. In questo modo se il criterio specifico che ci interessa non dovesse trovare applicazione nel caso specifico avremo un criterio residuale che attribuirà la percentuale scritta in anagrafica agente nel campo adiacente di cui abbiamo detto.

:::danger[Attenzione]
Con un criterio "articolato" come *Fasce di sconto* e diversi altri, **è necessario definire il dettaglio premendo il pulsante sulla ribbon bar *Dettaglio percentuali selezionate***.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

**Nella maschera che si apre occorre selezionare nuovamente il range di sconto di riferimento per ottenere la comparsa delle fasce provvigionali.**

Il senso di aver premuto il bottone ed aperto questa maschera è che vedremo caricate le fasce che abbiamo già definito. Queste fasce sono dunque da intendersi come standard.

Possiamo pertanto accettare lo standard per questo agente, e dunque non fare alcuna modifica, oppure, tramite l'apposito radio button ***Provvigioni***, commutare la lettura su **Personalizzate**. Ecco allora che la colonna **Valore** diventa **modificabile** e possiamo definire valori validi solo per quell'agente.

Abbiamo inoltre il radio button ***Prezzo di riferimento*** con il quale definire se il prezzo di riferimento per il calcolo deve essere quello dell'anagrafica articolo, oppure quello specifico definito nella riga del documento di vendita.

:::danger[Attenzione]
Ricordiamoci di definire anche il range di **Date di validità**, quantomeno il campo Da data validità
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Abbinamento con i clienti

:::tip[Attenzione]
**In qualsiasi caso**, qualunque criterio di calcolo scegliamo, **l'agente va collegato con i clienti** sui quali dovrà maturare provvigione. 

Su ogni cliente può essere collegato più di un agente.
:::

Per il collegamento, in alternativa all'apertura delle varie anagrafiche cliente ed inserimento dell'agente nel tab [**Agenti**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) ci viene in aiuto il tool presente nella maschera **Assegnazione Agenti** (Home>Contatti>Assegnazione agenti).

Qui è possibile avviare la ricerca (dotata di vari filtri nella testata) che visualizza tutti i clienti ed al passaggio da una riga all'altra visualizzare, per ogni cliente, gli agenti eventualmente già associati.

Pertanto la procedura risulta utile anche e soprattutto per la manutenzione, ad esempio i casi di cessazione di un agente e subentro di un'altro.

Il pulsante di **aggiunta**, nella ribbon bar, ci permette di inserire il nostro nuovo agente su tutti i clienti desiderati. 

Gli altri pulsanti ci permettono, intuitivamente, le altre manovre quali sostituzione, cancellazione, aggiornamento date validità ecc... nei casi predetti di subentri e cessazioni ecc...

E' possibile anche inserire, in questo modo massivo, la percentuale di provvigione riferita al singolo cliente, ma non è il caso del nostro esempio dove ragioniamo in base alla scontistica.

## Creazione dei documenti di vendita

Il calcolo della provvigione nei documenti quali ordine, bolla e fattura (viene riportato nei passaggi di creazione del documento successivo dal precedente) avviene in automatico in base alle impostazioni definite sopra, il valore dello sconto che determina il valore della provvigione potrà avvenire in vari modi senza rappresentare un problema per il calcolo della provvigione.

Si rinvia alle procedure della [**definizione degli sconti**](/docs/sales/price-control/definition/) dell'area Vendite.

Nota: nella testata dei documenti di vendita viene evidenziato l'agente o gli agenti agganciati, ma per controllare il valore della provvigione calcolata (già a partire dal documento in questione) occorre spostarsi nel tab [**Articoli**](/docs/sales/sales-invoices/invoicing/sales-invoice) 

## Incasso delle fatture

Nel nostro esempio abbiamo impostato una maturazione a **pagamento avvenuto**, pertanto ai fini della possibilità di procedere alla liquidazione della provvigione, previa verifica della sua maturazione, **rileva la registrazione contabile di chiusura della** (o delle) **partita aperta** che si è generata con la [contabilizzazione](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) della fattura di vendita.

Nota: si ricorda che in caso di incasso tramite ricevuta bancaria rileva l'effettiva data di **maturazione** dell' effetto, data che potrebbe essere incrementata secondo un parametro presente nel modulo [Rischio Cliente](/docs/configurations/parameters/treasury/customer-risk-parameters).
(N. giorni oltre la scadenza per effetti presentati al salvo buon fine - N. giorni oltre la scadenza per effetti presentati al dopo incasso)

## Controllo maturazione delle provvigioni

Per la verifica della maturazione delle provvigioni e dunque la possibilità di liquidarle ed i risultati attesi, sempre considerando il criterio scelto sull'avvenuto pagamento (che rende questa verifica importante) possiamo utilizzare la stampa di riferimento, [**Provvigioni maturate**](/docs/sales/agents/reports/accrued-commissions).

Infatti la stampa è in grado di rappresentare in anteprima quanto è maturato d il valore della liquidazione che andremo a generare e poi liquidare attraverso la conversione in un compenso percipiente (l'agente è di per se un percipiente a fronte delle ritenute d'acconto).

Altre stampe del modulo invece sono utili per verificare più in dettaglio gli importi astrattamente dovuti ma non necessariamente maturati, quali [**Cedolini agenti**](//docs/sales/agents/reports/agents-payslip.md).

## Liquidazione agenti

La procedura di [**Creazione automatica liquidazione provvigioni**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) permette di elaborare il calcolo e di considerare liquidate le provvigioni che verranno incluse.

Da quel momento queste provvigioni non saranno più visibili eseguendo la stampa [**Provvigioni maturate**](/docs/sales/agents/reports/accrued-commissions) la quale continuerà a mostrare eventuali residui nel caso, ad esempio, di pagamenti parziali delle partite aperte o comunque di pagamenti parziali delle fatture interessate.
Questi residui saranno chiaramente liquidabili e confluiranno in un liquidazione successiva nel momento in cui le rispettive partite saranno chiuse mediante una registrazione contabile di incasso. Ricordiamo infatti che il nostro esempio prevede il criterio del pagamento avvenuto (pro quota rispetto agli incassi) e che sono possibili criteri diversi quali la semplice emissione della fattura, che renderebbe le provvigioni subito maturate, oppure criteri ancora più restrittivi quali il **pagamento totale** (disponibile solo se le provvigioni vengono gestite con il [**modulo amministrativo**](/docs/finance-area/maturity-values/maturity-values/commissions)).

:::note[Nota]
Con il metodo del *pagamento avvenuto* la selezione delle provvigioni da liquidare sarà sempre "tutto" *fino alla data*, non è possibile selezionare quello che è maturato in uno specifico range di date e non è previsto un collegamento con il campo della periodicità di liquidazione presente in anagrafica agente.

I range di filtro presenti nella procedura infatti sono riferiti alle date di ordini/bolle/fatture, non a livello di date di **pagamento**. 

Ciò è necessario perchè mentre per i documenti non c'è modo di aggiungerne di nuovi / modificare in periodi già liquidati, il discorso è diverso per i pagamenti: niente vieta di creare un pagamento con data registrazione in un periodo già chiuso in un calcolo liquidazione agenti (magari perché non non sono state riconciliate le banche o si è commesso un errore in una vecchia registrazione), dunque il dato verrebbe "perso" nei calcoli successivi.
:::

Poichè nella griglia di selezione degli agenti sulla sinistra risulta visibile il criterio di maturazione (pro memoria) nel caso in cui si necessiti di lavorare liquidando le provvigioni in relazione ad un determinato periodo di riferimento dei documenti emessi, con criteri diversi dal pagamento avvenuto (vedi nota sopra) è possibile utilizzare i filtri sulle date dei documenti presenti nell'area di destra nella form.

Dopo aver selezionato gli agenti, anche per gruppi in relazione a possibili diversi criteri di maturazione e dunque esigenze di filtraggio documenti, è richiesto , in basso a destra, di impostare una descrizione della liquidazione, la data è proposta come data odierna e non ha influenza sul filtraggio dati, contraddistingue unicamente la data di elaborazione della liquidazione, è necessario infine compilare il mese e l'anno di competenza della liquidazione ai fini del calcolo del minimale e massimale per il contributo Enasarco.

E' bene prestare attenzione alla compilazione del periodo inquanto, ad esempio (in caso di errata imputazione) se in un determinato trimestre non verranno reperite provvigioni liquidate all'agente (ad esempio perchè erroneamente imputate al periodo successivo), il software stanzierà comunque una liquidazione di soli contributi a carico ditta che devono essere versati.

Eseguendo il calcolo il software ritorna un messaggio di conferma oppure un avviso riferito agli agenti per i quali non dovessero essere state trovate provvigioni da liquidare.

Al termine, nel caso si voglia effettuare dei controlli, è possibile [**aprire la liquidazione**](/docs/sales/agents/agent-settlement/insert-settlement) con doppio click dopo averla [**ricercata**](/docs/sales/agents/agent-settlement/search-agent-settlement).

All'interno è possibile ottenere la lista elle fatture considerate per la liquidazione, per fare questo spostarsi sul tab **Fatture** e premere il bottone nella ribbon bar **Ricerca**.

Il risultato è rappresentato nelle due griglie inferiori di cui la prima mostra le fatture considerate (a livello di dati di testata) e la seconda il dettaglio delle righe fattura con le relative provvigioni.

**ATTENZIONE: si tratta del valore delle provvigioni astrattamente calcolate sulle singole righe della fattura, non necessariamente maturate nella liquidazione di cui il valore totale potrebbe differire inquanto parzialmente incassate.**

## Gestione dei compensi agenti

All'interno della liquidazione sono già inseriti i dati relativi alla ritenuta d'acconto ed alle quote a carico dell'agente (da trattenere e versare per suo conto) ed a carico ditta mandante del contributo Enasarco.

A questo punto utilizzando l'apposita procedura, dalla liquidazione [**creiamo il compenso**](/docs/sales/agents/procedures/create-professional-man-commission).

Il compenso creato automaticamente sarà ricercabile nel modulo amministrazione dei [**Compensi percipienti**](/docs/finance-area/professional-men/search-compensations/search-compensations-intro).

## Versamenti Enasarco e ritenute d'acconto 

L'inserimento automatico nel modulo percipienti attraverso il compenso consente anche la [**gestione del pagamento**](/docs/finance-area/professional-men/accounting/payments-accounting/payments-accounting-intro), sia che l'agente abbia emesso una fattura sia che la stessa sia una proforma, e gestisce automaticamente il debito verso l'erario per il [**versamento della ritenuta d'acconto**](/docs/finance-area/professional-men/procedures/model-f24/f24-management).

L'apposita procedura per la [**contabilizzazione del contributo enasarco**](/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro) da versare (sia a carico ditta sia trattenuta quota a carico agente) esegue la scrittura contabile che rileva il costo e il debito, il versamento fisico e la relativa scrittura contabile vanno eseguite manualmente.

## Elaborazione della certificazione delle ritenute d'acconto

Il percorso si conclude con [**l'elaborazione della certificazione per le ritenute d'acconto**](/docs/finance-area/declarations/declarations/withholding-tax-certification) operate nei confronti dell'agente.

Siamo ormai nel modulo amministrativo e si tratta di gestire un adempimento di tipo fiscale, quindi rinviamo i dettagli. Il cenno è utile per far capire come l'area vendite ed amministrativa siano collegati in questo caso a fronte delle caratteristiche dell'agente il quale, oltre alle necessità di calcolo delle provvigioni, subisce delle ritenute d'acconto e viene dunque fatto confluire nella gestione dei professionisti percipienti.