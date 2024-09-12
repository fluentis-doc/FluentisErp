---
title: Parametri iniziali magazzino
sidebar_position: 2
---

Nella form di *Ricerca Parametri iniziali magazzino* selezionare la riga desiderata ed eseguire doppio click sulla riga o click sul pulsante *Nuovo*.

**Anno**: rappresenta l'anno per il quale si desidera impostare i parametri.

**Data ultima chiusura esercizio**: rappresenta la data in cui è stata fatta l'ultima chiusura di magazzino con ripresa saldi (vedi [Valorizzazione magazzino](/docs/logistics/physical-inventory/warehouse-valorization)). Nella maggior parte dei casi essa corrisponde al 31-12 dell'anno precedente. Il giorno successivo, quindi solitamente il 1° gennaio, vengono inserite le registrazioni di magazzino di carico per inventario iniziale, create automaticamente dalla procedura di *Valorizzazione Magazzino*, tramite l'utilizzo della causale di carico *Rimanenze*; questa causale deve avere il flag *Rimanenze* attivato.

Per ciascun magazzino presente nella società deve essere presente una e una sola causale di carico delle rimanenze iniziali. Le giacenze caricate con quella causale nel giorno di “apertura” del magazzino rappresentano le *giacenze iniziali* del magazzino stesso. Tutti i movimenti successivi a questa registrazione di carico saranno identificati come entrate o come uscite di magazzino a seconda che si tratti di carichi o di scarichi.

## Generali

**Modifica registrazioni di magazzino collegati con altri documenti**: consente di modificare le registrazioni di magazzino collegate con DDT di acquisto, fatture di acquisto, DDT di vendita, fatture di vendita, ecc. L'assenza di questo flag comporta il fatto che i documenti di magazzino creati sulla base di documenti di acquisto o di vendita non possono essere modificati. In questo caso apparirà un messaggio che mostra il fatto che la modifica non è possibile.

Per quanto riguarda la modifica registrazioni di magazzino da documenti teniamo presente che è possibile scegliere se modificare la quantità, modificare il prezzo, modificare entrambe o nessuna. Questo significa che quando un documento già registrato a magazzino, per esempio una DDT di acquisto, viene modificato, l'applicazione controlla se il flag Modifica quantità e il flag Modifica prezzi sono attivi oppure no; in caso affermativo la modifica eseguita nel documento viene trasmessa anche nella registrazione di magazzino con cui il documento è collegato, diversamente la modifica del documento non interviene sulla relativa registrazione di magazzino. È possibile attivare anche uno solo dei due flag. Inoltre, è possibile attivare anche la possibilità di inserire o cancellare i movimenti direttamente dal documento inserendo o eliminando le singole righe.

**Permetti contropartita distinta base incompleta**: se attivo, permette di poter modificare la distinta base del movimento di contropartita; se disattivato il movimento di contropartita verrà creato automaticamente per tutta la distinta base senza possibilità di modifica.

Il movimento di contropartita nasce da una seconda causale di movimentazione collegata alla principale, che opera sui componenti della distinta base; ad esempio, può essere utilizzata per gestire con i movimenti di magazzino i versamenti di produzione (lo scarico dei componenti di distinta base) o i disassemblamenti di materiale; quindi, nelle realtà più semplice permette di gestire i carichi di prodotti finiti e gli scarichi di componenti senza l’utilizzo del modulo della produzione.  

**Valorizza per magazzino**: permette di decidere se la chiusura di magazzino deve tenere in considerazione i costi medi (o ultimi, o standard, a seconda di quale tipo di costo si vuole utilizzare per la chiusura di magazzino) legati alle movimentazioni effettuate nel corso dell'anno sul singolo magazzino. Questo significa che se un articolo ha subito movimentazioni su 3 magazzini, per esempio, nel caso di flag attivo avrà 3 righe diverse nello Storico di Magazzino per l'anno per il quale si esegue la chiusura, con probabilmente 3 costi medi e 3 costi ultimi diversi.

**Permetti la modifica dei conti degli articoli già utilizzati**: consente di modificare i dati di “Fatturato acquisti” e “Fatturato vendite” di articoli che hanno già subito movimentazioni di magazzino. Se il flag è disattivato questa modifica è ovviamente impedita. 

**Gestione stato Ciclo di lavoro tramite Workflow**: se attivo, lo stato del ciclo di lavoro è modificabile solamente tramite Workflow.

**Controllo relazione Articolo/Fornitore tramite Workflow**: se attivo, il flag **Blocco riga** presente nel tab **Fornitori preferenziali** dell'anagrafica articolo è modificabile solamente tramite Workflow.

**Data inizio periodo e Data fine periodo**: permettono all'utente di definire il periodo entro il quale possono essere inserite e/o modificate e/o cancellate registrazioni di magazzino. Solitamente si imposta come data inizio periodo una data appena precedente rispetto alla data di ultima chiusura del magazzino, e come data fine periodo la fine dell'anno solare in corso. 

### Gestione lotti e numeri seriali

**Gestione lotti e numeri seriali**: permette di decidere se debbano essere consentiti movimenti di magazzino a lotti e/o a serial numbers. Se questo flag è disattivato, tutti gli altri flags presenti nel database che gestiscono opzioni relative a lotti e serial numbers risultano inefficaci.

**Lotti e SN obbligatori**: se attivato, obbliga l'utente ad inserire in tutti i documenti di acquisto e di vendita il lotto dell'articolo inserito nel documento stesso, sempre che l'articolo sia gestito a lotti o a serial numbers.

**Gestione stato lotto tramite Workflow**: se attivo, lo **Stato lotto**, i flags **Lotto vendibile** e **Chiuso** presenti in anagrafica lotti sono modificabili sololamente tramite Workflow. Stessa cosa vale anche per i flags **Annullato**, **Chiuso forzatamente** e **Prenotato** presenti in angrafica numeri seriali.

**Usa barcode movimenti**: se attivo, nelle righe dei movimenti di magazzino viene visualizzata la colonna **Barcode**.        


## Parametri chiusura

In questo tab è possibile decidere per quali **Magazzini** devono essere eseguite le chiusure per **Variante**, per **Ubicazione**, per **Lottie Serial Number**, per **Commesse di vendita** e per **Cliente/fornitore**. In pratica attivando uno di questi flag si decide che la registrazione di carico per inventario iniziale eseguita dalla procedura automatica di *Valorizzazione magazzino* deve essere creata tenendo conto dell'impostazione eseguita.

*Per ciascun magazzino è possibile abilitare le seguenti gestioni*:	

**Varianti**: se attivo, la chiusura e la ripresa delle giacenze terranno conto delle varianti;	

**Ubicazioni**: se attivo, la chiusura e la ripresa delle giacenze terranno conto delle ubicazioni;	

**Lotti e Serial number**: se attivo, la chiusura e la ripresa delle giacenze terranno conto dei lotti e S/N;	

**Commesse**: se attivo, la chiusura e la ripresa delle giacenze terranno conto delle commesse di vendita (progetti);	

**Cliente/Fornitore**: se attivo, la chiusura e la ripresa delle giacenze terranno conto del cliente/fornitore. 	

*Esempio*
Nel magazzino *Conto lavoro* solitamente si tiene attivato il flag sulla colonna *Cliente/Fornitore*, in quanto è utile che la procedura crei una registrazione di magazzino di carico per inventario iniziale sul magazzino conto lavoro per ciascun terzista; nei magazzini in cui vengono stoccate e movimentate merci gestite a lotti si consiglia di attivare il flag *Lotti e Serial Number*, così come sui magazzini in cui vengono stoccate e movimentati merci gestite a varianti si consiglia di attivare il relativo flag.


## Parametri giacenza

In questo tab è possibile decidere decidere per ciascun magazzino in che como debba essere gestita la *Giacenza*. 

**Permetti giacenza negativa**: consente di avere la giacenza di un articolo sottozero. Nel caso in cui il flag non sia attivato, il sistema impedisce sempre di salvare registrazioni di magazzino o operazioni di scarico che mandino sottozero la giacenza di qualsiasi articolo. Da precisare che se l'articolo è gestito a lotti o a serial numbers, attivare questo flag non significa avere la possibilità di mandarlo sottozero, in quanto l'articolo gestito a lotti o a serial numbers non può mai essere scaricato se la giacenza del lotto o del serial number che si vuole scaricare non esiste.

*Per ciascun magazzino è possibile abilitare le seguenti gestioni*:	

**Giacenza negativa**: permette in quel magazzino la giacenza negativa (solo se attivo anche il flag *Permetti giacenza negativa* nei *Parametri Generali*);

**Giacenza Ubicazione**: significa controllare la giacenza anche per l'ubicazione specificata nel movimento (se la giacenza per quell'ubicazione non è sufficiente, il movimento non è creato);

**Giacenza progetto**: significa controllare la giacenza anche per il progetto specificato nel movimento (se la giacenza per quel progetto non è sufficiente, il movimento non è creato); 

**Giacenza cliente/fornitore**: significa controllare la giacenza anche per il cliente/fornitore specificato nella registrazione (se la giacenza per quel cliente/fornitore non è sufficiente, il movimento non è creato. Può essere usato per i magazzini terzisti).

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).