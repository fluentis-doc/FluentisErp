---
title: Patch notes Versione 605
sidebar_position: 1
---


## Patch 605.1-0013: 23/09/2022

> - FI: chiusura automatica conti: wrong calculations (#TT02397/22)      
> - ARM: fix per allegati workflow      
> - ARM: New Table Validation: Il vecchio schema non deve essere nullo quando il nome della vecchia tabella non è vuoto.      
> - CO: Anomalia calcolo bilanci riclassificati (#TT02427/22)      

## Patch 605.1-0012: 15/09/2022

> - SD: Nella duplica fatture di vendita, ora si riporta anche la categoria agente se presente (#TT02409/22)      
> - Allineamento dell'esportazione di CashFlow alle nuove funzionalità      
> - Extradata: Extradati basati sulle fonti di dati con caso di propagazione      
> - FI: Cambiamento logica romena per 390      
> - SD: Corretto l'errore quando si cerca di aprire gli elementi della scheda su SalesDeliveryNote (#TT02485/22)      
> - SH: Datasrouces: rimozione la proprietà "AdvancedClass" non utilizzata dall'interfaccia utente      
> - CO: chiusura automatica conti: wrong calculations (#TT02397/22)      
> - FI: modifica stampa libro cespiti ammortizzabili in Fluentis2021 per gestione della visualizzazione cespiti venduti/distrutti (#TT02000/22)      
> - MPS: Fix MPS Definition: problema filtro Data (#TT02502/22)      
> - FI: ricalcolata l'IVA e le griglie del libro mastro quando viene modificato il tasso di cambio di registrazione (#TT02481/22)      
> - SCM: NIr: Correzione il time out all'apertura del modulo di modifica (#TT02512/22)      
> - CRM: risolta creazione attività da attività sospese inserite nel Workflow (#TT02480/22)      

## Patch 605.1-0011: 09/09/2022

> - Risolto il bug del parser datetime sul riferimento allo script      
> - Risolto il bug dell'aggiornamento della regione di Blockly      
> - SCS: Bug Fixed: Corretta la selezione singola e multipla nell’help dei serial number nei DDT di conto lavoro.      
> - SH : company: aumentata la dimensione per SHC_PostalCode a 10 caratteri e SHC_VATOffice a 50 caratteri (#TT02238/22)      
> - PM: valorizzazione interventi, gestito il raggruppamento righe invoice plan in fattura anche in base al flag "prezzo ivato" in fattura. (#TT02309/22)      
> - FI: chiusura automatica conti (#TT02397/22)      
> - Aumentati i tempi di '2xTap' e aggiunte correzioni per lo scheduler 'Xamarin'      
> - FI: scritture di assestamento: risolta eccezione uscente cercando di controllare calcolo assestamento' (#TT02401/22)      
> - Fi: risolta anomalia in contabilizzazione compensi con valori negativi, con flag disabilitato per l’inversione segni per valori minori di zero. (#TT02356/22)      
> - CO: revisione gestione ripresa ore progetto per convertire secondo le impostazioni della UM (#TT02157/22)      
> - FI: Dichiarazioni 300 e 3xx: modifiche per la logica RO (#TT02431/22)      
> - Corretta la creazione di DDT da Picking in alcuni casi (#TT02416/22)      
> - FI, SCM: Errore nell'assegnazione delle fatture di acquisto elettroniche alle registrazioni (#TT02350/22)      
> - FI, SCM: Collegamento xml acquisto a registrazioni contabili (#TT01403/22)      
> - SCM: Problema di arrotondamento nella registrazione del libro mastro nella contabilità delle fatture d'acquisto per RO (#TT02445/22)      
> - SD: nella fatturazione elettronica italiana, nello step 'Controllata' è stato inserito un nuovo controllo sulla presenza di cod iso e partita iva del 'cedente prestatore' delle autofatture (sia nell'anagrafica principale che nel suo eventuale indirizzo alternativo di tipo 'rappresentante fiscale') (#TT02411/22)      
> - CO: revisione filtro DDT di acquisto in Valorizzazione area acquisti/vendite (#TT02258/22)      
> - PR: risk management: aumentata la dimensione di RSUE_Descr1 a 80 caratteri (#TT02392/22)      
> - Bizlink: Export cash flow per DocFinance: Fluentis2021 (#TT02451/22)  

## Patch 605.1-0010: 31/08/2022

> - SD: Bug fixed: corretto bug nell'aggiornamento della commessa di produzione al variare dei dati presenti nell'ordine cliente (#TT02232/22)      
> - CO: nel controlling, revisione calcolo ‘Ripresa costi di commessa’ per Fluentis2021      
> - SCS: Evasione commessa di conto lavoro      
“SCS : Corretta l’evasione delle commesse di conto lavoro, la commessa diventa evasa una volta che l’ordine di conto lavoro risulta in stato “Evaso” o “Forz. Evaso”.”
> - SCM: Evasione commessa di acquisto       
“SCM : Corretta l’evasione delle commessa di acquisto, la commessa diventa evasa quando tutti i documenti generati da essa risultano in stato “Evaso” o “Forz. Evaso” (R.D.A. e Ordini fornitore).”      
> - PM: risolta anomalia su rollback fatture generate da interventi, riassegnava lo stato "controllato" a tutti gli interventi non fatturati, non solo a quelli oggetto del rollback (#TT02233/22)      
> - PM: risolta anomalia su rollback fatture generate da interventi, riassegnava lo stato "controllato" a tutti gli interventi non fatturati, non solo a quelli oggetto del rollback (#TT02233/22)      
> - PM: negli interventi, per le spese sostenute è stata aggiunta la visualizzazione in anteprima degli allegati (#TT02187/22)      
> - PM: negli interventi, compilando il campo "descrizione attività svolta" di un servizio, se si superava il max dei caratteri ammessi il campo veniva resettato. Sostituito ora con blocco inserimento senza reset del campo (#TT02186/22)      
> - ARM: Aggiunto indirizzo di invio default per le email inviate con un’azione di Workflow. Se non valorizzato, verrà utilizzato l’indirizzo email dell’operatore che effettua l’avanzamento del WF      
> - PM: variando i campi "tempo effettivo" ed "arrotondamento" nell'invoice plan di un intervento, il campo quantità non veniva ricalcolato. Risolto. (#TT02067/22)      
> - PM: inserimento nuova attività per risorsa, la data proposta in automatico considera l'orario lavorativo per la risorsa, proponendo eventuali fasce orarie mancanti per la giornata. Nel caso di inserimento di data sovrapposta con un'altra attività, viene richiesto se proseguire. Nel caso di inserimento data attività che risulta non lavorativa, viene segnalato. (#TT02104/22)      
> - PM: per alcune righe di extratime (inerenti alle ore viaggio), il campo prezzo ivato nell'invoice plan non veniva valorizzato. Risolto (#TT01592/22)      
> - PM: nel calcolo invoice plan, per determinati casi in cui il viaggio viene incluso parzialmente nei servizi c’erano anomalie di conversione del tempo effettivo. Risolto (#TT01561/22)      
> - PM: nel calcolo invoice plan, nel caso di inclusione ore viaggio nei servizi per cui si le ore viaggio vanno totalmente in extratime, rimaneva una riga a 0. Risolto (#TT01968/22)      
> - PM: migliorata generazione attività da interventi, prevedendo l’inserimento automatico dell’attività al cambio stato intervento “approvato”. Inserito nuovo campo “categoria attività” nelle spese, utilizzato nel caso di generazione attività da ore di viaggio; nelle attività generate da intervento vengono riportate solo le spese sostenute e non quelle da fatturare (#TT01516/22)      
> - PM: valorizzazione interventi, nel caso di righe servizi con e senza wip nello stesso intervento, gli accorpamenti delle righe in fattura tengono conto del wip. Per cui in fattura saranno presenti due accorpamenti separati per le righe con wip e senza, con il relativo storno corretto (#TT02047/22)      
> - PM: nel caso di cambio risorsa in un intervento, le spese sostenute e da fatturare ed il relativo invoice plan vengono ricalcolati, coerentemente con la risorsa e le configurazioni previste (#TT02319/22)      
> - FI: CashFlow: risolto bug nella fase di stampa analisi cashflow che risultava sempre in forma dettagliata (#TT02183/22)      
> - PM: nel rollback della procedura di generazione attività da intervento, inseriti nuovi filtri per la ricerca dei documenti per cui effettuare il rollback: ricerca per data/numero/cliente/risorsa dell'intervento, per data/numero/cliente/risorsa dell'attività. (#TT02313/22)      
> - FI: errore nell'utilizzo della procedura 'Commissioni contabili' nell'area Finanza:-> professionista uomo (#TT02356/22)      
> - FI: chiusura automatica conti (#TT02370/22)      
> - SCS: Bug Fixed. Corretto bug nei DDT e nei Rientri di Conto Lavoro che non permetteva di visualizzare le righe da importare in “Evasione da ordini”, nel caso in cui fosse stato cancellato rispettivamente il DDT o il Rientro stesso (#TT02366/22)   


## Patch 605.1-0009: 05/08/2022

> - Risolto bug gestione descrizione movimento contabile da Excel      
> - SD: Validation rules per e-Invoice Romania per lo stato Controllata (#TT01987/22)      
> - SD: Fix SalesInvoice-aggiunti nuovi errori articolo nei documenti (#TT02179/22)      
> - MRP: bug fixed: corretto un bug nella procedura MRP nel caso in cui il flag "Differenzia domanda di produzione confermata" sia attivato.      
> - FI: intrastat: modifica attribuzione spese ripartite per escludere le righe acconto/storno acconto. Revisione assegnazione della sezione bis/ter sulla base della data riferimento in testata documento (#TT02074/22)      
> - Xamarin: WM: Il widget Codice di input non otteneva il focus quando è selezionata la scheda DettagliConferma; corretta l'eccezione che si verificava quando veniva annullata la creazione di una nuova unità di carico, nella scheda DettagliConferma; correzione del pulsante "Apri unità di carico" (posizionato sulla barra multifunzione), non era abilitato quando era selezionata una riga nella scheda Dettagli.      
> - aggiunto il supporto per i comandi nel completamento automatico      
> - SD: Corretto procedura di scarico fattura (#TT02239/22)       
> - Xamarin: SH: Correzione di un bug che impedisce di salvare e scattare foto su Xamarin      
> - Xamarin: Framework: Correzione delle autorizzazioni per la fotocamera e localizzazione del popup    


## Patch 605.1-0008: 27/07/2022

> - FI: comunicazione liquidazione iva periodica, revisione export da pulsante in form Fluentis2021 (#TT02094/22)      
> - WM: Calcolo Costi: bug fixed per esecuzione Calcolo Costi Articoli Selezionati.      
> - Risolto bug in importazione file di testo su sistemi Linux      
> - PM: aggiunta possibilità di generare attività da interventi da procedura, anche per gli interventi con stato "approvato" (#TT02059/22)      
> - Cambiamednto di PM module, FI module, SH module, CRM module, Xamarin framework, per il fix di specifiche forms CRM (solo mobile app)      
> - ModalFormParameter: aggiunto supporto per il controllo PasswordBoxEdit  


## Patch 605.1-0007: 19/07/2022

> - FI: revisione gestione caratteri di fine riga per file Intrastat (#TT02075/22)      
> - MRP: La procedura MRP genera correttamente gli ordini pianificati anche se ne parametri non sono tutti attivi i flag relativi alla creazione degli ordini pianificati di: acquisto, conto lavoro e produzione.      
> - PM: dalla procedura di rollback di "generazione attività da interventi", reso possibile il rollback delle attività relative sia dei servizi che delle ore di viaggio (#TT01999/22)      
> - PM: risolta anomalia per cui le spese sostenute nell'intervento non venivano riportate correttamente nelle corrispondenti attività generate dall'intervento (#TT02001/22)      
> - WM: Calcolo Costi: bug fixed per esecuzione Calcolo Costi Articoli Selezionati  


## Patch 605.1-0006: 15/07/2022

> - SalesInvoice: correzione esecuzione da SalesDeliveryNote: problema alle righe note.      
> - CO: data retrieve dalla produzione (#TT01956/22)      
> - PM: la ricerca interventi applicando un filtro per articolo generava un'anomalia, che è stata risolta (#TT01967/22)      
> - PM: risolta anomalia in generazione attività da cambio stato intervento in "approvato". In presenza di parametri progetti :per operatore, funzionava solo per l'intervento specificato nei parametri. Ora è funzionante per tutte le tipologie interventi. (#TT01566/22)      
> - CO: revisione stampe bilancio infrannuale nel controlling      
> - SH: risolta anomalia in visualizzazione fattura acquisto elettronica, verificata per certe casistiche in cui il file aveva estensione .XML scritta in maiuscolo (#TT01855/22)      
> - PM: negli interventi pianificati modificando la data inizio, viene richiesto se aggiornare anche le date seguenti (pausa e fine) nella videata. Rispondendo affermativamente non sempre venivano proposti gli orari corretti in base al turno di lavoro della risorsa. La casistica è stata risolta (#TT01594/22)      
> - PM: procedura di generazione interventi da attività, nella lingua romena dava un messaggio incompleto cliccando sul bottone di crea intervento. Risolto (#TT01894/22)      
> - MRP: Ora la procedura cancella correttamente gli ordini pianificati, non legati a commesse, ad ogni esecuzione per poi ricrearli. Inoltre, corretto anche il funzionamento del parametro "GG raggruppamento" presente nei parametri mrp.      
> - MPS: Schedulazione: Nel caso in cui vengano selezionate una o più commesse, la procedura schedula correttamente solo presenti nella selezione.      
> - PM: migliorata gestione di cancellazione di attività/interventi collegati tra loro e con gli sprint.       
>> 1. Nel caso di cancellazione intervento già inserito nello sprint, viene cancellato anche il riferimento all’intervento nello sprint.            
>> 2. Nel caso di cancellazione di ore viaggio presenti nell’intervento per cui è stata generata un’attività collegata, viene cancellata anche la relativa attività.       
>> 3. Nel caso di cancellazione di un intervento che ha generato una o più attività collegate, vengono cancellate anche le relative attività.      
>> 4. Nel caso di cancellazione di un intervento che è stato generato DA una o più attività, viene cancellato solo l’intervento, mentre le attività rimangono e viene ripristinato il flag “fatturato” = falso.          
> - Aggiunte API scripting per gestione controlli e relativi widgets Blockly      
> - PM: cancellando le ore di viaggio da interventi già approvati, dava un errore in quanto presente un'attività collegata alle ore di viaggio. La casistica è stata risolta cancellando anche le attività collegate alle ore di viaggio dell'intervento (#TT01893/22)      
> - MRP: Nel tab risultati dell' MRP la data dei documenti presente nel campo "descrizione azione da intraprendere" è correttamente nel formato della lingua selezionata.      
> - PM: migliorata generazione attività da conferma periodo ferie/permessi, non generava correttamente tutte le attività se nello stesso periodo erano già presenti altre dichiarazioni attività. (#TT01835/22)      
> - PM: la modifica della data attività nella dichiarazione attività, comporta il ricalcolo degli altri campi "ora inizio/ora fine/ora inizio pausa/ora fine pausa". Altrettanto, se si modifica il campo "ora inizio", il campo "data attività" viene aggiornato (#TT02018/22)      
> - PM: cambio stato intervento da ribbon bar da "inserito" in "da approvare", non riusciva ad effettuare il calcolo invoice plan . Risolto. (#TT01997/22)      
> - PM: se un intervento è stato approvato e quindi ha generato un'attività collegata, vengono bloccati alla modifica i seguenti campi: cliente (in testata intervento), risorsa/data/ore/descrizione/progetto/categoria di attività/ticket (nei servizi). Gli altri campi (es. prezzo, iva, .W.I.P., percentuale di avanzamento, etc) invece possono essere modificati. (#TT02012/22)      
> - Sh: Gestione proprietà StatiscticalAgent (#TT02005/22)  


## Patch 605.1-0005: 08/07/2022

> - PM: Risolta cancellazione interventi, nel caso di interventi senza righe di servizi o materiali, non veniva effettuata (#TT01789/22)      
> - PM: Risolta anomalia spese sostenute negli interventi, nel caso di abilitazione flag "Da Rimborsare" il campo importo spesa impostato uguale al campo "costo totale" (azzerato). Ora il valore viene mantenuto (#TT01939/22)      
> - SH: nel piano dei conti, revisione gestione pulsante nuovo sottoconto quando il precedente non è ancora salvato e manca della descrizione (#TT01936/22)      
> - PM: Creazione SalesInvoice da Project Sal: modifica pagamenti (#TT01515/22)      
> - PM: Risolto inserimento nuove righe di WBS, in caso di progetto con gestione gannt dava errore. (#TT01922/22)      
> - PM: variando il cliente intestatario di un progetto con conferma di aggiornamento listini, articoli , etc, in caso di prezzo nullo per wbs non permetteva il salvataggio senza dare alcun messaggio di alert (#TT01927/22)      
> - PM: nel caso di utilizzo di parentesi quadre dentro la descrizione di una wbs, generava errore in apertura del progetto dopo il salvataggio (#TT01790/22)      
> - PM: aprendo un intervento con Fluentis in lingua diversa da italiano, nell’invoice plan mostrava i campi relativi al prezzo con valuta estera specifica per la lingua impostata.    


## Patch 605.1-0004: 06/07/2022

> - PM: Risolta anomalia in salvataggio interventi, nel caso di wbs senza prezzo o quantità collegate alle righe di servizi (#TT01839/22)      
> - SH: fix extradata basati su DataSource      
> - MPS: questo messaggio di errore "Errore: Articolo di Produzione Bloccato o senza la Distinta Base richiesta o Distinta ciclica", verrà sostituito da dei messaggi con l'indicazione specifica dell'errore, quindi in merito al flag "bloccato per produzione" fra parametri rmrp e al flag "non necessario autorizzazione" in the "Errore: Articolo di Produzione Bloccato o senza la Distinta Base richiesta o Distinta ciclica" distinta base.      
> - Allineamento Xamarin con l'ultima versione di Trk            
> - Aggiunto CheckRowManagement (Gestione Spunte) form per la piattaforma Xamarin e cambiamento CheckRowManagement ViewModel per Wpf      
> - MES: Rilascio ordini pianificati: In caso di fasi esterne, la procedura non generava correttamente gli ordini di conto lavoro e non proponeva correttamente i materiali da consegnare e da impiegare      
> - Aggiunto script di ricompilazione automatica per le nuove versioni installate      
> - FI: Risolta eccezione uscente nello Scarica tassi di cambio (#TT01880/22)      
> - SD: Nella creazione file Sdi fatture di vendita, gestione della sezione del 'rappresentante fiscale' del cedente/prestatore (es. caso di autofatture TD19). La sezione viene valorizzata se nell'anagrafica del cedente/prestatore si definisce un indirizzo alternativo di tipo 'Rappresentante fiscale' (#TT01915/22).      
> - MRP: Corretto l'algoritmo che, in alcuni casi, generava ordini pianificati con quantità doppie.      
> - MRP: Ora gli ordini cliente non confermati e senza le date di consegna e di merce pronta non vengono più presi in considerazione dall'mrp, se nei parametri mrp per gli ordini clienti c'è il flag sulla voce "Non considerare gli articoli privi di data consegna      
> - FI: File per Dichiarazioni di Intento in Fluentis2021 (#TT01902/22)  

 
## Patch 605.1-0003: 01/07/2022  

> - Aggiornamento template per client script ObjectForm      
> - FI: 394 fix dichiarazione

etto rilascio degli ordini pianificati di item con di distinta base con articoli fittizi.   

## Patch 605.1-0002: 29/06/2022 

> - PR: Revisione per campo null nelle spese per operazione (#TT01774/22)        
> - Aggiornamento righe di configurazione di BizLink orfane         
> - Modifica per prevenire un errore che veniva generato quando veniva creato il file xml della fattura di acquisto  


## Patch 605.1-0001: 28/06/2022  

> - MPS: Risolto problema del rilascio di un ordine di produzione con nel ciclo una sola fase esterna, ora crea ordine di produzione e ordine di conto lavoro.         
> - MES: Corretto rilascio degli ordini pianificati di item con di distinta base con articoli fittizi.   