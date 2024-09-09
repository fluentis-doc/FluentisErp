---
title: Fatturazione elettronica
sidebar_position: 4
---

Da questa sezione presente nella barra degli strumenti della fattura è possibile gestire la creazione e l'invio della fattura elettronica allo SDI. Questa procedura si esegue con il cambio stato del documento; gli stati sono i seguenti:
- *Non esaminata*: è lo stato di partenza in cui si trovano i documenti prima di comunicare con lo sdi; il documento è stato generato e ancora non sono 
state fatte azioni relative alla gestione del documento elettronico; gli stati successivi possono essere Controllato, Annullata o Esclusa;             
- *Controllato*: impostando questo stato vengono effettuati i controlli da parte di Fluentis sul documento; nel caso in cui manchino dei dati per la comunicazione con SDI verrà avvisato l'utente; da questo stato in poi si accenderà il bottone *Registro dei documenti sdi* dove consultare lo storico e il foglio di stile dell'xml; gli stati successivi possono essere Generata, Annullata, Esclusa;              
- *Generato*: E’ stato creato il file XML relativo al documento elettronico. Da questo momento è possibile procedere con gli stati successivi per inviare il file al Fluentis Business Hub oppure scaricare il file XML per gestioni esterne; gli stati successivi possono essere Firmata, Da spedire, Annullata, Esclusa;       
- *Firmata*: Il documento è stato firmato esternamente con certificato di firma Cadeso Xades e reimportato in Fluentis nel nuovo formato; gli stati succcessivi possono essere Da spedire, Annullata, Esclusa;      
- *Da spedire*: Questo stato, da utilizzare nel caso in cui sia correttamente configurato il canale Fluentis Business Hub, accoda il documento alla lista documenti che BizLink dovrà processare per l’invio a Sdi; non sono previste altre azioni manuali in quanto sarà necessario attendere l'esito dello Sdi;           
- *Annullata*: il documento non deve essere inviato al cliente finale ma resta comunque valido ai fini IVA;       
- *Esclusa*: Il documento è stato creato ma non rientra tra quelli da inviare al SdI (es. nota di storno interna o cliente non residente in italia e non soggetto a fatturazione elettronica con invio a SdI).
