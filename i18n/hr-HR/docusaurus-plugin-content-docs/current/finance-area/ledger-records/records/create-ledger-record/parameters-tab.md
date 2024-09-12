---
title: Tab Parametri
sidebar_position: 8
---

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/parameters-tab/image01.png)

 

Il tabulatore ‘Parametri' è sempre presente in una registrazione contabile, riporta una serie di informazioni e parametri utili ma non strettamente necessari per l'inserimento di una registrazione. 

**Stato registrazione**: definitivo o provvisorio per la registrazione contabile in uso: la registrazione con stato ‘definitiva' continuerà ad essere modificabile (in tutto tranne che nella causale e divisa di riferimento) finché non sarà stato stampato in definitivo un libro fiscale obbligatorio oppure la stessa non sarà stata utilizzata in una chiusura automatica conti. L'uso dello stato ‘provvisorio' della registrazione (che andrà a togliere e disabilitare il protocollo IVA e a numerare negativamente da -1000 la registrazione) può essere utilizzato per rilevare in contabilità fatture da pagare in via anticipata oppure altri tipi di operazione periodica a manifestazione futura (tipo canoni posticipati). Entrare nella registrazione ad inserire nuovamente lo stato definitivo andrà a riassegnare automaticamente il numero della registrazione e il protocollo Iva valido per la data registrazione impostata (fatta salva la progressività dello stesso). Si ricorda che è presente una procedura di gestione registrazioni provvisorie che consente di gestire massivamente il passaggio a registrazione definitiva di un gruppo di registrazioni provvisorie selezionate.

I flag seguenti derivano dalla causale contabile: 

**Aggiornamento saldi**: deve essere sempre lasciato impostato, così come **Raggruppa registro IVA** (che semplicemente va a raggruppare o meno nel giornale le righe IVA riferite allo stesso sottoconto contabile);

**Aggiornamento automatico CDC, CDP e commesse**: può essere di interesse per alcuni tipi di registrazione manuale, per le quali l'utente sia normalmente vincolato ad una gestione manuale delle schede cdc/cdp: lasciando il flag inserito, infatti, l'applicativo andrà sempre a resettare le schede citate ad ogni modifica del dato d'origine del libro giornale, cosa che potrebbe causare la perdita appunto di tutti gli inserimenti manuali effettuati. Tale automatismo, anche con flag non inserito, è comunque presente all'atto dell'inserimento della registrazione: vale infatti per l'entrata in modifica della stessa. 

**In black list**: (OBSOLETO) consente di gestire il caso particolare degli acquisti extra-cee (con causale non IVA) da riepilogare nella dichiarazione operazioni con paesi a fiscalità privilegiata, collegando la registrazione attuale al movimento iva del DDT doganale dal quale leggere i valori da dichiarare.

**Data / Num. registrazione collegata**: campo obsoleto, si abilita quando è attivato il flag ‘Black list'. Serviva per le dichiarazioni black list, per legare la fattura del DDT doganale (che dava i valori da comunicare) alla registrazione del soggetto fornitore in black list.

**Data / Num. reg. collegata a nota di accredito**: campo obsoleto; nell'area vendite, quando si crea una nota di accredito, si può indicare all'interno del documento a quale fattura fa riferimento: 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/parameters-tab/image02.png)

Nell'immagine: campo per indicare il riferimento fattura all'interno della nota di accredito.

Quando si contabilizza la nota di accredito, Fluentis cerca di individuare la registrazione relativa a questa fattura di origine per compilare automaticamente questo legame anche a livello di contabilità (se sei in una registrazione manuale di una nota di credito, allora puoi anche impostare questi campi a mano). Utilizzato per lo spesometro (prima del 2017) quando aveva il limite dei 3000 euro, per stornare le note di credito dalla fattura e non comunicare l'operazione. Oggi non più in uso.

**AUDIT TRAIL**:

Sezione riferita al sistema di monitoraggio attività degli utenti e verifica delle modifiche ai dati integrato nel gestionale "Audit Trail".

**Data Creazione / Nome**: riporta la data e il nome dell'utente che ha creato la registrazione contabile in uso;

**Data ultima modifica / Nome**: riporta la data di ultima modifica e il nome dell'utente che ha modificato la registrazione contabile in uso;

**Data validazione / Nome**: Riporta la data e il nome dell'utente che ha validato la registrazione contabile in uso. Il campo deve tuttavia essere reso operativo tramite un cambio stati (da configurare quando richiesto) che vada ad impostare l'utente e la data di validazione. Con il campo compilato dal cambio stati la registrazione può essere resa non più modificabile.

**Conto Partner**: campo per inserire (tramite il widget di ricerca conti) un sottoconto già codificato in anagrafica; utile per memorizzare, ad esempio, il nome del fornitore estero in una DDT doganale, la quale viene solitamente inserita con riferimento ad un' anagrafica con dati generici per quanto riguarda il soggetto "dogana" (ciò al fine di recepire le ultime modifiche normative nello spesometro secondo le quali dal 2018 non è più consentito passare i dati della dogana  della quale spesso non si hanno riferimenti fiscali e si utilizza dunque al posto della partita iva il riempitivo XX-99999999, dove XX sta per il codice ISO internazionale della nazione del soggetto)

 

**La griglia sottostante,** visualizza l'eventuale registrazione automatica collegata a quella in uso: ad ogni modifica della prima, infatti, la procedura continuerà ad allineare la seconda secondo la logica delle causali automatiche.

RIBBON BAR: rappresenta il menu della Form in oggetto, ossia l'area nella quale è possibile effettuare delle azioni. La lista delle funzionalità possibili nel tab corrente è di seguito rappresentata:



| Funzione | Significato |
| --- | --- |
| Salva | Pulsante per salvare la registrazione. |
| Nuova registrazione | Pulsante per creare una nuova registrazione. |
| Parametri di inserimento | Richiama i parametri di inserimento della prima nota. |



| Funzione | Significato |
| --- | --- |
|  [Document Manager](/docs/guide/operations-with-data/document-manager)  | Pulsante per il collegamento alla gestione documentale. |






