---
title: Dichiarazione di intento
sidebar_position: 5
---

Da questa form è possibile inserire i registri per le dichiarazioni di intento ricevute o emesse per l'anno di riferimento, oppure ricercare ed entrare in modifica di quelli già presenti.

Premere il tasto **Nuovo** nella ribbon bar per inserire un nuovo registro, oppure, dopo aver premuto il tasto **Ricerca**, fare doppio click sul registro desiderato (o premere il tasto **Modifica** nella ribbon bar) per inserire nuove dichiarazioni di intento all'interno del registro selezionato.

 

 
### Testata Registro
La zona superiore della form corrispondente al registro riporta i dati del registro stesso, la zona sottostante accoglie invece i dettagli di ogni dichiarazione di intento riferita al registro.

**Registro dichiarazione**: nome del registro liberamente assegnabile;

**Tipo**: indica se il registro è di tipo cliente (dichiarazioni di intento ricevute dai clienti) o fornitore (dichiarazioni emesse nei confronti dei fornitori in virtù della condizione di esportatore abituale della società in uso);

**Data inizio / Data fine / Anno**: estremi di validità del registro.


---
### GESTIONE DEL GRUPPO IVA

:::tip Info: il gruppo iva
Con l’introduzione di tale norma, è stata prevista la possibilità, per le imprese collegate da interessi finanziari, economici ed organizzativi, di creare un gruppo unico, considerato come un solo contribuente (ai soli fini Iva) nei confronti del fisco. Esso sarà, pertanto, dotato di un unico numero di Partita Iva. Le imprese che fanno parte del gruppo fattureranno le operazioni verso terzi con una partita Iva comune, la partita Iva di gruppo. Invece le cessioni di beni e le prestazioni di servizi scambiati tra le aziende interne al gruppo non rileveranno ai fini dell’imponibile Iva. In conseguenza di ciò, tutte le operazioni effettuate da uno dei soggetti del gruppo sono considerate come effettuate dall’intero gruppo. La fattura e gli **altri documenti, INCLUSE LE DICHIARAZIONI DI INTENTO**, sono emessi dal rappresentante del Gruppo o dai partecipanti indicando sugli stessi oltre al numero di partita Iva del Gruppo anche il codice fiscale del soggetto partecipante che ha realizzato l’operazione.
:::

:::note **FLAG Gruppo iva**: 
abilita la possibilità di inserire dichiarazioni d'intento riferite ad un gruppo IVA. La sua attivazione non influenza l'inserimento di dichiarazioni ordinarie e se ne consiglia sempre l'attivazione.

**CAMPO SETTATO DI DEFAULT COME ATTIVO E DA NON DISATTIVARE, NASCOSTO SULLE VERSIONI FLUENTIS 2021 E SUCCESSIVE**
:::


**Campo Nomenclatura (nella griglia di dettaglio)**: il campo è rilevante ai fini della gestione del gruppo iva, viene valorizzato dall'anagrafica del gruppo iva inserita nel cliente o fornitore (tab informazioni fiscali) oppure è editabile manualmente per poter inserire il riferimento all'anagrafica del gruppo iva di appartenenza del cliente o fornitore;

---

 
### Dettaglio dichiarazioni di intento

**Per inserire le dichiarazioni di intento all'interno del registro scrivere direttamente nella griglia inferiore.**

**Data Protocollo**: campo non obbligatorio attivo solo per le dichiarazioni del registro di tipo clienti, inserire la data attribuita dal cliente nellla dichiarazione di intento;

**Prot**: campo non obbligatorio attivo solo per le dichiarazioni del registro di tipo clienti, inserire il protocollo attribuito dal cliente nellla dichiarazione di intento;

**Data Ns. Protocollo**: data protocollo attribuito internamente all'atto della registrazione della dichiarazione di intento nel registro, tale data vale come campo di riferimento per la validità iniziale per l'applicazione nei documenti di acquisto/vendita; (utilizzato anche se valorizzati i campi "rif identificativo e "rif progressivo") Si consiglia di valorizzarlo comunque anche nella gestione delle fatture clienti per la gestione tag della fattura elettronica.

**Ns. Protocollo**: protocollo attribuito internamente all'atto della registrazione della dichiarazione di intento nel registro (**ATTENZIONE:** NECESSARIO PER LA CORRETTA VALORIZZAZIONE DEL TAG DELLA LETTERA DI INTENTO NELLA FATTURA ELETTRONICA DI VENDITA);

**Conto / Sottoconto / Descrizione**: inserire qui il conto del soggetto intestatario della dichirazione di intento (cliente o fornitore);

**Nomenclatura**: il campo è rilevante solo nei registri che gestiscono il gruppo iva, viene valorizzata dall'anagrafica del gruppo iva inserita nel cliente (tab informazioni fiscali) oppure è l'anagrafica stessa del cliente, ma è editabile manualmente per poter inserire il riferimento all'anagrafica del gruppo iva di appartenenza del cliente;

:::danger Importante
**Data inizio / Data fine**: NON compilare questi campi per le dichiarazioni di intento in corso di validità. A seguito delle ultime modifiche normative non sono, infatti, più ammesse dichiarazioni di intento valide senza vincoli di valore per un determinato periodo. Pertanto affinchè venga correttamente rilevata la dichiarazione di intento e possa essere attivo il controllo sul limite di valore e la sostituzione del codice iva in fattura il campo non deve essere compilato. Nel caso in cui il cliente annulli la dichiarazione (o se ne annulli la validità ad un fornitore), sarà possibile indicarne la sola data di fine validità, a partire dalla quale verrà bloccata la lettura della dichiarazione per i documenti successivi;
:::

:::danger Importante
**Singola op. / Tot. Op.**: attivare in alternativa uno dei due flag a seconda che la dichiarazione di intento sia valida solo per una singola operazione oppure sia valida fino a concorrenza con il valore inserito nel campo seguente.
:::

**Importo**: inserire qui l'importo della dichiarazione di intento. Questo valore sarà controllato affinchè non venga superato dalla sommatoria dei totali delle fatture emesse in dichiarazione di intento a partire dalla data della protocollazione;

**IVA Plaf. / Descr IVA Plaf.**: inserire qui il codice iva di esenzione in virtù della vigenza della dichiarazione di intento. Questo codice iva sostituirà automaticamente all'aliquota ordinaria nel ddt/fattura fino a concorrenza del valore della dichiarazione di intento;

**IVA prec. / Descr IVA prec.**: inserire qui il codice iva ordinario che sarà sostituito dal codice iva inserito nel campo precedente;

**Annotazioni**: campo note libero;

**Dogana**: attivare il flag se la dichiarazione di intento si riferisce ad una importazione ed è stata emessa nei confronti della dogana;

**File Emesso**: flag popolato in automatico dalla procedura di esportazione del tracciato telematico delle dichiarazione emesse nei confronti dei fornitori. Seguito dai riferimenti del file creato (**Nome file** e **Cartella**)

**Rif. identificativo**: inserire qui la prima parte del protocollo telematico di trasmissione all'agenzia delle entrate della dichiarazione d'intento;

**Rif. progressivo**:  Inserire qui la seconda parte del protocollo telematico (progressivo di riga della dichiarazione all'interno della fornitura telematica; ad esempio 000001 nel caso in cui sia trasmessa un'unica dichiarazione d'intento);


N.B.
La modifica riguardante il protocollo telematico ha interessato sia la dicitura da riportare in stampa fattura sia il tracciato xml per la fattura elettronica, quindi verrà riportato in automatico al posto dei campi "Ns protocollo"/ "Vs protocollo".

E' consigliato comunque continuare a valorizzare  tali campi, assieme al campo “Data ns protocollo”, in quanto in mancanza dell'inserimento del protocollo telematico tali campi, verranno riportati comunque 


**Dettagli per il File**: abilita i successivi campi **Integrativa** (collegato a **Importo dichiarazione** - che viene integrata) e **Descrizione merce** che rappresentano possibili dati necessari per i tracciati emessi verso i fornitori. Si consiglia di fare riferimento alla normativa specifica sull'emissione delle dichiarazioni di intento.

### Creazione file telematico

Per generare il file telematico al fine di trasmettere le dichiarazioni emesse premere il tasto ***Esporta*** presente nella ribbon bar.


Il file generato verrà memorizzato nel documentale (aprire tramite il pulsante con la graffetta) e sarà possibile scaricarne una copia sul pc locale (tramite il comando ***Salva allegato***). 

 
### Gestione dichiarazioni multiple per singolo cliente / fornitore

**POSSIBILITA' DI AGGANCIO DELLA SINGOLA DICHIARAZIONE DI INTENTO NEI DOCUMENTI DI ACQUISTO/VENDITA**

E' possibile selezionare in modo specifico, soprattutto in presenza di più dichiarazioni valide contemporaneamente, quale dichiarazione agganciare al documento.

E' possibile selezionare la dichiarazione d'intento a cui fare riferimento tra quelle inserite, per un determinato DDT o fattura richiamandola dalla combo box "Dettaglio dichiarazioni", gestendo di conseguenza specificatamente la stringa riportata in stampa fattura e nel tracciato xml.

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image04.png)

 
### Stampe

**STAMPA DI CONTROLLO DEI VALORI RESIDUI DELLE DICHIARAZIONI DI INTENTO**

Sia dalla form di ricerca dei registri presenti, sia da dentro il registro selezionato (entrando in modifica) è possibile anche elaborare una stampa di controllo (denominata ***Verifica dichiarazioni di intento***) che riepiloga gli importi delle dichiarazioni di intento ricevute e il valore del fatturato per tenere sotto controllo i limiti ancora fatturabili per ogni dichiarazione.

E' presente un'ulteriore versione della stampa (selezionabile dalla tendina) denominata ***Verifica dichiarazione di intento con dettagli*** che riporta i dettagli di ogni singolo documento collegato con la dichiarazione.


### Gestione riferimento a lettere di intento anni precedenti

Può capitare di gestire questo caso: emettere una nota di credito ad un cliente facendo riferimento alla dichiarazione di intento dell'anno (o di un anno) precedente. 

Il Cliente può avere già emesso anche  una dichiarazione di intento nell'anno in corso. Ad esempio la nota di accredito può essere una correzione di una fattura dell'anno precedente per merce spedita sempre nell'anno precedente e quindi si deve inserire il riferimento alla dichiarazione di intento precedente.

Nella testata della nota di credito utilizzare i campi per i riferimenti alla fattura che viene rettificata:

Espandere la sezione **Tipo riferimento** e compilare **Riferimento FT** (un campo per il numero fattura e il successivo per la data fattura).

Fatto questo, le dichiarazioni di intento selezionabili dall'apposita combo box saranno **anche** quelle del registro dell'anno precedente (o comunque quello indicato nella data del riferimento)

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image06.png)

### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/rZM6NBOpIxQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>


